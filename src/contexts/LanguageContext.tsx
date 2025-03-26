
import React, { createContext, useContext, useState, useEffect } from "react";
import { translations as cropPredictionTranslations } from "@/components/crop-prediction/translations";

type Language = "en" | "hi" | "te" | "kn" | "ml";

interface Translations {
  [key: string]: {
    en: string;
    hi: string;
    te: string;
    kn: string;
    ml: string;
  };
}

// Crop name translations for common crops
const cropNames: Translations = {
  rice: {
    en: "Rice",
    hi: "चावल",
    te: "వరి",
    kn: "ಭತ್ತ",
    ml: "അരി",
  },
  wheat: {
    en: "Wheat",
    hi: "गेहूं",
    te: "గోధుమ",
    kn: "ಗೋಧಿ",
    ml: "ഗോതമ്പ്",
  },
  maize: {
    en: "Maize",
    hi: "मक्का",
    te: "మొక్కజొన్న",
    kn: "ಮೆಕ್ಕೆಜೋಳ",
    ml: "ചോളം",
  },
  cotton: {
    en: "Cotton",
    hi: "कपास",
    te: "పత్తి",
    kn: "ಹತ್ತಿ",
    ml: "പരുത്തി",
  },
  sugarcane: {
    en: "Sugarcane",
    hi: "गन्ना",
    te: "చెరకు",
    kn: "ಕಬ್ಬು",
    ml: "കരിമ്പ്",
  },
  jute: {
    en: "Jute",
    hi: "जूट",
    te: "జనపనార",
    kn: "ಸಣಬು",
    ml: "ചണം",
  },
  chickpea: {
    en: "Chickpea",
    hi: "चना",
    te: "శనగలు",
    kn: "ಕಡಲೆ",
    ml: "കടല",
  },
  mungbean: {
    en: "Mung Bean",
    hi: "मूंग",
    te: "పెసలు",
    kn: "ಹೆಸರು",
    ml: "ചെറുപയർ",
  },
  watermelon: {
    en: "Watermelon",
    hi: "तरबूज",
    te: "పుచ్చకాయ",
    kn: "ಕಲ್ಲಂಗಡಿ",
    ml: "തണ്ണീർമത്തൻ",
  },
  banana: {
    en: "Banana",
    hi: "केला",
    te: "అరటి",
    kn: "ಬಾಳೆ",
    ml: "വാഴ",
  },
  mango: {
    en: "Mango",
    hi: "आम",
    te: "మామిడి",
    kn: "ಮಾವು",
    ml: "മാങ്ങ",
  },
  grapes: {
    en: "Grapes",
    hi: "अंगूर",
    te: "ద్రాక్ష",
    kn: "ದ್ರಾಕ್ಷಿ",
    ml: "മുന്തിരി",
  },
  // Additional crops
  tomato: {
    en: "Tomato",
    hi: "टमाटर",
    te: "టమాటా",
    kn: "ಟೊಮೆಟೊ",
    ml: "തക്കാളി",
  },
  potato: {
    en: "Potato",
    hi: "आलू",
    te: "బంగాళాదుంప",
    kn: "ಆಲೂಗಡ್ಡೆ",
    ml: "ഉരുളക്കിഴങ്ങ്",
  },
  onion: {
    en: "Onion",
    hi: "प्याज",
    te: "ఉల్లిపాయ",
    kn: "ಈರುಳ್ಳಿ",
    ml: "ഉള്ളി",
  },
  garlic: {
    en: "Garlic",
    hi: "लहसुन",
    te: "వెల్లుల్లి",
    kn: "ಬೆಳ್ಳುಳ್ಳಿ",
    ml: "വെളുത്തുള്ളി",
  },
  chili: {
    en: "Chili",
    hi: "मिर्च",
    te: "మిరపకాయ",
    kn: "ಮೆಣಸಿನಕಾಯಿ",
    ml: "മുളക്",
  },
  brinjal: {
    en: "Brinjal",
    hi: "बैंगन",
    te: "వంకాయ",
    kn: "ಬದನೇಕಾಯಿ",
    ml: "വഴുതന",
  },
  cauliflower: {
    en: "Cauliflower",
    hi: "फूलगोभी",
    te: "కాలిఫ్లవర్",
    kn: "ಹೂಕೋಸು",
    ml: "കോളിഫ്ലവർ",
  },
  cabbage: {
    en: "Cabbage",
    hi: "पत्तागोभी",
    te: "క్యాబేజీ",
    kn: "ಎಲೆಕೋಸು",
    ml: "മുട്ടക്കോസ്",
  },
  pea: {
    en: "Pea",
    hi: "मटर",
    te: "బఠాని",
    kn: "ಬಟಾಣಿ",
    ml: "പട്ടാണി",
  },
  carrot: {
    en: "Carrot",
    hi: "गाजर",
    te: "కారెట్",
    kn: "ಕ್ಯಾರೆಟ್",
    ml: "കാരറ്റ്",
  },
  okra: {
    en: "Okra",
    hi: "भिंडी",
    te: "బెండకాయ",
    kn: "ಬೆಂಡೆಕಾಯಿ",
    ml: "വെണ്ടയ്ക്ക",
  },
  sunflower: {
    en: "Sunflower",
    hi: "सूरजमुखी",
    te: "పొద్దుతిరుగుడు",
    kn: "ಸೂರ್ಯಕಾಂತಿ",
    ml: "സൂര്യകാന്തി",
  },
  papaya: {
    en: "Papaya",
    hi: "पपीता",
    te: "బొప్పాయి",
    kn: "ಪಪ್ಪಾಯಿ",
    ml: "പപ്പായ",
  },
  coconut: {
    en: "Coconut",
    hi: "नारियल",
    te: "కొబ్బరి",
    kn: "ತೆಂಗಿನಕಾಯಿ",
    ml: "തേങ്ങ",
  },
  guava: {
    en: "Guava",
    hi: "अमरूद",
    te: "జామ",
    kn: "ಪೇರಲ",
    ml: "പേരയ്ക്ക",
  },
  lentil: {
    en: "Lentil",
    hi: "मसूर",
    te: "పప్పు",
    kn: "ಮಸೂರ",
    ml: "പയർ",
  },
  soybean: {
    en: "Soybean",
    hi: "सोयाबीन",
    te: "సోయాబీన్",
    kn: "ಸೋಯಾಬೀನ್",
    ml: "സോയാബീൻ",
  },
  mustard: {
    en: "Mustard",
    hi: "सरसों",
    te: "ఆవాలు",
    kn: "ಸಾಸಿವೆ",
    ml: "കടുക്",
  },
  coffee: {
    en: "Coffee",
    hi: "कॉफी",
    te: "కాఫీ",
    kn: "ಕಾಫಿ",
    ml: "കാപ്പി",
  },
  tea: {
    en: "Tea",
    hi: "चाय",
    te: "టీ",
    kn: "ಚಹಾ",
    ml: "ചായ",
  },
  orange: {
    en: "Orange",
    hi: "संतरा",
    te: "నారింజ",
    kn: "ಕಿತ್ತಳೆ",
    ml: "ഓറഞ്ച്",
  },
  apple: {
    en: "Apple",
    hi: "सेब",
    te: "యాపిల్",
    kn: "ಸೇಬು",
    ml: "ആപ്പിൾ",
  },
  pomegranate: {
    en: "Pomegranate",
    hi: "अनार",
    te: "దానిమ్మ",
    kn: "ದಾಳಿಂಬೆ",
    ml: "മാതളം",
  },
  pineapple: {
    en: "Pineapple",
    hi: "अनानास",
    te: "అనాస",
    kn: "ಅನಾನಸ್",
    ml: "കൈതച്ചക്ക",
  },
  blackgram: {
    en: "Blackgram",
    hi: "उड़द",
    te: "మినుములు",
    kn: "ಉದ್ದಿನ ಬೇಳೆ",
    ml: "ഉഴുന്ന്",
  },
  kidneybeans: {
    en: "Kidney Beans",
    hi: "राजमा",
    te: "రాజ్మా",
    kn: "ರಾಜ್ಮಾ",
    ml: "രാജ്മ",
  },
  pigeonpeas: {
    en: "Pigeon Peas",
    hi: "अरहर",
    te: "కందిపప్పు",
    kn: "ತೊಗರಿ ಬೇಳೆ",
    ml: "തുവര",
  },
  mothbeans: {
    en: "Moth Beans",
    hi: "मोठ",
    te: "మోత్‌బీన్స్",
    kn: "ಮೋಥ್ ಬೀನ್ಸ್",
    ml: "മോത്ത് ബീൻസ്",
  },
};

