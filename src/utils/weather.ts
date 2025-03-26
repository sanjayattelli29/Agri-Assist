
import { supabase } from "@/integrations/supabase/client";

export async function fetchWeatherData(lat: number, lng: number) {
  const { data: settings, error: settingsError } = await supabase
    .from('app_settings')
    .select('value')
    .eq('key', 'weather_api_key')
    .single();

  if (settingsError) throw settingsError;

  // First fetch weather data
  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${settings.value}`
  );
  
  if (!weatherResponse.ok) {
    throw new Error('Weather data fetch failed');
  }

  // Then fetch location name using reverse geocoding
  const geoResponse = await fetch(
    `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&limit=1&appid=${settings.value}`
  );

  if (!geoResponse.ok) {
    throw new Error('Geocoding fetch failed');
  }

  const weatherData = await weatherResponse.json();
  const geoData = await geoResponse.json();
  
  return {
    ...weatherData,
    locationName: geoData[0]?.name || 'Unknown Location',
    district: geoData[0]?.state || ''
  };
}
