export const REGIONS = [
  { name: 'South Korea', code: 'KR', flag: '🇰🇷' },
  { name: 'UK', code: 'UK', flag: '🇬🇧' },
  { name: 'Germany', code: 'DE', flag: '🇩🇪' },
  { name: 'France', code: 'FR', flag: '🇫🇷' },
  { name: 'Italy', code: 'IT', flag: '🇮🇹' },
  { name: 'Japan', code: 'JP', flag: '🇯🇵' },
  { name: 'Ireland', code: 'IE', flag: '🇮🇪' },
  { name: 'Slovakia', code: 'SK', flag: '🇸🇰' },
  { name: 'Singapore', code: 'SG', flag: '🇸🇬' },
  { name: 'Hungary', code: 'HU', flag: '🇭🇺' },
  { name: 'UAE', code: 'AE', flag: '🇦🇪' }
];

export const LIVING_COSTS: Record<string, number> = {
  'South Korea': 1200,
  'UK': 1600,
  'Germany': 1100,
  'France': 1300,
  'Italy': 1100,
  'Japan': 1300,
  'Ireland': 1700,
  'Slovakia': 800,
  'Singapore': 1800,
  'Hungary': 850,
  'UAE': 1400
};

export const REGION_DETAILS: Record<string, RegionDetail> = {
  'South Korea': {
    name: 'South Korea',
    code: 'KR',
    flag: '🇰🇷',
    description: 'A vibrant hub for technology and innovation in East Asia',
    capital: 'Seoul',
    languages: ['Korean', 'English'],
    currency: 'KRW (₩)',
    timezone: 'KST (UTC+9)',
    universities: [
      'Seoul National University',
      'KAIST',
      'Yonsei University',
      'Korea University'
    ],
    industries: [
      'Technology & IT',
      'Electronics Manufacturing',
      'Automotive',
      'Entertainment'
    ],
    livingCostPerMonth: 1200,
    visaType: 'Student Visa (D-10)',
    applicationDeadline: 'March & September',
    populationOfStudents: '15,000+',
    counselorsAvailable: 12,
    lastReviewed: '2025-07-01'
  },
  'UK': {
    name: 'UK',
    code: 'UK',
    flag: '🇬🇧',
    description: 'World-renowned education system with rich cultural heritage',
    capital: 'London',
    languages: ['English'],
    currency: 'GBP (£)',
    timezone: 'GMT (UTC+0)',
    universities: [
      'University of Oxford',
      'University of Cambridge',
      'Imperial College London',
      'LSE'
    ],
    industries: [
      'Finance & Banking',
      'Education',
      'Healthcare',
      'Creative Industries'
    ],
    livingCostPerMonth: 1600,
    visaType: 'Student Visa (Tier 4)',
    applicationDeadline: 'January & September',
    populationOfStudents: '20,000+',
    counselorsAvailable: 15,
    lastReviewed: '2025-07-01'
  },
  'Germany': {
    name: 'Germany',
    code: 'DE',
    flag: '🇩🇪',
    description: 'Known for engineering, technology, and affordable education',
    capital: 'Berlin',
    languages: ['German', 'English'],
    currency: 'EUR (€)',
    timezone: 'CET (UTC+1)',
    universities: [
      'Technical University of Munich',
      'Heidelberg University',
      'Berlin Technical University',
      'University of Bonn'
    ],
    industries: [
      'Engineering',
      'Automotive',
      'Manufacturing',
      'Technology'
    ],
    livingCostPerMonth: 1100,
    visaType: 'Student Visa (Schengen)',
    applicationDeadline: 'April & October',
    populationOfStudents: '18,000+',
    counselorsAvailable: 10,
    lastReviewed: '2025-07-01'
  },
  'France': {
    name: 'France',
    code: 'FR',
    flag: '🇫🇷',
    description: 'Art, culture, and prestigious education in the heart of Europe',
    capital: 'Paris',
    languages: ['French', 'English'],
    currency: 'EUR (€)',
    timezone: 'CET (UTC+1)',
    universities: [
      'Sorbonne University',
      'École Polytechnique',
      'Sciences Po',
      'HEC Paris'
    ],
    industries: [
      'Luxury Goods',
      'Fashion',
      'Wine & Hospitality',
      'Aerospace'
    ],
    livingCostPerMonth: 1300,
    visaType: 'Student Visa (Schengen)',
    applicationDeadline: 'March & September',
    populationOfStudents: '17,000+',
    counselorsAvailable: 11,
    lastReviewed: '2025-07-01'
  },
  'Italy': {
    name: 'Italy',
    code: 'IT',
    flag: '🇮🇹',
    description: 'Rich history, art, culture, and quality of life',
    capital: 'Rome',
    languages: ['Italian', 'English'],
    currency: 'EUR (€)',
    timezone: 'CET (UTC+1)',
    universities: [
      'University of Bologna',
      'University of Rome La Sapienza',
      'Politecnico di Milano',
      'University of Padua'
    ],
    industries: [
      'Fashion & Design',
      'Automotive',
      'Food & Wine',
      'Tourism'
    ],
    livingCostPerMonth: 1100,
    visaType: 'Student Visa (Schengen)',
    applicationDeadline: 'April & October',
    populationOfStudents: '13,000+',
    counselorsAvailable: 9,
    lastReviewed: '2025-07-01'
  },
  'Japan': {
    name: 'Japan',
    code: 'JP',
    flag: '🇯🇵',
    description: 'Cutting-edge technology, unique culture, and safe communities',
    capital: 'Tokyo',
    languages: ['Japanese', 'English'],
    currency: 'JPY (¥)',
    timezone: 'JST (UTC+9)',
    universities: [
      'University of Tokyo',
      'Kyoto University',
      'Osaka University',
      'Tokyo Institute of Technology'
    ],
    industries: [
      'Electronics & Robotics',
      'Automotive',
      'Software Development',
      'Pharmaceuticals'
    ],
    livingCostPerMonth: 1300,
    visaType: 'Student Visa (Ryugaku)',
    applicationDeadline: 'May & November',
    populationOfStudents: '16,000+',
    counselorsAvailable: 13,
    lastReviewed: '2025-07-01'
  },
  'Ireland': {
    name: 'Ireland',
    code: 'IE',
    flag: '🇮🇪',
    description: 'English-speaking nation with tech hubs and vibrant student life',
    capital: 'Dublin',
    languages: ['English', 'Irish'],
    currency: 'EUR (€)',
    timezone: 'IST (UTC+0)',
    universities: [
      'Trinity College Dublin',
      'University College Dublin',
      'Dublin City University',
      'University of Limerick'
    ],
    industries: [
      'Technology & Software',
      'Pharmaceuticals',
      'Financial Services',
      'Agriculture'
    ],
    livingCostPerMonth: 1700,
    visaType: 'Student Visa (Critical Skills)',
    applicationDeadline: 'January & July',
    populationOfStudents: '19,000+',
    counselorsAvailable: 14,
    lastReviewed: '2025-07-01'
  },
  'Slovakia': {
    name: 'Slovakia',
    code: 'SK',
    flag: '🇸🇰',
    description: 'Affordable education with growing tech sector and EU benefits',
    capital: 'Bratislava',
    languages: ['Slovak', 'English'],
    currency: 'EUR (€)',
    timezone: 'CET (UTC+1)',
    universities: [
      'Comenius University',
      'Slovak University of Technology',
      'Technical University of Kosice',
      'Palacky University'
    ],
    industries: [
      'Automotive Manufacturing',
      'Technology',
      'Energy',
      'Tourism'
    ],
    livingCostPerMonth: 800,
    visaType: 'Student Visa (Schengen)',
    applicationDeadline: 'March & September',
    populationOfStudents: '8,000+',
    counselorsAvailable: 6,
    lastReviewed: '2025-07-01'
  },
  'Singapore': {
    name: 'Singapore',
    code: 'SG',
    flag: '🇸🇬',
    description: 'Asian financial hub with world-class education and infrastructure',
    capital: 'Singapore',
    languages: ['English', 'Mandarin', 'Malay'],
    currency: 'SGD ($)',
    timezone: 'SGT (UTC+8)',
    universities: [
      'National University of Singapore',
      'Nanyang Technological University',
      'Singapore Management University',
      'SUTD'
    ],
    industries: [
      'Finance & Banking',
      'Technology',
      'Petrochemicals',
      'Trade & Logistics'
    ],
    livingCostPerMonth: 1800,
    visaType: 'Student Pass',
    applicationDeadline: 'January & August',
    populationOfStudents: '12,000+',
    counselorsAvailable: 11,
    lastReviewed: '2025-07-01'
  },
  'Hungary': {
    name: 'Hungary',
    code: 'HU',
    flag: '🇭🇺',
    description: 'EU-recognised degrees, 200 India-specific Stipendium Hungaricum seats, and the fastest student visa in Europe',
    capital: 'Budapest',
    languages: ['Hungarian', 'English'],
    currency: 'HUF (Ft) / EUR (€)',
    timezone: 'CET (UTC+1)',
    universities: [
      'Semmelweis University',
      'University of Debrecen',
      'Budapest University of Technology (BME)',
      'Eötvös Loránd University (ELTE)'
    ],
    industries: [
      'Medicine & Pharmaceuticals',
      'Engineering & Manufacturing',
      'Technology & IT',
      'Finance & Business Services'
    ],
    livingCostPerMonth: 850,
    visaType: 'Type D Long-Stay Study Visa',
    applicationDeadline: 'January (Stipendium) & Rolling',
    populationOfStudents: '10,000+',
    counselorsAvailable: 8,
    lastReviewed: '2025-07-01'
  },
  'UAE': {
    name: 'UAE',
    code: 'AE',
    flag: '🇦🇪',
    description: 'Zero income tax, 4.36M Indians, Golden Visa for top graduates, and a 3-hour flight from Mumbai — the study abroad decision most Indian families haven\'t made yet',
    capital: 'Abu Dhabi',
    languages: ['Arabic', 'English'],
    currency: 'AED (د.إ)',
    timezone: 'GST (UTC+4)',
    universities: [
      'Khalifa University',
      'MBZUAI',
      'UAE University (UAEU)',
      'American University of Sharjah'
    ],
    industries: [
      'Finance & Banking',
      'Technology & AI',
      'Energy & Petrochemicals',
      'Tourism & Hospitality'
    ],
    livingCostPerMonth: 1400,
    visaType: 'UAE Student Residence Visa',
    applicationDeadline: 'Rolling (September & January main intakes)',
    populationOfStudents: '185,000+',
    counselorsAvailable: 10,
    lastReviewed: '2025-07-01'
  }
};

export interface RegionDetail {
  name: string;
  code: string;
  flag: string;
  description: string;
  capital: string;
  languages: string[];
  currency: string;
  timezone: string;
  universities: string[];
  industries: string[];
  livingCostPerMonth: number;
  visaType: string;
  applicationDeadline: string;
  populationOfStudents: string;
  counselorsAvailable: number;
  lastReviewed?: string; // ISO date e.g. '2025-07-01'
}

// ─── Rich content interfaces ──────────────────────────────────────────────────

export interface UniversityDetail {
  rank: string;
  name: string;
  location: string;
  description: string;
  tags: string[];
  fees?: string;
  featured?: boolean;
}

export interface CostRow {
  label: string;
  amount: string;
  note: string;
}

export interface ScholarshipDetail {
  name: string;
  description: string;
  coverage: string;
}

