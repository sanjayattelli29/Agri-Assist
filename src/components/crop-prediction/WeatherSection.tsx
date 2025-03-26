
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface WeatherSectionProps {
  t: Record<string, string>;
  weatherData: any;
  location: { lat: number; lng: number } | null;
  formData: {
    temperature: string;
    humidity: string;
  };
  onGetLocation: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const WeatherSection = ({
  t,
  weatherData,
  location,
  formData,
  onGetLocation,
  onChange,
}: WeatherSectionProps) => {
  return (
    <Card className="dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-2xl">{t.weatherTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        <Button
          type="button"
          variant="outline"
          className="w-full mb-4 dark:border-gray-600"
          onClick={onGetLocation}
        >
          {t.getLocation}
        </Button>

        {location && weatherData && (
          <>
            <p className="text-sm text-green-600 dark:text-green-400 mb-4">
              {t.location}: {weatherData.locationName}, {weatherData.district}
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              {t.coordinates}: {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
            </p>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>{t.temperature}</Label>
                  <Input
                    name="temperature"
                    value={formData.temperature}
                    onChange={onChange}
                    type="number"
                    step="0.01"
                    required
                    className="dark:bg-gray-700"
                  />
                </div>
                <div>
                  <Label>{t.humidity}</Label>
                  <Input
                    name="humidity"
                    value={formData.humidity}
                    onChange={onChange}
                    type="number"
                    step="0.01"
                    required
                    className="dark:bg-gray-700"
                  />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {t.weatherCondition}: {weatherData.weather[0].description}
              </p>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};