// UI elements translations
export const translations: Translations = {
  // Header Navigation
  prediction: {
    en: "Prediction",
    hi: "भविष्यवाणी",
    te: "అంచనా",
    kn: "ಭವಿಷ್ಯವಾಣಿ",
    ml: "പ്രവചനം",
  },
  cropPrediction: {
    en: "Crop Prediction",
    hi: "फसल भविष्यवाणी",
    te: "పంట సూచన",
    kn: "ಬೆಳೆ ಭವಿಷ್ಯವಾಣಿ",
    ml: "വിള പ്രവചനം",
  },
  cropPredictionDesc: {
    en: "Get predictions for suitable crops",
    hi: "उपयुक्त फसलों के लिए भविष्यवाणी प्राप्त करें",
    te: "సరైన పంటల కోసం సూచనలు పొందండి",
    kn: "ಸೂಕ್ತ ಬೆಳೆಗಳಿಗೆ ಮುನ್ಸೂಚನೆಗಳನ್ನು ಪಡೆಯಿರಿ",
    ml: "അനുയോജ്യമായ വിളകൾക്കായി പ്രവചനങ്ങൾ നേടുക",
  },
  diseaseDetection: {
    en: "Disease Detection",
    hi: "रोग पहचान",
    te: "వ్యాధి గుర్తింపు",
    kn: "ರೋಗ ಪತ್ತೆ",
    ml: "രോഗ നിർണ്ണയം",
  },
  diseaseDetectionDesc: {
    en: "Identify crop diseases",
    hi: "फसल रोगों की पहचान करें",
    te: "పంట వ్యాధులను గుర్తించండి",
    kn: "ಬೆಳೆ ರೋಗಗಳನ್ನು ಗುರುತಿಸಿ",
    ml: "വിള രോഗങ്ങൾ തിരിച്ചറിയുക",
  },
  pesticideGuide: {
    en: "Pesticide Guide",
    hi: "कीटनाशक मार्गदर्शिका",
    te: "పురుగుమందుల మార్గదర్శి",
    kn: "ಕೀಟನಾಶಕ ಮಾರ್ಗದರ್ಶಿ",
    ml: "കീടനാശിനി ഗൈഡ്",
  },
  pesticideGuideDesc: {
    en: "Get pesticide recommendations",
    hi: "कीटनाशक सिफारिशें प्राप्त करें",
    te: "పురుగుమందుల సిఫార్సులను పొందండి",
    kn: "ಕೀಟನಾಶಕ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಿರಿ",
    ml: "കീടനാശിനി ശുപാർശകൾ നേടുക",
  },
  fertilizerGuide: {
    en: "Fertilizer Guide",
    hi: "उर्वरक मार्गदर्शिका",
    te: "ఎరువుల మార్గదర్శి",
    kn: "ರಸಗೊಬ್ಬರ ಮಾರ್ಗದರ್ಶಿ",
    ml: "വളം ഗൈഡ്",
  },
  fertilizerGuideDesc: {
    en: "Get fertilizer recommendations",
    hi: "उर्वरक सिफारिशें प्राप्त करें",
    te: "ఎరువుల సిఫార్సులను పొందండి",
    kn: "ರಸಗೊಬ್ಬರ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಿರಿ",
    ml: "വളം ശുപാർശകൾ നേടുക",
  },
  insights: {
    en: "Insights",
    hi: "अंतर्दृष्टि",
    te: "అంతర్దృష్టులు",
    kn: "ಒಳನೋಟಗಳು",
    ml: "ഇൻസൈറ്റ്സ്",
  },
  soilRequirements: {
    en: "Soil Requirements",
    hi: "मिट्टी की आवश्यकताएं",
    te: "నేల అవసరాలు",
    kn: "ಮಣ್ಣಿನ ಅವಶ್ಯಕತೆಗಳು",
    ml: "മണ്ണ് ആവശ്യകതകൾ",
  },
  soilRequirementsDesc: {
    en: "Get soil requirement details",
    hi: "मिट्टी की आवश्यकताओं का विवरण प्राप्त करें",
    te: "నేల అవసరాల వివరాలను పొందండి",
    kn: "ಮಣ್ಣಿನ ಅವಶ್ಯಕತೆಗಳ ವಿವರಗಳನ್ನು ಪಡೆಯಿರಿ",
    ml: "മണ്ണ് ആവശ്യകതകളുടെ വിശദാംശങ്ങൾ നേടുക",
  },
  cropRotation: {
    en: "Crop Rotation",
    hi: "फसल चक्र",
    te: "పంట మార్పిడి",
    kn: "ಬೆಳೆ ತಿರುಗುವಿಕೆ",
    ml: "വിള കൈമാറ്റം",
  },
  cropRotationDesc: {
    en: "Plan your crop rotation",
    hi: "अपना फसल चक्र योजना बनाएं",
    te: "మీ పంట మార్పిడిని ప్రణాళిక చేయండి",
    kn: "ನಿಮ್ಮ ಬೆಳೆ ತಿರುಗುವಿಕೆಯನ್ನು ಯೋಜಿಸಿ",
    ml: "നിങ്ങളുടെ വിള കൈമാറ്റം ആസൂത്രണം ചെയ്യുക",
  },
  news: {
    en: "News",
    hi: "समाचार",
    te: "వార్తలు",
    kn: "ಸುದ್ದಿ",
    ml: "വാർത്ത",
  },
  dashboard: {
    en: "Dashboard",
    hi: "डैशबोर्ड",
    te: "డాష్‌బోర్డ్",
    kn: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    ml: "ഡാഷ്ബോർഡ്",
  },
  home: {
    en: "Home",
    hi: "होम",
    te: "హోమ్",
    kn: "ಹೋಮ್",
    ml: "ഹോം",
  },
  settings: {
    en: "Settings",
    hi: "सेटिंग्स",
    te: "సెట్టింగ్‌లు",
    kn: "ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
    ml: "ക്രമീകരണങ്ങൾ",
  },
  profile: {
    en: "Profile",
    hi: "प्रोफाइल",
    te: "ప్రొఫైల్",
    kn: "ಪ್ರೊಫೈಲ್",
    ml: "പ്രൊഫൈൽ",
  },
  logout: {
    en: "Logout",
    hi: "लॉगआउट",
    te: "లాగౌట్",
    kn: "ಲಾಗ್ಔಟ್",
    ml: "ലോഗ്ഔട്ട്",
  },
  // Button labels
  submit: {
    en: "Submit",
    hi: "सबमिट करें",
    te: "సబ్మిట్",
    kn: "ಸಲ್ಲಿಸಿ",
    ml: "സമർപ്പിക്കുക",
  },
  cancel: {
    en: "Cancel",
    hi: "रद्द करें",
    te: "రద్దు",
    kn: "ರದ್ದುಮಾಡಿ",
    ml: "റദ്ദാക്കുക",
  },
  save: {
    en: "Save",
    hi: "सहेजें",
    te: "సేవ్",
    kn: "ಉಳಿಸಿ",
    ml: "സേവ് ചെയ്യുക",
  },
  continue: {
    en: "Continue",
    hi: "जारी रखें",
    te: "కొనసాగించు",
    kn: "ಮುಂದುವರಿಸಿ",
    ml: "തുടരുക",
  },
  back: {
    en: "Back",
    hi: "वापस",
    te: "వెనుకకు",
    kn: "ಹಿಂದೆ",
    ml: "തിരികെ",
  },
  search: {
    en: "Search",
    hi: "खोजें",
    te: "శోధించు",
    kn: "ಹುಡುಕಿ",
    ml: "തിരയുക",
  },
  filter: {
    en: "Filter",
    hi: "फ़िल्टर",
    te: "ఫిల్టర్",
    kn: "ಫಿಲ್ಟರ್",
    ml: "ഫിൽട്ടർ",
  },
  sort: {
    en: "Sort",
    hi: "क्रमबद्ध करें",
    te: "క్రమబద్ధీకరించు",
    kn: "ವಿಂಗಡಿಸಿ",
    ml: "അടുക്കുക",
  },
  clear: {
    en: "Clear",
    hi: "साफ़ करें",
    te: "క్లియర్",
    kn: "ಅಳಿಸಿ",
    ml: "മായ്ക്കുക",
  },
  apply: {
    en: "Apply",
    hi: "लागू करें",
    te: "అప్ప్లై",
    kn: "ಅನ್ವಯಿಸಿ",
    ml: "പ്രയോഗിക്കുക",
  },
  next: {
    en: "Next",
    hi: "अगला",
    te: "తదుపరి",
    kn: "ಮುಂದೆ",
    ml: "അടുത്തത്",
  },
  previous: {
    en: "Previous",
    hi: "पिछला",
    te: "మునుపటి",
    kn: "ಹಿಂದಿನ",
    ml: "മുമ്പത്തെ",
  },
  confirm: {
    en: "Confirm",
    hi: "पुष्टि करें",
    te: "నిర్ధారించు",
    kn: "ದೃಢೀಕರಿಸಿ",
    ml: "സ്ഥിരീകരിക്കുക",
  },
  // PesticideGuide specific
  cropName: {
    en: "Crop Name",
    hi: "फसल का नाम",
    te: "పంట పేరు",
    kn: "ಬೆಳೆಯ ಹೆಸರು",
    ml: "വിളയുടെ പേര്",
  },
  allCrops: {
    en: "All Crops",
    hi: "सभी फसलें",
    te: "అన్ని పంటలు",
    kn: "ಎಲ್ಲಾ ಬೆಳೆಗಳು",
    ml: "എല്ലാ വിളകളും",
  },
  filters: {
    en: "Filters",
    hi: "फिल्टर्स",
    te: "ఫిల్టర్స్",
    kn: "ಫಿಲ್ಟರ್‌ಗಳು",
    ml: "ഫിൽട്ടറുകൾ",
  },
  rating: {
    en: "Rating",
    hi: "रेटिंग",
    te: "రేటింగ్",
    kn: "ರೇಟಿಂಗ್",
    ml: "റേറ്റിംഗ്",
  },
  priceCategory: {
    en: "Price Category",
    hi: "मूल्य श्रेणी",
    te: "ధర వర్గం",
    kn: "ಬೆಲೆ ವರ್ಗ",
    ml: "വില വിഭാഗം",
  },
  affordable: {
    en: "Affordable",
    hi: "किफायती",
    te: "సరసమైన",
    kn: "ಕೈಗೆಟುಕುವ",
    ml: "താങ്ങാവുന്ന",
  },
  moderate: {
    en: "Moderate",
    hi: "मध्यम",
    te: "మోస్తరు",
    kn: "ಮಧ್ಯಮ",
    ml: "മിതമായ",
  },
  premium: {
    en: "Premium",
    hi: "प्रीमियम",
    te: "ప్రీమియం",
    kn: "ಪ್ರೀಮಿಯಂ",
    ml: "പ്രീമിയം",
  },
  buyProduct: {
    en: "Buy Product",
    hi: "उत्पाद खरीदें",
    te: "ఉత్పత్తిని కొనుగోలు చేయండి",
    kn: "ಉತ್ಪನ್ನ ಖರೀದಿಸಿ",
    ml: "ഉൽപ്പന്നം വാങ്ങുക",
  },
  // Footer Content
  helplineTitle: {
    en: "Farmer's Helpline",
    hi: "किसान हेल्पलाइन",
    te: "రైతు సహాయ కేంద్రం",
    kn: "ರೈತರ ಸಹಾಯವಾಣಿ",
    ml: "കർഷക ഹെൽപ്പ്‌ലൈൻ",
  },
  tollFree: {
    en: "Toll-Free: 1800-180-2311",
    hi: "टोल-फ्री: 1800-180-2311",
    te: "టోల్ ఫ్రీ: 1800-180-2311",
    kn: "ಟೋಲ್-ಫ್ರೀ: 1800-180-2311",
    ml: "ടോൾ ഫ്രീ: 1800-180-2311",
  },
  phone: {
    en: "Phone: +91-5962-241022",
    hi: "फोन: +91-5962-241022",
    te: "ఫోన్: +91-5962-241022",
    kn: "ಫೋನ್: +91-5962-241022",
    ml: "ഫോൺ: +91-5962-241022",
  },
  whatsapp: {
    en: "WhatsApp",
    hi: "व्हाट्सएप",
    te: "వాట్సాప్",
    kn: "ವಾಟ್ಸಾಪ್",
    ml: "വാട്സ്ആപ്പ്",
  },
  whatsappText: {
    en: "+91-5962-241022",
    hi: "चैट करने के लिए क्लिक करें",
    te: "చాట్ చేయడానికి క్లిక్ చేయండి",
    kn: "ಚಾಟ್ ಮಾಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ",
    ml: "ചാറ്റ് ചെയ്യാൻ ക്ലിക്ക് ചെയ്യുക",
  },
  companyInfoTitle: {
    en: "Company Information",
    hi: "कंपनी जानकारी",
    te: "కంపెనీ సమాచారం",
    kn: "ಕಂಪನಿ ಮಾಹಿತಿ",
    ml: "കമ്പനി വിവരങ്ങൾ",
  },
  companyDescription1: {
    en: "Dedicated to providing AI-powered solutions for farmers.",
    hi: "किसानों के लिए AI-संचालित समाधान प्रदान करने के लिए समर्पित।",
    te: "రైతులకు AI ఆధారిత పరిష్కారాలను అందించడానికి అంకితం.",
    kn: "ರೈತರಿಗೆ AI-ಆಧಾರಿತ ಪರಿಹಾರಗಳನ್ನು ಒದಗಿಸಲು ಸಮರ್ಪಿತ.",
    ml: "കർഷകർക്കായി AI അധിഷ്ഠിത പരിഹാരങ്ങൾ നൽകുന്നതിന് സമർപ്പിച്ചിരിക്കുന്നു.",
  },
  companyDescription2: {
    en: "Helping farmers make informed decisions through technology-driven insights.",
    hi: "प्रौद्योगिकी-संचालित अंतर्दृष्टि के माध्यम से किसानों को सूचित निर्णय लेने में मदद करना।",
    te: "సాంకేతిక-ఆధారిత అంతర్దృష్టుల ద్వారా రైతులు సమాచార నిర్ణయాలు తీసుకోవడంలో సహాయపడటం.",
    kn: "ತಂತ್ರಜ್ಞಾನ-ಆಧಾರಿತ ಒಳನೋಟಗಳ ಮೂಲಕ ರೈತರು ಮಾಹಿತಿಯುತ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುವುದು.",
    ml: "സാങ്കേതിക-അധിഷ്ഠിത ഇൻസൈറ്റുകളിലൂടെ കർഷകരെ അറിവുള്ള തീരുമാനങ്ങൾ എടുക്കാൻ സഹായിക്കുന്നു.",
  },
  companyDescription3: {
    en: "Your trusted partner in modern agriculture.",
    hi: "आधुनिक कृषि में आपका विश्वसनीय साथी।",
    te: "ఆధునిక వ్యవసాయంలో మీ విశ్వసనీయ భాగస్వామి.",
    kn: "ಆಧುನಿಕ ಕೃಷಿಯಲ್ಲಿ ನಿಮ್ಮ ವಿಶ್ವಾಸಾರ್ಹ ಪಾಲುದಾರ.",
    ml: "ആധുനിക കൃഷിയിൽ നിങ്ങളുടെ വിശ്വസ്ത പങ്കാളി.",
  },
  // Merge in crop names
  ...Object.fromEntries(
    Object.entries(cropNames).map(([key, value]) => [key, value])
  ),
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getCropNameTranslation: (cropName: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem("preferred-language");
    return (savedLang as Language) || "en";
  });

  // When language changes, update the document's lang attribute
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = "ltr"; // All supported languages are left-to-right
  }, [language]);

  const handleSetLanguage = (lang: Language) => {
    localStorage.setItem("preferred-language", lang);
    setLanguage(lang);
  };

  const t = (key: string): string => {
    // First check in UI translations
    if (translations[key]?.[language]) {
      return translations[key][language];
    }
    
    // Then check in crop prediction specific translations
    if (cropPredictionTranslations[key]?.[language]) {
      return cropPredictionTranslations[key][language];
    }
    
    // If not found in any translation map, return the key itself or the English version if available
    return translations[key]?.en || key;
  };

  // Function to translate crop names, with improved matching algorithm
  const getCropNameTranslation = (cropName: string): string => {
    if (!cropName) return '';
    
    const key = cropName.toLowerCase().trim();
    
    // 1. Direct match in our translations
    if (translations[key]?.[language]) {
      return translations[key][language];
    }
    
    // 2. Check for variants with numbers or special characters removed
    const cleanKey = key.replace(/[^a-z]/g, '');
    const allKeys = Object.keys(translations);
    
    // Look for exact matches after cleaning
    for (const k of allKeys) {
      if (Object.keys(cropNames).includes(k)) {
        const cleanK = k.replace(/[^a-z]/g, '');
        if (cleanKey === cleanK) {
          return translations[k][language];
        }
      }
    }
    
    // 3. Check for partial matches (e.g., "rice1" should match "rice")
    for (const k of allKeys) {
      // Only check crop name keys
      if (Object.keys(cropNames).includes(k)) {
        if (key.includes(k) || k.includes(key)) {
          return translations[k][language];
        }
      }
    }
    
    // 4. Use fuzzy matching for similar crop names
    for (const k of allKeys) {
      if (Object.keys(cropNames).includes(k)) {
        // Simple fuzzy matching - if more than 70% of the letters match
        let matches = 0;
        const shorter = key.length < k.length ? key : k;
        const longer = key.length >= k.length ? key : k;
        
        for (let i = 0; i < shorter.length; i++) {
          if (longer.includes(shorter[i])) {
            matches++;
          }
        }
        
        if (matches / shorter.length > 0.7) {
          return translations[k][language];
        }
      }
    }
    
    // 5. If all else fails, capitalize the first letter of each word
    return cropName
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  return (
    <LanguageContext.Provider
      value={{ 
        language, 
        setLanguage: handleSetLanguage, 
        t,
        getCropNameTranslation
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
