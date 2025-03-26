
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Crop, Droplet, Image, LeafyGreen, SprayCanIcon, Sprout, Users } from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const adminCards = [
    {
      title: "Crop Prediction",
      description: "Manage crop prediction data and models",
      icon: Crop,
      href: "/admin/crop-prediction",
    },
    {
      title: "Soil Requirements",
      description: "Update soil parameters for different crops",
      icon: Sprout,
      href: "/admin/soil-requirements",
    },
    {
      title: "Crop Rotation",
      description: "Manage crop rotation rules and recommendations",
      icon: Crop,
      href: "/admin/crop-rotation",
    },
    {
      title: "Pesticide Guide",
      description: "Update pesticide products and recommendations",
      icon: SprayCanIcon,
      href: "/admin/pesticide-guide",
    },
    {
      title: "Fertilizer Guide",
      description: "Manage fertilizer products and recommendations",
      icon: Droplet,
      href: "/admin/fertilizer-guide",
    },
    {
      title: "Crop Images",
      description: "Upload and manage crop prediction images",
      icon: Image,
      href: "/admin/crop-images",
    },
  ];

  return (
    <AdminLayout title="Dashboard">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {adminCards.map((card, index) => (
          <Link key={index} to={card.href}>
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <card.icon className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="mt-4">{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Click to manage {card.title.toLowerCase()} data
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
