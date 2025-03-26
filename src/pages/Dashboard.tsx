
import { motion } from "framer-motion";
import {
  Crop,
  LeafyGreen,
  SprayCanIcon,
  BarChart,
  Sprout,
  Newspaper,
  Droplet,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Dashboard = () => {
  const { t, language } = useLanguage();

  const navigationItems = [
    {
      trigger: t("prediction"),
      content: [
        {
          title: t("cropPrediction"),
          description: t("cropPrediction"),
          icon: Crop,
          href: "/crop-prediction",
        },
        
        {
          title: t("pesticideGuide"),
          description: t("pesticideGuide"),
          icon: SprayCanIcon,
          href: "/pesticide-guide",
        },
        {
          title: t("fertilizerGuide"),
          description: t("fertilizerGuide"),
          icon: Droplet,
          href: "/fertilizer-guide",
        },
      ],
    }
  ];

  const options = [
    {
      title: t("cropPrediction"),
      description: t("cropPredictionDesc"),
      icon: Crop,
      href: "/crop-prediction",
    },
    
    {
      title: t("pesticideGuide"),
      description: t("pesticideGuideDesc"),
      icon: SprayCanIcon,
      href: "/pesticide-guide",
    },
    {
      title: t("fertilizerGuide"),
      description: t("fertilizerGuideDesc"),
      icon: Droplet,
      href: "/fertilizer-guide",
    },
    {
      title: t("soilRequirements"),
      description: t("soilRequirementsDesc"),
      icon: Sprout,
      href: "/soil-requirements",
    },
    {
      title: t("cropRotation"),
      description: t("cropRotationDesc"),
      icon: Crop,
      href: "/crop-rotation",
    },
  ];

  const welcomeText = {
    en: "Welcome to Agri Assist",
    hi: "कृषि सहायक में आपका स्वागत है",
    te: "అగ్రి అసిస్ట్‌కి స్వాగతం",
    kn: "ಕೃಷಿ ಸಹಾಯಕಕ್ಕೆ ಸ್ವಾಗತ",
    ml: "അഗ്രി അസിസ്റ്റിലേക്ക് സ്വാഗതം"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-gray-950 dark:text-white">
      <nav className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <NavigationMenu>
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.trigger}>
                  <NavigationMenuTrigger className="text-gray-700 dark:text-gray-200">
                    {item.trigger}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {item.content.map((content) => (
                        <li key={content.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={content.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="flex items-center gap-2">
                                <content.icon className="h-4 w-4" />
                                <div className="text-sm font-medium leading-none">
                                  {content.title}
                                </div>
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {content.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          {welcomeText[language] || welcomeText.en}
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={option.href}>
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-green-100 dark:border-green-900">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                      <option.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <CardTitle className="text-xl text-gray-800 dark:text-white">
                      {option.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {option.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent></CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">{t("helplineTitle")}</h3>
              <div className="space-y-2">
                <p>{t("tollFree")}</p>
                <p>{t("phone")}</p>
                <p>
                  {t("whatsapp")} - {t("whatsappText")}
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {t("companyInfoTitle")}
              </h3>
              <div className="space-y-2">
                <p>{t("companyDescription1")}</p>
                <p>{t("companyDescription2")}</p>
                <p>{t("companyDescription3")}</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
