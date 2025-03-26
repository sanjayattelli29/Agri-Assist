
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SoilInputFormProps {
  formData: {
    nitrogen: string;
    phosphorus: string;
    potassium: string;
    temperature: string;
    humidity: string;
    ph: string;
    rainfall: string;
  };
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSubmitting: boolean;
  t: Record<string, string>;
}

export const SoilInputForm = ({
  formData,
  onSubmit,
  onChange,
  isSubmitting,
  t,
}: SoilInputFormProps) => {
  return (
    <Card className="dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-2xl">{t.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nitrogen">{t.nitrogen}</Label>
              <Input
                id="nitrogen"
                name="nitrogen"
                type="number"
                value={formData.nitrogen}
                onChange={onChange}
                required
                className="dark:bg-gray-700"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phosphorus">{t.phosphorus}</Label>
              <Input
                id="phosphorus"
                name="phosphorus"
                type="number"
                value={formData.phosphorus}
                onChange={onChange}
                required
                className="dark:bg-gray-700"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="potassium">{t.potassium}</Label>
              <Input
                id="potassium"
                name="potassium"
                type="number"
                value={formData.potassium}
                onChange={onChange}
                required
                className="dark:bg-gray-700"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="temperature">{t.temperature}</Label>
              <Input
                id="temperature"
                name="temperature"
                type="number"
                step="0.1"
                value={formData.temperature}
                onChange={onChange}
                required
                className="dark:bg-gray-700"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="humidity">{t.humidity}</Label>
              <Input
                id="humidity"
                name="humidity"
                type="number"
                value={formData.humidity}
                onChange={onChange}
                required
                className="dark:bg-gray-700"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ph">{t.ph}</Label>
              <Input
                id="ph"
                name="ph"
                type="number"
                step="0.1"
                value={formData.ph}
                onChange={onChange}
                required
                className="dark:bg-gray-700"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rainfall">{t.rainfall}</Label>
              <Input
                id="rainfall"
                name="rainfall"
                type="number"
                step="0.01"
                value={formData.rainfall}
                onChange={onChange}
                required
                className="dark:bg-gray-700"
              />
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? t.predicting : t.predict}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
