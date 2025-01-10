import excelicon from "../../assets/icons/excelicon.svg";
import powerBiicon from "../../assets/icons/powerBiicon.svg";
import looker from "../../assets/icons/looker.png"
import sqlicon from "../../assets/icons/sqlicon.svg";
import fM from "../../assets/icons/fM.png";
import pythonicon from "../../assets/icons/pythonicon.svg";
import hr from "../../assets/img/hr.jpg";
import oct from "../../assets/img/oct.png";
import Fintech from "../../assets/icons/fin.png";
import dataminIcon from "../../assets/icons/datamin.svg";
import sheets from "../../assets/icons/sheets.png";
import call from "../../assets/img/call.png";
import cp from "../../assets/img/cp.png";
import adv from "../../assets/img/adv.png"
import meteo from "../../assets/img/meteo.png"
import profilepicture from "../img/me21.png";
import contacticon from "../../assets/icons/contact.svg";
import workicon from "../../assets/icons/work.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLinkedin, FiMail, FiLink } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import iaicon from "../../assets/icons/AI.svg";
import sage from "../../assets/icons/sage.png";
import MS from "../../assets/img/MS.png";
import roicon from "../../assets/img/RO.png";
import apiicon from "../../assets/img/API.png";

export const headerIntroData = {
  title: {
    fr: "Hi, C'est Mohamed",
    en: "Hi, I'm Mohamed",
  },
  subtitle: {
    fr: "Analyse de donnée & Management Financier et comptable",
    en: "Data Analyst & Financial and Accounting Manangement",
  },
  description: {
    fr: "Je suis Mohamed Ahmed, un passionné d'analyse qui voit le potentiel caché derrière chaque donnée. j’aide les entreprises à visualiser et comprendre leurs données avec des tableaux de bord sur mesure, quel que soit le secteur d'activité. À mes yeux, chaque information est une clé qui peut ouvrir la porte à de nouvelles opportunités. Laissez-vous inspirer par  mes réalisations et faisons de vos chiffres une force stratégique!",
    en: "I am Mohamed Ahmed, a passionate analyst who sees the hidden potential behind every piece of data. I help companies visualize and understand their data with tailor-made dashboards, whatever the sector of activity. In my eyes, every piece of information is a key that can unlock new opportunities. Let yourself be inspired by my achievements, and let's turn your numbers into a strategic asset!",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        fr: "Contactez-moi",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
       
    },
    {
      name: "Projects",
      label: {
        fr: "Mes projets",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Analyse de precipitation  ONEM - Mauritanie",
    description:
      "Le projet d'analyse des données météorologiques pour Nouakchott s'est concentré sur l'étude des changements climatiques et des tendances saisonnières. Les résultats ont montré que les précipitations sont saisonnières, avec un minimum enregistré en 1977 et un maximum en 1956. L'analyse a fourni des informations précieuses pour soutenir les études climatiques et la planification environnementale. ",
    description_EN:
      "The weather data analysis project for Nouakchott focused on studying climate changes and seasonal trends. Results showed that rainfall is seasonal, with the lowest recorded in 1977 and the highest in 1956. The analysis provided valuable insights to support climate studies and environmental planning in the city.",
      technologies: [
        { name: "SQL", icon: sqlicon },
        { name: "Excel", icon: excelicon },
      
    ],
    image: meteo,
    deploymenturl: "#",

    
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Le projet d'analyse des ventes par région géographique",
    description:
      "Le projet d'analyse des ventes par région géographique s'est concentré sur l'étude de la performance des ventes dans différentes régions pour identifier les facteurs influençant les résultats. Les résultats ont montré que la région Est était la plus rentable, représentant 40 % des ventes totales, tandis que les ventes dans la région Ouest étaient 10 % plus faibles. Les régions à fort potentiel ont été identifiées pour des stratégies marketing ciblées visant à améliorer la performance.",
    description_EN:
      "The geographic sales analysis project focused on studying sales performance across different regions to identify factors affecting performance. Results showed that the Eastern region was the most profitable, contributing 40% of total sales, while sales in the Western region were 10% lower. High-potential regions were identified for targeted marketing strategies to improve performance.",
      technologies: [
        { name: "Power BI", icon: powerBiicon },
        { name: "SQL", icon: sqlicon },
      
    ],
    image: adv,
    deploymenturl: "#",

    
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Le projet d'analyse des données RH",
    description:
      "Le projet d'analyse des données des ressources humaines s'est concentré sur l'évaluation de la performance des employés et de l'efficacité des départements. Les résultats ont montré que le département des ventes a contribué à 30 % de la productivité globale, tandis que le département de développement a enregistré une croissance de 15 % l'année dernière. Le projet a aidé la direction à améliorer l'efficacité interne et à prendre des décisions stratégiques pour renforcer la productivité.",
    description_EN:
      "The human resources data analysis project focused on evaluating employee performance and departmental efficiency. Results showed the sales department contributing 30% to overall productivity, while the development department achieved 15% growth last year. The project helped management improve internal efficiency and make strategic decisions to boost productivity.",
      technologies: [
        { name: "Power BI", icon: powerBiicon },
        { name: "Excel", icon: excelicon },
      
    ],
    image: hr,
    deploymenturl: "#",

    
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "projet d'analyse des ventes",
    description:
      "Le projet d'analyse des ventes s'est concentré sur la création d'un tableau de bord interactif pour étudier la performance des ventes. L'analyse a identifié les tendances saisonnières et les produits les plus vendus. Les résultats ont révélé une augmentation de 15 % des ventes au dernier trimestre, avec certains produits représentant 40 % des revenus. Le projet a aidé la direction à prendre des décisions stratégiques pour améliorer les performances.",
    description_EN:
      "The sales analysis project focused on creating an interactive dashboard to study sales performance. The analysis identified seasonal trends and top-selling products. Results revealed a 15% sales increase in the last quarter compared to the previous one, with certain products contributing 40% to revenue. The project helped management make strategic decisions to enhance performance and operational efficiency.",
    technologies: [
      { name: "Power BI", icon: powerBiicon },
      { name: "Excel", icon: excelicon },
    ],
    image: cp,
    deploymenturl: "#",
    
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "centre d'appels",
    description:
      "Le projet d'analyse des données du centre d'appels s'est concentré sur l'évaluation de la performance des employés et l'analyse du niveau de satisfaction des clients. Les résultats ont montré un temps moyen de réponse aux appels de 3 minutes, avec une satisfaction client de 85%. Les employés les plus performants ont été identifiés et les heures de pointe ont été analysées pour optimiser la répartition du travail. Le projet a amélioré la qualité du service et soutenu des décisions visant à renforcer l'expérience client.",
    description_EN:
      "The call center data analysis project focused on evaluating employee performance and analyzing customer satisfaction levels. Results showed an average call response time of 3 minutes, with customer satisfaction at 85%. Top-performing employees were identified, and peak hours were analyzed to optimize workload distribution. The project improved service quality and informed decisions to enhance customer experience.",
    technologies: [
      { name: "Power BI", icon: powerBiicon },
      { name: "Excel", icon: excelicon },
    ],
    image: call,
    deploymenturl: "#",
    
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    fr: "Plus de projets sur LinkedIn",
    en: "More Projects on LinkedIn",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "Compétences Supplémentaires",
    skills: [
      { 
        title: "HTML",
        hash: "#HTML",
        icon: htmlicon, 
        color: "#f48c06" 
      },
      { 
        title: "CSS",
        hash: "#CSS",
        icon: cssicon, 
        color: "#00b4d8" 
      },
      { 
        title: "JAVASCRIPT",
        hash: "#JAVASCRIPT",
        icon: javascripticon, 
        color: "#f5e130" 
      },
      { 
        title: "Solver add in Excel",
        hash: "#Solver add in Excel",
        icon: MS, 
        color: "#ffffff" 
      },
      { 
        title: "Recherche Opérationnelle",
        hash: "#RO",
        icon: roicon, 
        color: "#ff3131" 
      },
      { 
        title: "API",
        hash: "#API",
        icon: apiicon, 
        color: "#38b6ff" 
      },
      
      
      
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Data Analysis",
    skills: [
      { 
        title: "SQL",
        hash: "#Sql",
        icon: sqlicon, 
        color: "#61DAFB" 
      },
      {
        title: "Python",
        hash: "#Python",
        icon: pythonicon,
        color: "#e7aa0e",
      },
      { 
        title: "Power BI", 
        hash: "#power BI", 
        icon: powerBiicon, 
        color: "#ffee32"
       },
       { 
        title: "Excel", 
        hash: "#Excel", 
        icon: excelicon, 
        color: "#2d6a4f"
       },
       {
        title: "Looker Studio", 
        hash: "#Looker Studio", 
        icon: looker, 
        color: "#6fe9b8"
       },
       {
        title: "Google Sheets", 
        hash: "#Google Sheets", 
        icon: sheets, 
        color: "#a6a6a6"
       }
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "Financial and Accounting Manangement",
    skills: [
      
      {
        title: "Finance Modeling",
        hash: "#Finance Modeling",
        icon: fM,
        color: "#61DAFB",
      },
      {
        title: "Fintech",
        hash: "#fin",
        icon: Fintech,
        color: "#e7150e",
      },
      {
        title: "Data Mining",
        hash: "#Data Mining",
        icon: dataminIcon,
        color: "#00700c",
      },
      {
        title: "Octopus Microfinance",
        hash: "#Octopus Microfinance",
        icon: oct,
        color: "#f6f612",
      },
      { 
        title: "Intelligence Artificielle (IA)",
        hash: "#Intelligence Artificielle (IA)",
        icon: iaicon, 
        color: "#004aad" 
      },
      { 
        title: "Sage",
        hash: "#Sage)",
        icon: sage, 
        color: "#eead05" 
      },
      
      
    ],
  },
] as const;

export const navLinks = [
  { fr: "Home", en: "Home", hash: "#home", icon: GoHome },
  { fr: "Compétences", en: "Skills", hash: "#skills", icon: GoStack },
  { fr: "Projets", en: "Projects", hash: "#projects", icon: GoProject },
  { fr: "A Propos De Moi", en: "About me", hash: "#about-me", icon: GoPerson },
  { fr: "Contact", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { fr: "Impression", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { fr: "Confidentialité", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:medkoumba@gmail.com",
  text: "medkoumba@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/mohammed-ahmed-052769239",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/MohamedAhmeddiye",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:medkoumba@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    fr: "Ce qui compte, ce n'est pas la quantité d'informations, mais la manière dont on les utilise.",
    en: "The important thing is not the quantity of information, but how we use it.",
    
  },
  {
    fr: '"Les données sont la clé pour libérer le potentiel de votre entreprise"',
    en: `"Data is the key to unlocking your business’s potential."`,
  },
] as const;

export const aboutMeData = {
  title: "A propos de moi",
  title_EN: "About me",
  description: "Mon parcours",
  description_EN: "My background",
  paragraphs_FR: [
    {
      title: "Parcours Académique",
      description:
        `Diplôme en Banque et Assurance, je suis actuellement en Master Management Finance et Fiscalité.`,
      icon: hardwareicon,
    },
    {
      title: "Parcours Professionnel",
      description:  `Analyste de données indépendant & Finance & Comptabilité.`,
      icon: workicon,
    },
    {
      title: "Contact",
      description:
        `Analyste de données, Office National de la Météorologie.`,
      icon: contacticon,
    },
    
  ],
  paragraphs_EN: [
    {
      title: "Academic background",
      description:
        `"Degree in Banking and Insurance, I am currently pursuing a Master's in Financial Management and Taxation.`,    
      icon: hardwareicon,
    },
    {
      title: "Career Paths",
      description:
        `Independent Data Analyst & Finance & Accounting`,
      icon: workicon,
    },
    {
      title: "Contact",
      description:
        `Data Analyst, National Meteorological Office.`,
      icon: contacticon,
    },
  ],
};

export const contactData = {
  title: {
    fr: "Contact",
    en: "Contact",
  },
  description: {
    fr: "Laissez-moi un message et je vous reviendrai dans les plus brefs delais",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        fr: "Votre Nom",
        en: "Your Name",
      },
      type: "text",
      validation: {
        fr: "Veuillez écrire votre nom",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        fr: "Votre email",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        fr: "Veuillez écrire votre email",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        fr: "Votre Requête",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        fr: "Veuillez écrire votre requête",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      fr: "Votre Message",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      fr: "Veillez écrire votre message",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      fr: "Envoyez",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      fr: "J'accepte que Mohamed Ahmed utilise mes données personnelles (nom et adresse électronique) pour me contacter.",
      en: "I agree that Mohamed Ahmed may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      fr: "En soumettant cette demande, vous reconnaissez avoir pris connaissance de la politique privée",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    fr: "🦄 La démo en direct sera ouverte sous peu. Démarrage des serveurs...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    fr: "🦄 Je vous remercie pour votre courriel. Je vous répondrai dès que possible.",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    fr: "🦄 Malheureusement, l'envoi de votre courriel n'a pas fonctionné. Veuillez réessayer plus tard",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    fr: "Veuillez indiquer votre nom",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    fr: "FR",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