export interface VisaStep {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CityDetail {
  name: string;
  monthlyCost: string;
  description: string;
}

export interface LanguageInfo {
  question: string;
  paragraphs: string[];
  callout?: string;
}

export interface RegionRichContent {
  heroTagline: string;
  quickStats: { value: string; label: string }[];
  whyTitle: string;
  whyParagraphs: string[];
  whyCallout?: string;
  whyCalloutType?: 'default' | 'teal' | 'gold';
  universitiesIntro: string;
  universitiesDetailed: UniversityDetail[];
  costsIntro: string;
  costs: CostRow[];
  costCallout?: string;
  postGradInfo?: string;
  scholarshipsIntro: string;
  scholarships: ScholarshipDetail[];
  visaIntro: string;
  visaNote?: string;
  visaSteps: VisaStep[];
  visaWarning?: { title: string; paragraphs: string[] };
  faqs: FAQItem[];
  cities?: CityDetail[];         // UK only
  citiesIntro?: string;
  language?: LanguageInfo;
}

export const REGION_RICH_CONTENT: Record<string, RegionRichContent> = {
  'South Korea': {
    heroTagline: "Asia's most quietly underrated study destination — world-class universities, affordable fees, and a culture that genuinely values education.",
    quickStats: [
      { value: '₹2.5L–10L', label: 'Tuition per year' },
      { value: '200,000+', label: 'International students' },
      { value: '2–4 wks', label: 'Visa processing time' },
      { value: 'D-2 / D-4', label: 'Student visa types' },
    ],
    whyTitle: 'A country that bets on education — and on you',
    whyParagraphs: [
      'Most Indian students still default to the US, UK, Canada, or Australia. South Korea sits outside that conversation, which is precisely why it deserves a closer look. The government has put billions of dollars into attracting international students through its Study Korea 300K Project, a national initiative to bring over 300,000 international students into Korean universities by 2027. That investment translates into real benefits for you: scholarships, English-taught programs, and a visa process that is more straightforward than most Western countries right now.',
      'In a global climate where Canada has tightened visa caps, Australia has made student finances harder to prove, and the UK has raised costs significantly, South Korea has moved in the opposite direction — actively opening its doors wider. Universities like KAIST, Seoul National University (SNU), Yonsei, and Korea University consistently rank among the top 100 in the world. They produce graduates hired by Samsung, LG, Hyundai, and by global tech firms. And their fees are, on average, 30–40% lower than equivalent programs in the US or UK.',
      'There is also a less-obvious reason Indian students tend to do well here: Korean academic culture shares certain values that feel familiar — discipline, respect for teachers, a serious approach to competitive exams, and a strong focus on science and technology. Adjusting to life here is rarely the cultural shock it can be in Western countries.',
    ],
    whyCallout: 'South Korea is one of the safest countries in the world for international students, with low crime rates, excellent public transport, and a strong culture of hospitality toward foreigners. Students living alone in Seoul consistently report feeling safer than they do in most Indian metros.',
    whyCalloutType: 'teal',
    universitiesIntro: 'South Korea has over 200 universities, but you do not need to research all of them. Below are the institutions Indian students most seriously consider, along with honest notes on what each one actually offers.',
    universitiesDetailed: [
      {
        rank: 'Ranked #53 globally (QS 2026)',
        name: 'KAIST',
        location: 'Daejeon — Korea Advanced Institute of Science & Technology',
        description: 'Often described as South Korea\'s answer to MIT. KAIST teaches almost all its graduate programs entirely in English, making it one of the most accessible top-tier universities in Asia for Indian students. Nearly every admitted international student receives a full tuition waiver plus a monthly living allowance of around ₩350,000. Daejeon is quieter and cheaper than Seoul but is home to some of South Korea\'s largest R&D centers.',
        tags: ['Fully English-taught', 'Full scholarship common', 'STEM focus'],
        featured: true,
      },
      {
        rank: 'Ranked #31 globally (QS 2026)',
        name: 'Seoul National University',
        location: 'Seoul — SNU, the "Harvard of Korea"',
        description: 'The most prestigious university in South Korea and one of the most respected in all of Asia. SNU alumni dominate Korean government, industry, and academia. English-taught programs are available primarily at the graduate level. Located in Seoul at the foot of Gwanak Mountain, the campus is large, beautiful, and filled with research opportunities. Admission is competitive, and most international students enter through the Global Korea Scholarship (GKS).',
        tags: ['Graduate English programs', 'All disciplines', 'GKS pathway'],
      },
      {
        rank: 'Ranked #56 globally (QS 2026)',
        name: 'Yonsei University',
        location: 'Seoul (Sinchon) — one of the SKY universities',
        description: 'Known for its Western-style campus culture and the Underwood International College (UIC), which is a fully English-taught liberal arts program at the undergraduate level — one of very few such programs in Asia. Yonsei\'s Sinchon campus is located in one of Seoul\'s most vibrant student neighborhoods. Strong in business, international studies, economics, and medicine. The Global Leader Fellowship is its flagship scholarship for high-achieving international students.',
        tags: ['UIC English undergrad', 'Business & liberal arts', 'Seoul city campus'],
      },
      {
        rank: 'Ranked #74 globally (QS 2026)',
        name: 'Korea University',
        location: 'Seoul — the third SKY university',
        description: 'Korea University completes the famous SKY trio alongside SNU and Yonsei. It has a strong reputation in business, law, and social sciences. Its English-medium graduate programs are well-structured, and the university has active partnerships with companies like Samsung and Hyundai for internships and research placements. Campus life is lively, and the international student community is large and well-supported.',
        tags: ['Graduate English programs', 'Business & law', 'Industry links'],
      },
      {
        rank: 'Top 5 Engineering in Asia',
        name: 'POSTECH',
        location: 'Pohang — Pohang University of Science and Technology',
        description: 'South Korea\'s most specialized research university — it focuses entirely on science and engineering and accepts very few students, making its degree exceptionally valuable. Almost all graduate programs are in English. Located in Pohang, it is quieter than Seoul but the academic environment is intense and rewarding. Research funding per student is among the highest in Asia.',
        tags: ['Fully English-taught', 'Heavy research funding', 'Science & engineering'],
      },
      {
        rank: 'Ranked #126 globally (QS 2026)',
        name: 'Sungkyunkwan University',
        location: 'Seoul & Suwon — SKKU',
        description: 'Founded in 1398 — over 600 years old — SKKU is one of the oldest universities in the world. It is heavily funded by Samsung, which has given it state-of-the-art facilities and strong industry connections in tech and semiconductor research. It ranks well in engineering, natural sciences, and business. A solid option for students who want a well-resourced university with real corporate ties and a slightly lower admission threshold than KAIST or SNU.',
        tags: ['Select English programs', 'Samsung-funded', 'Engineering & business'],
      },
    ],
    costsIntro: 'Cost is one of the strongest arguments for South Korea. When you compare the tuition fees at a top Korean university to an equivalent program in the US or UK, you are typically looking at savings of 30–50%. Monthly expenses in Seoul range from around ₩700,000 to ₩1,200,000 (approximately ₹42,000 to ₹72,000) — significantly lower than London, Sydney, or Toronto.',
    costs: [
      { label: 'Tuition — Public universities (SNU, KAIST)', amount: '₹1.8L – ₹5.4L per year', note: '~₩3,000,000–₩9,000,000 per year depending on program' },
      { label: 'Tuition — Private universities (Yonsei, Korea University)', amount: '₹5L – ₹10L per year', note: 'MBA programs can go up to ₹15–25L per year at SKY universities' },
      { label: 'Accommodation (on-campus dormitory)', amount: '₹8,000 – ₹18,000/month', note: 'Dormitories are far cheaper than renting privately in Seoul' },
      { label: 'Food & daily living', amount: '₹15,000 – ₹28,000/month', note: 'University canteens are heavily subsidised; eating out is affordable' },
      { label: 'Health insurance (mandatory)', amount: '~₹2,500/month', note: 'National Health Insurance Service (NHIS) at approximately ₩40,000/month' },
    ],
    costCallout: 'Part-time work update 2026: After six months of legal stay on a D-2 student visa, you are permitted to work up to 20 hours per week during the semester and unlimited hours during vacation. The minimum wage in South Korea in 2026 is ₩10,030 per hour (~₹605). Campus jobs typically pay ₩10,000–15,000 per hour.',
    postGradInfo: 'After graduation, South Korea offers a D-10 Job Seeker Visa that allows you to stay for up to two years while looking for employment. Tech graduates at companies like Samsung and LG can expect starting salaries of ₩2.5–4.5 million per month, with senior roles reaching ₩15 million per month. The return on investment is particularly strong in AI, robotics, and semiconductor fields where India-trained engineers are actively sought.',
    scholarshipsIntro: 'South Korea offers some of the most generous scholarships in Asia, and the competition from Indian applicants is still relatively low compared to China or Southeast Asia — which means your odds are genuinely better here than in many other destinations.',
    scholarships: [
      {
        name: 'Global Korea Scholarship (GKS) — Government funded',
        description: 'The flagship scholarship of the Korean government, also called KGSP. This covers full tuition, a monthly stipend of ₩900,000 (~₹54,000), return airfare, a settlement allowance, Korean language training for one year before your degree, and health insurance. It is one of the most comprehensive scholarships available to any international student globally. Applications are accepted at both the undergraduate and graduate level. Deadlines are typically September for undergraduates and February for graduate programs.',
        coverage: 'Full tuition + monthly stipend + airfare + insurance',
      },
      {
        name: 'KAIST Scholarship',
        description: 'Almost every international student admitted to KAIST at the graduate level receives full tuition coverage and a monthly living allowance. This is not a competitive scholarship you apply to separately — it is built into the KAIST admissions system. If you are admitted, the financial support comes with it. This makes KAIST uniquely accessible for Indian students who are strong in STEM but concerned about costs.',
        coverage: 'Full tuition waiver + monthly living allowance',
      },
      {
        name: 'Seoul National University (SNU) Scholarships',
        description: 'SNU offers merit-based financial aid to international students at both undergraduate and graduate levels. Awards are based on academic performance and are evaluated at the department level alongside your admission. Students admitted through the GKS pathway typically receive full support. The spring intake deadline is September–October and the fall intake deadline is March–April.',
        coverage: 'Partial to full tuition + monthly allowance ₩600,000–₩1,000,000',
      },
      {
        name: 'Yonsei Global Leader Fellowship',
        description: 'Yonsei\'s most prestigious scholarship for international students in high-achieving academic tracks. Covers tuition fees ranging from 30% to 100% depending on academic performance, with some scholarships including monthly stipends. Available for students in the Underwood International College and selected graduate programs. The evaluation is tied directly to your admissions application — no separate form is required.',
        coverage: '30–100% tuition waiver',
      },
      {
        name: 'Samsung Global Hope Scholarship & Hongik University Global Scholarship',
        description: 'Several Korean universities and corporations offer their own scholarship programs independent of the government GKS system. Samsung\'s scholarship program is aimed at students entering fields aligned with semiconductor and electronics research. Hongik University\'s Global Scholarship covers tuition and is particularly accessible for students in design, architecture, and engineering.',
        coverage: 'Partial to full tuition',
      },
    ],
    visaIntro: 'Indian students need to apply for a visa to enter South Korea — there is no visa-on-arrival and the K-ETA exemption does not apply to Indian passport holders. For study purposes, you will apply for either a D-2 visa (for full degree programs) or a D-4 visa (for Korean language training institutes). Most students working toward a degree go through the D-2 route.',
    visaNote: 'A very common and legitimate path is to first enter Korea on a D-4-1 visa for language training, spend one year learning Korean at a language institute, and then switch to a D-2 visa for your degree program. Many universities appreciate or require a TOPIK (Test of Proficiency in Korean) Level 3 or higher for Korean-taught programs. English-taught programs do not require TOPIK.',
    visaSteps: [
      { title: 'Get your admission letter', description: 'You cannot apply for the D-2 visa without a Standard Admission Letter from a recognized Korean university. Apply to universities at least 6–9 months before your intended intake to give yourself enough time for the visa process.' },
      { title: 'Prepare your financial proof', description: 'South Korea requires you to demonstrate financial capacity of at least ₩20,000,000 (approximately ₹12–13 lakh or $15,000 USD) in your or your sponsor\'s bank account. Scholarship letters from Korean universities or the GKS program also satisfy this requirement. This is a firm requirement — applications without adequate financial proof are routinely rejected.' },
      { title: 'Gather your documents', description: 'The standard document set includes your completed visa application form, a valid passport (minimum 6 months validity), your admission letter, academic transcripts, financial statements, a health certificate, and in some cases a police clearance certificate. All documents must be in English or Korean — non-English documents require certified translation.' },
      { title: 'Apply at the Korean Embassy or Consulate', description: 'Indian students submit visa applications at the Korean Embassy in New Delhi or the Consulate General in Mumbai, Chennai, or Kolkata. The visa application fee is $80 USD for single entry or $120 USD for multiple entry. Processing typically takes 2–4 weeks. Apply well in advance of your program start date.' },
      { title: 'Register after arrival — the ARC', description: 'Within 90 days of arriving in South Korea, you must register for an Alien Registration Card (ARC) at your local immigration office. This is your official identity document in Korea and is required for opening a bank account, getting a SIM card, signing a rental agreement, and almost everything else. Registration is done online via the HiKorea portal followed by an in-person visit.' },
      { title: 'Enrol in health insurance', description: 'Health insurance under South Korea\'s National Health Insurance Service (NHIS) is mandatory for all international students from the day of enrollment. The cost is approximately ₩40,000 per month (~₹2,400). Coverage is comprehensive and includes hospitalisation, outpatient treatment, prescription medication, and dental.' },
    ],
    faqs: [
      { question: 'Can I study in South Korea without IELTS?', answer: 'Some universities in South Korea accept students into English-taught programs without IELTS if the applicant completed their previous degree in English — which most Indian students have. However, the GKS scholarship and several top universities (including SNU and Yonsei) do require IELTS or TOEFL scores. A score of 6.0–6.5 in IELTS is typically sufficient for admission; scholarships may require 6.5 or higher.' },
      { question: 'When should I apply for the 2027 intake?', answer: 'The GKS scholarship for undergraduates typically has a deadline around September of the year before your entry. For the 2027 fall intake, that means September 2026. Graduate GKS applications usually open around February of the intake year. University direct applications follow similar timelines. Starting your preparation 12 months before your intended entry date is strongly advisable.' },
      { question: 'Is a South Korean degree recognised in India?', answer: 'Yes. Degrees from South Korean universities are recognised by the Association of Indian Universities (AIU). Graduates returning to India can have their credentials assessed for equivalency. Internationally, degrees from KAIST, SNU, and Yonsei are widely recognised — alumni work at Google, Microsoft, Goldman Sachs, McKinsey, and every major technology company globally.' },
      { question: 'What happens after I graduate — can I stay and work?', answer: 'After completing your degree, South Korea\'s D-10 Job Seeker Visa allows you to stay for up to two years to find employment. Once employed, you transition to an E-7 work visa. High-skilled Indian talent in STEM fields can now also use time spent on a D-2 student visa toward fast-tracking a Permanent Residency (F-5) application — a significant change in South Korea\'s immigration policy.' },
      { question: 'How safe is South Korea for Indian students living alone?', answer: 'South Korea consistently ranks among the safest countries in the world. The crime rate is low, public spaces are well-monitored, and the public transport system — particularly in Seoul — operates around the clock. Indian students, including solo female students, report strong feelings of safety. Most university campuses also have 24-hour security and well-lit accommodation facilities.' },
      { question: 'What is the food situation like for vegetarians and Indian students?', answer: 'Korean cuisine is predominantly meat and seafood-based, and strict vegetarians do face some challenges. However, the situation has improved significantly in recent years. Most major cities have Indian restaurants, and campus areas near international universities typically have diverse food options. Grocery stores sell lentils, rice, spices, and common Indian pantry staples. Cooking at home for most meals is also the most budget-friendly approach.' },
    ],
    language: {
      question: 'Do you need to know Korean?',
      paragraphs: [
        'This is the question every Indian student asks first, and the honest answer is: it depends entirely on where you want to study and what you want to study.',
        'At KAIST, approximately 85% of all classes are taught in English — you can complete your entire degree without speaking Korean fluently. At Yonsei\'s Underwood International College, the curriculum is entirely in English. At the graduate level across SNU, Korea University, POSTECH, and SKKU, English-taught programs are the norm for international students. If you are aiming for a STEM or business master\'s or PhD at one of these institutions, Korean is not a barrier.',
        'Undergraduate programs in Korean-taught streams, and programs in humanities and social sciences at mid-tier universities, will require Korean proficiency measured by the TOPIK exam. TOPIK Level 3 is the minimum for most Korean-instruction undergraduate programs; Level 4–5 is expected for competitive programs.',
      ],
      callout: 'Our recommendation for students starting from zero: Begin learning Hangul (the Korean alphabet) now — it takes most people 2–3 days to read it. It is one of the most logically designed writing systems in the world and unlocks basic navigation, menus, and signage immediately. Beyond that, most campuses have strong language support services including exchange programs, tutoring, and dedicated Korean language courses for international students.',
    },
  },

  UK: {
    heroTagline: 'One of the world\'s oldest and most respected education systems, a globally recognised degree, and a clear pathway to work after graduation.',
    quickStats: [
      { value: '£10K–45K', label: 'Tuition per year' },
      { value: '24', label: 'Russell Group universities' },
      { value: '1–3 yrs', label: 'Post-study work visa' },
      { value: '~3 wks', label: 'Visa processing time' },
    ],
    whyTitle: 'The case for studying in Britain',
    whyParagraphs: [
      'The United Kingdom has been educating international students for centuries, and the reputation it has built is genuinely earned. Oxford and Cambridge are not just historically famous — they consistently rank in the top five universities in the world by every major measure. Imperial College London and University College London sit among the global top 10 for science, engineering, and research. Even mid-tier UK universities often rank higher than the flagship institutions of many other countries.',
      'For Indian students, the UK holds a particular appeal that goes beyond rankings. The British education system has shaped Indian academic culture directly — from the structure of examinations to the value placed on debate and essay writing. Transitioning to a UK university feels less foreign than moving to, say, Germany or Japan. The language is English. The academic expectations are familiar. And the Indian student community in every major UK city is large, well-established, and genuinely supportive.',
      'One-year master\'s programs are perhaps the strongest practical argument for the UK over the US or Australia. A high-quality postgraduate degree completed in twelve months, followed by up to two years of work rights — it is a tight, efficient package that makes financial sense for most Indian families calculating the cost against the return.',
    ],
    whyCallout: 'The Russell Group: The UK\'s 24 most prestigious, research-intensive universities — including Oxford, Cambridge, Imperial, UCL, LSE, Edinburgh, and Manchester — are grouped together under the Russell Group banner. Think of it as the UK\'s equivalent of the American Ivy League, except larger and more diverse in subject strengths. A degree from any Russell Group university carries significant weight with employers worldwide, including in India.',
    whyCalloutType: 'gold',
    universitiesIntro: 'Choosing a UK university is not just about picking the highest-ranked name. Course-specific rankings matter far more than the overall university league table position. Here are the institutions that consistently stand out for Indian students.',
    universitiesDetailed: [
      {
        rank: 'QS #3 Globally',
        name: 'University of Oxford',
        location: 'Oxford, England',
        description: 'The oldest English-speaking university in the world, and consistently one of the top three globally. Oxford\'s tutorial system — one-on-one or small group sessions with a faculty expert — is unique and produces exceptionally deep thinkers. Particularly dominant in humanities, law, medicine, PPE, and increasingly in computer science and data. Indian students are among the largest international cohorts at Oxford.',
        tags: ['Humanities & law', 'Medicine', 'Weidenfeld-Hoffmann Scholarship'],
        fees: '£28,000 – £45,000/year',
        featured: true,
      },
      {
        rank: 'QS #5 Globally',
        name: 'University of Cambridge',
        location: 'Cambridge, England',
        description: 'Oxford\'s closest rival and equal in global reputation. Cambridge is particularly strong in mathematics, natural sciences, engineering, and computer science — arguably the strongest in the world in these fields. The Gates Cambridge Scholarship is one of the most prestigious full-funding awards available globally and is open to Indian students for postgraduate study.',
        tags: ['STEM & mathematics', 'Engineering', 'Gates Cambridge Scholarship'],
        fees: '£26,000 – £42,000/year',
      },
      {
        rank: 'QS #2 in Engineering',
        name: 'Imperial College London',
        location: 'South Kensington, London',
        description: 'The go-to destination for Indian students in engineering, computing, and life sciences. Imperial focuses exclusively on STEM and business — every resource, faculty hire, and industry partnership is concentrated on science and technology. Its location in central London gives students direct access to the city\'s financial and technology sectors. Graduate employment rates are among the highest of any UK university.',
        tags: ['Engineering & computing', 'Life sciences', 'London location'],
        fees: '£30,000 – £38,000/year',
      },
      {
        rank: 'QS #9 Globally',
        name: 'University College London (UCL)',
        location: 'Bloomsbury, London',
        description: 'UCL is London\'s most comprehensive research university and one of the most internationally diverse in the world — over half its students are international. Strong across an unusually wide range of disciplines: architecture, law, biomedical sciences, economics, and computer science. UCL\'s proximity to London\'s financial district and startup ecosystem makes it particularly popular with students targeting finance, consulting, or tech careers.',
        tags: ['Architecture & law', 'Biomedical', 'Most diverse UK campus'],
        fees: '£22,000 – £35,000/year',
      },
      {
        rank: 'QS #27 Globally',
        name: 'University of Edinburgh',
        location: 'Edinburgh, Scotland',
        description: 'Scotland\'s most prestigious university and the most cost-effective way into a world-class Russell Group education. Edinburgh is consistently ranked in the global top 30 and excels in computer science, informatics, business, and medicine. The city of Edinburgh is significantly cheaper to live in than London. Scotland\'s Saltire Scholarship offers £8,000 toward tuition for Indian students specifically.',
        tags: ['Computer science', 'Business & medicine', 'Saltire Scholarship'],
        fees: '£19,000 – £30,000/year',
      },
      {
        rank: 'QS #34 Globally',
        name: 'University of Manchester',
        location: 'Manchester, England',
        description: 'Consistently cited as one of the best-value Russell Group universities for Indian students. Manchester has a massive Indian student and diaspora community, making it feel genuinely familiar from day one. Strong in business and management (Alliance Manchester Business School), engineering, life sciences, and social sciences. Alumni include 25 Nobel laureates.',
        tags: ['Business & management', 'Engineering', 'Large Indian community'],
        fees: '£19,000 – £27,000/year',
      },
      {
        rank: 'Top 10 Business Globally',
        name: 'London School of Economics (LSE)',
        location: 'Holborn, London',
        description: 'The world\'s leading specialist university in social sciences, economics, finance, and law. If your career direction points toward international finance, consulting, economics, or policy — LSE is in a category of its own. The acceptance rate is around 8.9% and the academic expectations are very high. But the network you build here and the signal your degree sends is unmatched in its specific fields.',
        tags: ['Economics & finance', 'Law & policy', 'Most selective UK university'],
        fees: '£23,000 – £34,000/year',
      },
      {
        rank: 'QS #69 Globally',
        name: 'University of Warwick',
        location: 'Coventry, England',
        description: 'The strongest mid-cost Russell Group option for students targeting finance, data science, and engineering. Warwick Business School is one of the best business schools in Europe and particularly well-regarded for quantitative finance and economics. Tuition fees and living costs are significantly lower than London universities, making Warwick one of the best return-on-investment choices among Russell Group institutions.',
        tags: ['Finance & data science', 'Engineering', 'Best value Russell Group'],
        fees: '£19,000 – £28,000/year',
      },
    ],
    costsIntro: 'The UK is not a cheap destination. Tuition fees for international students range from £10,000 per year at teaching-focused institutions to £45,000 per year at Oxford for research-intensive programs. However, the financial picture changes significantly when you factor in the one-year master\'s structure and the post-study work visa.',
    costs: [
      { label: 'Tuition — teaching-focused & mid-ranked universities', amount: '£10,000 – £25,000/year', note: 'Universities like Sheffield, Leeds, Nottingham, Birmingham. Strong reputations in specific subjects, significantly lower fees than London institutions.' },
      { label: 'Tuition — Russell Group & elite universities', amount: '£25,000 – £45,000/year', note: 'Imperial, UCL, LSE, Oxford, Cambridge. MBA programs at top business schools can exceed £50,000 per year.' },
      { label: 'Living costs — outside London', amount: '£900 – £1,483/month', note: 'Cities like Edinburgh, Manchester, Warwick, and Sheffield offer substantially lower living costs than London.' },
      { label: 'Living costs — London', amount: '£1,300 – £2,000+/month', note: 'London is expensive. Rent, transport (Oyster card), and food costs are significantly higher than anywhere else in the UK. Budget carefully.' },
      { label: 'Visa fee + Immigration Health Surcharge (IHS) — 2026', amount: '£558 + £1,035/year', note: 'The IHS gives full access to the NHS during your stay. For a two-year course, IHS totals £2,070. Both fees must be paid upfront.' },
      { label: 'Funds required in account — 28 consecutive days', amount: '£33,347 (London) / £10,224+ (outside)', note: 'First year\'s tuition plus £1,483/month × 9 months (London) or £1,136/month (outside). Balance must not dip below threshold even once during those 28 days.' },
    ],
    costCallout: 'Part-time work rights: UK Student visa holders can work up to 20 hours per week during term time and full-time during university holidays. Average student jobs in the UK pay £11–£15 per hour, which can cover a significant portion of monthly living costs.',
    scholarshipsIntro: 'UK scholarships are competitive — but they exist, they are well-funded, and Indian students win them in significant numbers every year. The key is understanding which scholarships suit your profile and starting the preparation well in advance, as most major deadlines fall 12–18 months before your intended study date.',
    scholarships: [
      {
        name: 'Chevening Scholarship — UK Government',
        description: 'The most prestigious UK scholarship available to Indian students and one of the most recognised in the world. Funded by the UK\'s Foreign, Commonwealth & Development Office, Chevening covers full tuition, a monthly living allowance, return airfare, and visa costs for a one-year master\'s degree at any UK university. The selection process emphasises leadership potential. A minimum of two years of professional work experience is required. Applications for the 2027–28 cycle typically open in August 2026 and close in November 2026.',
        coverage: 'Full tuition + living costs + airfare + visa fees',
      },
      {
        name: 'Commonwealth Scholarship — UK Government',
        description: 'Funded by the UK government for students from Commonwealth nations — which includes India. The Commonwealth Scholarship focuses on students pursuing master\'s or PhD programs in fields with development impact: public health, engineering, sustainability, education, and technology. Unlike Chevening, work experience is not required, making this accessible to fresh graduates with strong academic records.',
        coverage: 'Full tuition + monthly stipend + airfare + arrival allowance',
      },
      {
        name: 'GREAT Scholarship — British Council & UK Universities',
        description: 'The GREAT Scholarship programme is run by the British Council in partnership with participating UK universities, specifically for Indian students. It provides £10,000 toward tuition fees for a one-year taught master\'s program. Unlike Chevening and Commonwealth, GREAT Scholarships are offered through individual universities — so the process involves being selected for both the scholarship and the university simultaneously.',
        coverage: '£10,000 tuition contribution',
      },
      {
        name: 'Gates Cambridge Scholarship',
        description: 'One of the most prestigious postgraduate scholarships in the world — and it is exclusively for the University of Cambridge. Funded by the Bill and Melinda Gates Foundation, the Gates Cambridge Scholarship is awarded to around 90 students globally per year across all disciplines. Selection is based on intellectual ability, leadership, and a commitment to using your education to improve lives globally.',
        coverage: 'Full tuition + living allowance + airfare + research allowance',
      },
      {
        name: "Scotland's Saltire Scholarship",
        description: 'Specifically for students from India studying at a Scottish university. The Saltire Scholarship provides £8,000 toward tuition fees for one year of full-time postgraduate study. Available for study in STEM, renewable and clean energy, creative industries, financial services, food and drink, and life sciences. Particularly strong for students targeting Edinburgh, Glasgow, Strathclyde, and St Andrews.',
        coverage: '£8,000 tuition contribution — Scotland only',
      },
    ],
    visaIntro: 'The UK Student Visa (formerly called the Tier 4 General visa) is the standard route for Indian students studying a full-time degree or course in the UK. The process is structured and fully digital — everything from the application to document submission is done online, with a single in-person biometrics appointment at a VFS Global centre in India.',
    visaSteps: [
      { title: 'University offer and the CAS number', description: 'Before the visa can be processed, a university offer must be confirmed and accepted. Once the offer is unconditional, the university issues a Confirmation of Acceptance for Studies (CAS) — a unique reference number that forms the backbone of the entire visa file. The CAS contains the course details, start date, tuition fee amount, and the university\'s UKVI sponsor licence number.' },
      { title: 'The financial requirement — the 28-day rule', description: 'The required funds must be sitting continuously in the account for 28 consecutive days before the visa is submitted. For a London university, this means the first year\'s tuition fee plus £13,347 (£1,483 × 9 months). For universities outside London, it is tuition plus £10,224. The balance must not dip below the threshold even once during those 28 days. Funds can be in a parent\'s account with a signed consent letter and proof of relationship.' },
      { title: 'English language evidence', description: 'Most UK universities require IELTS Academic with a score of 6.0–6.5 overall (with no individual band below 5.5 or 6.0 depending on the course). Some highly competitive programs at Oxford, Cambridge, and LSE require 7.0 or above. PTE Academic and TOEFL are also widely accepted. There is an exemption pathway for students who completed their previous degree entirely through the medium of English.' },
      { title: 'TB test — mandatory for Indian applicants', description: 'Indian nationals applying for a UK visa for more than 6 months must undergo a tuberculosis (TB) test at an approved clinic in India. The test must be done at a UKVI-approved centre — not at any clinic. Results take 2–5 days and the certificate is valid for 6 months from the test date. This must be planned into the overall timeline as it cannot be done at the last minute.' },
      { title: 'Online visa application and fee payment', description: 'The visa application is completed on the official UK Government website. The current fee is £558 (as of April 2026), paid during the application. The Immigration Health Surcharge (IHS) — which grants NHS access throughout the stay — is paid separately and calculated at £1,035 per year of the visa. Both fees are paid online before submitting.' },
      { title: 'Biometrics appointment at VFS Global', description: 'After submitting the online application, a biometrics appointment is booked at a VFS Global centre in India (available in Mumbai, Delhi, Chennai, Kolkata, Hyderabad, Bengaluru, Ahmedabad, and others). At the appointment, fingerprints and a photograph are taken. Original documents must be brought to the appointment.' },
      { title: 'Decision and travel', description: 'The UKVI typically processes UK Student visa applications within 3 weeks of the biometrics appointment. For a fee, a Priority Service reduces this to 5 business days. Once approved, a vignette is placed in the passport, and upon arrival in the UK, a Biometric Residence Permit (BRP) is collected from a designated Post Office within 10 days of arriving.' },
    ],
    visaWarning: {
      title: 'The Graduate Route Visa — what changes in 2027',
      paragraphs: [
        'After completing a UK degree, students can remain in the UK on the Graduate Route visa to work or look for work. Currently, this is 2 years for bachelor\'s and master\'s graduates, and 3 years for PhD graduates. No employer sponsorship is required during this period.',
        'From 1 January 2027, the Graduate Route for bachelor\'s and master\'s graduates will be reduced from 2 years to 18 months. PhD students are unaffected and will continue to receive 3 years. Students starting a one-year master\'s in September 2026 will graduate in mid-2027 — after the cutoff — and will receive 18 months, not 2 years. Students who complete their degree and submit their Graduate Route application before 31 December 2026 will still receive the full 2 years. This timing matters, and it should factor into the decision of which intake to target.',
      ],
    },
    faqs: [
      { question: 'Is a UK degree genuinely recognised back in India?', answer: 'Yes, completely. Degrees from UK universities are recognised by the Association of Indian Universities (AIU) and by employers, the Indian civil services, and academic institutions across India. A degree from a Russell Group university in particular carries enormous weight with Indian employers in consulting, finance, technology, and the public sector. Many of India\'s senior business and government leaders hold UK degrees.' },
      { question: 'Is a one-year master\'s from the UK taken seriously by employers?', answer: 'Yes, and this question comes up often. One-year taught master\'s programs are the norm in the UK — they are not a shortcut or an exception. UK employers, global consulting firms, and Indian companies all recognise and value them on the same footing as two-year programs from other countries. The intensity of a one-year UK master\'s is genuinely high — the curriculum covers the same ground as longer programs elsewhere, just without the summer semester.' },
      { question: 'Can families accompany a student to the UK?', answer: 'The rules here changed significantly in 2024. Students on taught postgraduate courses (including most one-year master\'s programs) can no longer bring dependants unless they are enrolled in a government-funded scholarship program. PhD students and students on research-based master\'s programs can still bring spouses and children as dependants. This is a genuine consideration for married students, and the course type needs to be confirmed carefully before assuming family accompaniment is possible.' },
      { question: 'What is the minimum IELTS score needed?', answer: 'For most UK universities, an IELTS Academic score of 6.0–6.5 overall is the standard requirement for a master\'s program, with no individual band below 5.5 or 6.0. Research-heavy programs and top universities (Oxford, Cambridge, LSE, Imperial) often require 7.0 or above. Undergraduate programs at most universities accept 6.0 overall. IELTS is the most widely accepted test, though PTE Academic and TOEFL iBT are also accepted by most institutions.' },
      { question: 'How competitive are UK universities for Indian applicants?', answer: "It varies significantly. Oxford's acceptance rate is around 15% overall (much lower for competitive courses), and LSE sits at under 9%. Imperial and UCL are competitive for STEM fields. Mid-ranked Russell Group universities like Manchester, Edinburgh, Birmingham, and Leeds have acceptance rates of 50–75% and are genuinely accessible for students with strong academic records." },
      { question: 'What happens if a student wants to stay in the UK long-term after graduation?', answer: 'The Graduate Route visa provides the initial work period after graduation (2 years currently, 18 months from January 2027 for bachelor\'s and master\'s graduates). To stay longer, a switch to a Skilled Worker visa is required, which means securing a job offer from a UKVI-licensed employer at a minimum salary of £41,700 per year. After 5 years on a Skilled Worker visa, Indefinite Leave to Remain (ILR) becomes possible. PhD graduates have more time on the Graduate Route (3 years) and are better positioned to secure sponsorship.' },
    ],
    citiesIntro: 'The city you study in affects your budget, your lifestyle, your social circle, and in some cases your career prospects after graduation. London is the default assumption for many Indian students — but it is not always the best choice, and it is almost never the most financially sensible one.',
    cities: [
      { name: 'London', monthlyCost: '£1,300–£2,000/month', description: 'The world\'s most connected city for finance, consulting, and media. Unbeatable for career networking, internships, and industry access. Home to UCL, Imperial, LSE, and King\'s College London. If your career is in finance or the City, this is where you want to be — but budget accordingly.' },
      { name: 'Edinburgh', monthlyCost: '£900–£1,200/month', description: "Scotland's capital and home to one of the world's top 30 universities. Beautiful, culturally rich, and significantly more affordable than London. A large and well-established Indian student community. The Saltire Scholarship is available specifically for Indian students." },
      { name: 'Manchester', monthlyCost: '£850–£1,100/month', description: 'Home to the University of Manchester. Vibrant, multicultural, and one of the most affordable major UK cities. The Indian community here is enormous — one of the largest Indian diaspora populations outside London. Strong in business, engineering, and life sciences.' },
      { name: 'Birmingham', monthlyCost: '£800–£1,050/month', description: "The UK's second-largest city and home to the University of Birmingham (Russell Group). Birmingham has the largest South Asian community in Britain outside London. Affordable, well-connected by train to London, and increasingly popular with students in engineering, business, and healthcare." },
      { name: 'Coventry / Warwick', monthlyCost: '£750–£950/month', description: 'Home to the University of Warwick, one of the best-value Russell Group institutions in the country. The campus is self-contained and the town is small, which keeps costs very manageable. Coventry is a 20-minute train ride from Birmingham and about 1 hour from London.' },
      { name: 'Glasgow / Leeds / Sheffield', monthlyCost: '£750–£950/month', description: 'Each of these cities offers at least one strong Russell Group or research-intensive university at a significantly lower cost than London. The University of Glasgow is particularly strong in medicine and engineering. Leeds and Sheffield are excellent for business, humanities, and social sciences.' },
    ],
  },

  // ─── France ──────────────────────────────────────────────────────────────────
  France: {
    heroTagline: 'Public university fees under ₹4 lakh per year. The world\'s top-ranked business schools. A special post-study work permit exclusively for Indian graduates. France is a far more strategic choice than most Indian students realise.',
    quickStats: [
      { value: '€2,770–€3,941', label: 'Public university tuition/year' },
      { value: '1,500+', label: 'English-taught master\'s programs' },
      { value: '24 months', label: 'Post-study work permit for Indians' },
      { value: '30,000', label: 'Target Indian students by 2030' },
    ],
    whyTitle: 'More than Paris — a genuinely underrated study decision',
    whyParagraphs: [
      'France does not come to mind as quickly as the UK, Germany, or Canada when Indian families discuss studying abroad. That is exactly why it deserves serious attention. The competition for admissions and scholarships is lower than most equivalent destinations. The cost at public universities is a fraction of what the UK charges. And France holds a special bilateral relationship with India that has resulted in one of the most generous post-study work arrangements available to Indian graduates anywhere in the world.',
      'In the world of business education, France occupies a position that is genuinely unrivalled. HEC Paris consistently ranks among the top three business schools in Europe. INSEAD — which operates from a campus just outside Paris — is one of the two or three most prestigious MBA institutions on the planet. ESSEC, ESCP, and Sciences Po are names that open doors in finance, consulting, and international policy in a way that very few non-US institutions can. If your career direction involves global business, luxury, management consulting, or international finance, France gives you access to networks that the UK, Germany, and Australia simply cannot match.',
      'For STEM and engineering students, the picture is equally strong. École Polytechnique, CentraleSupélec, and École des Ponts ParisTech are world-class technical universities with deep ties to Airbus, Total, Renault, and the French aerospace sector. Paris-Saclay — the university cluster built around Orsay — is France\'s answer to MIT\'s Boston cluster, housing some of the most productive physics, mathematics, and computer science research in Europe.',
    ],
    whyCallout: 'The Grandes Écoles: France\'s higher education system has a unique two-tier structure. Public universities are affordable and research-strong. The Grandes Écoles are a separate category of elite institutions — highly selective, professionally oriented, and carrying enormous prestige with French and global employers. Admission to a Grande École like HEC, Polytechnique, or Sciences Po is genuinely competitive and the degree signal it sends is comparable to an IIT or IIM in India.',
    whyCalloutType: 'teal',
    universitiesIntro: 'France\'s higher education system runs on two parallel tracks. The public university system offers broadly accessible, government-funded education at low fees. The Grandes Écoles system offers some of the most elite and career-focused education in the world, at significantly higher cost. Both tracks produce globally recognised degrees, but they serve different ambitions and budgets.',
    universitiesDetailed: [
      {
        rank: 'QS #8 in Business Globally',
        name: 'HEC Paris',
        location: 'Jouy-en-Josas, near Paris',
        description: 'One of the most prestigious business schools in the world and the crown jewel of French management education. HEC\'s Master in Management (MiM) program is consistently ranked in the global top 3. The MBA sits alongside INSEAD and London Business School as a truly elite qualification. Indian students at HEC find themselves building networks that span McKinsey, Goldman Sachs, L\'Oréal, and the French luxury conglomerates. Admission is rigorous — strong GMAT scores (680+), a compelling profile, and genuine clarity of purpose are non-negotiable.',
        tags: ['Management & MBA', 'Eiffel & merit scholarships', 'Top 3 MiM globally'],
        fees: '~€35,000 total (MiM) · ~€90,000–€106,000 (MBA)',
        featured: true,
      },
      {
        rank: 'QS #8 MBA Globally',
        name: 'INSEAD',
        location: 'Fontainebleau, near Paris (+ Singapore campus)',
        description: 'Consistently ranked the world\'s top MBA program alongside Wharton and Harvard. INSEAD\'s 10-month MBA is uniquely fast, intensely global — its class is typically 94+ nationalities — and connects graduates into the most senior corporate networks in Europe, North America, and Asia. Indian applicants are among the largest nationality groups in each class. Need-based and merit scholarships are available but competitive.',
        tags: ['MBA only', '94+ nationalities per class', 'Need & merit scholarships'],
        fees: '~€109,000 total (MBA)',
        featured: true,
      },
      {
        rank: 'QS #38 Globally',
        name: 'Sciences Po Paris',
        location: 'Saint-Germain-des-Prés, Paris',
        description: 'France\'s most prestigious social sciences institution and the training ground for French presidents, ministers, and senior EU officials. Sciences Po is genuinely international — over 47% of students are from outside France — and runs most of its master\'s programs entirely in English. Strong in international affairs, public policy, political science, economics, law, and urban planning. The Émile Boutmy Scholarship is specifically for non-EU students.',
        tags: ['International affairs & policy', '47% international students', 'Émile Boutmy Scholarship'],
        fees: '€13,190–€15,600/year',
      },
      {
        rank: 'QS #14 in Natural Sciences',
        name: 'Université Paris-Saclay',
        location: 'Orsay & Gif-sur-Yvette, Île-de-France',
        description: 'A research powerhouse built around one of the most concentrated clusters of scientific talent in Europe — Paris-Saclay ranks in the global top 15 for natural sciences, mathematics, and engineering. It houses faculties from multiple elite institutions including CentraleSupélec and ENS Paris-Saclay. The fees are public-university level, making it one of the most extraordinary value propositions in global higher education for strong STEM students.',
        tags: ['Low public university fees', 'STEM & mathematics', 'QS Top 15 in sciences'],
        fees: '~€3,941/year',
      },
      {
        rank: 'QS #244 Globally',
        name: 'École Polytechnique (l\'X)',
        location: 'Palaiseau, near Paris',
        description: 'France\'s most elite engineering institution and one of the most selective universities in Europe. Polytechnique\'s alumni network includes French heads of state, CEOs of major corporations, and Nobel laureates in physics and economics. Its master\'s programs are taught in English and attract strong applicants in applied mathematics, data science, AI, physics, and engineering. Eiffel and internal scholarships are regularly awarded to Indian students.',
        tags: ['Engineering & applied sciences', 'Most selective in France', 'Eiffel scholarship eligible'],
        fees: '€12,000–€15,000/year',
      },
      {
        rank: 'QS #83 Globally',
        name: 'Sorbonne University',
        location: 'Latin Quarter, Paris',
        description: 'One of the world\'s oldest and most storied universities, Sorbonne is the obvious choice for Indian students in humanities, literature, history, philosophy, and the social sciences. Its science faculties — particularly in medicine, chemistry, and interdisciplinary research — are also strong. Fees are at the public university level, making it one of the most affordable ways to study at a globally recognised institution.',
        tags: ['Public university fees', 'Humanities & social sciences', 'Paris location'],
        fees: '~€2,770–€3,941/year',
      },
    ],
    costsIntro: 'France has a split cost structure that catches students off guard when they first look at it. Public universities charge under €4,000 per year in tuition — genuinely low by international standards. Grandes Écoles and private business schools charge €10,000 to €110,000 per program. The key is understanding which track you are on and budgeting accordingly.',
    costs: [
      { label: 'Tuition — public universities', amount: '€2,770–€3,941/year', note: 'Applies to Sorbonne, Paris-Saclay, and most public universities for non-EU international students. PhD fees are fixed at just €397/year nationally — exceptional value for research students.' },
      { label: 'Tuition — Grandes Écoles and private business schools', amount: '€10,000–€110,000/program', note: 'Sciences Po: €13,000–€15,600/year. HEC MiM: €35,000 total. HEC MBA: €90,000–€106,000. INSEAD MBA: ~€109,000. Eiffel, Charpak, and institutional scholarships can significantly reduce these figures.' },
      { label: 'Living costs — Paris', amount: '€1,200–€1,800/month', note: 'Rent is the dominant cost. CROUS student dormitories are the most affordable option at €400–€600/month but have limited availability. CAF housing aid can reduce effective rent by €80–€200/month.' },
      { label: 'Living costs — Lyon, Toulouse, Bordeaux, Grenoble', amount: '€800–€1,100/month', note: 'Regional cities are meaningfully cheaper than Paris and host strong universities. Lyon is particularly recommended — excellent university ecosystem, large Indian community, and significantly lower rent.' },
      { label: 'CVEC — Contribution à la Vie Étudiante et de Campus', amount: '€105/year', note: 'A small mandatory student life contribution paid to the university at the start of each academic year. Without the CVEC receipt, students cannot complete administrative enrollment.' },
      { label: 'Financial proof for student visa', amount: '€615/month minimum', note: 'Minimum monthly fund proof required for the French student visa. Total proof for a one-year program is approximately €7,380.' },
    ],
    costCallout: 'Part-time work rights: Students on a French long-stay student visa can work up to 964 hours per year — approximately 18–20 hours per week. The French minimum wage in 2026 is approximately €11.88/hour gross. Student jobs in retail, hospitality, and campus roles are widely available in French cities.',
    scholarshipsIntro: 'France\'s scholarship landscape for Indian students is richer than most people realise — and the competition is lower than in Germany or the UK, simply because fewer Indian students are currently targeting France. Both the Eiffel and Charpak scholarships work through a nomination system — the French university nominates you, so flag your interest explicitly in your statement of purpose and during the Campus France interview.',
    scholarships: [
      {
        name: 'Eiffel Excellence Scholarship — French Ministry of Foreign Affairs',
        description: 'The most prestigious French government scholarship for international students. Targets master\'s and PhD students in engineering, economics, management, law, and political science. The stipend is €1,200/month for master\'s students and €2,100/month for doctoral researchers, plus return airfare, health insurance, and cultural allowances. Your French university must nominate you — the nomination deadline is typically in January for the following September intake.',
        coverage: '€1,200/month (master\'s) · €2,100/month (PhD) + airfare + insurance',
      },
      {
        name: 'Charpak Scholarship — Exclusively for Indian Students',
        description: 'Named after Nobel laureate Georges Charpak, this is France\'s dedicated scholarship program exclusively for Indian students at the master\'s level. Covers €860/month in living costs, exemption from the Campus France fee, and visa fee reimbursement. One of the very few major scholarships in the world designed exclusively for Indian applicants. Applications open in October–November for the following September intake.',
        coverage: '€860/month + Campus France fee exemption + visa fee reimbursement',
      },
      {
        name: 'Sciences Po Émile Boutmy Scholarship',
        description: 'Sciences Po\'s dedicated scholarship for non-EU students, covering €5,000 to €19,000 per year in tuition support depending on academic profile and financial need. Named after Sciences Po\'s founder, the Boutmy Scholarship is assessed as part of the admissions process — no separate application form is required.',
        coverage: '€5,000–€19,000/year tuition support — assessed automatically in admissions',
      },
      {
        name: 'Erasmus Mundus Joint Masters',
        description: 'An EU-funded scholarship program that funds joint master\'s degrees across multiple European universities. French institutions are active partners in dozens of Erasmus Mundus programs across engineering, economics, environmental science, data science, and the humanities. Full funding for non-EU students typically amounts to around €24,000 per year. A direct application — no university nomination required.',
        coverage: '~€24,000/year full funding — direct application to consortium',
      },
      {
        name: 'HEC Paris & Business School Merit Scholarships',
        description: 'HEC Paris, ESSEC, EDHEC, and emlyon all offer their own merit-based scholarships for outstanding international applicants, assessed automatically during the admissions process. HEC\'s Excellence Scholarship covers €14,000–€21,000 per year for top applicants. ESSEC and EDHEC offer similar merit waivers of 15–50% of tuition.',
        coverage: '€14,000–€21,000/year at HEC · 15–50% waivers at ESSEC and EDHEC',
      },
    ],
    visaIntro: 'France\'s student visa process has a distinct structure: it runs through two separate portals — Campus France for academic validation and France-Visas for the legal permit. These must be completed in sequence. Skipping ahead or doing them out of order causes delays that can push back an entire semester.',
    visaNote: 'The Campus France interview is not optional. Every Indian student must attend an in-person Campus France interview at one of its offices in India (New Delhi, Mumbai, Bengaluru, Chennai, Pondicherry, or Kolkata) before a visa can be issued. The interview assesses your academic motivation, language ability, and genuine intention to study in France — it is not a formality.',
    visaSteps: [
      { title: 'University admission and Études en France (EEF) registration', description: 'Once an offer is received from a French institution, create an account on the Campus France India portal and complete the Études en France (EEF) file. This involves uploading academic transcripts, a CV, a statement of purpose, and proof of university admission. A Campus France registration fee of approximately ₹18,500 is paid at this stage. The EEF process generates a unique ID number required for the visa application.' },
      { title: 'Campus France interview', description: 'After the EEF file is processed and validated, an interview appointment is scheduled at the nearest Campus France office. The interview is conducted in English (or French if the program is French-medium) and lasts approximately 20–30 minutes. A strong interview leads to a Campus France validation certificate — the gateway to the visa application.' },
      { title: 'France-Visas online application', description: 'With the Campus France EEF ID and validation certificate in hand, the long-stay visa application (VLS-TS — Visa Long Séjour valant Titre de Séjour) is completed on the France-Visas portal. The application requires personal information, travel details, accommodation proof, financial evidence (minimum €615/month for the duration of stay), academic documents, and travel insurance with minimum €30,000 coverage.' },
      { title: 'VFS Global biometrics appointment', description: 'The in-person biometrics appointment is booked at a VFS Global centre in India (Mumbai, Delhi, Chennai, Kolkata, Hyderabad, Bengaluru). Fingerprints and a photograph are taken, and the full document dossier is submitted. The visa fee is approximately €50. Processing typically takes 15–21 working days under normal conditions, extending to up to 45 days during the peak August–September rush.' },
      { title: 'Arrival and VLS-TS validation', description: 'The VLS-TS visa acts as both the entry visa and the first-year residence permit — but it must be validated online within three months of arriving in France. Validation is done on the French government portal and activates the full residence permit. Without validation, the VLS-TS is technically inactive for residence purposes even if you are physically present in France.' },
      { title: 'CVEC payment and university enrollment', description: 'Before completing formal enrollment at a French university, the CVEC (€105) must be paid online at cvec.etudiant.gouv.fr. This generates an attestation that must be presented to the university administration office. Without the CVEC attestation, enrollment cannot be completed — it applies to every student at every French higher education institution.' },
    ],
    visaWarning: {
      title: 'The APS — what Indian graduates get that most nationalities do not',
      paragraphs: [
        'After completing a master\'s or higher degree at a French institution, graduates are eligible for the APS (Autorisation Provisoire de Séjour) — a post-study residence permit that allows full-time work without employer sponsorship while searching for a job or setting up a business. For most international nationalities, the APS is valid for 12 months. For Indian nationals, thanks to the bilateral agreement between India and France, the APS is renewable for a second 12 months, giving a total of 24 months — double the standard and more generous than any other bilateral arrangement France offers.',
        'During the APS period, graduates can work in any sector, at any employer, full-time or part-time. No job offer is needed to obtain the APS — only the graduation certificate and a valid student visa. Once a qualifying job offer is secured (at a minimum salary of approximately €2,827/month gross in 2026), the APS converts to a full Salarié work permit or the Passeport Talent visa for highly skilled roles.',
      ],
    },
    faqs: [
      { question: 'Is a French degree recognised in India and globally?', answer: 'Yes, fully. Degrees from French universities are recognised by the Association of Indian Universities (AIU). Globally, degrees from HEC Paris, INSEAD, Sciences Po, École Polytechnique, and Paris-Saclay are held in very high regard — particularly in Europe, the Middle East, and Africa. French degrees are especially well-regarded in sectors where French companies are dominant: luxury, aerospace, energy, consulting, and international organisations.' },
      { question: 'What is the difference between a public university and a Grande École?', answer: 'Public universities in France are government-funded, broadly accessible, and charge low fees (under €4,000/year). They are strong in research, sciences, humanities, and law. Grandes Écoles are elite, highly selective institutions — typically engineering schools (Polytechnique, CentraleSupélec) or business schools (HEC, ESSEC, Sciences Po) — with rigorous admissions, higher fees, and extremely powerful alumni networks. Both tracks produce internationally recognised degrees, but they serve different career ambitions and budgets.' },
      { question: 'Can I study in France entirely in English?', answer: 'Yes, at most master\'s programs targeted at international students. Over 1,500 English-taught master\'s programs are available across French universities and Grandes Écoles. HEC, INSEAD, Sciences Po, Paris-Saclay, and Polytechnique all offer flagship programs entirely in English. Undergraduate programs are predominantly French-medium.' },
      { question: 'What IELTS score is required?', answer: 'For most English-taught master\'s programs, an IELTS score of 6.5 overall is the standard requirement. Competitive programs at Sciences Po, HEC, and Polytechnique may require 7.0 or above. Several French institutions also accept TOEFL iBT (typically 90+), PTE Academic, or a Medium of Instruction (MOI) letter from a previous English-medium institution in place of IELTS.' },
      { question: 'When should the process begin for a September 2027 intake?', answer: 'The timeline for France is longer than most students expect. For Grandes Écoles and competitive programs, applications open in October–January for the following September. Eiffel Scholarship nominations have a January deadline. Charpak applications open in October–November. Campus France registration and interview scheduling adds 4–6 weeks, and VFS processing adds another 3–6 weeks during peak periods. Preparation should begin no later than August–September 2026.' },
      { question: 'Is France a good destination for a student who wants to stay in Europe long-term?', answer: 'Yes — and this is France\'s most underappreciated advantage. The APS gives Indian master\'s graduates 24 months to find work without employer sponsorship, one of the most generous post-study windows in Europe. Once employed, the Passeport Talent visa provides a 4-year work and residence permit. French permanent residency becomes available after 5 years of legal residence. France\'s Schengen membership also means a French residence permit allows unrestricted travel across 26 other European countries.' },
    ],
    citiesIntro: 'Paris dominates the mental image of studying in France, and for some programs — HEC, INSEAD, Sciences Po, Polytechnique — Paris or its suburbs are the only option. But for public university programs, regional France offers excellent universities at dramatically lower living costs. The French TGV train network connects Lyon, Bordeaux, Toulouse, and Grenoble to Paris in under two hours.',
    cities: [
      { name: 'Paris', monthlyCost: '€1,200–€1,800/month', description: 'Home to HEC, INSEAD, Sciences Po, Sorbonne, and Paris-Saclay. The cultural, financial, and business capital of France. Career networking, internship access, and cultural life are unmatched. CROUS dormitories are the most affordable accommodation option, but competition is high — apply as early as possible.' },
      { name: 'Lyon', monthlyCost: '€850–€1,100/month', description: 'France\'s second-largest economic centre and arguably the best city for Indian students outside Paris. Large, well-established Indian community, excellent food, and vibrant student life. A 2-hour TGV from Paris. Strongly recommended for students who want quality of life alongside academic quality at a lower cost.' },
      { name: 'Toulouse', monthlyCost: '€800–€1,050/month', description: 'France\'s aerospace capital and home to Airbus\'s global headquarters. For students in aerospace engineering or aeronautics, Toulouse is not just a city — it is the industry. The Institut Supérieur de l\'Aéronautique et de l\'Espace (ISAE-SUPAERO) is among the world\'s top aerospace schools.' },
      { name: 'Bordeaux', monthlyCost: '€800–€1,050/month', description: 'A university city of 60,000+ students with strong programs in business, economics, law, and the social sciences. Architecturally beautiful, affordable by French standards, and well-connected to Paris. The University of Bordeaux has English-taught programs across multiple disciplines.' },
      { name: 'Grenoble', monthlyCost: '€750–€950/month', description: 'A mid-sized city in the French Alps with a strong academic reputation in physics, materials science, computer science, and engineering. Home to Grenoble INP and the Université Grenoble-Alpes. One of the most affordable university cities in France.' },
      { name: 'Strasbourg / Lille / Nantes', monthlyCost: '€750–€950/month', description: 'Each city offers distinct advantages. Strasbourg is the seat of the European Parliament — ideal for European law and politics. Lille is close to Brussels and well-connected to the UK. Nantes is a growing tech and engineering hub. All three have active international student communities.' },
    ],
    language: {
      question: 'Do you need French to study in France?',
      paragraphs: [
        'For study, the honest answer is no — not for most master\'s programs. France now has over 1,500 English-taught master\'s programs, and institutions like Sciences Po, Paris-Saclay, HEC, INSEAD, Polytechnique, and CentraleSupélec run most or all of their graduate programs in English. Indian students can complete a full master\'s degree at a top French institution without speaking a word of French. The Campus France interview can also be conducted in English for English-medium programs.',
        'For work after graduation, the situation changes significantly. The French job market — outside of international companies and tech firms — operates predominantly in French. Graduates with B1 or B2 French proficiency have a substantially stronger job search during their APS period than those without it. French companies, particularly in finance, consulting, and the luxury sector, actively prefer candidates who can communicate with French clients and colleagues.',
      ],
      callout: 'A practical recommendation: Starting French language learning before arriving — even reaching A2 level — makes daily life dramatically easier and signals genuine commitment to the country during the Campus France interview. Alliance Française has centres across India in Mumbai, Delhi, Bengaluru, Chennai, Kolkata, Pune, Hyderabad, and Ahmedabad. Most French universities also provide free French language courses for international students from the first semester.',
    },
  },

  // ─── Germany ─────────────────────────────────────────────────────────────────
  Germany: {
    heroTagline: 'The only major study destination where world-ranked universities charge zero tuition — to any student, from any country. Germany is the most financially rational decision an Indian student can make in 2026.',
    quickStats: [
      { value: '₹0', label: 'Tuition at most public universities' },
      { value: '59,000+', label: 'Indian students enrolled (2025/26)' },
      { value: '18 months', label: 'Post-study job seeker visa' },
      { value: '€11,904', label: 'Blocked account requirement (2026)' },
    ],
    whyTitle: 'The only country where world-class really does mean free',
    whyParagraphs: [
      'Almost every country that markets itself as an affordable study destination has a catch. Germany does not. At most public universities in Germany, there are no tuition fees — for anyone. Not for German students, not for European students, and not for Indian students either. The government made a deliberate policy decision that education should be publicly funded, and that decision has held firm. What students pay at a public German university is a semester contribution of roughly €150–€350 — this covers administration, the student union, and in many cities a free public transport pass for the entire semester. That is it.',
      'The scale of what this means financially is best understood by comparison. A two-year master\'s at a mid-ranked UK university costs a minimum of £30,000 in tuition alone. The same two-year master\'s at RWTH Aachen or TU Berlin — universities that rank higher globally — costs approximately €600 in total semester fees. India is now the largest source country of international students in Germany, with over 59,000 enrolled in winter semester 2025/26 — a 20% jump in a single year.',
      'Beyond cost, Germany has something else that matters enormously for engineering, technology, and science students: direct proximity to the companies that actually build things. Bosch, BMW, Volkswagen, Siemens, SAP, BASF, Airbus — these are active research partners, internship providers, and primary employers of graduates from German technical universities. The pipeline from lecture hall to industry lab is shorter here than almost anywhere else in the world.',
    ],
    whyCallout: 'The TU9: Germany\'s nine elite technical universities — TU Munich, RWTH Aachen, TU Berlin, TU Darmstadt, TU Braunschweig, TU Dresden, Leibniz University Hannover, Karlsruhe Institute of Technology (KIT), and University of Stuttgart — are collectively known as TU9. Think of them as Germany\'s IITs, but globally ranked and tuition-free. For Indian students in engineering, computer science, and applied sciences, a degree from a TU9 institution carries the same weight internationally that an IIT degree carries in India.',
    whyCalloutType: 'teal',
    universitiesIntro: 'Germany has over 400 higher education institutions, but for Indian students the relevant shortlist is considerably smaller — roughly 50 to 60 public universities offering strong English-taught master\'s programs in fields that matter for careers. Below are the institutions that consistently attract the largest numbers of serious Indian applicants.',
    universitiesDetailed: [
      {
        rank: 'QS #28 Globally',
        name: 'Technical University of Munich (TUM)',
        location: 'Munich, Bavaria',
        description: 'Germany\'s highest-ranked university and the only German institution consistently in the global top 30. TUM calls itself an "entrepreneurial university" — its alumni have founded over 60 unicorn companies, and its research partnerships with BMW, Siemens, and MAN are among the deepest of any technical university in the world. Strong in Informatics, Mechanical Engineering, Management & Technology, and Aerospace. Note: TUM introduced tuition fees of €4,000–€6,000/semester for many programs from 2024 onwards — check which specific programs remain fee-exempt.',
        tags: ['Engineering & Informatics', 'Management & Technology', 'Munich location'],
        fees: '€4,000–€6,000/semester for most programs (some remain free)',
        featured: true,
      },
      {
        rank: 'QS #53 Globally in Engineering',
        name: 'RWTH Aachen University',
        location: 'Aachen, North Rhine-Westphalia',
        description: 'Often called the "MIT of Germany," RWTH Aachen is the largest technical university in Germany and the first choice for Indian students in mechanical engineering, automotive engineering, electrical engineering, and production technology. It has the largest Indian student community of any German university. Bosch, Volkswagen, Daimler, and Ford all have active research partnerships here. Zero tuition fees for international students — only the semester contribution of around €300.',
        tags: ['Zero tuition', 'Automotive & mechanical', 'Largest Indian student community'],
        fees: '~€300/semester contribution only — no tuition',
      },
      {
        rank: 'QS #154 Globally',
        name: 'Karlsruhe Institute of Technology (KIT)',
        location: 'Karlsruhe, Baden-Württemberg',
        description: 'A unique institution — KIT is simultaneously a university and a national large-scale research centre within the Helmholtz Association, Germany\'s largest scientific organisation. Consistently top-ranked in Germany for physics, electrical engineering, computer science, and mathematics. Note: KIT is in Baden-Württemberg, which charges non-EU students €1,500/semester — significantly less than UK or US tuition, but worth factoring into the budget.',
        tags: ['Physics & EE', 'Computer science', 'Helmholtz research centre'],
        fees: '€1,500/semester (Baden-Württemberg surcharge for non-EU)',
      },
      {
        rank: 'QS #63 Globally',
        name: 'Ludwig Maximilian University Munich (LMU)',
        location: 'Munich, Bavaria',
        description: 'Germany\'s premier research university for life sciences, medicine, economics, and humanities — and one of the few top-100 European universities that charges zero tuition. Where TUM is engineering-focused and entrepreneurial, LMU is research-driven and broad. LMU\'s economics and statistics faculty is particularly strong, and the university\'s proximity to Munich\'s thriving tech and finance scene provides excellent career pathways. 44 Nobel Prize laureates are associated with LMU.',
        tags: ['Zero tuition', 'Life sciences & economics', '44 Nobel laureates'],
        fees: '~€150/semester contribution only — no tuition',
      },
      {
        rank: 'QS #147 Globally',
        name: 'TU Berlin',
        location: 'Berlin, Germany\'s capital',
        description: 'The technical flagship of Berlin, with strong programs in electrical engineering, computer science, and industrial engineering. Berlin\'s appeal extends well beyond the university — it is Germany\'s startup capital, home to over 3,000 active tech companies, and a city with one of the most vibrant and affordable student lifestyles in Europe. TU Berlin has English-taught master\'s programs across engineering and computer science, zero tuition fees, and one of the most active Indian student associations in Germany.',
        tags: ['Zero tuition', 'CS & electrical engineering', 'Berlin startup ecosystem'],
        fees: '~€310/semester contribution only — no tuition',
      },
      {
        rank: 'QS #86 Globally',
        name: 'Heidelberg University',
        location: 'Heidelberg, Baden-Württemberg',
        description: 'Germany\'s oldest university (founded 1386) and the strongest in medicine, life sciences, biosciences, and the humanities. If your direction is pharmaceutical sciences, biology, or research-focused medicine rather than engineering, Heidelberg is the answer. English-taught master\'s programs exist in international health, molecular biosciences, and computational linguistics. Like KIT, Heidelberg is in Baden-Württemberg and carries the €1,500/semester non-EU surcharge.',
        tags: ['Medicine & life sciences', 'Biosciences', 'Germany\'s oldest university'],
        fees: '€1,500/semester (Baden-Württemberg surcharge for non-EU)',
      },
    ],
    costsIntro: 'The "free education" headline is accurate for most public universities — but there are several other mandatory costs that need to be budgeted for carefully. The blocked account requirement, the APS certificate, health insurance, and semester fees all add up to a meaningful upfront figure even before the first semester begins.',
    costs: [
      { label: 'Tuition — most public universities', amount: '€0 (€150–€350/semester contribution)', note: 'Zero tuition applies to all international students at most public universities in 14 of 16 German states. Exception: Baden-Württemberg charges non-EU students an additional €1,500/semester.' },
      { label: 'Blocked account (Sperrkonto) — mandatory financial proof', amount: '€11,904 (≈ ₹13L) upfront', note: 'Not a fee — it is your own money released at €992/month after arrival. It proves to the German consulate that you can support yourself for the first year.' },
      { label: 'APS certificate — mandatory for Indian students', amount: '₹18,000 one-time', note: 'The APS (Akademische Prüfstelle) verifies that your Indian academic documents are genuine. Every Indian student needs it before any university or visa application in Germany. Takes 4–8 weeks.' },
      { label: 'Accommodation — student dormitory or shared flat (WG)', amount: '€300–€700/month', note: 'Student dormitories average €267/month — the most affordable option. Shared apartments (Wohngemeinschaft or WG) offer more independence. Berlin is cheaper than Munich.' },
      { label: 'Mandatory public health insurance (Krankenversicherung)', amount: '€110–€130/month', note: 'Health insurance is compulsory for all students. The student rate through public insurers like TK or AOK runs €110–€130/month and covers comprehensive healthcare.' },
      { label: 'Food, groceries, and daily expenses', amount: '€200–€350/month', note: 'University canteens (Mensa) serve subsidised meals for €2–€5. Grocery stores like ALDI and LIDL are affordable. Students who cook at home can live very comfortably on €200/month in food costs.' },
    ],
    costCallout: 'Part-time work rights: International students in Germany can work 120 full days or 240 half days per year — roughly 20 hours/week during semester and full-time during breaks. The German minimum wage in 2026 is €12.82/hour. Many Indian students work as Werkstudenten (student workers) at companies in their field, earning €12–€20/hour — valuable both for income and for building German industry connections.',
    scholarshipsIntro: 'Given that tuition is already free at most German universities, scholarships here primarily cover living costs rather than tuition — which makes them genuinely life-changing. The most significant scholarship body in Germany is DAAD (Deutscher Akademischer Austauschdienst), one of the largest scholarship organisations in the world.',
    scholarships: [
      {
        name: 'DAAD Scholarship — German Academic Exchange Service',
        description: 'DAAD is the flagship scholarship for international students in Germany, and India is consistently among the top recipient countries globally. DAAD offers over 30 different programs for Indian students across bachelor\'s, master\'s, and PhD levels. The stipend is €992/month for master\'s students and €1,200–€1,400 for PhD researchers, plus health insurance and travel allowance. Applications typically close in July–October for the following year\'s intake.',
        coverage: '€992–1,400/month stipend + health insurance + travel',
      },
      {
        name: 'Deutschlandstipendium — National Merit Scholarship',
        description: 'A merit-based national scholarship co-funded by the German government and private sponsors, awarded directly by individual German universities. The award is €300/month for a minimum of two semesters and is available to both German and international students. Applied for through your specific university — generally more accessible than DAAD with higher acceptance rates at individual institutions.',
        coverage: '€300/month merit award — applied through individual universities',
      },
      {
        name: 'Heinrich Böll Foundation Scholarship',
        description: 'A politically progressive foundation scholarship focused on master\'s and PhD students who demonstrate strong academic records alongside a commitment to democracy, sustainability, and human rights. The scholarship covers €850/month for master\'s students and €1,200/month for doctoral researchers, plus a travel and material allowance. Well-suited to Indian students in environmental science, political science, law, or sustainability fields.',
        coverage: '€850–1,200/month + material allowance',
      },
      {
        name: 'Friedrich Ebert Foundation Scholarship',
        description: 'Focused on students who combine academic excellence with social commitment and financial need. Covers €850/month for master\'s students, with additional support for research trips and conference attendance. Open to international students studying in Germany in any discipline, with a preference for candidates committed to social justice, labor rights, or public policy.',
        coverage: '€850/month + research and conference support',
      },
      {
        name: 'University Research Assistantships (HiWi positions)',
        description: 'Not a scholarship in the traditional sense, but one of the most valuable and accessible forms of financial support in Germany. Most universities offer part-time paid research or teaching assistant positions (HiWi roles) to enrolled students — no separate competitive application, just a conversation with a professor. HiWi positions typically pay €12–€16/hour for 8–15 hours per week. They also build relationships with professors and frequently convert into PhD opportunities.',
        coverage: '€12–16/hour part-time paid research work — applied through professors',
      },
    ],
    visaIntro: 'Germany\'s student visa process is more sequenced than most countries — each step must be completed in the correct order before the next one can begin. The total timeline from starting the process to having a visa in hand is realistically 8–14 weeks under ideal conditions.',
    visaNote: 'Critical timing: The APS certificate takes 4–8 weeks and must be done before a visa appointment can be booked. The blocked account takes 1–2 weeks to set up. Add VFS appointment waiting times and visa processing itself — the entire process takes a minimum of 10–14 weeks. Starting late is the most common reason Indian students miss their intake semester. The process must begin at least 4–5 months before the course start date.',
    visaSteps: [
      { title: 'The APS certificate — the mandatory first step for every Indian student', description: 'The APS (Akademische Prüfstelle) is an academic verification body under the German Embassy in India. Every Indian student applying to study in Germany must obtain an APS certificate confirming their academic documents are genuine. Without it, neither German universities nor the German consulate will accept any application. The process involves submitting original academic documents to APS India in New Delhi, along with ₹18,000 in fees. Processing takes 4–8 weeks. A DigiLocker fast-track option takes 3–4 weeks. The certificate is valid indefinitely once issued.' },
      { title: 'University application through Uni-Assist', description: 'Most German public universities receive applications from international students through a centralised portal called Uni-Assist. Each university and program has its own academic requirements — typically a minimum CGPA of 7.5/10. Strong programs at TUM, RWTH Aachen, and TU Berlin regularly receive 500–1,000 applications for 30–60 seats. A carefully tailored letter of motivation is the single most influential factor in admission decisions at German universities.' },
      { title: 'Opening the blocked account (Sperrkonto)', description: 'The blocked account holds €11,904 — the German government\'s minimum financial proof for a student visa in 2026. This is the student\'s own money, not a fee. Once in Germany, the account releases €992/month as living expenses. The most commonly used providers are Fintiba, Coracle, and Expatrio — all fully online, processing within 3–5 working days. The full amount should be transferred in a single wire transfer.' },
      { title: 'Consular Services Portal (CSP) pre-registration', description: 'Germany introduced a mandatory digital pre-registration step through the Consular Services Portal (digital.diplo.de/visa) before a physical VFS appointment can be booked. All documents — admission letter, APS certificate, blocked account confirmation, health insurance proof, and motivation letter — are uploaded here first. Once the pre-registration is accepted, a VFS appointment slot becomes bookable.' },
      { title: 'VFS biometrics appointment', description: 'The in-person biometrics appointment takes place at a VFS Global centre in India (Mumbai, Delhi, Chennai, Kolkata, Hyderabad, Bengaluru, and Pune). Fingerprints and a photograph are taken, and original documents are verified. The visa fee is €75, paid at the appointment. Processing after the biometrics appointment typically takes 6–8 weeks.' },
      { title: 'Arrival and the Anmeldung', description: 'Within two weeks of arriving in Germany, residents must complete an Anmeldung — a mandatory address registration at the local Bürgeramt (citizens\' office). This is required before opening a German bank account, enrolling with a health insurer, or completing university registration. Within 90 days of arrival, the student visa is converted to a full residence permit at the local Ausländerbehörde — the university\'s international office guides this process.' },
    ],
    visaWarning: {
      title: 'The fastest PR pathway in Europe — what graduation in Germany unlocks',
      paragraphs: [
        'After graduating from a German university, an 18-month post-study job seeker visa is available with no employer sponsorship required. During those 18 months, full-time work in any job is permitted while searching for a role in the field of study. Once a qualified job offer is secured, the EU Blue Card — Germany\'s skilled worker visa — can be obtained. The salary thresholds for the EU Blue Card in 2026 are €50,700/year for standard occupations and €45,934/year for shortage occupations including engineering, IT, and healthcare.',
        'What makes this remarkable is what happens after the EU Blue Card: permanent residency (Niederlassungserlaubnis) in just 21 months with B1 German language skills, or 33 months without. No other major study destination offers permanent residency this quickly. A student who graduates in 2027, gets a job, and learns basic German could have German permanent residency before 2030. Germany is not just a place to study — it is one of the most direct pathways to long-term European settlement available to Indian citizens today.',
      ],
    },
    faqs: [
      { question: 'Is education in Germany truly free — even for Indian students?', answer: 'Yes, at most public universities in Germany. The policy of no tuition fees applies to all students regardless of nationality, including Indian students. What is paid is a semester contribution of €150–€350 every six months, which covers administrative costs and in many cities includes a free public transport pass. The exceptions are the state of Baden-Württemberg (KIT, Heidelberg), which charges non-EU students an additional €1,500/semester, and TU Munich, which introduced fees of €4,000–€6,000/semester for most programs from 2024.' },
      { question: 'What CGPA is needed to get into a German university?', answer: 'Requirements vary by program and institution, but a CGPA of 7.5/10 or above is the general threshold for competitive programs at TU9 universities. Programs in computer science and electrical engineering at RWTH Aachen and TU Munich can effectively require 8.0–8.5 CGPA given the competition. Many programs at reputable universities are accessible at 7.0–7.5 CGPA if the motivation letter is strong and the academic background is relevant.' },
      { question: 'Is a German degree recognised in India?', answer: 'Yes, fully. Degrees from German public universities are recognised by the Association of Indian Universities (AIU). Globally, degrees from TU Munich, RWTH Aachen, LMU Munich, and KIT carry significant weight. In engineering and technology specifically, a German degree is often regarded more highly by Indian employers than a degree from a mid-ranked US or UK institution.' },
      { question: 'How important is the motivation letter for admission?', answer: 'Extremely important — more so than in most other countries. German university admissions rely heavily on the Motivationsschreiben because CGPA and IELTS scores alone do not differentiate between hundreds of similarly qualified Indian applicants. A generic motivation letter is the single most common reason Indian students receive rejections from competitive programs. A strong motivation letter clearly explains the academic background, why the specific program was chosen, how it connects to past work and future goals, and why Germany specifically.' },
      { question: 'What are the main intake periods in Germany?', answer: 'German universities have two intake periods. The winter semester begins in October and is the main intake — the vast majority of master\'s programs accept students here. Application deadlines for winter semester are typically in May–July. The summer semester begins in April and is a secondary intake — fewer programs are available, but it can suit students who miss the winter deadline.' },
      { question: 'Can a student bring family to Germany?', answer: 'Yes, with conditions. Spouses and dependent children can join on a family reunification visa (Familiennachzug), but the student must demonstrate sufficient financial means beyond the standard blocked account amount. Spouses accompanying a student to Germany are permitted to work without restrictions — one of the more generous policies for dependants of international students among major European study destinations.' },
    ],
    citiesIntro: 'Germany is a federal country and the character, cost, and career opportunities of each city differ meaningfully. Unlike the UK, where London dominates everything, Germany\'s top universities are distributed across the country, and choosing a city outside the major hubs can significantly reduce living costs without sacrificing academic quality.',
    cities: [
      { name: 'Munich', monthlyCost: '€1,100–€1,500/month', description: 'Germany\'s most expensive city and home to TUM and LMU — two of the country\'s finest universities. The concentration of engineering, automotive, and aerospace companies (BMW, MAN, Airbus) makes Munich the strongest city for career outcomes in these fields. The quality of life is exceptional.' },
      { name: 'Berlin', monthlyCost: '€800–€1,100/month', description: 'Germany\'s capital and startup hub, home to TU Berlin, Humboldt University, and Free University. A uniquely vibrant student lifestyle — culturally rich, internationally diverse, and significantly cheaper than Munich. The tech startup scene rivals any European city. Indian students in CS, data science, and economics find strong internship and job opportunities here.' },
      { name: 'Aachen', monthlyCost: '€700–€950/month', description: 'A compact university city built around RWTH Aachen. The largest Indian student community in Germany lives here. Aachen is affordable, walkable, and extraordinarily well-connected to industry — sitting at the borders of Belgium and the Netherlands, with easy train access to Cologne, Düsseldorf, and Brussels.' },
      { name: 'Stuttgart', monthlyCost: '€900–€1,200/month', description: 'Home to the University of Stuttgart and a short distance from KIT in Karlsruhe. Stuttgart is the centre of Germany\'s automotive industry — Porsche and Mercedes-Benz are headquartered here, Bosch\'s global HQ is nearby. For students in mechanical and automotive engineering, the career pipeline is direct and well-established. Baden-Württemberg\'s non-EU tuition surcharge applies here.' },
      { name: 'Hamburg / Cologne / Frankfurt', monthlyCost: '€850–€1,150/month', description: 'Each city hosts strong universities and distinct industry clusters. Hamburg for logistics, aerospace, and maritime. Frankfurt for banking, finance, and European business (home of the ECB). Cologne for media, business, and applied sciences. Zero tuition at public universities in these states for international students.' },
      { name: 'Dresden / Darmstadt / Hannover', monthlyCost: '€650–€850/month', description: 'The most affordable major university cities in Germany. TU Dresden is strong in engineering and life sciences. TU Darmstadt is a European leader in cybersecurity and IT. Leibniz University Hannover has strong programs in mechanical engineering and natural sciences. All three offer world-class education at dramatically lower living costs than Munich or Berlin.' },
    ],
    language: {
      question: 'Do you need German to study in Germany?',
      paragraphs: [
        'For master\'s programs, the honest answer is: it depends on what you are studying, but for most STEM and business programs, English is entirely sufficient for the degree itself. The majority of English-taught master\'s programs at RWTH Aachen, TU Berlin, TU Munich, and LMU Munich are conducted entirely in English — lectures, seminars, thesis supervision, and examinations. Around 2,000 English-taught programs now exist across German universities.',
        'For daily life, German helps significantly — particularly outside of the large cities. Aachen, Darmstadt, and Dresden have smaller international communities than Berlin, and while most young Germans speak English, navigating official processes (apartment hunting, doctor visits, government offices) is considerably easier with basic German.',
        'For long-term career prospects in Germany, German language is genuinely important. Most German companies operate internally in German, and candidates with professional German proficiency are preferred over equivalent candidates without it. Students who invest in reaching B1 level German during their studies are in a dramatically stronger position when job hunting — and B1 German cuts the pathway to permanent residency from 33 months to 21 months.',
      ],
      callout: 'Practical advice: Goethe-Institut offers German courses across India — in Mumbai, Delhi, Chennai, Kolkata, Bengaluru, and Pune. Even A2 level German — roughly 100–150 hours of study — is enough to navigate daily life comfortably. Most German universities also offer free or subsidised German language courses to enrolled international students from semester one.',
    },
  },

  // ─── Ireland ─────────────────────────────────────────────────────────────────
  Ireland: {
    heroTagline: 'The only English-speaking country in the European Union — with Google, Apple, Meta, and Microsoft on campus, a clean 24-month post-study work pathway for master\'s graduates, and a student experience that feels genuinely personal.',
    quickStats: [
      { value: '€13K–€35K', label: 'Tuition per year' },
      { value: '24 months', label: 'Post-study work for master\'s' },
      { value: 'Stamp 2', label: 'Student visa type' },
      { value: '4–8 weeks', label: 'Visa processing time' },
    ],
    whyTitle: 'The only EU country where English is the working language of everything',
    whyParagraphs: [
      'Ireland is the only English-speaking country in the European Union. That single fact carries enormous weight for Indian students — you get the comfort of studying and living in English while gaining access to EU career networks, EU-based employers, and the right to work across Europe after graduation in ways that are not available after studying in the UK.',
      'The bigger story, though, is corporate geography. Ireland is home to the European headquarters of Google, Apple, Meta, Microsoft, LinkedIn, Pfizer, Novartis, and over a thousand other multinational corporations. These companies are not just present in Ireland — they hire actively from Irish universities. A student graduating from University College Dublin or Trinity College Dublin does not need to relocate to Silicon Valley or London to access the world\'s most recognisable employers. Those employers are already on campus, running graduate programs, and actively recruiting.',
      'Ireland is also small enough that the student experience feels genuinely personal. Class sizes are smaller than most UK or Australian universities. Faculty are accessible. Indian student associations are active and well-established at every major institution. The culture is warm toward international students in a way that larger, more anonymous cities sometimes are not.',
    ],
    whyCallout: 'One thing worth knowing: Ireland\'s cost of living — particularly in Dublin — has risen sharply in recent years. Accommodation is the single biggest pressure point. Students who plan their housing early, target university-managed accommodation, or base themselves in Cork, Galway, or Limerick rather than Dublin will find the overall budget considerably more manageable.',
    whyCalloutType: 'default',
    universitiesIntro: 'Ireland has eight universities that feature in the QS World University Rankings 2026. The institutions below are the ones Indian students most seriously consider, with honest notes on what each one actually offers.',
    universitiesDetailed: [
      {
        rank: 'QS #75 Globally',
        name: 'Trinity College Dublin (TCD)',
        location: 'Dublin city centre',
        description: 'Ireland\'s oldest and most prestigious university, founded in 1592. Trinity\'s campus sits in the heart of Dublin — one of the most beautiful university campuses in Europe — and its degrees carry enormous weight with employers internationally. Particularly strong in computer science, law, pharmaceutical sciences, and the humanities. The Global Excellence Scholarship is aimed specifically at high-achieving non-EU students and covers partial tuition.',
        tags: ['Finance & law', 'Computer science', 'Global Excellence Scholarship'],
        fees: '€16,000 – €35,000/year',
        featured: true,
      },
      {
        rank: 'QS #118 Globally',
        name: 'University College Dublin (UCD)',
        location: 'Belfield, Dublin',
        description: 'Ireland\'s largest university and the one most actively marketed as "Ireland\'s Global University." UCD\'s Michael Smurfit Graduate Business School is the strongest business school in Ireland and one of the better ones in Europe. UCD\'s V.V. Giri Global Scholarship offers 50–100% tuition waivers specifically for Indian students — one of the most India-targeted funding awards at any Irish institution. Rolling admissions mean early applications genuinely get better outcomes here.',
        tags: ['Business & finance', 'Data analytics', 'V.V. Giri India Scholarship'],
        fees: '€14,000 – €32,000/year',
        featured: true,
      },
      {
        rank: 'QS #246 Globally',
        name: 'University College Cork (UCC)',
        location: 'Cork',
        description: 'Ireland\'s second city is significantly more affordable than Dublin, and UCC is a genuinely strong research university with particular depth in pharmaceutical sciences, food science, engineering, and law. Cork is home to a growing pharmaceutical manufacturing cluster — Pfizer, Johnson & Johnson, and Eli Lilly all have major operations in the Cork region — which creates a direct pipeline for students in pharma and life sciences.',
        tags: ['Pharmaceutical sciences', 'Engineering', 'Best value top Irish university'],
        fees: '€13,500 – €27,000/year',
      },
      {
        rank: 'QS #421 Globally',
        name: 'Dublin City University (DCU)',
        location: 'Glasnevin, Dublin',
        description: 'DCU is Ireland\'s most industry-connected university — it has active partnerships with tech companies in Dublin\'s Silicon Docks, including Google, Facebook, and Workday. Programs in data analytics, engineering, and computing have direct employer links built into the curriculum. DCU\'s international student scholarships run €2,000–€4,000 and are assessed automatically with the admissions application.',
        tags: ['Data analytics', 'Computing', 'Dublin tech sector links'],
        fees: '€13,000 – €22,000/year',
      },
      {
        rank: 'QS #273 Globally',
        name: 'University of Galway',
        location: 'Galway',
        description: 'Galway is one of the most liveable student cities in Ireland — considerably cheaper than Dublin, culturally vibrant, and home to a strong Indian student community. The University of Galway has invested heavily in engineering, data science, and biomedical programs, well-aligned with Ireland\'s Critical Skills Occupation List. International scholarships of €2,000–€4,000 are available based on academic merit.',
        tags: ['Biomedical & engineering', 'Affordable student city', 'Merit scholarships'],
        fees: '€13,500 – €28,000/year',
      },
      {
        rank: 'QS Ranked',
        name: 'University of Limerick & Maynooth University',
        location: 'Limerick and Maynooth',
        description: 'Both universities offer strong, targeted programs at significantly lower tuition than the Dublin institutions. The University of Limerick\'s Jim Kemmy India Scholarships are specifically designed for Indian applicants. Limerick has a growing tech and life sciences industry presence. Maynooth, located 25km from Dublin, is strong in computer science, humanities, and social sciences.',
        tags: ['Jim Kemmy India Scholarship', 'Tech & life sciences', 'Most affordable'],
        fees: '€11,000 – €22,000/year',
      },
    ],
    costsIntro: 'Ireland is not a budget destination. The total annual cost — tuition plus living expenses — sits between €24,000 and €48,000 per year depending on the university and city. Dublin is one of Europe\'s most expensive cities; students who choose Cork, Galway, or Limerick typically save €300–€500 per month in accommodation alone without sacrificing academic quality.',
    costs: [
      { label: 'Tuition — postgraduate (taught)', amount: '€13,000 – €35,000/year', note: 'Varies significantly by institution. Trinity and UCD command the highest fees; UCC, DCU, Galway, and UL are meaningfully lower.' },
      { label: 'Tuition — undergraduate', amount: '€9,000 – €25,000/year', note: 'Includes the student contribution levy of €500–€3,000/year on top of program tuition.' },
      { label: 'Accommodation — Dublin (shared flat)', amount: '€700 – €1,100/month', note: 'Dublin accommodation is the single biggest cost pressure. University-managed accommodation is significantly cheaper but oversubscribed — apply immediately after receiving an offer.' },
      { label: 'Accommodation — Cork, Galway, Limerick', amount: '€500 – €800/month', note: 'Regional cities are meaningfully more affordable. Students in these cities consistently report lower total costs without compromising academic quality.' },
      { label: 'Food and daily expenses', amount: '€400 – €600/month', note: 'University canteens offer affordable meals. Indian grocery stores are available in Dublin, Cork, and Galway. Cooking at home is the most budget-friendly approach.' },
      { label: 'Visa fee (D Study Visa) + health insurance', amount: '€60–€100 visa + €500–€700/year insurance', note: 'Visa fee is €60 single entry / €100 multiple entry. Health insurance is mandatory. Financial proof required: €10,000 for living costs + €6,000 tuition paid upfront.' },
    ],
    costCallout: 'Part-time work rights: Students on a D Study Visa (Stamp 2) can work up to 20 hours per week during term time and 40 hours per week during official holiday periods. The minimum wage in Ireland in 2026 is €13.50 per hour. Many Indian students work in tech support, hospitality, and retail roles — with part-time income covering a meaningful portion of living costs.',
    scholarshipsIntro: 'Ireland\'s scholarship landscape is genuinely accessible for strong Indian applicants — and competition is lower than in the UK or Australia simply because fewer Indian students are currently targeting Ireland as a first choice.',
    scholarships: [
      {
        name: 'Government of Ireland International Education Scholarship (GOI-IES)',
        description: 'The most prestigious Irish government scholarship for international students. Approximately 60 scholarships are awarded globally per year for full-time master\'s or PhD study at participating Irish universities. The GOI-IES covers full tuition plus a €10,000 annual stipend for one academic year. Indian students are among the most successful applicants historically. Applications typically open in late January each year and close in early March for September intake.',
        coverage: 'Full tuition waiver + €10,000 living stipend',
      },
      {
        name: 'UCD V.V. Giri Global Scholarship — India Specific',
        description: 'One of the most India-targeted scholarships at any Irish university. Named after V.V. Giri, former President of India, this scholarship covers 50–100% of tuition fees for Indian postgraduate students at UCD. It is assessed as part of the admissions process — no separate application form is required. Strong academic performance (typically 70%+ at undergraduate level) is the primary criterion.',
        coverage: '50–100% tuition waiver, assessed automatically at admission',
      },
      {
        name: 'Trinity Global Excellence Scholarship',
        description: 'Trinity College Dublin\'s flagship merit scholarship for high-achieving non-EU postgraduate students. Covers partial tuition — typically €5,000–€10,000 per year — and is awarded based on academic merit and application quality. Assessed automatically as part of the admissions process at TCD. Even a partial scholarship makes a meaningful difference given Trinity\'s standing as Ireland\'s top-ranked university.',
        coverage: '€5,000–€10,000 tuition contribution',
      },
      {
        name: 'University Merit Scholarships — UCC, DCU, Galway, Maynooth',
        description: 'Each of these universities offers merit-based international scholarships in the range of €2,000–€7,000, assessed automatically alongside the admissions application. No separate form is required at most institutions. Applying early in the admissions cycle significantly improves scholarship consideration — scholarship pools are allocated on a rolling basis.',
        coverage: '€2,000–€7,000 tuition reduction, varies by institution',
      },
      {
        name: 'University of Limerick Jim Kemmy India Scholarships',
        description: 'A scholarship specifically designed for Indian students at the University of Limerick — one of very few named India scholarships at an Irish university outside Dublin. Covers partial tuition and is assessed with the admissions application. Limerick\'s growing tech and pharma industry presence makes UL a strategically underrated choice for students in these fields.',
        coverage: 'Partial tuition — amount varies by year',
      },
    ],
    visaIntro: 'Indian students studying full-time in Ireland for courses longer than 90 days require a D Study Visa (long-stay). The visa is processed before departure in India through VFS Global and gives an initial Stamp 2 immigration permission upon arrival.',
    visaNote: 'Critical timing note: Students applying for a September intake who have not secured their VFS appointment by late April risk their application being processed after the course start date. The Irish Embassy does not hold applications based on course start dates. The process should begin no later than three months before departure.',
    visaSteps: [
      { title: 'University offer and ILEP verification', description: 'Before anything else can proceed, the course must be confirmed at an institution listed on the Interim List of Eligible Programmes (ILEP) — the Irish government\'s approved list of recognised institutions. Not every college in Ireland qualifies. Private colleges in particular need to be verified against the current ILEP list. Without ILEP status, the visa cannot be granted regardless of how strong the application is.' },
      { title: 'Tuition fee payment', description: 'At least €6,000 must be paid toward the first year\'s tuition before the visa can be submitted. This must be evidenced by an official receipt or bank transfer confirmation from the institution. If the total tuition for the course is less than €6,000, the full amount must be paid upfront. This is a firm requirement — partial payment below €6,000 will result in visa refusal regardless of other factors.' },
      { title: 'Financial proof', description: 'In addition to the tuition payment, €10,000 in liquid funds must be demonstrated as available for living expenses for the first year. This can be in the student\'s own account or a parent\'s account with a signed sponsorship letter and 6 months of bank statements. Scholarship letters from GOI-IES or university awards also satisfy this requirement in full.' },
      { title: 'AVATS online application', description: 'The visa application is completed on the Automated Visa Application and Tracking System (AVATS) portal — the Irish government\'s online visa system. Once submitted, the system generates a Summary Application Form with a unique transaction number. This form must be printed, signed, and dated — it cannot be submitted digitally and must accompany the physical document package.' },
      { title: 'Document preparation and VFS Global appointment', description: 'The physical appointment takes place at a VFS Global centre in India (Mumbai, Delhi, Chennai, Kolkata, Hyderabad, Bengaluru). The full document package includes the signed AVATS Summary Form, valid passport (minimum 12 months validity beyond arrival date), offer letter confirming the course is full-time, evidence of €6,000 tuition payment, proof of €10,000 in available funds, 6 months of bank statements, health insurance confirmation, and a personal statement of purpose. The visa fee is €60 or €100. Processing takes 4–8 weeks.' },
      { title: 'Arrival and IRP registration', description: 'Within 90 days of arriving in Ireland, students must register with the Irish Immigration Service and obtain an Irish Residence Permit (IRP) under Stamp 2. This is the official proof of immigration status throughout the study period. Registration is done at the local immigration office (Burgh Quay Registration Office in Dublin, or the Garda National Immigration Bureau in other cities). The IRP card is needed for opening a bank account, accessing healthcare, and confirming work eligibility with employers.' },
    ],
    visaWarning: {
      title: 'After Graduation — The Stamp 1G Pathway',
      paragraphs: [
        'The Stamp 1G — officially the Third Level Graduate Programme — is Ireland\'s post-study work permission and one of the most straightforward graduate stay-back schemes in Europe. Honours bachelor\'s graduates receive 12 months; master\'s and PhD graduates receive 24 months (12 + 12 renewal). During the Stamp 1G period, graduates can work 40 hours per week for any employer in any sector, with no restriction on role, industry, or salary — and no employer sponsorship required.',
        'The next step after Stamp 1G is typically the Critical Skills Employment Permit, which requires a qualifying job offer at a minimum salary of €40,904/year. After 21 months on the Critical Skills Permit, Stamp 4 becomes available — employer-free residency that allows graduates to work for any company or start a business. Ireland\'s Critical Skills Occupations List is heavily weighted toward technology, data science, engineering, pharmaceutical sciences, and finance — exactly the fields where Irish universities are strongest and where Indian graduates perform best.',
      ],
    },
    faqs: [
      { question: 'Is an Irish degree recognised in India and internationally?', answer: 'Yes, fully. Degrees from Irish universities are recognised by the Association of Indian Universities (AIU). Internationally, degrees from Trinity College Dublin and UCD are well-regarded by employers across Europe, North America, and the Gulf. The multinational employer base in Ireland also means that Irish graduates routinely have CVs that reflect experience at globally recognised companies — Google, Pfizer, Accenture — which carries weight back in India too.' },
      { question: 'How competitive is admission for Indian applicants?', answer: 'It varies significantly. Trinity and UCD are genuinely competitive for strong programs — a CGPA of 7.0–8.0 out of 10 is typically expected for postgraduate admission. UCC, DCU, University of Galway, and UL are more accessible, with requirements starting around 5.5–6.5 CGPA. A strong statement of purpose and relevant work experience carry significant weight in Irish admissions decisions.' },
      { question: 'What are the two intake periods?', answer: 'September is the main intake and gives access to the full range of programs, all scholarships including GOI-IES, and the strongest cohort of classmates. January intake is available at several universities (UCC, DCU, Maynooth, University of Galway, UL) at the postgraduate level but offers fewer programs and no access to GOI-IES funding. For students where scholarship eligibility matters, September intake is the right target.' },
      { question: 'Can family members come to Ireland?', answer: 'Under 2026 rules, only postgraduate students studying at Level 9 or above (master\'s or PhD) can sponsor dependants — spouses or children — on a dependent visa. Students on undergraduate programs cannot bring dependants. Spouses of qualifying postgraduate students can apply for permission to work in Ireland alongside the student\'s visa, though this is processed separately.' },
      { question: 'How does Ireland compare to the UK for Indian students?', answer: 'UK tuition has risen significantly — Russell Group master\'s fees now typically run £20,000–£38,000. Irish tuition is lower overall. The UK\'s Graduate Route is being reduced to 18 months from January 2027 for bachelor\'s and master\'s graduates. Ireland\'s Stamp 1G gives master\'s graduates 24 months. Ireland is in the EU; the UK is not — which means an Irish degree opens more doors for European employment. Both are strong choices; the right one depends on the specific program, career direction, and budget.' },
      { question: 'What is the food situation for vegetarian and Indian students?', answer: 'Ireland\'s major cities — Dublin, Cork, Galway — all have Indian restaurants, Indian grocery stores, and growing South Asian communities. Vegetarian options are far more widely available in Ireland than in most of continental Europe. University canteens typically offer vegetarian options as a standard. Indian students living in Dublin in particular report finding familiar ingredients and cuisines with little difficulty.' },
    ],
    language: {
      question: 'Do you need Irish or any other language?',
      paragraphs: [
        'No. Ireland\'s official languages are Irish (Gaeilge) and English, but English is the working language of every university, every employer, and daily life across the country. There is no language test required beyond the standard English proficiency requirement for university admission — typically IELTS 6.5 for most programs, 7.0 for business and law programs at TCD and UCD.',
        'This makes Ireland uniquely accessible for Indian students — the only European country where the language of education, work, and daily life is already the language most Indian students are most comfortable in.',
      ],
    },
  },

  // ─── Italy ───────────────────────────────────────────────────────────────────
  Italy: {
    heroTagline: 'Italy\'s income-based tuition system means most Indian students pay €900–€3,000/year at public universities — and those who qualify for the DSU regional scholarship pay nothing at all, while receiving free accommodation, free meals, and a cash stipend of up to €7,200 per year.',
    quickStats: [
      { value: '€900–€4,000', label: 'Public university tuition/year' },
      { value: '600+', label: 'English-taught programs' },
      { value: '12 months', label: 'Post-study work permit' },
      { value: 'Up to €7,200', label: 'DSU annual stipend' },
    ],
    whyTitle: 'The most misunderstood study destination in Europe',
    whyParagraphs: [
      'Italy is the most misunderstood study destination in Europe. Most Indian students think of it as a country for art history, food, and fashion — not engineering, data science, or medical degrees. That is precisely the gap that makes it one of the most strategically underrated choices a well-informed Indian student can make in 2026.',
      'The financial case alone is extraordinary. Italy\'s public universities use an income-based fee system called ISEE — which means your tuition is not a fixed number but is calculated based on your family\'s income. Most Indian middle-class families fall into the lower ISEE brackets, which translates to annual tuition of €900–€3,000 at universities that rank in the global top 250. For context, the same calibre of university in the UK would cost £20,000–£35,000 per year. On top of this, Italy\'s DSU regional scholarship scheme covers tuition entirely, provides free hostel accommodation, free meals at university canteens, and pays a cash stipend of up to €7,200 per year.',
      'The academic case is equally strong for specific fields. Politecnico di Milano is Italy\'s highest-ranked university and the strongest architecture, design, and engineering school in Southern Europe. Bocconi University in Milan is one of the top five business schools in Europe. The University of Bologna — founded in 1088 and the oldest university in the world — has research strengths in law, sciences, and economics. For medicine, Italy offers English-taught MBBS-equivalent degrees through the IMAT entrance exam pathway at public universities, at tuition fees that are a fraction of what the UK, Australia, or Eastern Europe charges.',
    ],
    whyCallout: 'One thing worth knowing upfront: Italy\'s visa and enrollment process is more bureaucratically layered than almost any other country on this list. The Universitaly pre-enrollment portal, the Dichiarazione di Valore, the ISEE Parificato for scholarship applications, and the Permesso di Soggiorno within 8 days of arrival — each of these requires specific documents, correct sequencing, and time. Students who start early and prepare meticulously sail through. Students who start late or miss steps can find themselves with a delayed visa or missed enrollment. This is the trade-off for one of the most financially generous education systems in Europe.',
    whyCalloutType: 'default',
    universitiesIntro: 'Italy has over 90 accredited universities. The institutions below are the ones most relevant to Indian students, with honest notes on what each actually offers.',
    universitiesDetailed: [
      {
        rank: 'QS #123 Globally — Top 50 in Engineering & Design',
        name: 'Politecnico di Milano (PoliMi)',
        location: 'Milan',
        description: 'Italy\'s highest-ranked university overall and the undisputed leader in engineering, architecture, industrial design, and technology management. PoliMi offers over 30 English-taught master\'s programs covering computer science, aerospace, mechanical engineering, product design, architecture, and management. Industry partnerships with Ferrari, Pirelli, ENI, and Leonardo Finmeccanica create direct pathways into Italy\'s engineering sector.',
        tags: ['Engineering & architecture', 'Product design & CS', 'DSU scholarship eligible'],
        fees: '€3,898/year flat (income-based waivers available)',
        featured: true,
      },
      {
        rank: 'QS #7 in Business Globally',
        name: 'Bocconi University',
        location: 'Milan',
        description: 'One of the most prestigious business schools in the world and the only Italian university that consistently competes at the level of LSE and HEC Paris. Bocconi\'s programs in economics, management, finance, and law attract students from over 100 countries. Its alumni network spans the ECB, McKinsey, Goldman Sachs, and the senior leadership of European corporations. Admission is genuinely competitive — GMAT or GRE scores, a strong academic record, and a well-crafted application are all essential.',
        tags: ['Finance & economics', 'Management & law', 'Merit scholarships up to 50%'],
        fees: '€14,000–€16,000/year (bachelor\'s) · €16,000–€19,000/year (master\'s)',
        featured: true,
      },
      {
        rank: 'QS #250 Globally',
        name: 'Politecnico di Torino (PoliTO)',
        location: 'Turin',
        description: 'Italy\'s second technical university and virtually identical in curriculum and quality to PoliMi for engineering and applied sciences — but located in Turin, which is significantly more affordable to live in than Milan. Strong in mechanical and automotive engineering (Fiat and Ferrari connections), aerospace, civil and environmental engineering, and ICT. Entirely English-taught master\'s programs are available in most departments. The DSU Piemonte scholarship is one of the most accessible regional scholarship schemes in Italy.',
        tags: ['Mechanical & automotive', 'Aerospace engineering', 'DSU scholarship eligible'],
        fees: '€3,898/year flat',
      },
      {
        rank: 'QS #154 Globally',
        name: 'University of Bologna (Unibo)',
        location: 'Bologna',
        description: 'The oldest university in the world, founded in 1088. Bologna is a comprehensive research university with particular strength in law, economics, political science, engineering, and pharmaceutical sciences. It has over 100 English-taught degree programs across its campuses. Bologna is a compact, affordable university city — walkable and entirely shaped around student life. ISEE-based tuition means most Indian students pay in the lower brackets.',
        tags: ['Law & economics', 'Pharmaceutical sciences', 'Public university fees'],
        fees: '€900 – €2,800/year (ISEE income-based)',
      },
      {
        rank: 'QS #171 Globally',
        name: 'Sapienza University of Rome',
        location: 'Rome',
        description: 'The largest university in Europe by enrollment — over 110,000 students — and one of Italy\'s most research-productive institutions. Sapienza is strong in medicine, engineering, law, and the humanities. English-taught programs have expanded significantly in recent years, with over 50 master\'s degrees now offered in English. Living costs in Rome are lower than in Milan, though higher than Bologna or Turin.',
        tags: ['Medicine & law', 'Engineering', 'Rome location'],
        fees: '€900 – €3,000/year (ISEE income-based)',
      },
      {
        rank: 'QS ranked #232, #331, #551 respectively',
        name: 'University of Padua / Milan (La Statale) / Florence',
        location: 'Padua, Milan, Florence',
        description: 'Each represents a strong, affordable option in specific fields. Padua is one of Italy\'s oldest and most respected universities, with particular strength in medicine, pharmacy, and engineering. The University of Milan (La Statale) is strong in science, economics, and law. Florence is the natural destination for students in art history, restoration, and design-adjacent fields. All three use ISEE-based tuition and offer DSU scholarship access.',
        tags: ['ISEE income-based fees', 'DSU scholarship eligible', 'Medicine & design'],
        fees: '€900 – €3,500/year (ISEE income-based)',
      },
    ],
    costsIntro: 'Italy is one of the most affordable serious study destinations in Europe — but only if you understand how the cost system works. The headline numbers look almost too good. The reality is that the total cost depends heavily on whether you qualify for income-based tuition reductions and the DSU scholarship.',
    costs: [
      { label: 'Tuition — public universities (ISEE tier 1, low income)', amount: '€156 – €900/year', note: 'The ISEE is calculated based on your family\'s income — most Indian middle-class families qualify for lower tiers. An ISEE Parificato must be obtained in Italy through a CAF office using apostilled Indian income and property documents.' },
      { label: 'Tuition — public universities (ISEE tier 2–4, mid income)', amount: '€900 – €3,500/year', note: 'Still a fraction of equivalent programs in the UK or Australia. Politecnico di Milano and Torino charge a flat fee of €3,898/year regardless of ISEE — but DSU waivers are available.' },
      { label: 'Tuition — Bocconi (private, not income-based)', amount: '€14,000 – €19,000/year', note: 'Bocconi uses a fixed private fee structure. Merit scholarships covering up to 50% of tuition are available and assessed during the admissions process.' },
      { label: 'Accommodation — university dormitory (DSU-funded)', amount: 'Free with DSU / €300–€550/month without', note: 'DSU-funded dormitories are the most affordable option. Without DSU, shared flats in Milan cost €500–€800/month; Bologna, Turin, and Rome are €350–€600/month.' },
      { label: 'Food — university canteen', amount: 'Free with DSU / €200–€350/month without', note: 'Italian university canteens offer excellent subsidised meals — €3–€6 per meal without DSU. With DSU, a meal card is included at no additional cost.' },
      { label: 'Financial proof for visa + health insurance', amount: '~€6,542/year liquid + €500–€800/year insurance', note: 'Liquid funds must be in a bank account. If a DSU scholarship award letter is available, it can partially or fully satisfy this requirement.' },
    ],
    costCallout: 'The DSU effect: A student who qualifies for the DSU regional scholarship at PoliMi or Bologna effectively pays zero tuition, lives in a university dormitory for free, eats at subsidised canteens, and receives a cash stipend of up to €7,200 per year. The total out-of-pocket cost for an entire master\'s degree can drop to under ₹10–15 lakh including flights and personal expenses. Part-time work: Non-EU student visa holders can work up to 20 hours/week (1,040 hours/year). Campus jobs, research assistantships, and hospitality roles are the most common routes for Indian students.',
    scholarshipsIntro: 'Italy\'s scholarship landscape has a structure unlike any other country. The most impactful funding is not competitive in the traditional sense — it is income-based and available to any student who can document their family\'s financial situation correctly.',
    scholarships: [
      {
        name: 'DSU Regional Scholarship — Diritto allo Studio Universitario',
        description: 'The single most powerful funding mechanism available to Indian students in Italy. DSU scholarships are administered by regional agencies and awarded based on financial need rather than academic merit. The DSU covers: 100% tuition waiver, free or heavily subsidised university accommodation, a meal card for university canteens, and a cash stipend of up to €7,200 per year. To access the DSU, an ISEE Parificato certificate must be obtained using apostilled and Italian-translated copies of your Indian family income, property, bank, and family composition certificates. Income threshold: family ISEE below approximately €23,000–€25,000. Application deadlines: typically July–September for the autumn intake.',
        coverage: 'Full tuition waiver + free accommodation + meal card + up to €7,200/year stipend',
      },
      {
        name: 'MAECI Scholarship — Italian Ministry of Foreign Affairs (Merit-Based)',
        description: 'Awarded by Italy\'s Ministry of Foreign Affairs and International Cooperation for master\'s and PhD students from non-EU countries. Covers full tuition, a monthly stipend of approximately €900/month, and health insurance. Unlike DSU, MAECI is awarded on academic merit rather than financial need — accessible to students from higher-income families who do not qualify for DSU. Applications for the 2026–27 cycle open in May–June 2026.',
        coverage: 'Full tuition + ~€900/month stipend + health insurance',
      },
      {
        name: 'University Excellence Scholarships — PoliMi, Bologna, Padua',
        description: 'Several Italian public universities offer their own merit-based international scholarships independent of DSU and MAECI. Politecnico di Milano\'s Excellence Scholarship awards up to €8,000 per year to top international postgraduate applicants based on GPA and academic profile. Bologna and Padua offer similar merit awards of €3,000–€5,000. These are assessed alongside the admissions application and require no separate form at most institutions.',
        coverage: '€3,000–€8,000/year tuition support',
      },
      {
        name: 'Bocconi Merit Scholarships',
        description: 'Bocconi offers its own internal merit scholarships for international students covering up to 50% of tuition fees. Assessed automatically during the admissions process — no separate application required. Selection is based on academic performance and test scores (GMAT/GRE).',
        coverage: 'Up to 50% tuition waiver at Bocconi',
      },
      {
        name: 'PhD Studentships (Research Doctorates)',
        description: 'Italian PhD programs are fully funded for almost all enrolled doctoral students through a national fellowship called the Assegno di Ricerca. PhD students at Italian public universities receive a monthly salary of approximately €1,050–€1,335 per month with full tuition coverage. This applies to Indian students on the same basis as EU students — one of the most financially self-sustaining PhD environments in Europe.',
        coverage: 'Full tuition + €1,050–€1,335/month salary for PhD students',
      },
    ],
    visaIntro: 'Italy\'s Type D National Visa (Studio) is the standard route for Indian students on full-time programs longer than 90 days. The process is more layered than most European countries and has several Italy-specific steps that do not exist elsewhere. Here is how it unfolds in the correct sequence.',
    visaNote: 'The most important timing point: The Universitaly pre-enrollment window typically closes in July for the autumn (October) intake. Missing this window is the single most common reason Indian students defer their Italian studies by a full year. The entire process must begin no later than April–May for an October start.',
    visaSteps: [
      { title: 'Universitaly pre-enrollment — Mandatory government step', description: 'Before any visa can be processed, every non-EU student must complete pre-enrollment through Universitaly (universitaly.it). This involves registering an account, selecting the university and program, uploading the passport, academic documents, and language proficiency evidence, and submitting the application. The output is a Pre-enrollment Summary document — this must be printed and submitted at the VFS visa appointment. The Universitaly window for autumn 2026 typically opens in April and closes in July.' },
      { title: 'Dichiarazione di Valore (DoV) or CIMEA certificate', description: 'Italian universities require formal verification that your Indian academic qualifications are equivalent to the Italian system. This is done through either a Dichiarazione di Valore (DoV) — issued by the Italian Embassy or Consulate in India — or a CIMEA Statement of Comparability (a faster private service costing approximately €150–€250). The DoV takes 4–8 weeks; CIMEA is faster. Both must be ready before the Universitaly submission and VFS appointment.' },
      { title: 'Document apostille via MEA', description: 'All Indian academic certificates — Class 10, Class 12, bachelor\'s degree, marksheets — must be apostilled through the MEA (Ministry of External Affairs) in India. HRD attestation alone is not accepted. Documents for the DSU scholarship (income certificate, property certificate, bank certificate, family composition certificate) must also be apostilled and professionally translated into Italian before leaving India. These cannot be obtained or processed from abroad after arrival.' },
      { title: 'Financial proof and VFS appointment', description: 'The Italian student visa requires approximately €6,542 in liquid funds per year of study (2026 figure). The visa application is submitted at a VFS Global centre in India (Mumbai, Delhi, Chennai, Bengaluru, Kolkata, and Ahmedabad). The full document package includes the Universitaly pre-enrollment summary, DoV or CIMEA certificate, apostilled academic documents, financial proof, accommodation confirmation, valid passport, health insurance (minimum €30,000 coverage), and 2 passport photographs. The visa fee is €50 plus VFS service charges. Processing takes 4–8 weeks.' },
      { title: 'Arrival and Permesso di Soggiorno — within 8 days', description: 'Within 8 days of arriving in Italy, every non-EU student must apply for a Permesso di Soggiorno (residence permit) at the nearest post office (Ufficio Postale) or Questura (police station). This is not optional — it is a legal requirement. The application kit (Kit Permesso) is available at post offices. Failure to apply within 8 days creates a legal status complication that is difficult and time-consuming to resolve.' },
      { title: 'Codice Fiscale and university enrollment', description: 'The Codice Fiscale is Italy\'s 16-character tax identification code — equivalent to India\'s PAN number. Without it, nothing works in Italy: no bank account, no SIM card, no rental contract, no health service registration. For most students, the Codice Fiscale is generated automatically through the Universitaly pre-enrollment process. Formal university enrollment is completed at the institution\'s international office within the first two weeks, presenting original documents, the residence permit receipt, and the Codice Fiscale.' },
      { title: 'DSU scholarship application after enrollment', description: 'If eligible for the DSU regional scholarship, the application must be submitted after formal university enrollment is complete. Each regional agency (DSU Lombardia, EDISU Piemonte, ER.GO Bologna, Lazio DiSCo) has its own deadline — typically July–September for autumn intake, though some agencies accept applications after enrollment confirmation. The ISEE Parificato certificate must be obtained from a CAF office in Italy before submitting the DSU application.' },
    ],
    visaWarning: {
      title: 'After Graduation — The Post-Study Work Permit and PR Pathway',
      paragraphs: [
        'After completing a degree in Italy, non-EU graduates can remain on a 12-month job search residence permit (Permesso di Soggiorno per attesa occupazione) to look for employment. Italy\'s Cutro Decree (2023) created an important exemption specifically relevant to Indian graduates: student-to-work permit conversions are exempt from the annual Decreto Flussi quota restrictions — meaning Indian graduates do not need to compete in Italy\'s annual immigration lottery system that governs most non-EU work permit applications. This is a significant and often-overlooked advantage.',
        'A 2026 change means that time spent studying in Italy on a student permit now counts 100% toward the 5-year permanent residency requirement — previously only 50% of the study period was counted. A student who completes a 2-year master\'s in Italy exits with 2 full years already credited toward Italian permanent residency. Add the 12-month post-study permit and a work permit thereafter, and the path to Italian (and therefore EU) permanent residency is considerably shorter than most Indian students realise.',
      ],
    },
    faqs: [
      { question: 'Is an Italian degree recognised in India and globally?', answer: 'Yes, fully. Degrees from Italian public universities are recognised by the Association of Indian Universities (AIU). Globally, Politecnico di Milano, Bocconi, and the University of Bologna are well-regarded — their graduates work at Google, McKinsey, Airbus, and Ferrari. For fields where Italy has genuine world-class strength — engineering, architecture, design, pharmaceutical sciences, fashion and luxury management — an Italian degree is actively sought by relevant employers globally.' },
      { question: 'What CGPA is needed for Italian universities?', answer: 'Requirements vary significantly by institution and program. Politecnico di Milano and Bocconi expect strong profiles — typically 7.5–8.0 CGPA out of 10 for competitive programs, along with GRE/GMAT scores at Bocconi. Most other public universities including Bologna, Padua, Sapienza, and PoliTO admit students from a broader range — 6.0–7.5 CGPA is generally sufficient for most English-taught programs. The statement of purpose carries more weight in Italian admissions than is typical in Germany or the UK.' },
      { question: 'Can I apply to multiple Italian universities simultaneously?', answer: 'Yes, but with an important constraint: the Universitaly portal only allows pre-enrollment at one university per year. This means the university choice must be finalised before the Universitaly submission — you cannot hedge between two institutions through the government portal the way you can with UCAS in the UK. Research programs thoroughly before committing to Universitaly pre-enrollment.' },
      { question: 'What are the intake periods?', answer: 'The main intake is October (autumn) — this is when the vast majority of programs, all DSU scholarship applications, and the MAECI scholarship are available. A secondary February (spring) intake exists at some universities and programs, but the program selection is narrower and the DSU scholarship is typically only available for autumn starters. For most Indian students, October is the right target.' },
      { question: 'How does Italy compare to Germany for an Indian STEM student?', answer: 'Germany offers zero tuition at most universities and a faster, more structured post-study work pathway (18-month job seeker visa → EU Blue Card → PR in 21 months). Italy offers income-based tuition that can be even lower than Germany if DSU is obtained, and a more affordable overall lifestyle in cities like Bologna and Turin. German degrees carry more weight with German and northern European employers; Italian degrees have stronger currency in architecture, design, and pharmaceutical sectors. Both are excellent choices — the right one depends on the specific field and long-term career geography.' },
      { question: 'What is the food situation for vegetarian and Indian students?', answer: 'Italian cuisine has a broader vegetarian tradition than most of continental Europe — pasta, pizza, risotto, and most Italian staples are naturally vegetarian or easily adapted. Indian grocery stores are present in all major Italian cities. The student canteens at DSU-funded universities offer vegetarian options as standard. Vegetarian Indian students generally report Italy as one of the easier European countries for food adaptation.' },
    ],
    language: {
      question: 'Do you need Italian to study in Italy?',
      paragraphs: [
        'For study, it depends on your program. Italy now has over 600 English-taught programs at public and private universities — most master\'s degrees at Politecnico di Milano, Bocconi, PoliTO, Bologna, and Sapienza that Indian students target are available entirely in English. The IELTS/TOEFL requirement can be waived at many public universities if you submit a Medium of Instruction (MOI) certificate from your previous English-medium institution (most Indian universities qualify).',
        'For daily life, Italian matters. Outside of Milan and Rome, English proficiency among locals — particularly in administrative settings — is limited. Students who learn basic Italian (A2 level) before arriving navigate daily life significantly more smoothly and build relationships with local students and employers that purely English-speaking students often miss.',
        'For long-term career prospects in Italy, Italian is essential. The Italian job market outside of multinational companies in Milan operates in Italian. Students targeting careers in Italy after graduation will need to reach B1–B2 Italian proficiency to be genuinely competitive.',
      ],
      callout: 'Practical advice: The Italian Cultural Institute operates in Mumbai, Delhi, Bengaluru, Chennai, and Kolkata and offers Italian language courses from beginner level. Starting A1–A2 Italian before departure is a meaningful investment that pays back quickly in daily quality of life and future career options.',
    },
  },

  // ─── Japan ───────────────────────────────────────────────────────────────────
  Japan: {
    heroTagline: 'National university tuition at ₹3.1 lakh per year. Nobel-winning research labs. The MEXT scholarship — one of the most generous fully-funded awards in the world. For STEM students, Japan is one of the best-kept secrets in global education.',
    quickStats: [
      { value: '¥535,800/yr', label: 'National university tuition (~₹3.1L)' },
      { value: '28 hrs/week', label: 'Part-time work allowed during term' },
      { value: 'MEXT', label: 'Full scholarship incl. airfare & stipend' },
      { value: '1–3 years', label: 'To PR via HSP points system' },
    ],
    whyTitle: 'The most misread study destination for Indian students',
    whyParagraphs: [
      'Japan is one of the most misread study destinations for Indian students. The instinctive hesitation — the language barrier, the distance, the cultural unfamiliarity — leads most families to overlook a country that offers a combination of academic quality, affordability, and long-term career opportunity that is genuinely difficult to find anywhere else. The University of Tokyo and Kyoto University are consistently ranked in the global top 100. Japan\'s 25 Nobel laureates since 2000 reflect a research culture of extraordinary depth, particularly in physics, chemistry, medicine, and applied sciences.',
      'The financial argument is equally compelling. Japan\'s national universities charge the same tuition to international students as to Japanese students — ¥535,800 per year (approximately ₹3.1 lakh at 2026 exchange rates). There is no international surcharge of the kind that makes UK and Australian universities so expensive for Indian families. A two-year master\'s at the University of Tokyo costs roughly the same in tuition as a single term at a mid-ranked UK university. The total annual budget including living costs — ₹8–14 lakh — is competitive with Germany and significantly below the UK, Australia, or Canada.',
      'Then there is the industrial argument. Japan\'s economy is built on technology, precision engineering, robotics, semiconductors, and pharmaceutical manufacturing. Companies like Toyota, Sony, Hitachi, Fujitsu, Panasonic, and NTT employ tens of thousands of engineers and researchers. Graduate students at Japanese universities do not just study alongside these companies — they frequently work within them through research partnerships, internship programs, and corporate-funded laboratories. For Indian students in AI, robotics, semiconductor engineering, automotive engineering, pharmaceutical research, and materials science, Japan is not just a reasonable option — in several of these fields, it is arguably the best option in the world.',
    ],
    whyCallout: 'One thing worth knowing upfront: Japan\'s language barrier is real. Daily life — particularly outside of Tokyo and Osaka — is conducted almost entirely in Japanese. English proficiency among the general population is limited compared to Northern Europe or Singapore. Students who invest in learning Japanese — even to basic conversational level — navigate life significantly better, access better part-time work opportunities, and position themselves far more competitively for post-graduation employment in Japan. This is the trade-off for extraordinary academic value and one of the safest, most orderly countries in the world to live in as an international student.',
    whyCalloutType: 'default',
    universitiesIntro: 'Japan has 86 national universities, over 90 public universities, and more than 600 private institutions. The institutions below are the ones Indian students most seriously consider — all offering English-taught graduate programs at genuinely exceptional value.',
    universitiesDetailed: [
      {
        rank: 'QS #28 Globally',
        name: 'University of Tokyo (Todai)',
        location: 'Hongo, Tokyo',
        description: 'Japan\'s most prestigious university and one of Asia\'s undisputed top three alongside NUS and Peking University. The Graduate School of Engineering, Graduate School of Frontier Sciences, and Graduate School of Information Science and Technology are particularly strong for Indian applicants targeting STEM research. English-taught master\'s programs are available across engineering, science, agriculture, and economics. Admission is research-supervisor driven at the graduate level — identifying and contacting a professor whose research aligns with your interests before applying is not optional, it is the process.',
        tags: ['STEM research', 'MEXT scholarship eligible', 'National university rate'],
        fees: '¥535,800/year (~₹3.1 lakh) + ¥282,000 one-time enrollment fee',
        featured: true,
      },
      {
        rank: 'QS #46 Globally',
        name: 'Kyoto University',
        location: 'Kyoto',
        description: 'Japan\'s second most prestigious university and in some research fields — particularly life sciences, chemistry, physics, and mathematics — regarded as equal to or stronger than Tokyo. Kyoto has a more research-focused culture; it produces more fundamental science, less commercially-oriented applied research. English-taught graduate programs are available but the selection is narrower than Tokyo. Kyoto city is significantly more affordable than Tokyo in accommodation and daily living. A genuine first choice for students targeting academic research careers in natural sciences or life sciences.',
        tags: ['Life sciences & chemistry', 'Research-focused culture', 'Most affordable major city'],
        fees: '¥535,800/year (~₹3.1 lakh)',
        featured: true,
      },
      {
        rank: 'QS #68 Globally',
        name: 'Osaka University',
        location: 'Suita, Osaka',
        description: 'Strong in engineering, dentistry, medicine, and the natural sciences. Osaka University actively recruits English-speaking international students across several graduate schools. Osaka is Japan\'s second-largest city — more affordable than Tokyo, with an equally vibrant urban culture. The university has strong corporate ties to Panasonic, Sharp, and the pharmaceutical sector. MEXT scholarship recipients frequently end up at Osaka due to its active international student programs.',
        tags: ['Engineering & pharma', 'MEXT scholarship frequently placed', 'Affordable vs Tokyo'],
        fees: '¥535,800/year (~₹3.1 lakh)',
      },
      {
        rank: 'QS #90 Globally',
        name: 'Tohoku University',
        location: 'Sendai',
        description: 'Japan\'s top university outside Tokyo and Kyoto for materials science, engineering, and physics. Tohoku is notable for being one of Japan\'s most internationally welcoming universities — it has a higher proportion of English-taught programs and a stronger international office support system than many peers. Sendai is a mid-sized city considerably more affordable than Tokyo or Osaka in accommodation, with a compact, student-friendly environment. An underrated first choice for students in materials science, mechanical engineering, and physics.',
        tags: ['Materials science & physics', 'Most international-friendly', 'Lowest living costs'],
        fees: '¥535,800/year (~₹3.1 lakh)',
      },
      {
        rank: 'QS #91 Globally',
        name: 'Institute of Science Tokyo (formerly Tokyo Tech)',
        location: 'Meguro, Tokyo',
        description: 'Japan\'s dedicated national science and technology university — equivalent in focus to IIT or MIT. Recently renamed following a merger with Tokyo Medical and Dental University. Entirely focused on science, engineering, and technology. English-taught master\'s and PhD programs are well-established. Corporate research partnerships with Sony, NTT, and JAXA (Japan\'s space agency) give students direct access to cutting-edge applied research.',
        tags: ['Engineering & applied science', 'Space & aerospace research', 'JAXA partnership'],
        fees: '¥535,800/year (~₹3.1 lakh) — ¥400,000/year for some postgrad programs',
      },
      {
        rank: 'QS #201 & #189 Globally',
        name: 'Waseda University & Keio University',
        location: 'Tokyo',
        description: 'Japan\'s two most prestigious private universities. Both offer large, well-structured English-taught international programs and have the most active corporate recruitment networks of any Japanese university for non-Japanese graduates. Waseda\'s SILS (School of International Liberal Studies) and Global MBA are well-regarded. Keio\'s Graduate Schools of Business and Media Design attract strong international applicants. For students who want Tokyo-based education with the strongest possible corporate alumni networks, either of these is the right choice.',
        tags: ['Private university', 'Strongest corporate networks', 'Business & liberal arts'],
        fees: '¥800,000–¥1,500,000/year (~₹4.6–₹8.7 lakh)',
      },
    ],
    costsIntro: 'Japan\'s cost structure is one of its most misunderstood features. It is neither as cheap as Southeast Asia nor as expensive as the UK or Australia. The national university tuition is fixed and low; the key variable is the city you live in, which has a much larger impact on total budget than the university itself.',
    costs: [
      { label: 'Tuition — national universities (flat rate for all students)', amount: '¥535,800/year (~₹3.1 lakh)', note: 'Same rate for Japanese and international students — no international surcharge. One-time enrollment fee of ¥282,000 (~₹1.6 lakh) paid on first enrollment. National universities offer 25%, 50%, or 100% tuition reduction for financial need — approximately 20–30% of international students receive some reduction.' },
      { label: 'Tuition — private universities (Waseda, Keio)', amount: '¥800,000–¥1,500,000/year (~₹4.6–₹8.7 lakh)', note: 'Merit scholarships for international students are available and assessed at admission — partial waivers of 20–50% are common at both Waseda and Keio for strong applicants.' },
      { label: 'Accommodation — university dormitory', amount: '¥30,000–¥50,000/month (~₹17,000–₹29,000)', note: 'University dormitories are the most affordable option and the most competitive. Apply as early as possible after admission — spots fill quickly. Living in a dorm dramatically reduces the total budget compared to private housing.' },
      { label: 'Accommodation — private flat (Tokyo)', amount: '¥60,000–¥100,000/month (~₹35,000–₹58,000)', note: 'Tokyo is the most expensive city. Osaka, Kyoto, and Sendai are significantly cheaper for private housing — a key factor in choosing between institutions.' },
      { label: 'Food and daily expenses', amount: '¥25,000–¥40,000/month (~₹14,500–₹23,000)', note: 'University canteens (shokudo) are subsidised and serve full meals for ¥300–¥500. Convenience stores (konbini) offer affordable ready meals. Students who cook at home keep food costs at the lower end of this range.' },
      { label: 'National Health Insurance + financial proof for visa', amount: '¥18,000–¥24,000/year insurance + ¥2,000,000 (~₹11.6L) liquid funds', note: 'National Health Insurance (NHI) is mandatory for all residents at the student rate. The visa financial proof of ¥2,000,000 is your own money shown in a bank account — not a fee. MEXT or JASSO scholarship letters fully satisfy this requirement.' },
    ],
    costCallout: 'Part-time work rights: Students holding a Japanese student visa with Permission to Engage in Activity Other Than That Permitted can work up to 28 hours per week during term and full-time during university holidays. Tokyo\'s minimum wage in 2026 is ¥1,163/hour. English tutoring pays ¥1,500–¥3,000/hour — far above minimum wage and widely available for Indian students. Working 20 hours a week covers most living expenses outside rent in non-Tokyo cities.',
    scholarshipsIntro: 'Japan\'s scholarship ecosystem is anchored by the MEXT government award — one of the most comprehensive scholarship packages available globally. Below MEXT, several secondary options exist for students who do not receive government sponsorship.',
    scholarships: [
      {
        name: 'MEXT Scholarship — Japanese Government (Ministry of Education)',
        description: 'The flagship Japanese government scholarship and one of the most generous fully-funded awards available to any international student anywhere in the world. MEXT covers 100% tuition, a monthly stipend of ¥117,000–¥145,000 (~₹68,000–₹84,000) depending on program level, return airfare between India and Japan, enrollment and examination fees, and Japanese language training before the degree begins if required. Two routes: Embassy Recommendation (applications through Embassy of Japan in New Delhi, opened April 2026, deadline May 15, 2026) and University Recommendation (directly through a Japanese university after securing a supervising professor). Both routes result in the same package.',
        coverage: 'Full tuition + ¥117,000–¥145,000/month + return airfare + enrollment fees',
      },
      {
        name: 'JASSO Scholarship — Japan Student Services Organization',
        description: 'The second most significant scholarship for international students in Japan. JASSO awards a monthly stipend of ¥48,000 (~₹28,000) to privately-financed international students with strong academic records. Critically, there is no direct application — your Japanese university nominates you based on your first-year academic performance. It is not something to plan around before arrival, but it is worth knowing it exists as a form of merit recognition that can offset living costs significantly during the second year.',
        coverage: '¥48,000/month (~₹28,000) — university nomination after first year, no direct application',
      },
      {
        name: 'National University Tuition Reduction (25–100%)',
        description: 'Japan\'s national universities offer 25%, 50%, or 100% tuition reduction based on financial need and academic merit, applied through the student affairs office each semester. Approximately 20–30% of enrolled international students receive some reduction. This is separate from formal scholarships and available to any enrolled student who meets the income threshold — a 50% reduction brings the annual national university cost down to approximately ¥267,900 (~₹1.55 lakh).',
        coverage: '25–100% tuition reduction, income-assessed, applied after enrollment',
      },
      {
        name: 'University Research Fellowships and RA Positions',
        description: 'Most Japanese university laboratories offer funded Research Assistant positions to enrolled graduate students — particularly at the PhD level. These are paid monthly and can range from ¥50,000–¥150,000 per month depending on the research grant. Identifying a professor with active research funding before applying — and securing their agreement to supervise — is the single most impactful step an Indian student targeting Japan can take. The professor relationship is the foundation of both admission and financial support in the Japanese system.',
        coverage: '¥50,000–¥150,000/month depending on lab and research grant',
      },
    ],
    visaIntro: 'Japan\'s student visa process is structured differently from every other country on this list. It operates in two distinct stages — the Certificate of Eligibility (COE) first, then the visa itself — and the university handles the first stage entirely on the student\'s behalf.',
    visaNote: 'Critical timing: The COE takes 6–8 weeks to process after the university submits it. Add visa processing of 5–10 working days and the entire timeline from university confirmation to visa in hand is approximately 10–12 weeks minimum. For an April intake, the process must begin no later than December. For a September/October intake, no later than June.',
    visaSteps: [
      { title: 'Admission and professor contact', description: 'At the graduate level, Japanese universities operate on a laboratory-based admission system rather than a centralised departmental process. Before any formal application, identifying a professor whose research aligns with your academic interests and sending a well-prepared introductory email — with your CV, research statement, and academic transcripts — is the expected first step. Most Japanese professors who agree to supervise an international student will guide you through the formal application process and are the key supporters of your MEXT University Recommendation if applicable. Cold applications without prior professor contact have significantly lower success rates at competitive programs.' },
      { title: 'Certificate of Eligibility (COE) — university-managed', description: 'Once admission is confirmed, the Japanese university submits a COE application to the Immigration Services Agency of Japan on the student\'s behalf. The student does not file the COE directly — the institution manages this entirely. The COE (在留資格認定証明書) is a pre-approval document confirming the student is eligible for the "College Student" residence status in Japan. Processing takes 6–8 weeks after the university submission. Once issued, the original COE document is couriered to the student in India.' },
      { title: 'Student visa application at the Japanese Embassy or Consulate', description: 'With the original COE in hand, the student visa application is submitted at the Embassy of Japan in New Delhi or the Consulates in Mumbai, Chennai, Kolkata, or Bengaluru. Required documents: original COE, valid passport (minimum 6 months validity), completed visa application form, one recent photograph (4.5×4.5 cm), and academic documents. The visa fee for Indian nationals is just ₹500 — among the lowest student visa fees globally. Processing takes 5–10 working days. The result is a single-entry visa sticker valid for 90 days.' },
      { title: 'Financial proof', description: 'The Japanese Consulate requires evidence of approximately ¥2,000,000 (~₹11.6 lakh) in available funds per year of study. This can be demonstrated through a bank statement in the student\'s name, a parent\'s bank statement with a sponsorship letter, or a MEXT or JASSO award letter. The funds must be liquid and clearly accessible — fixed-term deposits that cannot be broken within 30 days are not accepted. Financial documentation is the most common source of delays in Japanese student visa applications.' },
      { title: 'Arrival and Residence Card', description: 'Upon arrival at a major Japanese airport (Narita, Haneda, Kansai, or Chubu), the Residence Card (在留カード — Zairyu Card) is issued automatically at the immigration counter on presentation of the COE and passport. This card is the formal proof of residence status and must be carried at all times. Within 14 days of arrival, the local address must be registered at the nearest ward or municipal office (Kuyakusho) — this generates the My Number card and activates National Health Insurance enrollment.' },
      { title: 'Part-time work permission (arubaito permission)', description: 'The student visa does not automatically permit part-time work. Students must apply for Permission to Engage in Activity Other Than That Permitted at the immigration counter upon or shortly after arrival. This is a standard, routinely granted permission for enrolled students — it is not competitive or restricted. The permission stamp is added to the passport or residence card. Without it, working even one hour is technically illegal. Most Japanese universities guide new international students through this at orientation.' },
    ],
    visaWarning: {
      title: 'After Graduation — The HSP Fast-Track to Permanent Residency',
      paragraphs: [
        'Japan does not have a dedicated post-study visa of the kind Ireland\'s Stamp 1G or Germany\'s 18-month job seeker visa provides. After completing a degree, a visa status change from Student to Engineer/Specialist in Humanities/International Services is possible if a qualifying job offer has been secured. This means the job search must be active during the final year of study, not after graduation. The J-Find Visa (introduced in 2023) provides a pathway specifically for graduates of the world\'s top 100 universities to enter Japan for up to 2 years to job hunt or explore entrepreneurship — without a job offer. For graduates of the University of Tokyo, Kyoto, Osaka, or Tohoku, this visa is particularly accessible as the degree itself fulfils the university ranking requirement.',
        'The Highly Skilled Professional (HSP) points-based visa is Japan\'s fastest track to permanent residency. Points are awarded for degree level, salary, age, research publications, patents, and Japanese language proficiency. Graduates of Japanese national universities receive bonus points. Scoring 70+ HSP points unlocks permanent residency eligibility in 3 years of Japanese residence rather than the standard 10. Scoring 80+ points reduces this to just 1 year — the fastest permanent residency pathway in Japan and among the fastest of any developed country globally.',
      ],
    },
    faqs: [
      { question: 'Is a Japanese degree recognised in India?', answer: 'Yes. Degrees from Japanese national universities are recognised by the Association of Indian Universities (AIU). More practically, a degree from the University of Tokyo, Kyoto, or Osaka is recognised globally — alumni work at Google, McKinsey, Goldman Sachs, JAXA, and every major multinational. For fields where Japan is a global leader — robotics, semiconductor engineering, automotive technology, materials science, pharmaceutical research — a Japanese degree often carries more weight with relevant employers than degrees from UK or Australian institutions.' },
      { question: 'How does Japan compare to Germany for an Indian engineering student?', answer: 'Both are strong. Germany offers zero tuition at most universities; Japan\'s national university tuition is low but not free (¥535,800/year, ~₹3.1 lakh). Germany\'s post-study pathway is more structured — 18 months job seeker visa, then EU Blue Card, then PR in 21 months. Japan\'s pathway requires a job offer before graduation but offers the HSP fast-track to PR in 1–3 years for qualifying graduates. Japan has stronger industry ties in robotics, automotive, and semiconductor fields specifically, and the MEXT scholarship is arguably more generous than DAAD. The right choice depends on field and long-term geography preference.' },
      { question: 'Do Indian students need IELTS for Japanese universities?', answer: 'For English-taught programs, most Japanese national universities accept IELTS 6.0–6.5 or TOEFL iBT 72–90 for graduate admission. Several universities — Tohoku, Osaka, Tokyo — also accept a Medium of Instruction (MOI) certificate from a previous English-medium institution in lieu of IELTS, which most Indian graduates can provide. For Japanese-taught programs, the EJU (Examination for Japanese University Admission for International Students) in Japanese is required along with JLPT N2 or N1 proficiency.' },
      { question: 'What are the two intake periods?', answer: 'Japan\'s academic year runs April to March. The April intake is the primary intake for most Japanese-taught programs and all undergraduate programs — applications for April entry are typically due in November–January. The September/October intake has grown significantly in recent years as Japanese universities expanded English-taught programs — this aligns with the standard international academic calendar and is now available at most major national universities for graduate programs. For Indian students targeting English-medium programs, September/October is generally more accessible.' },
      { question: 'What is the food situation for Indian students?', answer: 'Japan\'s food culture is wonderful but challenging for strict vegetarians. Traditional Japanese cuisine relies heavily on dashi (fish stock) even in ostensibly vegetarian dishes, and communicating strict vegetarian or vegan requirements can be difficult outside of international-friendly areas. Tokyo, Osaka, and Kyoto all have Indian restaurants, and Indian grocery ingredients — lentils, basmati rice, spices, ghee — are available at Indian specialty stores in major cities. Most Indian students in Japan cook the majority of their meals at home, which is also the most budget-friendly approach.' },
      { question: 'Is Japan safe for Indian students?', answer: 'Japan is among the safest countries in the world. Crime rates — particularly violent crime and theft — are extraordinarily low by any global standard. Public spaces, transport, and university campuses are safe at all hours. Indian students, including female students living alone, consistently report feeling safer in Japanese cities than in most Indian metros. Natural disaster preparedness (earthquakes are common in Japan) is the one safety factor that requires awareness — universities provide earthquake preparedness orientation to all new international students.' },
    ],
    language: {
      question: 'Do you need Japanese to study in Japan?',
      paragraphs: [
        'For study, it depends entirely on the program. English-taught programs at the graduate level have expanded significantly — Tohoku, Tokyo, Osaka, and Institute of Science Tokyo all have well-structured English-medium master\'s and PhD programs. Many Indian students complete entire degrees in Japan without ever needing to use Japanese in the classroom.',
        'For daily life, Japanese is important. Grocery stores, transport signage, medical visits, landlords, and government offices outside of major international hubs operate entirely in Japanese. Students who learn hiragana and katakana (the two phonetic scripts) before arrival can read menus, signs, and station names within a few weeks of study — this alone reduces day-to-day friction dramatically.',
        'For long-term career prospects in Japan, Japanese language proficiency is the single most important factor. JLPT N2 (upper intermediate) is the practical threshold that most Japanese employers — both Japanese and multinational companies in Japan — expect from non-Japanese candidates. Students who achieve N2 during their degree have a dramatically wider set of post-graduation career options in Japan than those who remain English-only.',
      ],
      callout: 'Practical advice: The Japan Foundation has centres in Delhi and Mumbai offering Japanese language courses. Online platforms like Duolingo (Japanese) and WaniKani (kanji) are well-suited to self-study before departure. Most Japanese universities also offer subsidised Japanese language courses to enrolled international students, often free, from the first semester.',
    },
  },

  // ─── Singapore ───────────────────────────────────────────────────────────────
  Singapore: {
    heroTagline: 'NUS is ranked #8 in the world. NTU is #12. Both teach entirely in English. The MOE Tuition Grant cuts international fees by 40–60%. And Google, Apple, Goldman Sachs, and Pfizer are all hiring from campus.',
    quickStats: [
      { value: 'NUS #8', label: 'Global QS ranking (2026)' },
      { value: 'SGD 17K–33K', label: 'NUS/NTU tuition with MOE Grant/year' },
      { value: '16 hrs/week', label: 'Part-time work allowed during term' },
      { value: '2 years', label: 'PR eligibility after Employment Pass' },
    ],
    whyTitle: 'Asia\'s most connected degree — in the world\'s top 10',
    whyParagraphs: [
      'Singapore sits in a category of its own among Asian study destinations. Every other country in Asia asks you to make a trade-off — Japan gives you extraordinary academics but a demanding language barrier; South Korea offers value but limited global recognition outside STEM; China has rising universities but English access is limited. Singapore makes no such demand. NUS is ranked #8 in the world. NTU is ranked #12. Both universities teach entirely in English. The Indian community in Singapore is one of the most established in Southeast Asia, Tamil is an official language, and the flight from Chennai or Mumbai is under four hours.',
      'What makes Singapore genuinely distinctive, though, is not the rankings — it is the employer landscape. Singapore is the regional headquarters of virtually every major technology company, financial institution, and pharmaceutical corporation operating in Asia. Google, Apple, Meta, Goldman Sachs, Citibank, Procter & Gamble, Pfizer — all have significant Singapore presences and all recruit actively from NUS, NTU, and SMU. A graduate from NUS entering the Singapore job market does not need to relocate to access world-class employers. They are already there, running internships, funding research, and hiring final-year students.',
      'The cost picture is more nuanced than the rankings suggest. Without support, Singapore is genuinely expensive. However, almost every admitted international student at NUS, NTU, SMU, SUTD, and SIT takes up the MOE Tuition Grant, which reduces tuition by 40–60% in exchange for a commitment to work in Singapore for 3 years after graduation. With the grant, NUS Engineering tuition drops to approximately SGD 17,550/year (~₹13 lakh) — bringing the total annual cost to roughly the same as a mid-ranked UK university, but for a top-10 global degree in Asia\'s most dynamic economy.',
    ],
    whyCallout: 'The most important thing to understand about Singapore before deciding: There is no dedicated post-study work visa. Unlike Germany\'s 18-month job seeker visa, Ireland\'s Stamp 1G, or the UK\'s Graduate Route, Singapore does not give graduates an automatic stay-back period to find a job. A job offer resulting in an Employment Pass must be secured before or immediately after graduation. Students who are not actively job hunting from their second year onwards frequently find themselves in a difficult position at graduation. Singapore rewards proactive students who engage with the job market early.',
    whyCalloutType: 'gold',
    universitiesIntro: 'Singapore has six autonomous universities, several polytechnics, and a small number of international branch campuses. The institutions below are the ones Indian students most seriously consider.',
    universitiesDetailed: [
      {
        rank: 'QS #8 Globally',
        name: 'National University of Singapore (NUS)',
        location: 'Kent Ridge, Singapore',
        description: 'The highest-ranked university in Asia and the only Asian university in the world\'s top 10 as of QS 2026. NUS is a comprehensive research university with particular strength in engineering, computing, business, medicine, law, and the sciences. For Indian students, NUS carries the strongest global signal of any degree in Asia — its graduates are recognised and recruited by employers in Singapore, India, the Gulf, Europe, and North America. Admission is genuinely competitive — most admitted undergraduates have 95%+ in Class 12 with strong subject scores. The NUS Global Merit Scholarship covers full tuition plus a living allowance for outstanding applicants.',
        tags: ['Computing & engineering', 'NUS Global Merit Scholarship', 'Top 10 globally'],
        fees: 'SGD 17,550–32,550/year with MOE Grant (~₹13–24 lakh)',
        featured: true,
      },
      {
        rank: 'QS #12 Globally',
        name: 'Nanyang Technological University (NTU)',
        location: 'Jurong West, Singapore',
        description: 'The world\'s most connected university according to QS and consistently ranked alongside NUS in the global top 15. NTU is particularly strong in engineering, materials science, business (Nanyang Business School), and the emerging fields of AI, robotics, and sustainability. The NTU Nanyang Scholarship covers full tuition, a SGD 6,500/year living allowance, housing support, and a travel grant — on top of the MOE Tuition Grant, making the combined package effectively a full-ride for scholarship recipients.',
        tags: ['AI & robotics', 'Nanyang Scholarship', 'Materials science & engineering'],
        fees: 'SGD 17,100–31,200/year with MOE Grant (~₹12.6–23 lakh)',
        featured: true,
      },
      {
        rank: 'QS #39 in Business Globally',
        name: 'Singapore Management University (SMU)',
        location: 'City Campus, Singapore',
        description: 'SMU specialises entirely in business, law, accountancy, economics, information systems, and social sciences. Within these fields, its ranking is disproportionately strong: SMU\'s Business & Management Studies sits at #39 globally. Its city campus location in the heart of Singapore\'s financial district is deliberate — every major bank, consulting firm, and law firm is within walking distance. Case-study-based teaching, mandatory internships, and strong industry immersion make SMU graduates exceptionally employment-ready in Singapore\'s financial and professional services sectors.',
        tags: ['Business & law', 'Financial district campus', 'Top 50 globally in business'],
        fees: '~SGD 20,000/year with MOE Grant (~₹14.8 lakh)',
      },
      {
        rank: 'MIT-influenced · Most selective by intake size',
        name: 'Singapore University of Technology and Design (SUTD)',
        location: 'Changi, Singapore',
        description: 'Singapore\'s newest autonomous university, founded in collaboration with MIT and Zhejiang University. SUTD focuses entirely on technology, design, engineering, and architecture — it admits only around 1,000 students per year, making it the most selective university in Singapore by intake size. Programs integrate design thinking with engineering. SUTD scholarships for outstanding international applicants cover full tuition plus living allowance, in addition to the MOE Tuition Grant.',
        tags: ['Design & engineering', 'MIT-influenced curriculum', 'SUTD scholarship available'],
        fees: '~SGD 17,700/year with MOE Grant (~₹13.1 lakh)',
      },
      {
        rank: 'QS #8 MBA Globally',
        name: 'INSEAD Asia Campus',
        location: 'One-North, Singapore',
        description: 'INSEAD\'s Asia campus runs the same globally ranked MBA program as the Fontainebleau campus in France — consistently ranked in the global top 3 alongside Wharton and Harvard. Students typically split time between Singapore and France during the 10-month program. For Indian students targeting senior leadership, consulting, or private equity roles in Asia, INSEAD Singapore is the most direct pathway. No MOE Tuition Grant applies to INSEAD as it is a private institution.',
        tags: ['MBA only', '5+ years experience required', 'Need & merit scholarships'],
        fees: '~SGD 109,000 total for MBA',
      },
      {
        rank: 'Applied degree programs',
        name: 'Singapore Institute of Technology (SIT) & SUSS',
        location: 'Multiple campuses, Singapore',
        description: 'SIT and Singapore University of Social Sciences (SUSS) offer applied and part-time degree programs primarily aligned with Singapore\'s workforce needs — healthcare, hospitality, supply chain, social sciences, and applied engineering. SIT runs several joint degree programs in partnership with UK universities (Glasgow Caledonian, Newcastle). The MOE Tuition Grant applies at SIT. Strong options for students targeting specific vocational or applied pathways at lower tuition than NUS or NTU.',
        tags: ['Applied & vocational focus', 'MOE Grant eligible', 'UK joint degrees at SIT'],
        fees: '~SGD 9,000–17,000/year with MOE Grant (~₹6.7–12.6 lakh)',
      },
    ],
    costsIntro: 'Singapore is expensive — that is the first thing to understand clearly. The MOE Tuition Grant changes the tuition picture significantly, but living costs in Singapore are not subsidised by any government program and represent the dominant ongoing expense.',
    costs: [
      { label: 'Tuition — NUS / NTU / SMU with MOE Grant', amount: 'SGD 17,000–32,550/year (~₹12.6–24 lakh)', note: 'The MOE Grant reduces tuition by 40–60%. Almost every admitted international student at these universities takes up the grant automatically with admission. The 3-year post-graduation work bond is the condition.' },
      { label: 'Tuition — NUS / NTU without MOE Grant', amount: 'SGD 30,000–55,000/year (~₹22–41 lakh)', note: 'Students who decline the MOE Grant pay full international fees. Very few do — the grant makes financial and career sense for the vast majority of admitted students.' },
      { label: 'Accommodation — university hall of residence (on-campus)', amount: 'SGD 400–700/month (~₹29,600–₹51,800)', note: 'On-campus halls are the most affordable accommodation option and prioritised for international students in their first year. Apply immediately upon receiving admission — demand significantly exceeds supply.' },
      { label: 'Accommodation — HDB room or private condo (off-campus)', amount: 'SGD 600–1,400/month (~₹44,400–₹1.03 lakh)', note: 'HDB flats (Singapore\'s public housing) are significantly cheaper than private condominiums. Sharing an HDB room with another student reduces costs to the lower end of this range.' },
      { label: 'Food — hawker centres and food courts', amount: 'SGD 400–600/month (~₹29,600–₹44,400)', note: 'Singapore\'s government-subsidised hawker centres mean students can eat three full meals a day for SGD 10–15 total. Indian food is widely available — Little India in Tekka and dozens of Indian-run hawker stalls serve South Indian, North Indian, and Gujarati food at prices lower than most Indian cities.' },
      { label: 'Student Pass fee + health insurance', amount: 'SGD 90 (pass) + SGD 300–600/year (insurance)', note: 'SGD 30 application + SGD 60 issuance for the Student Pass. Health insurance is mandatory — typically arranged through the university. No specific minimum liquid funds set by ICA, but universities advise SGD 10,000–15,000 in accessible funds.' },
    ],
    costCallout: 'Part-time work rights: Students on a Singapore Student Pass can work part-time for up to 16 hours per week during term. During official holiday periods there is no hours restriction and students can work full-time. Singapore\'s student jobs in tech support, tutoring, and campus research roles typically pay SGD 12–20 per hour. At 16 hours/week, a student working term-time can earn SGD 800–1,300/month — enough to cover most daily living costs outside rent.',
    scholarshipsIntro: 'Singapore\'s scholarship system is layered — and understanding the difference between the MOE Tuition Grant (which almost everyone gets) and merit scholarships (which are genuinely competitive) is the most important distinction to make upfront.',
    scholarships: [
      {
        name: 'MOE Tuition Grant — Not a Scholarship, But the Most Important Financial Tool',
        description: 'The MOE Tuition Grant is Singapore\'s government subsidy for international students enrolled at public universities. It is not a scholarship — it does not require separate application, academic competition, or an interview. Every admitted international student at NUS, NTU, SMU, SUTD, SIT, and SUSS is automatically eligible and offered the grant as part of the admission acceptance process. The Tuition Grant reduces tuition by 40–60%. The condition: a mandatory 3-year work bond in Singapore after graduation. For most Indian students targeting Singapore\'s technology, finance, or professional services sectors, this bond is not a burden — it is a guaranteed reason to be employed in Singapore for three years at world-class companies.',
        coverage: '40–60% tuition reduction for the full duration of the program',
      },
      {
        name: 'NUS Global Merit Scholarship',
        description: 'NUS offers merit scholarships for outstanding international undergraduate applicants. The NUS Global Merit Scholarship covers full tuition, a SGD 6,000/year living allowance, and a one-time computer allowance, in addition to the MOE Tuition Grant. Selection is based on academic excellence — typically top percentile nationally — leadership, and co-curricular achievements. Olympiad medals, national-level distinctions, or exceptional research experience significantly strengthen the application.',
        coverage: 'Full tuition + SGD 6,000/year living allowance (on top of MOE Grant)',
      },
      {
        name: 'NTU Nanyang Scholarship',
        description: 'NTU\'s most prominent award — it covers full tuition fees, a living allowance of SGD 6,500/year, a housing allowance of up to SGD 2,000, and for the 2026 cycle, a one-off travel grant of up to SGD 5,000 for overseas study programs and a SGD 1,750 computer allowance. Recipients must maintain a minimum CGPA of 3.5/5.0. The scholarship comes on top of the MOE Tuition Grant, making the combined package effectively a full-ride with additional benefits.',
        coverage: 'Full tuition + SGD 6,500/year living allowance + housing + travel grant + computer allowance',
      },
      {
        name: 'SINGA Scholarship — A*STAR Research (PhD)',
        description: 'The Singapore International Graduate Award (SINGA) is administered by Singapore\'s Agency for Science, Technology and Research (A*STAR) and is one of the most generous fully-funded PhD scholarships in Asia. SINGA covers full tuition at NUS, NTU, or SUTD, a monthly stipend of SGD 2,000–2,500/month (~₹1.48–1.85 lakh), a one-time airfare grant, and a settling-in allowance. Applications are open year-round and reviewed on a rolling basis. Strong candidates in biomedical sciences, physical sciences, computing, and engineering are the primary recipients. Indian students win SINGA awards consistently.',
        coverage: 'Full tuition + SGD 2,000–2,500/month stipend + airfare + settling-in allowance',
      },
      {
        name: 'SMU Global Impact Scholarship & Bursaries',
        description: 'SMU offers its own Global Impact Scholarship for high-achieving undergraduates applying to business, law, and information systems programs — coverage includes full tuition and a living allowance. SMU also operates a means-tested bursary program for students who demonstrate financial need — assessed alongside the admissions application without a separate competitive process. Given SMU\'s city-campus location and strong finance-sector connections, even partial financial support from SMU is paired with unusually direct career access.',
        coverage: 'Full tuition + living allowance (scholarship) / partial support (bursary)',
      },
    ],
    visaIntro: 'Singapore calls its student visa a Student Pass (STP) — not a visa in the traditional sense. It is issued by the Immigration and Checkpoints Authority (ICA) and processed entirely through an online system called SOLAR. The process is efficient but runs on strict timing.',
    visaNote: 'Critical timing: ICA requires you to apply not more than 2 months and not less than 1 month before your course start date. This means the SOLAR application cannot be submitted too early or too late. For an August intake, the window opens in June and closes in late July. Students have only 7 days after receiving their SOLAR login from the university to complete and submit eForm 16 — this 7-day window is firm.',
    visaSteps: [
      { title: 'University admission and SOLAR registration', description: 'Once an offer of admission is confirmed, the university creates a SOLAR account for the student and sends login credentials by email. Students have only 7 days after receiving their SOLAR login to complete and submit eForm 16. This 7-day window is firm — missing it requires a re-registration through the university\'s international office. The eForm 16 collects personal details, educational history, emergency contacts, and declarations.' },
      { title: 'Document upload and fee payment', description: 'Required documents for the SOLAR application include the passport (minimum 6 months validity beyond course end), the university offer letter, recent passport photographs, academic transcripts, financial evidence, and in some cases a health declaration. All documents must be uploaded as clear, legible scans — blurry or incomplete uploads are the most common cause of processing delays. A SGD 30 application fee is paid online by credit card at submission.' },
      { title: 'In-Principle Approval (IPA) letter', description: 'Once the application is approved, ICA issues an In-Principle Approval (IPA) letter by email. Processing takes approximately 4–6 weeks from the date of submission. The IPA letter must be printed and carried in hand luggage when flying to Singapore — airlines check it at boarding. The IPA is not the final Student Pass — it is the pre-clearance that allows entry into Singapore for the purpose of collecting the formal pass.' },
      { title: 'Medical examination (before ICA appointment)', description: 'Before the ICA in-person appointment in Singapore, a medical examination must be completed at a Singapore-approved clinic. Most universities arrange group medical sessions for newly arriving international students during orientation week — this is the easiest and most cost-effective route. The medical report is submitted at the ICA appointment.' },
      { title: 'ICA appointment and Student Pass issuance', description: 'Within the first week of arriving in Singapore, an appointment is made at ICA (the main ICA Building on Kallang Road, or the university\'s designated ICA collection point). The printed eForm 16, IPA letter, passport, and medical report are presented. Biometrics — fingerprints and photograph — are collected. From February 2023, ICA issues the Student Pass in digital form only — it is sent to the student\'s registered email and accessible via the SGPass app. The issuance fee is SGD 60.' },
      { title: 'MOE Tuition Grant acceptance', description: 'For students who received and wish to accept the MOE Tuition Grant, the grant agreement must be signed and submitted through the university\'s student services portal within the first weeks of enrollment. The grant acceptance is separate from the Student Pass and does not affect immigration status — it is a financial agreement between the student and the Singapore Ministry of Education. Tuition grant recipients must serve a 3-year work bond in Singapore after graduation.' },
    ],
    visaWarning: {
      title: 'After Graduation — Employment Pass and the PR Pathway',
      paragraphs: [
        'Singapore has no dedicated post-study work visa. The pathway from graduation to legal work operates as follows: the Employment Pass (EP) is the standard work visa for professional graduates — it requires a job offer from a Singapore-registered employer at a minimum salary of SGD 5,000/month for recent graduates. The employer applies for the EP on the graduate\'s behalf and it takes approximately 3–8 weeks to process. Graduates who hold the MOE Tuition Grant bond are already committed to working for a Singapore employer for 3 years, which aligns perfectly with the EP structure.',
        'After completing a degree, international students can also submit an application for a one-year Visit Pass to ICA if they want to look for employment in Singapore — this gives graduates 12 months to find a qualifying job without needing to leave the country immediately after graduation. Permanent Residency (PR) becomes available after 2 years of employment in Singapore on an Employment Pass. PR approval is not automatic but NUS and NTU graduates with consistent employment and good records are among the most successful PR applicants in Singapore\'s system. The MOE bond\'s 3-year commitment effectively provides the Singapore work experience that is the single most important factor in a successful PR application.',
      ],
    },
    faqs: [
      { question: 'How competitive is admission to NUS and NTU for Indian students?', answer: 'Genuinely competitive — more so for undergraduates than postgraduates. In practice, most Indian students admitted to NUS and NTU have 95%+ in Class 12 with strong subject scores. NTU officially requires a minimum of 90% but the effective admission threshold is significantly higher for Indian applicants. For postgraduate programs, a strong undergraduate CGPA (7.5–8.5 out of 10 depending on the program) plus relevant research or work experience is the expected profile.' },
      { question: 'Is a Singapore degree recognised in India?', answer: 'Yes, fully. NUS and NTU degrees are recognised by the Association of Indian Universities (AIU) and carry significant weight with Indian employers in technology, finance, and consulting. The practical advantage is the Singapore employer network — graduates who spend 3–5 years working in Singapore at Google, DBS, or McKinsey return to India with CVs that are valued well above most local or even UK degrees for the right roles.' },
      { question: 'What happens if I break the MOE Tuition Grant bond?', answer: 'If you break the bond, you repay part of the subsidy — typically SGD 10,000–25,000. The repayment amount depends on how far into the bond period the student is when it is broken. Breaking the bond in year one results in the highest repayment; completing two of three years results in a proportionally lower figure. Students who receive job offers outside Singapore during the bond period must either decline them, defer until the bond is served, or pay the liquidated damages.' },
      { question: 'How does Singapore compare to the UK for a computer science student?', answer: 'Both offer world-class degrees — NUS Computer Science at #8 globally versus Oxford or Imperial in the UK top 10. UK tuition for a CS master\'s at Imperial or UCL runs £30,000–£38,000; NUS with the MOE Grant runs approximately SGD 17,550/year (~₹13 lakh) for undergraduate. Singapore has stronger proximity to Southeast Asia\'s tech industry. The UK has the Graduate Route post-study visa (currently 2 years, reducing to 18 months in January 2027); Singapore has no equivalent dedicated post-study pathway. For students whose career ambitions are in Asia or the Gulf, Singapore\'s employer network is stronger.' },
      { question: 'When should the process begin for an August 2027 intake?', answer: 'University applications for NUS and NTU for August 2027 open in December 2026 and close in February 2027. Postgraduate program deadlines fall between December 2026 and February 2027. The Student Pass application through SOLAR opens approximately 2 months before the course start date — for August 2027 entry, that means June 2027. Preparation — IELTS, transcripts, statement of purpose — should begin by August–September 2026 for an August 2027 target.' },
      { question: 'What is the food situation for Indian students?', answer: 'Exceptional by international standards. Singapore\'s Little India district in Serangoon and the Tekka Market area are among the most vibrant Indian cultural enclaves in Southeast Asia. South Indian, North Indian, Gujarati, and Punjabi cuisines are available at every price point — from hawker stalls at SGD 4 a meal to full-service restaurants. Indian grocery stores, temples, and cultural events are embedded into Singapore\'s social fabric. Vegetarian options are widely available both in Indian food courts and in the mainstream hawker culture.' },
    ],
    language: {
      question: 'Do you need any language other than English in Singapore?',
      paragraphs: [
        'No. Singapore has four official languages — English, Mandarin, Malay, and Tamil — but English is the sole language of instruction at all universities, the working language of every multinational employer, and the dominant language of daily professional life. Tamil being an official language means that for Tamil-speaking Indian students, Singapore has a unique cultural familiarity that no other international destination offers.',
        'For careers within Singaporean-owned companies or government-linked corporations, Mandarin proficiency is a meaningful advantage — approximately 75% of Singapore\'s population is ethnically Chinese and Mandarin is widely used in business settings outside multinationals. Indian students who invest in basic Mandarin significantly expand their career options within Singapore. For roles at MNCs, English is entirely sufficient.',
      ],
    },
  },

  // ─── Hungary ─────────────────────────────────────────────────────────────────
  Hungary: {
    heroTagline: '200 fully-funded Stipendium Hungaricum seats reserved exclusively for Indian students every year. EU-recognised degrees. The fastest student visa processing in Europe. And a total annual budget of €7,000–€13,000 — comparable to Germany at a fraction of the complexity.',
    quickStats: [
      { value: '200 seats', label: 'India-specific Stipendium Hungaricum' },
      { value: '€7K–€13K', label: 'Total annual budget (tuition + living)' },
      { value: '~2 weeks', label: 'Student visa processing time' },
      { value: '60%', label: 'Minimum marks for Stipendium eligibility' },
    ],
    whyTitle: 'The EU destination most Indian students haven\'t discovered yet',
    whyParagraphs: [
      'Hungary does not appear in the standard conversation Indian families have about studying abroad. That is a genuine gap — because for specific fields and at specific price points, Hungary offers a combination that is very difficult to match anywhere in Western Europe. General degree programs at Hungarian public universities run €2,500–€8,000 per year. Living costs in Budapest — one of Europe\'s most beautiful capitals — average €375–€700 per month. The total annual budget for a typical Indian student in Hungary sits between €7,000–€13,000, which is comparable to Germany and significantly below France, Ireland, or the UK.',
      'For medicine and dentistry specifically — which command £30,000–£50,000/year in the UK or $50,000+/year in the US — Hungary\'s English-taught programs at Semmelweis University, the University of Debrecen, and the University of Pécs cost €12,000–€16,000 per year. This is why Hungary has become one of the most popular European destinations specifically for Indian students pursuing medicine. The Stipendium Hungaricum programme — Hungary\'s flagship government scholarship — covers full tuition, a monthly stipend, and accommodation support, and allocates 200 seats specifically for Indian students per academic year. The minimum academic requirement is just 60% in the last qualifying examination — not 75%, not first class, just 60%. This makes it genuinely accessible to a broader range of students than most European government scholarships.',
      'Hungary is a full European Union member state and a Schengen Area member. A degree from a Hungarian university is an EU-recognised degree — valid for employment and further academic pursuit across all 27 EU member states without any equivalency process. An Indian student who graduates from Semmelweis University with a medical degree holds the same EU-recognised qualification as a student who studied at a German or French university. For students who want a foothold in European education and qualifications at a price point that makes financial sense, Hungary is one of the most direct routes available.',
    ],
    whyCallout: 'One thing worth stating plainly: Hungary\'s post-graduation domestic job market is smaller than Germany, France, or Ireland. Budapest has a growing technology sector and financial services industry — GE, IBM, Ericsson, Morgan Stanley, and Vodafone all have significant regional operations there — but the breadth of English-medium career opportunities is narrower than in Berlin or Dublin. Many Indian students use Hungary as the entry point into European education and qualifications, then transition to Germany, the Netherlands, or Ireland for longer-term careers using their EU-recognised degree as the credential. The degree is the asset — the career geography is a separate decision.',
    whyCalloutType: 'default',
    universitiesIntro: 'Hungary has 66 accredited higher education institutions. The institutions below are the ones Indian students most seriously consider, with honest notes on what each actually offers.',
    universitiesDetailed: [
      {
        rank: 'Top 500 Globally for Medicine',
        name: 'Semmelweis University',
        location: 'Budapest',
        description: 'Hungary\'s most internationally renowned university and the strongest in the country for medicine and health sciences. Semmelweis\'s English-taught General Medicine program — equivalent to an MBBS — is one of the most established in Europe for non-EU students. Its alumni practice medicine across the UK, Germany, Scandinavia, and North America. The degree meets the eligibility requirements for India\'s NMC (National Medical Commission) screening test for returning graduates. Budapest is the campus city — one of the most beautiful and liveable capitals in Europe, with excellent public transport and a large international student community.',
        tags: ['Medicine & health sciences', 'NMC-eligible degree', 'Most recognised Hungarian brand globally'],
        fees: '€14,000–€16,000/year',
        featured: true,
      },
      {
        rank: 'QS #563 Globally',
        name: 'University of Debrecen',
        location: 'Debrecen',
        description: 'Hungary\'s most internationally active university and the one with the highest number of international students — over 6,500 from more than 120 countries enrolled every year. Offers over 80 English-taught programs including medicine, dentistry, engineering, agriculture, pharmacy, and business. Debrecen is Hungary\'s second city — considerably more affordable than Budapest in accommodation and daily living, with a compact, student-friendly environment. The university is a frequent placement destination for Stipendium Hungaricum scholarship recipients.',
        tags: ['80+ English-taught programs', 'Stipendium frequent placement', 'Most affordable major option'],
        fees: '€5,000–€16,000/year (medicine at the higher end)',
        featured: true,
      },
      {
        rank: 'Europe\'s oldest technical university',
        name: 'Budapest University of Technology and Economics (BME)',
        location: 'Budapest',
        description: 'Hungary\'s flagship engineering institution — it issues approximately 70% of Hungary\'s engineering degrees and has a long-standing national and regional reputation in civil, mechanical, electrical, and computer engineering. English-taught bachelor\'s and master\'s programs are available in engineering and architecture. BME\'s central Budapest location gives students access to Hungary\'s growing technology sector. The city hosts regional offices of GE, IBM, Ericsson, Morgan Stanley, and Vodafone, all of which recruit from BME\'s graduating cohorts.',
        tags: ['Engineering & architecture', 'Budapest tech sector links', 'Oldest technical university in Europe'],
        fees: '€3,500–€7,000/year',
      },
      {
        rank: 'QS #584 Globally',
        name: 'Eötvös Loránd University (ELTE)',
        location: 'Budapest',
        description: 'Hungary\'s most prestigious comprehensive research university, founded in 1635. ELTE is strong in natural sciences, mathematics, computer science, law, and the humanities. English-taught programs at the master\'s level span data science, biology, chemistry, English linguistics, international relations, and environmental sciences. ELTE\'s mathematics and physics departments carry particular weight internationally — Hungary has a remarkable tradition in these fields, producing an unusual number of world-class mathematicians relative to the country\'s size.',
        tags: ['Mathematics & physics', 'Computer science & data science', 'Research-oriented'],
        fees: '€2,500–€6,000/year',
      },
      {
        rank: 'Top 600 Globally',
        name: 'University of Szeged',
        location: 'Szeged',
        description: 'A comprehensive research university with particular strength in pharmaceutical sciences, medicine, natural sciences, and law. The University of Szeged has a long international tradition and a large portfolio of English-taught programs. Szeged is Hungary\'s third-largest city — smaller, quieter, and significantly more affordable than Budapest in both accommodation and daily living costs. Full access to Hungarian university infrastructure and full Stipendium Hungaricum eligibility. A strong value choice for students in pharmaceutical sciences or medicine at the lowest possible total annual cost.',
        tags: ['Pharmaceutical sciences', 'Lowest total cost option', 'Full Stipendium eligibility'],
        fees: '€4,000–€14,500/year (medicine at the higher end)',
      },
      {
        rank: 'Established 1367',
        name: 'University of Pécs',
        location: 'Pécs',
        description: 'One of Central Europe\'s oldest universities. Pécs has well-regarded programs in medicine, law, business, and engineering, with over 4,000 international students enrolled. The city of Pécs is small, architecturally beautiful, and inexpensive — arguably the most affordable student city in Hungary. The medical faculty has a long and established history of training international students and its graduates are eligible for the NMC screening test in India. Stipendium Hungaricum recipients are regularly allocated to Pécs.',
        tags: ['Medicine & law', 'Most affordable student city in Hungary', 'NMC-eligible medical degree'],
        fees: '€5,000–€14,000/year (medicine at the higher end)',
      },
    ],
    costsIntro: 'Hungary is one of the most affordable serious study destinations in the EU. The honest picture — including all mandatory costs, not just headline tuition:',
    costs: [
      { label: 'Tuition — general programs (engineering, business, sciences)', amount: '€2,500–€8,000/year', note: 'BME, ELTE, and the University of Szeged sit at the lower end for STEM and social sciences. Stipendium Hungaricum covers 100% of tuition — making this cost zero for scholarship recipients.' },
      { label: 'Tuition — medicine and dentistry', amount: '€12,000–€16,000/year', note: 'English-taught medicine at Semmelweis, Debrecen, and Pécs. This is still 3–4× cheaper than comparable programs in the UK, Australia, or the US. Stipendium Hungaricum covers medicine programs too.' },
      { label: 'Accommodation — university dormitory', amount: '€100–€200/month', note: 'Hungarian university dormitories are among the most affordable in Europe. Stipendium Hungaricum includes HUF 40,000/month (~€98) accommodation support — at most universities this fully covers the dormitory fee.' },
      { label: 'Accommodation — shared flat (Budapest vs regional cities)', amount: '€250–€500/month (Budapest) · €150–€350/month (Debrecen/Szeged/Pécs)', note: 'Budapest is significantly more expensive than regional cities for private housing. Students who choose Debrecen, Szeged, or Pécs achieve meaningfully lower total budgets without sacrificing academic quality.' },
      { label: 'Food, daily expenses, and transport', amount: '€200–€400/month', note: 'Budapest student transport pass is ~€15/month. University canteens offer affordable meals. Hungarian cities are significantly cheaper than Western European capitals for groceries, dining out, and entertainment.' },
      { label: 'Health insurance + visa financial proof', amount: '€70–€100/month insurance + ~HUF 200,000/month (~€500) liquid funds', note: 'Health insurance is mandatory (~€70–€100/month, common provider: MEDIA). Stipendium Hungaricum scholarship letter fully satisfies the financial proof requirement — self-funded students must show liquid funds.' },
    ],
    costCallout: 'Part-time work rights: Non-EU students in Hungary can work up to 24 hours per week during the semester and full-time during university holidays, once in possession of a valid residence permit. Hungary\'s national minimum wage increased in 2026 to HUF 322,800/month (~€840). Hourly rates for student jobs in retail, hospitality, and tutoring range from approximately €4–€8 per hour. Part-time income covers living expenses in smaller Hungarian cities comfortably but should not be planned as the primary funding source.',
    scholarshipsIntro: 'Hungary\'s scholarship situation for Indian students is unusually favourable compared to most European countries. The government has made a deliberate diplomatic commitment to attracting Indian talent through the Stipendium Hungaricum, and the 200 India-specific seats make this one of the most accessible government scholarships in Europe for Indian applicants.',
    scholarships: [
      {
        name: 'Stipendium Hungaricum — Hungarian Government (200 India-Specific Seats)',
        description: 'The flagship Hungarian government scholarship and the primary reason Hungary has grown so significantly as a study destination for Indian students. Administered by the Tempus Public Foundation under Hungary\'s Ministry of Foreign Affairs, running through a bilateral agreement with India\'s University Grants Commission (UGC). Covers 100% tuition fee waiver, monthly living stipend of HUF 43,700 (~€107, ~₹10,500) for bachelor\'s and master\'s students, monthly accommodation support of HUF 40,000 (~€98) covering most dormitory costs, medical insurance up to HUF 65,000/year, and international airfare (UGC commitment under the 2026–27 bilateral agreement). PhD students receive HUF 140,000–180,000/month (~€343–€441). The 200 seats are split: 50 undergraduate, 75 postgraduate, 30 PhD, 40 part-time research, 5 language studies. Indian applicants must submit simultaneously on two portals — the Stipendium Hungaricum portal (apply.stipendiumhungaricum.hu) and UGC India hard copy submission. For the 2027–28 cycle, the portal opens November 2026 and closes January 2027.',
        coverage: 'Full tuition + HUF 43,700/month stipend + HUF 40,000/month accommodation + health insurance + airfare',
      },
      {
        name: 'Erasmus Mundus Joint Masters — EU-Funded',
        description: 'Hungarian universities participate as consortium members in several Erasmus Mundus Joint Master\'s degree programs — EU-funded joint degrees spanning multiple European universities. Non-EU students selected for Erasmus Mundus awards receive approximately €24,000 per year covering tuition, a monthly living allowance, and travel grants. The application is submitted directly to the degree consortium — no government nomination or country quota is required. Acceptance rates are typically under 10%, but Indian students with strong academic profiles and well-targeted applications win these consistently.',
        coverage: '~€24,000/year — tuition + living stipend + travel allowance',
      },
      {
        name: 'CEEPUS — Central European Exchange Programme',
        description: 'A regional academic mobility programme covering Hungary alongside Austria, Czech Republic, Slovakia, Slovenia, Poland, Romania, Bulgaria, and several Western Balkan countries. CEEPUS provides short-term mobility grants — typically one to ten months — for students already enrolled at a CEEPUS network university. Useful for research placements, semester exchanges, and academic visits within the network after initial enrollment in Hungary.',
        coverage: 'Monthly mobility grants for short-term exchanges within the CEEPUS network',
      },
      {
        name: 'University Merit Scholarships — BME, ELTE, Semmelweis, Debrecen, Szeged',
        description: 'Most Hungarian universities offer partial tuition reduction scholarships for high-achieving international applicants, assessed as part of the admissions process rather than through a separate competitive application. These typically cover 20–50% of tuition and are confirmed alongside the admission offer. For self-funded students who do not secure Stipendium Hungaricum, these partial awards meaningfully reduce the annual tuition cost.',
        coverage: '20–50% tuition reduction, varies by institution and program',
      },
      {
        name: 'PhD Doctoral Fellowships',
        description: 'Hungarian doctoral programs at national research universities often come with tuition waivers and stipends for students working on funded research projects — particularly in natural sciences, engineering, and pharmaceutical sciences. Available to international students on the same basis as Hungarian doctoral candidates. For students targeting a PhD outside the Stipendium Hungaricum route, identifying a funded research group and contacting a prospective supervisor before the formal application is the most effective pathway.',
        coverage: 'Varies — tuition waiver plus research stipend common for funded PhD positions',
      },
    ],
    visaIntro: 'Hungary\'s Type D study visa is one of the most straightforward in the EU — and with an average processing time of approximately 2 weeks, it is the fastest student visa processing time in Europe. Here is how the process unfolds step by step.',
    visaNote: 'Important note for Stipendium Hungaricum recipients: Scholarship holders receive a PEF (Pre-Entry Form) permit in some cases rather than the standard Type D visa. The Hungarian university and the Tempus Public Foundation guide scholarship holders through this specific variation. Self-funded students follow the standard Type D route described below.',
    visaSteps: [
      { title: 'University admission and acceptance letter', description: 'The process begins with a confirmed offer letter from a recognised and accredited Hungarian university. For self-funded students, most universities also require payment of the first semester\'s or year\'s tuition fees — or at minimum a tuition deposit — before issuing the final acceptance document needed for visa purposes. Stipendium Hungaricum recipients receive their placement letter after the scholarship process is coordinated by the Tempus Public Foundation and the host university.' },
      { title: 'Accommodation confirmation', description: 'Hungarian visa applications require proof of accommodation — either a university dormitory allocation letter, a signed rental agreement, or a formal housing guarantee from the institution. Most universities automatically offer dormitory allocation to newly admitted international students. This document cannot be substituted with a hotel booking confirmation.' },
      { title: 'Document preparation', description: 'The full document set for the Type D visa application includes: completed Type D visa application form, valid passport (minimum 6 months validity beyond the intended course end date), university acceptance letter on institutional letterhead, proof of accommodation in Hungary, financial proof showing approximately HUF 200,000/month (~€500) in liquid accessible funds — or a Stipendium Hungaricum scholarship letter (which fully satisfies this requirement), valid health insurance with minimum €30,000 coverage, 2 recent passport photographs, and a clean criminal record certificate (required by some consulates).' },
      { title: 'VFS Global appointment', description: 'Hungary student visa applications in India are submitted at VFS Global centres in Delhi, Mumbai, Chennai, Bengaluru, and Kolkata. The visa application fee is €60 plus VFS service charges. Biometrics — fingerprints and a photograph — are collected at the appointment. Processing takes approximately 2 weeks under standard conditions — significantly faster than Germany (6–8 weeks), France (3–6 weeks), or the UK (3 weeks). Hungary\'s overall student visa approval rate for well-prepared applications is among the highest in the EU.' },
      { title: 'Arrival and residence permit (within 30 days)', description: 'The Type D visa allows initial entry into Hungary. Within 30 days of arrival, a Residence Permit for Study Purposes must be applied for at the local Government Office (Kormányablak) — this is the formal immigration document covering the full duration of the course. Standard processing time at the immigration authority is 30 days. Required documents include the passport with Type D visa, university enrollment certificate, accommodation proof, financial evidence, and health insurance. The residence permit is valid for one year initially and renewed annually.' },
      { title: 'Address registration and practical setup', description: 'Within the first weeks of arrival, the home address must be registered at the local Government Office — this generates a Hungarian tax identification number (adóazonosító jel) required for opening a bank account, enrolling in public health services, and signing official contracts. OTP Bank, K&H, and Raiffeisen are the most commonly used banks among international students. University international offices assist with all of this during the first orientation week.' },
    ],
    visaWarning: {
      title: 'After Graduation — The EU Blue Card and the European Career Arc',
      paragraphs: [
        'Hungary has a Residence Permit for Job Seeking or Starting a Business available to final-year students at Hungarian universities. This allows graduates to remain in Hungary after completing their degree to seek employment without needing to leave the country and reapply from India. Once a qualifying job offer is secured, graduates transition to either a standard work permit or the EU Blue Card for highly skilled roles. The minimum gross monthly salary for EU Blue Card eligibility in Hungary from January 2026 is HUF 1,001,048/month (~€2,600) for most professions.',
        'The EU Blue Card\'s most significant advantage for Indian graduates is transferability — after 12 months of employment on a Hungarian EU Blue Card, the holder can apply to move it to another EU member state (Germany, the Netherlands, Austria) without restarting the immigration process from zero. This makes Hungary\'s EU Blue Card a structured and legitimate stepping stone to higher-wage EU labour markets. Pathway to permanent residency: after 8 years of legal residence in Hungary, Indian graduates can apply for Hungarian permanent residency. However, an EU Blue Card earned in Hungary and transferred to Germany contributes to the German PR timeline — making Hungary the starting point of a longer European career arc.',
      ],
    },
    faqs: [
      { question: 'Is a Hungarian degree recognised in India and internationally?', answer: 'Yes. Degrees from Hungarian universities are recognised by the Association of Indian Universities (AIU). As EU member state institutions, Hungarian degrees are recognised across all 27 EU member states for employment and further study. For Indian students in medicine, the NMC screening test is required to practice in India — the same requirement that applies to any medical degree obtained outside India, whether from the UK, Eastern Europe, or anywhere else.' },
      { question: 'How does Hungary compare to Germany for cost and outcomes?', answer: 'General program tuition in Hungary (€2,500–€8,000/year) is comparable to the effective cost in Germany when accounting for the blocked account requirement and semester fees. Living costs in Debrecen, Szeged, or Pécs are lower than any major German city. The Stipendium Hungaricum is more accessible than DAAD — a 60% minimum threshold and 200 India-specific seats versus DAAD\'s competitive open pool. Germany\'s post-graduation pathway is structurally stronger — 18-month job seeker visa, a broader English-medium corporate job market, and a faster PR timeline via EU Blue Card. For students prioritising an EU degree at the lowest financial investment with the most accessible scholarship route, Hungary competes strongly.' },
      { question: 'What programs are most popular with Indian students in Hungary?', answer: 'Medicine and dentistry account for the largest share of Indian students in Hungary by a significant margin — the combination of English-taught programs, EU-recognised degrees, NMC eligibility, and costs far below the UK makes Hungary a compelling choice. Engineering, pharmacy, and computer science at BME and ELTE are the next most popular. Business and management programs attract a smaller but growing cohort.' },
      { question: 'When should the process begin for the 2027–28 Stipendium intake?', answer: 'Preparation must begin by October 2026 at the latest. The portal is expected to open in November 2026, the Tempus deadline will fall around 15 January 2027, and the UGC India hard copy deadline will be approximately 22 January 2027. Motivation letters, program research, document gathering, and any required translations should all be complete before the portal opens in November.' },
      { question: 'What intake periods are available?', answer: 'The main intake is September (autumn) — the vast majority of programs, all Stipendium Hungaricum placements, and the largest cohort of international students arrive in September. A secondary February (spring) intake exists at some universities and programs, but program availability is narrower and Stipendium Hungaricum placements are generally not available for February starters. September is the correct target for most Indian students.' },
      { question: 'What is the food situation for Indian students?', answer: 'Budapest has a growing Indian food presence — restaurants, grocery stores, and South Asian community organisations are well-established in the capital. In smaller cities like Debrecen and Szeged, options are more limited but improving, and most Indian students cook the majority of their meals at home. Ingredients — lentils, rice, chickpeas, basic spices, atta — are available at Asian supermarkets in all major cities. Vegetarian options in Hungarian restaurants are limited (Hungarian cuisine is heavily meat-based) but university canteens typically include vegetarian choices.' },
    ],
    citiesIntro: 'Hungary\'s universities are spread across four main cities. The choice of city meaningfully affects your total annual cost — Debrecen, Szeged, and Pécs are significantly more affordable than Budapest in both accommodation and daily living, without sacrificing academic quality.',
    cities: [
      { name: 'Budapest', monthlyCost: '€450–€700/month', description: 'Hungary\'s capital and home to Semmelweis University, BME, and ELTE — the strongest institutions for medicine, engineering, and research. One of Europe\'s most beautiful and liveable capitals, with excellent public transport, a large international student community, and vibrant cultural life. The most expensive city in Hungary but still cheaper than any Western European capital.' },
      { name: 'Debrecen', monthlyCost: '€300–€500/month', description: 'Hungary\'s second city and home to the University of Debrecen — the most internationally active university in Hungary with over 6,500 international students from 120+ countries. Considerably more affordable than Budapest in accommodation and daily living. A compact, student-friendly environment and the most common placement city for Stipendium Hungaricum scholarship recipients.' },
      { name: 'Szeged', monthlyCost: '€250–€450/month', description: 'Hungary\'s third-largest city and home to the University of Szeged, which is particularly strong in pharmaceutical sciences, medicine, and natural sciences. One of the most affordable university cities in Hungary. Smaller and quieter than Budapest or Debrecen, with a genuinely warm student culture and low day-to-day living costs.' },
      { name: 'Pécs', monthlyCost: '€200–€400/month', description: 'One of Central Europe\'s oldest university cities, with the University of Pécs offering well-regarded programs in medicine, law, business, and engineering. Architecturally beautiful and historically rich — Pécs was a European Capital of Culture in 2010. Arguably the most affordable student city in Hungary and a frequently overlooked gem for students prioritising the lowest total cost of study.' },
    ],
    language: {
      question: 'Do you need Hungarian to study in Hungary?',
      paragraphs: [
        'For study, no. All programs Indian students primarily target — medicine at Semmelweis and Debrecen, engineering at BME, sciences and computer science at ELTE, and most postgraduate programs — are taught entirely in English. IELTS 5.0–6.5 or TOEFL iBT 60–90 is the standard English proficiency requirement depending on the university and program. Most Hungarian universities also accept a Medium of Instruction (MOI) certificate from a previous English-medium institution in lieu of IELTS, which most Indian graduates from recognised universities can obtain.',
        'For daily life, Hungarian is useful but not essential in Budapest, Debrecen, or any major university city. In government offices and smaller towns, basic Hungarian phrases help significantly. For long-term employment within Hungary, Hungarian language proficiency is important for any role beyond international companies. Students intending to build careers specifically within Hungary — rather than transitioning elsewhere in Europe — typically invest in reaching B1 conversational Hungarian during their studies.',
      ],
      callout: 'Practical advice: The Hungarian Cultural Centre in New Delhi offers Hungarian language courses. The Duolingo Hungarian course is a reasonable starting point for basics before departure. Hungarian is a complex language but the alphabet is Latin-based and phonetic — reading signage and menus comes quickly even without spoken fluency, and most students pick up sufficient daily conversational Hungarian through immersion within the first year.',
    },
  },

  // ─── UAE ─────────────────────────────────────────────────────────────────────
  UAE: {
    heroTagline: 'Three hours from Mumbai, zero income tax, a massive Indian community, and the world\'s most unique long-term residency offer for graduates. The UAE is no longer just a stopover city — it is one of the smartest study decisions an Indian student can make in 2026.',
    quickStats: [
      { value: '₹9L–18L', label: 'Tuition per year' },
      { value: '4.36M', label: 'Indians living in UAE' },
      { value: '0%', label: 'Income tax' },
      { value: '10 yrs', label: 'Golden Visa for top graduates' },
    ],
    whyTitle: 'The destination most Indian families haven\'t considered — but should',
    whyParagraphs: [
      'There is a version of the study abroad decision that most Indian families have not thought through properly. The US, UK, Canada, and Australia dominate the conversation — but each of those countries is either tightening its immigration rules, raising its costs, or reducing its post-study work rights. The UAE has been doing the opposite. In 2024–25, the number of Indian students choosing the UAE jumped by 67%. Over 1.85 lakh Indian students are now studying there. The reasons are straightforward once you look at them clearly.',
      'The most obvious one is proximity. A flight from Mumbai or Delhi to Dubai takes three to four hours. Your family can visit for a long weekend. If something happens at home, you can be back the same day. No other serious study destination — not the UK, not Germany, not Australia — comes close on this. For Indian families where the emotional weight of sending a child abroad is real, this changes the calculation entirely.',
      'Then there is the tax question. The UAE has zero personal income tax. A student earning AED 5,000 per month from a part-time job keeps every dirham of it. A graduate earning AED 12,000 per month in their first job takes home the same. In the UK, Australia, or Canada, 20–30% of that would go to the government. Over a career, this compounds significantly. The UAE is also home to 4.36 million Indians — the largest expat community in the country, making up roughly 30% of the total population. In Dubai and Abu Dhabi, Hindi, Gujarati, Malayalam, and Tamil are heard everywhere. The adjustment period that can define the first semester abroad for students going to the UK or Australia barely exists here.',
    ],
    whyCallout: 'What the India–UAE Mobility Pact (January 2026) changes: A landmark agreement between the two governments introduced 48-hour fast-track student visa processing for Indian applicants, mutual recognition of academic credits, and new sandwich degree formats that allow students to split their course between an Indian institution and a UAE university. It is the most significant policy shift between the two countries on education in a decade.',
    whyCalloutType: 'gold',
    universitiesIntro: "The UAE's higher education landscape is divided into two broad types. Government-funded research universities — Khalifa University, MBZUAI, UAE University — operate at international standards and offer heavily subsidised or fully funded education. International branch campuses — Heriot-Watt Dubai, University of Birmingham Dubai — offer UK or Australian degrees at a UAE location. Understanding this distinction matters, because the cost, culture, and career pathway from each type are very different.",
    universitiesDetailed: [
      {
        rank: 'QS #170 Globally (2026)',
        name: 'Khalifa University',
        location: 'Abu Dhabi — Government research university',
        description: "Abu Dhabi's flagship STEM research institution and one of the fastest-rising universities in the world. Khalifa focuses entirely on science, engineering, and technology — aerospace, petroleum engineering, AI, cybersecurity, sustainable energy. The research funding is extraordinary: the university has direct pipelines to ADNOC, Mubadala, Etihad, and major UAE government entities. Almost all admitted international postgraduate students receive a full scholarship including tuition, monthly stipend, flights, and visa — no separate scholarship application is required. If you are a strong STEM student, Khalifa should be the first name on your list.",
        tags: ['Full scholarship standard', 'STEM & engineering', 'Abu Dhabi industry links'],
        fees: '₹0 with scholarship + AED 4,000–20,000/month stipend',
        featured: true,
      },
      {
        rank: 'World\'s Top AI University',
        name: 'MBZUAI',
        location: 'Abu Dhabi — Mohamed bin Zayed University of AI',
        description: "One of the most unusual universities in the world — it offers only master's and PhD programs in Artificial Intelligence, and every single admitted student gets a full scholarship, automatically. No separate application required — if you are admitted, you are funded. The stipend is AED 15,500 per month for master's students and AED 17,500 for PhD students, which is among the highest graduate stipends anywhere in the world. MBZUAI's faculty and research infrastructure are genuinely world-class — NVIDIA supercomputing facilities, partnerships with leading AI labs globally, and direct access to the UAE's booming AI industry. For Indian students with a strong background in CS, mathematics, or engineering targeting a career in AI, this is arguably the best-value option on earth right now.",
        tags: ['100% of students funded', 'AI & machine learning only', 'AED 15,500–17,500/month stipend'],
        fees: '₹0 — all students fully funded',
        featured: true,
      },
      {
        rank: 'QS #229 Globally (2026)',
        name: 'UAE University (UAEU)',
        location: 'Al Ain — UAE\'s oldest and largest national university',
        description: "The UAE's oldest national university, founded in 1976, and one of the most research-active in the region. UAEU is a comprehensive institution covering engineering, business, science, humanities, and medicine. Graduate assistantships are available in most departments — these combine partial tuition coverage with a monthly stipend in exchange for teaching or research assistance. Al Ain is quieter and considerably more affordable than Dubai or Abu Dhabi, making UAEU one of the most cost-effective choices for a serious research degree in the UAE.",
        tags: ['Graduate assistantships', 'All disciplines', 'Most affordable major UAE university'],
        fees: 'AED 40,000–75,000/year (₹10L–19L)',
      },
      {
        rank: 'QS #272 Globally (2026)',
        name: 'American University of Sharjah',
        location: 'Sharjah — accredited US-style comprehensive university',
        description: "The strongest all-round private university in the UAE for Indian students who want a US-style academic experience without US prices. AUS is accredited by the Middle States Commission on Higher Education (USA) — the same body that accredits NYU and Georgetown — which means its degree carries genuine US recognition. Strong across architecture, engineering, business, and the humanities. Sharjah is cheaper to live in than Dubai while remaining minutes from the city. Scholarships here are merit-based and cover 25–100% of tuition depending on academic profile.",
        tags: ['US accreditation', 'Architecture & engineering', 'Merit scholarships 25–100%'],
        fees: 'AED 88,000–110,000/year (₹22L–28L) before scholarships',
      },
      {
        rank: 'UK degree, UAE location',
        name: 'Heriot-Watt University Dubai',
        location: 'Dubai International Academic City',
        description: "A full branch campus of Heriot-Watt University, one of the UK's strongest institutions for engineering and business. Graduates receive the same Heriot-Watt degree as students studying in Edinburgh — recognised by UK employers and globally — at roughly 40% lower cost than the Edinburgh campus. Popular with Indian students targeting engineering, data science, and MBA programs who want a UK-recognised degree with the lifestyle and proximity advantages of Dubai. Partial merit scholarships of 10–30% are commonly available.",
        tags: ['UK degree recognised globally', 'Engineering & MBA', '40% cheaper than Edinburgh'],
        fees: 'AED 55,000–90,000/year (₹14L–23L)',
      },
      {
        rank: 'Familiar Indian brand',
        name: 'BITS Pilani Dubai',
        location: 'Dubai International Academic City',
        description: "A campus of BITS Pilani — one of the most respected engineering institutions in India — awarding the same BITS degree as the campuses in Pilani, Goa, and Hyderabad. For Indian families and employers, the BITS brand carries immediate recognition that most UAE branch campuses simply do not. Strong in computer science, electronics, and mechanical engineering. The fees are comparable to other private UAE institutions, and the degree's recognition with Indian employers is a genuine differentiator.",
        tags: ['BITS Pilani degree — Indian recognition', 'Engineering & CS', 'Dubai location'],
        fees: 'AED 60,000–85,000/year (₹15L–22L)',
      },
    ],
    costsIntro: 'The UAE sits in a cost bracket that surprises many Indian students — more affordable than the UK or Australia, but more expensive than South Korea or Germany. The key variable is which city and which type of university. One factor that changes the true cost significantly is the zero income tax — a student working part-time keeps every dirham earned. When comparing the real cost of studying in the UAE versus the UK or Australia, post-tax earnings from part-time work close a significant portion of the gap.',
    costs: [
      { label: 'Tuition — government universities (UAEU, AUS)', amount: 'AED 40,000–80,000/year (₹10L–20L)', note: 'Khalifa University and MBZUAI are fully funded for most students — the effective cost is zero.' },
      { label: 'Tuition — international branch campuses', amount: 'AED 55,000–110,000/year (₹14L–28L)', note: 'Merit scholarships of 10–30% commonly available at Heriot-Watt, Middlesex, and University of Birmingham Dubai.' },
      { label: 'Accommodation — Sharjah (shared flat)', amount: '₹19,000–₹33,000/month', note: 'Sharjah is the most affordable emirate and is within easy metro and bus reach of Dubai universities.' },
      { label: 'Accommodation — Dubai or Abu Dhabi (shared flat)', amount: '₹30,000–₹60,000/month', note: 'University hostels where available are significantly cheaper (₹16,000–₹27,000). Khalifa and MBZUAI provide on-campus housing as part of their scholarship packages.' },
      { label: 'Living costs (food, transport, insurance, materials)', amount: '₹20,000–₹35,000/month', note: 'Indian grocery stores are widely available and significantly cheaper than eating out. The Dubai metro and bus system is excellent and affordable. Health insurance is mandatory.' },
      { label: 'Visa costs (entry permit + medical + Emirates ID + insurance)', amount: 'AED 7,000–8,500 one-time (~₹1.8L–2.2L)', note: 'Paid once on arrival and renewed annually. At Khalifa and MBZUAI, all visa costs are covered by the scholarship.' },
    ],
    costCallout: 'Part-time work in 2026: Students on a UAE student visa can work up to 15 hours per week during the semester with a MOHRE Part-Time Work Permit — the employer handles the permit, the student only needs a No Objection Certificate (NOC) from the university. During vacations, the hours limit is lifted. Campus jobs typically pay AED 40–80 per hour — all of it tax-free.',
    postGradInfo: 'The UAE does not have a formal post-study work visa. After graduation there is a 30-day grace period to transition status — job hunting should begin three to six months before graduation. If an employer makes an offer, they can sponsor an employment visa within 2–3 weeks. For exceptional graduates — GPA 3.75+ from an accredited UAE university, or a degree from a globally top-100 institution — the 10-year Golden Visa provides self-sponsored residency with no employer dependency. No other study destination offers anything comparable.',
    scholarshipsIntro: "The UAE's scholarship landscape is different from most other countries: at the top government universities, financial support is not competitive in the traditional sense. At MBZUAI, every admitted student is funded automatically. At Khalifa University, the scholarship assessment happens during the admissions review with no separate form required.",
    scholarships: [
      {
        name: 'MBZUAI Full Scholarship — All admitted students',
        description: 'Every student admitted to a full-time master\'s or PhD program at Mohamed bin Zayed University of AI receives complete financial support automatically — no separate application. The package covers 100% tuition, UAE student visa fees, health insurance, and on-campus housing. Monthly stipend: AED 15,500 (~₹3.9L) for master\'s and AED 17,500 (~₹4.4L) for PhD students — among the highest graduate stipends of any university in the world. Admission threshold: bachelor\'s in CS, engineering, mathematics, or related field with minimum GPA 3.2/4.0 and IELTS 6.5 or equivalent.',
        coverage: 'Full tuition + AED 15,500–17,500/month + visa + housing',
      },
      {
        name: 'Khalifa University Scholarship',
        description: "Khalifa University's scholarship for international postgraduate students covers full tuition, a monthly stipend of AED 4,000–20,000 (depending on award level), health insurance, return flights between India and Abu Dhabi, and UAE visa costs. The scholarship is assessed automatically during admission — not through a separate competitive process. Strong candidates in engineering, AI, petroleum, aerospace, and sustainable energy are the primary beneficiaries. Research partnerships with ADNOC, Mubadala, and the UAE Space Agency give scholarship students access to industry projects from the first semester.",
        coverage: 'Full tuition + AED 4,000–20,000/month + flights + visa',
      },
      {
        name: 'American University of Sharjah Merit Scholarships',
        description: 'AUS offers merit-based scholarships covering 25% to 100% of tuition fees for high-performing undergraduate and postgraduate students. Typically requires 85%+ in Class 12 for undergraduates and a strong undergraduate GPA for postgraduates. Assessed as part of the admissions process and renewed annually based on academic performance. AUS also offers need-based financial aid through its Financial Assistance Program.',
        coverage: '25–100% tuition waiver, merit-based',
      },
      {
        name: 'UAEU Graduate Assistantships',
        description: 'UAE University offers graduate assistantships in most departments combining partial or full tuition coverage with a monthly stipend in exchange for research or teaching assistance. Available to master\'s and PhD students and assigned through the relevant department head. Stipend ranges from AED 2,000 to AED 5,000 per month depending on the department and role. A strong funding pathway into a ranked UAE institution at relatively low cost for research-focused students.',
        coverage: 'Partial to full tuition + AED 2,000–5,000/month stipend',
      },
      {
        name: 'KHDA Merit Waivers — Dubai private universities',
        description: 'The Knowledge and Human Development Authority (KHDA), which regulates higher education in Dubai, facilitates merit-based scholarship waivers across all licensed private universities. Most Dubai branch campuses — Heriot-Watt, Middlesex, University of Birmingham Dubai, Manipal — offer merit waivers of 10–40% of tuition for students with strong academic profiles. On fees already 30–40% lower than the home campus in the UK or Australia, a 30% waiver makes the total cost highly competitive.',
        coverage: '10–40% tuition waiver at participating Dubai universities',
      },
    ],
    visaIntro: 'The UAE student visa is a residence permit — not a single entry stamp — meaning it allows students to live in the UAE for the full duration of their program. The university acts as the sponsor and manages the majority of the process. Here is how it unfolds from the point of receiving an offer.',
    visaNote: 'Critical — Document attestation: This is the step that catches most Indian students off guard. Academic documents must go through a multi-step attestation chain before being accepted in the UAE: notarisation in India → state education department attestation → MEA Apostille from New Delhi → UAE Embassy attestation in India → MOFA attestation in the UAE (usually handled by the university after arrival). This chain takes 2–4 weeks and costs approximately ₹5,000–10,000 per document. Starting this process immediately after receiving the offer letter is essential.',
    visaSteps: [
      { title: 'University offer and initial payment', description: 'Once an offer is confirmed and accepted, the university raises an invoice for the registration fee and an initial tuition deposit — typically 10–25% of the first semester\'s fees (AED 5,000–15,000). Most universities also collect a visa processing fee of AED 1,000–3,000. There is also a Visa Maintenance Charge of AED 2,500 held by many universities for the duration of the program — worth asking about specifically, as it does not always appear in the headline fee schedule.' },
      { title: 'Document attestation in India', description: 'The full attestation chain for academic certificates must be completed before the visa can be processed. Sequence: notarisation by a public notary → state education department attestation → MEA Apostille from New Delhi → UAE Embassy attestation. This takes 2–4 weeks if started promptly. Courier and government fees across the chain run ₹5,000–10,000 per document. The MOFA attestation in the UAE is typically completed after arrival with university assistance.' },
      { title: 'Student Entry Permit issued by the university', description: "The university's student affairs office applies to the UAE General Directorate of Residency and Foreigners Affairs (GDRFA) for a Student Entry Permit on the student's behalf. Standard processing takes 14 working days; express processing takes 7–10 working days at additional cost. The Entry Permit is emailed as a digital document and is what allows entry into the UAE — it is not the final residence visa, but the gateway to completing the process on arrival." },
      { title: 'Arrival and mandatory medical fitness test', description: 'Upon arriving in the UAE, the first required step is a mandatory medical fitness examination at a health authority-approved centre, covering blood tests for communicable diseases. The medical test result is linked directly to the residence visa application and typically takes 1–3 working days. The university\'s student affairs team guides this process.' },
      { title: 'Emirates ID biometrics and residence visa stamping', description: 'Once the medical test clears, biometric data — fingerprints and a photograph — is collected for the Emirates ID, which is the primary identity document for all UAE residents. The residence visa is then stamped in the passport and the Emirates ID card issued within a few days. From this point, the student is a legal UAE resident and can open a bank account, get a SIM card, sign a lease, and access all government services. The student visa is issued for one year and renewed annually through the university.' },
      { title: 'Health insurance activation', description: 'Health insurance is mandatory for all UAE residents, including students. Most universities include health insurance in their visa package — it is activated upon residence visa issuance. Coverage typically includes outpatient consultations, emergency care, hospitalisation, and basic dental. The annual cost of ₹15,000–20,000 is usually bundled into the visa fee. Students at Khalifa University and MBZUAI have health insurance fully covered by their scholarship.' },
    ],
    visaWarning: {
      title: 'The Golden Visa — what no other country offers',
      paragraphs: [
        'The UAE Golden Visa is a 10-year renewable self-sponsored residence permit that requires no employer and no sponsor. For graduating students, it is available to those who complete a bachelor\'s degree from an accredited UAE university with a cumulative GPA of 3.75 or higher, or from a globally top-100 ranked institution. Master\'s and PhD graduates from top-100 universities also qualify.',
        'What this means practically: a strong student who graduates from Khalifa University, AUS, or a branch campus of a top-100 UK or Australian university with a good GPA can remain in the UAE for 10 years, work for any employer, sponsor their own family members, and switch jobs without losing residency — all without employer dependency. The UK\'s Graduate Route lasts 2 years. Australia\'s post-study work visa is 2–4 years. The UAE Golden Visa is 10 years, renewable, and self-sponsored.',
      ],
    },
    faqs: [
      { question: 'Are UAE degrees recognised in India and internationally?', answer: 'It depends on the institution. Degrees from branch campuses — Heriot-Watt Dubai, University of Birmingham Dubai, Middlesex Dubai — carry the same accreditation as the home campus in the UK or Australia. Government university degrees from Khalifa, MBZUAI, and UAEU are recognised by the UAE Ministry of Education and have growing international recognition. BITS Pilani Dubai awards the same degree as the India campuses, with direct Indian employer recognition. The key is to verify that the specific university is licensed by the UAE\'s Commission for Academic Accreditation (CAA) before enrolment.' },
      { question: 'What happens after graduation — is there a post-study work visa?', answer: 'The UAE does not have a formal post-study work visa. After graduation, the student visa expires and there is a 30-day grace period to transition status — this window is for paperwork, not job hunting, which should begin 3–6 months before graduation. If an employer makes an offer, they can sponsor an employment visa within 2–3 weeks. For exceptional graduates — GPA 3.75+ or a degree from a top-100 global university — the Golden Visa provides 10-year self-sponsored residency without needing an employer at all.' },
      { question: 'Do I need IELTS to study in the UAE?', answer: 'Most UAE universities require proof of English proficiency. IELTS 6.0–6.5 is the standard threshold; Khalifa University and AUS typically require 6.5 or above. However, students who completed their previous degree entirely in English — which applies to most Indian graduates — may be exempt from the IELTS requirement at many institutions. Each university\'s specific policy varies and is worth confirming directly during the application process.' },
      { question: 'Can family members accompany a student to the UAE?', answer: 'Yes — and this is one of the UAE\'s most significant advantages over other destinations. Students can sponsor immediate family members (spouse and children) on a dependent visa, subject to meeting a minimum income threshold. This is not possible for most student visa categories in the UK, Canada, or Australia. Spouses can also apply for separate work authorisation, though this is not automatic. For married students, the UAE is effectively the only major study destination where family accompaniment is genuinely straightforward.' },
      { question: 'How does the cost compare to the UK or Australia?', answer: 'For branch campus degrees (Heriot-Watt, Middlesex, Birmingham), UAE tuition is typically 30–45% lower than the equivalent course at the home campus in the UK or Australia. Add tax-free part-time earnings, lower food and transport costs (particularly if living in Sharjah), and proximity to India that eliminates expensive annual return flights — and the overall cost is significantly lower. For fully-funded students at Khalifa or MBZUAI, the comparison is no contest: the cost is zero, the stipend is generous, and the career pathway into the Gulf and global AI sectors is exceptional.' },
      { question: 'Is the UAE safe and suitable for students living independently?', answer: 'The UAE is one of the safest countries in the world, with extremely low crime rates and a well-regulated urban environment. Dubai and Abu Dhabi regularly rank among the safest cities globally for expats. For Indian students, the familiarity of the environment — large Indian community, Indian food everywhere, Hindi widely spoken in service settings — means the psychological adjustment period that defines the first semester abroad in Western countries is much shorter here. Female students living independently report strong feelings of safety across all three major emirates.' },
    ],
    citiesIntro: 'The UAE is a federation of seven emirates, and the three that matter most for students are Dubai, Abu Dhabi, and Sharjah. Each has a distinct cost profile, culture, and university ecosystem. Many students live in Sharjah — the most affordable — and commute to universities in Dubai.',
    cities: [
      { name: 'Dubai', monthlyCost: '₹30,000–₹60,000/month', description: "The UAE's financial, commercial, and cultural hub. Home to the largest concentration of international branch campuses through Dubai International Academic City (DIAC) — including Heriot-Watt, Middlesex, University of Birmingham, BITS Pilani, and many others. Career networking and industry exposure are unmatched in the region. More manageable in areas like Deira, International City, or Al Quoz." },
      { name: 'Abu Dhabi', monthlyCost: '₹35,000–₹65,000/month', description: "The UAE's capital and home to Khalifa University, MBZUAI, and UAEU (in Al Ain). Quieter and more conservative than Dubai, but its industry connections to ADNOC, Mubadala, Masdar, and the UAE government are extraordinary. For funded students at Khalifa or MBZUAI, living costs are largely covered by the scholarship stipend. The Indian community here is large and well-established." },
      { name: 'Sharjah', monthlyCost: '₹19,000–₹33,000/month', description: "The most affordable emirate for students and home to the American University of Sharjah. More conservative than Dubai in its regulations but has a large, culturally rich atmosphere with a significant Indian and South Asian population. The metro and bus network connects Sharjah to Dubai's universities in 30–45 minutes, making it the most popular base for students who want Dubai proximity without Dubai prices." },
    ],
  },

  // ─── Slovakia ────────────────────────────────────────────────────────────────
  Slovakia: {
    heroTagline: "EU degrees from €0 tuition for Slovak-language programs, NMC-eligible medicine from €8K/year, Vienna in under an hour, and the fastest student visa in Central Europe — Slovakia is the most overlooked affordable EU destination for Indian students.",
    quickStats: [
      { value: 'Free', label: 'Slovak-language program tuition' },
      { value: '€1,500–€8,000', label: 'English-program tuition/year' },
      { value: '20 hrs/week', label: 'Part-time work allowed' },
      { value: '9 months', label: 'Post-study job seeker visa' },
    ],
    whyTitle: 'The EU study destination most Indian students walk past',
    whyParagraphs: [
      'Slovakia is one of the least-discussed EU study destinations among Indian families — and that gap is an opportunity. The country sits at the geographic heart of Europe, bordering Austria, Hungary, the Czech Republic, and Poland, with Vienna reachable by train in under an hour from Bratislava. It is a full EU and Schengen member, which means degrees are EU-recognised, student visas allow travel across 29 European countries, and post-graduation work pathways connect to the broader European labour market.',
      'The financial case is straightforward. Public Slovak universities charge no tuition for Slovak-language programs — this policy applies to all students regardless of nationality. For Indian students willing to invest one year in learning Slovak (manageable through university language programs), an entire European public university degree can cost nothing in tuition. English-taught programs carry fees, but these run €1,500–€8,000 per year — a fraction of what Ireland, the UK, or even the Netherlands charges. For medicine specifically, Comenius University and the Slovak Medical University offer English-medium General Medicine programs that are EU-recognised and meet India\'s NMC eligibility requirements at €8,000–€13,000 per year.',
      'Slovakia also has something many neighbouring EU destinations lack: a very direct visa pathway. The National Visa Type D is applied for directly at the Slovak Embassy in New Delhi, processing takes 15–30 days, and there are no intermediate portal steps like Germany\'s CSP pre-registration, no Campus France interview like France, and no AVATS sequential process like Ireland. It is one of the most straightforward student visa processes in Europe for Indian applicants.',
    ],
    whyCallout: 'One thing worth understanding clearly: Slovakia is a smaller country with a domestic job market that operates primarily in Slovak. Bratislava has a growing multinational corporate presence — Amazon, IBM, Dell, Volkswagen Financial Services — but the English-medium professional market is narrower than in Dublin, Berlin, or Amsterdam. Slovakia works best as either a destination for a specific field (medicine, engineering, business) or as a European degree base from which to transition to a larger EU economy using the EU Blue Card pathway after 12 months of employment.',
    whyCalloutType: 'default',
    universitiesIntro: 'Slovakia has 35 public and private higher education institutions. The ones most relevant to Indian students are concentrated in Bratislava and Košice.',
    universitiesDetailed: [
      {
        rank: 'QS #601–650 Globally',
        name: 'Comenius University in Bratislava (UK)',
        location: 'Bratislava',
        description: "Slovakia's largest and most prestigious university, founded in 1919. Comenius has strong faculties in medicine, law, natural sciences, mathematics, pharmacy, and the social sciences. Its Faculty of Medicine is the most established in the country for English-taught General Medicine programs — the degree is EU-recognised and meets NMC eligibility requirements for India. The Faculty of Management and the Faculty of Mathematics, Physics and Informatics both have English-taught programs at the master's level. Bratislava's location — 60km from Vienna — gives Comenius graduates access to a broader Central European employment network.",
        tags: ['NMC-eligible medicine', 'Management & sciences', 'Bratislava location'],
        fees: '€8,500–€13,000/year (medicine) · €2,000–€5,000/year (other English programs)',
        featured: true,
      },
      {
        rank: 'QS ranked',
        name: 'Slovak University of Technology in Bratislava (STU)',
        location: 'Bratislava',
        description: "Slovakia's leading technical university, focused on engineering, architecture, information technology, and applied sciences. STU has English-taught master's programs in civil engineering, chemical engineering, electrical engineering, and computer science. Strong industry partnerships with Volkswagen, Kia (whose Slovakia plant is the largest per-capita car production facility in Europe), and major IT firms in Bratislava's growing tech sector.",
        tags: ['Engineering & IT', 'Automotive industry links', 'Bratislava'],
        fees: '€2,000–€5,000/year for English-taught programs',
      },
      {
        rank: 'Nationally ranked',
        name: 'University of Economics in Bratislava (EUBA)',
        location: 'Bratislava',
        description: "Slovakia's most affordable option for business and economics education in English. EUBA offers bachelor's and master's programs in international business, economics, finance, and management — with tuition running as low as €1,500/year for bachelor's programs. Active Erasmus+ partnerships give students access to semester exchanges at partner institutions in Germany, the Netherlands, France, and beyond. A genuinely cost-effective entry point into European business education.",
        tags: ['Business & economics', 'Lowest tuition in Slovakia', 'Erasmus+ exchanges'],
        fees: '€1,500/year (bachelor\'s) · €2,500/year (master\'s)',
      },
      {
        rank: 'QS ranked',
        name: 'Technical University of Košice (TUKE)',
        location: 'Košice',
        description: "Slovakia's second technical university, located in Košice — Slovakia's second-largest city in the east. TUKE offers English-taught programs in mechanical engineering, electrical engineering, civil engineering, and informatics. Košice is significantly more affordable than Bratislava in living costs, making TUKE one of the most budget-friendly EU engineering degrees available. IBM, US Steel, and T-Systems have major operations there, creating direct employment links for graduates.",
        tags: ['Engineering & informatics', 'Lower living costs', 'IBM & US Steel presence'],
        fees: '€2,000–€4,500/year for English-taught programs',
      },
      {
        rank: 'Nationally ranked',
        name: 'Pavol Jozef Šafárik University in Košice (UPJŠ)',
        location: 'Košice',
        description: "A comprehensive research university in Košice with particular strength in medicine, natural sciences, law, and public administration. UPJŠ's Faculty of Medicine offers English-medium programs and is a recognised alternative to Comenius for Indian students targeting Slovak medical education at lower overall cost. Košice's lower living costs versus Bratislava make UPJŠ a meaningfully more affordable total package for medical students.",
        tags: ['NMC-eligible medicine', 'Lower total cost than Bratislava', 'Natural sciences'],
        fees: '€8,000–€12,000/year (medicine) · €2,000–€4,000/year (other programs)',
      },
      {
        rank: 'Specialised medical institution',
        name: 'Slovak Medical University (SZU)',
        location: 'Bratislava',
        description: "Slovakia's dedicated postgraduate medical education institution. SZU runs specialised medical training, dental programs, and public health degrees in English. Particularly relevant for Indian students targeting postgraduate medical specialisation in an EU context. Graduates of Indian medical degrees who want to pursue specialist training in an EU-recognised framework can use SZU as the pathway.",
        tags: ['Postgrad medical specialisation', 'Dental programs', 'Public health'],
        fees: '€8,000–€12,000/year',
      },
    ],
    costsIntro: 'Slovakia is one of the most affordable EU destinations for Indian students. The total annual cost — tuition plus living — is competitive with Hungary and lower than most Western European options.',
    costs: [
      { label: 'Tuition — Slovak-language programs (public universities)', amount: 'Free for all students including non-EU', note: 'The free tuition policy applies as long as the student completes the standard program duration without repeating years.' },
      { label: 'Tuition — English-taught programs (general)', amount: '€1,500–€8,000/year', note: 'EUBA is the lowest at €1,500/year. Comenius general programs run €2,000–€5,000/year.' },
      { label: 'Tuition — medicine and dentistry', amount: '€8,000–€13,000/year', note: 'Comenius and UPJŠ medicine. Significantly cheaper than the UK (£30K–£50K) for an EU-recognised NMC-eligible degree.' },
      { label: 'Accommodation — university dormitory', amount: '€100–€250/month', note: 'The most affordable option. Most universities offer priority to international students in their first year.' },
      { label: 'Accommodation — shared flat, Bratislava', amount: '€300–€550/month', note: 'Košice flats run €200–€400/month — meaningfully cheaper than Bratislava.' },
      { label: 'Food, daily expenses & health insurance', amount: '€250–€400/month', note: 'Food €200–€300 + mandatory health insurance €50–€100/month. Student transport pass in Bratislava ~€10–€20/month.' },
    ],
    costCallout: 'Part-time work rights: University students in Slovakia can work up to 20 hours per week without a separate work permit. Slovakia\'s minimum wage increased in 2026 to €816/month full-time — approximately €4.71/hour. Student jobs in retail, hospitality, and tutoring typically pay €5–€9/hour. Working 20 hours at €6/hour generates approximately €480/month — enough to cover most living costs in Košice and a significant portion in Bratislava.',
    postGradInfo: 'After completing a degree, non-EU graduates can apply for a 9-month job seeker residence permit, allowing them to remain in Slovakia while searching for employment. Slovak university graduates are exempt from the labour market test that applies to most non-EU work permit applicants — meaning employers do not need to advertise to EU candidates first. This is a specific and significant advantage. For highly skilled roles, the EU Blue Card (minimum ~€2,700–€3,000/month gross in 2026) is valid for 4 years and — crucially — transferable to any EU member state after 12 months. A Slovak degree can be the starting point for a career in Germany, the Netherlands, or Austria without starting the immigration process from zero.',
    scholarshipsIntro: "Slovakia's scholarship landscape is smaller than Germany's or France's but has genuine options — particularly for students engaging with the Slovak government's mobility programs and EU-wide funding schemes.",
    scholarships: [
      {
        name: 'National Scholarship Programme (NSP) — Slovak Government',
        description: 'The flagship Slovak government scholarship, administered by the Ministry of Education. The NSP covers short-to-medium study stays — it is not a full-degree scholarship in the Stipendium Hungaricum sense, but it is a well-funded mobility award open to students from all countries including India. Monthly stipend of €350/month for master\'s students and €500–€900/month for PhD students and researchers. Indian PhD students are particularly competitive.',
        coverage: '€350–€900/month stipend + travel grant + accommodation support',
      },
      {
        name: 'Slovak Government International Student Scholarships (2026–27 New Program)',
        description: 'A newly introduced scholarship program for full-time bachelor\'s and master\'s students from abroad at Slovak public universities, announced for the 2026–27 academic year. Covers tuition support and monthly allowances for enrolled degree students — distinct from the NSP\'s mobility focus. Funded through Slovakia\'s Recovery and Resilience Plan. Applications managed through the scholarships.portalvs.sk portal. Open to STEM fields and fields aligned with Slovakia\'s economic development needs. Indian students are eligible as non-EU nationals.',
        coverage: 'Tuition support + monthly allowance — exact amounts published per annual call',
      },
      {
        name: 'Erasmus Mundus Joint Masters — EU-Funded',
        description: 'Slovak universities participate in several Erasmus Mundus Joint Master\'s consortia — EU-funded joint degrees delivered across multiple European universities. Indian students selected for Erasmus Mundus awards receive approximately €24,000/year covering full tuition, a monthly living allowance, and travel grants. Competition is strong (acceptance rates under 10%) but Indian students with strong academic profiles win these consistently. The most relevant programs with Slovak involvement cover engineering, environmental science, data science, and international relations.',
        coverage: '~€24,000/year — full tuition + stipend + travel',
      },
      {
        name: 'CEEPUS — Central European Exchange Programme',
        description: 'Slovakia is an active CEEPUS member. Students already enrolled at a Slovak university can participate in semester exchanges and research placements across the CEEPUS network (Hungary, Austria, Czech Republic, Poland, Slovenia, and others) through monthly mobility grants. A useful parallel benefit for students who want to expand their European network while studying in Slovakia.',
        coverage: 'Monthly mobility grants for short-term exchanges',
      },
      {
        name: 'University Merit Scholarships & Erasmus+ Mobility',
        description: 'Most Slovak public universities offer partial fee waivers of 20–40% for high-achieving international applicants, assessed informally during admissions. Once enrolled, students also become eligible for Erasmus+ mobility grants (€300–€500/month) to spend one or two semesters at partner universities across Germany, France, the Netherlands, and Spain. Not tuition scholarships, but meaningful financial support for students who want multi-country study experience during their Slovak degree.',
        coverage: '20–40% tuition reduction (merit) · €300–€500/month Erasmus+ mobility after enrollment',
      },
    ],
    visaIntro: 'Indian students studying full-time in Slovakia for programs longer than 90 days require a National Visa Type D. Unlike most Schengen visas, this D visa is applied for directly at the Slovak Embassy in New Delhi — no VFS Global intermediary. There are no pre-registration portals, no Campus France-style interviews, and no blocked account requirement. The process is more direct than most EU student visa routes.',
    visaNote: 'Critical timing: The Slovak Embassy in New Delhi operates an appointment-based system managed via email. Appointment slots are limited, particularly during the peak July–August period before the September intake. Sending the appointment request email to the Embassy as early as April–May for a September intake is strongly advisable. The Ministry of Interior must provide prior approval before the visa can be issued, which adds 1–3 weeks to processing time.',
    visaSteps: [
      { title: 'University admission and acceptance letter', description: 'The process begins with a confirmed acceptance letter from a recognised Slovak university — accredited by the Slovak Accreditation Agency for Higher Education (SAAHE). The letter must be on official institutional letterhead, state the full-time course duration, and confirm the tuition fee arrangement. For NSP scholarship recipients, the scholarship award letter supplements the acceptance letter.' },
      { title: 'MEA Apostille on academic documents', description: 'All Indian academic certificates — Class 10, Class 12, and bachelor\'s degree certificates and transcripts — must be apostilled through India\'s Ministry of External Affairs (MEA). Simple HRD attestation is not accepted. The MEA Apostille is the specific authentication chain Slovak authorities require, and documents must be apostilled before the Embassy appointment — they cannot be authenticated retrospectively after arrival.' },
      { title: 'Financial proof', description: 'The Slovak Embassy requires proof of at least €4,500 in liquid funds per year (approximately ₹4.2 lakh) to cover living expenses, in addition to evidence of tuition fee payment or a scholarship letter. Funds must be in a clearly accessible bank account — fixed deposits not redeemable within 30 days are not accepted. A scholarship letter from the university or the Slovak government satisfies the financial proof requirement in full.' },
      { title: 'Embassy appointment and document submission', description: 'The visa application is submitted directly at the Slovak Embassy in New Delhi. An appointment must be requested via email to the Embassy\'s consular section. The full document set includes the completed National D visa application form, valid passport, acceptance letter, MEA-apostilled academic documents, financial proof, health insurance (minimum €30,000 coverage), accommodation confirmation, 2 passport photographs, and a police clearance certificate from India. The D visa application fee is approximately €50.' },
      { title: 'Ministry of Interior approval and visa issuance', description: 'Unlike many EU countries where the consulate makes the visa decision independently, Slovak National D visas require prior approval from the Ministry of Interior before the consulate can issue the visa. This adds 1–3 weeks to the processing timeline. Overall processing from appointment date to visa in passport runs 15–30 working days under standard conditions. The visa sticker is placed in the passport and returned via courier or collected in person.' },
      { title: 'Arrival and registration within 3 working days', description: 'Within 3 working days of arriving in Slovakia, students must register with the Aliens Police Department (Cudzinecká polícia) at the local police station. This is mandatory address registration — failure to register within 3 days creates a legal complication. In student dormitories, the university administration typically handles this step automatically. The Temporary Residence Permit for Study Purposes is then applied for at the Aliens Police Department with the full document package and the €165 fee. Processing takes approximately 30 days.' },
      { title: 'Health insurance and university enrollment', description: 'Health insurance is mandatory from day one and must be active before the residence permit application is submitted. Slovak public health insurance (VšZP) is available to enrolled students at approximately €50–€70/month. University enrollment is completed at the faculty\'s international office, presenting the original acceptance letter, passport, and residence permit receipt. The residence permit card becomes the primary identity document in Slovakia for all purposes — bank account, SIM card, and work authorisation.' },
    ],
    visaWarning: {
      title: 'Post-study pathways and EU Blue Card transferability',
      paragraphs: [
        'After completing a degree, non-EU graduates in Slovakia can apply for a 9-month job seeker residence permit — allowing them to remain in Slovakia after graduation to search for employment without returning to India. During this period, part-time work up to 20 hours/week is permitted. Slovak graduates of Slovak universities are exempt from the labour market test that applies to most non-EU work permit applicants — a specific and significant advantage over other non-EU workers entering Slovakia.',
        'For highly skilled roles, the EU Blue Card requires a job offer at a minimum salary of approximately €2,700–€3,000/month gross in 2026. The EU Blue Card is valid for 4 years and — crucially — is transferable to any other EU member state after 12 months of employment. This means a Slovak university graduate who secures an EU Blue Card in Bratislava can, after 12 months, move to Germany, the Netherlands, Austria, or any other EU country using the same Blue Card without starting the immigration process from zero.',
      ],
    },
    faqs: [
      { question: 'Is a Slovak degree recognised in India and internationally?', answer: 'Yes. Degrees from Slovak universities are recognised by the Association of Indian Universities (AIU). As EU member state institutions under the Bologna Process, Slovak degrees are recognised across all 27 EU member states for employment and further study. For Indian students in medicine, the NMC screening test is required to practice in India — the same requirement for any medical degree obtained outside India. Slovak medical degrees from Comenius University and UPJŠ are eligible for the NMC screening test pathway.' },
      { question: 'How does Slovakia compare to Hungary for Indian students?', answer: 'Both are affordable Central European EU destinations with accessible student visa processes. Hungary has the Stipendium Hungaricum — 200 India-specific seats, comprehensive coverage — which Slovakia does not match in scale or structure. Slovakia counters with the free tuition pathway for Slovak-language programs (unique in this region), slightly lower living costs in Košice, and proximity to Vienna which expands the job market radius considerably. Hungary is the stronger scholarship play; Slovakia is the stronger cost play for students willing to learn the language.' },
      { question: 'What CGPA or academic profile is needed for Slovak universities?', answer: 'Requirements are generally more accessible than Western European institutions. Most English-taught programs at Comenius, STU, EUBA, and TUKE accept students with a CGPA of 5.5–6.5 out of 10, though medicine programs are more competitive and look for stronger academic records alongside relevant science subjects. Backlogs are accepted at many Slovak universities — typically up to 5–10 backlogs at non-medical faculties, which makes Slovakia accessible to a broader range of Indian applicants than Germany or France.' },
      { question: 'What is the food situation for Indian students?', answer: 'Bratislava has Indian restaurants and a growing South Asian grocery presence, though smaller than Budapest or Berlin. Most Indian students cook at home — Slovak supermarkets (Tesco, Lidl, Billa) carry lentils, rice, chickpeas, and basic spices. For more specific Indian grocery needs, Budapest is 2.5 hours by train and Vienna is under an hour. Košice has fewer Indian food options than Bratislava but several Asian supermarkets. Vegetarian options in Slovak restaurants are limited — Slovak cuisine is meat-heavy — but university canteens typically include vegetarian choices.' },
      { question: 'What intake periods are available?', answer: "Slovakia's academic year runs September to June, split into two semesters. The main intake is September — the vast majority of programs and all scholarship opportunities are available for September starters. A February intake exists at some universities for second-semester entry, but program availability is limited and scholarship windows are generally tied to September. For most Indian students, September is the correct target. Application deadlines for September intake typically run February–May, with medicine programs having earlier deadlines (December–February) due to higher competition." },
      { question: 'Is Slovakia safe for Indian students?', answer: 'Slovakia consistently ranks among the safer EU countries — crime rates, particularly violent crime, are low. Bratislava and Košice are compact, walkable cities with reliable public transport. The Indian student community in Slovakia is smaller than in Hungary or the Czech Republic but growing, and university international offices provide strong support networks. Slovakia has no significant history of racial tension or incidents targeting South Asian students, and the general population\'s attitude toward international students is reported as neutral to welcoming.' },
    ],
    citiesIntro: 'Slovakia has two primary university cities of relevance to Indian students — Bratislava in the west and Košice in the east. They offer meaningfully different cost profiles and industry connections.',
    cities: [
      { name: 'Bratislava', monthlyCost: '€500–€650/month', description: "Slovakia's capital and home to Comenius University, STU, and EUBA. Bratislava sits 60km from Vienna and 200km from Budapest — train connections to both cities run regularly. A growing multinational presence (Amazon, IBM, Dell, Volkswagen Financial Services) creates genuine English-medium career opportunities. More expensive than Košice but one of the most affordable EU capitals." },
      { name: 'Košice', monthlyCost: '€300–€500/month', description: "Slovakia's second-largest city and home to TUKE and UPJŠ. Košice has IBM, US Steel, and T-Systems as major employers, alongside a developing IT startup scene. Living costs are significantly lower than Bratislava, making Košice the most budget-friendly EU engineering and medicine study option in Central Europe. The city's compact size and strong international student community make integration straightforward." },
    ],
    language: {
      question: 'Do you need Slovak to study in Slovakia?',
      paragraphs: [
        'For English-taught programs, no — the degree can be completed entirely in English and daily campus life is manageable in English at all major Slovak universities. IELTS 6.0–6.5 is the standard requirement for most English-medium programs; some universities accept a Medium of Instruction (MOI) certificate from a previous English-medium institution in lieu of IELTS for undergraduate entry. Note that the Slovak Embassy in New Delhi has indicated a preference for standardised English test scores over MOI letters for visa purposes — so an IELTS score above 6.0 significantly strengthens the visa application even if the university does not formally require it.',
        'For Slovak-taught programs — the free tuition route — Slovak language proficiency at B2 level is required. Most universities offer intensive Slovak language preparation courses (one academic year) for prospective students. For long-term career prospects within Slovakia, Slovak is important for domestic companies and government-linked organisations. For the multinational corporate sector in Bratislava and Košice, English is typically sufficient at the professional level.',
      ],
      callout: 'Practical advice: Most Slovak universities provide free Slovak language courses to enrolled international students from the first semester — the most effective way to build proficiency during the degree itself. Online learning through University of Pittsburgh\'s free Slovak Language Course or introductory content on Pimsleur are reasonable starting points before departure. Even A1 Slovak — enough to read signage and navigate basic interactions — makes daily life noticeably easier from day one.',
    },
  },
};
