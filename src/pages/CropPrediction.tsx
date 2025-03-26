
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { fetchWeatherData } from "@/utils/weather";
import { translations } from "@/components/crop-prediction/translations";
import { SoilInputForm } from "@/components/crop-prediction/SoilInputForm";
import { WeatherSection } from "@/components/crop-prediction/WeatherSection";
import { CropRecommendation } from "@/components/crop-prediction/CropRecommendation";

const CropPrediction = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const t = translations[language];

  const [formData, setFormData] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [predictedCrop, setPredictedCrop] = useState<string | null>(null);
  const [possibleCrops, setPossibleCrops] = useState<string[]>([]);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [recommendations, setRecommendations] = useState<Array<{ crop: string; efficiency: number }>>([]);

  useEffect(() => {
    const fetchPossibleCrops = async () => {
      try {
        const { data, error } = await supabase.rpc('get_unique_crop_labels');
        if (error) throw error;
        setPossibleCrops(data?.map((item: { label: string }) => item.label) || []);
      } catch (error) {
        console.error('Error fetching possible crops:', error);
        toast({
          title: "Error",
          description: "Failed to load crop options. Please try again later.",
          variant: "destructive",
        });
      }
    };

    fetchPossibleCrops();
  }, [toast]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getCurrentLocation = async () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          
          setLocation({ lat, lng });
          
          try {
            const weather = await fetchWeatherData(lat, lng);
            setWeatherData(weather);
            
            setFormData(prev => ({
              ...prev,
              temperature: weather.main.temp.toString(),
              humidity: weather.main.humidity.toString(),
            }));
            
            toast({
              title: t.location,
              description: `${weather.locationName}, ${weather.district}`,
            });
          } catch (error) {
            console.error('Error fetching weather:', error);
            toast({
              title: "Weather error",
              description: language === "en" 
                ? "Unable to fetch weather data. Please enter manually."
                : language === "hi"
                ? "मौसम डेटा प्राप्त करने में असमर्थ। कृपया मैन्युअल रूप से दर्ज करें।"
                : "వాతావరణ డేటాను పొందలేకపోయాము. దయచేసి మాన్యువల్‌గా నమోదు చేయండి.",
              variant: "destructive",
            });
          }
        },
        (error) => {
          toast({
            title: "Location error",
            description: language === "en"
              ? "Unable to get your location. Please try again."
              : language === "hi"
              ? "आपका स्थान प्राप्त करने में असमर्थ। कृपया पुनः प्रयास करें।"
              : "మీ స్థానాన్ని పొందలేకపోయాము. దయచేసి మళ్లీ ప్రయత్నించండి.",
            variant: "destructive",
          });
        }
      );
    } else {
      toast({
        title: "Not supported",
        description: language === "en"
          ? "Geolocation is not supported by your browser."
          : language === "hi"
          ? "आपका ब्राउज़र जियोलोकेशन का समर्थन नहीं करता है।"
          : "మీ బ్రౌజర్ జియోలొకేషన్‌ను సపోర్ట్ చేయదు.",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const randomCrop = possibleCrops[Math.floor(Math.random() * possibleCrops.length)];
      
      const soilData = {
        nitrogen: parseInt(formData.nitrogen),
        phosphorus: parseInt(formData.phosphorus),
        potassium: parseInt(formData.potassium),
        temperature: parseFloat(formData.temperature),
        humidity: parseFloat(formData.humidity),
        ph: parseFloat(formData.ph),
        rainfall: parseFloat(formData.rainfall),
      };

      const { data: insightsData, error: insightsError } = await supabase.functions.invoke('generate-crop-insights', {
        body: { 
          predictedCrop: randomCrop,
          soilData
        }
      });

      if (insightsError) throw insightsError;

      const predictionData = {
        ...soilData,
        predicted_crop: randomCrop,
        ...(location && {
          latitude: location.lat,
          longitude: location.lng,
        }),
      };

      const { error } = await supabase
        .from('crop_predictions')
        .insert([predictionData]);

      if (error) throw error;

      setPredictedCrop(randomCrop);
      setRecommendations(insightsData.recommendations || []);
      
      toast({
        title: "Success",
        description: "Your crop prediction has been generated successfully.",
      });

    } catch (error) {
      console.error('Error saving prediction:', error);
      toast({
        title: "Error",
        description: "There was an error generating your prediction. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-gray-950 dark:text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <SoilInputForm
            formData={formData}
            onSubmit={handleSubmit}
            onChange={handleInputChange}
            isSubmitting={isSubmitting}
            t={t}
          />

          <div className="space-y-6">
            <WeatherSection
              t={t}
              weatherData={weatherData}
              location={location}
              formData={formData}
              onGetLocation={getCurrentLocation}
              onChange={handleInputChange}
            />

            {recommendations[0] && (
              <CropRecommendation
                recommendation={recommendations[0]}
                t={t}
                isMain={true}
              />
            )}
          </div>
        </div>

        {recommendations.length > 1 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Alternative Crop Recommendations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendations.slice(1).map((rec, index) => (
                <CropRecommendation
                  key={index}
                  recommendation={rec}
                  t={t}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CropPrediction;
