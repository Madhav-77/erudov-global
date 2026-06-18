export const REGIONS = [
  { name: 'Korea', code: 'KR', flag: '🇰🇷' },
  { name: 'UK', code: 'UK', flag: '🇬🇧' },
  { name: 'Germany', code: 'DE', flag: '🇩🇪' },
  { name: 'France', code: 'FR', flag: '🇫🇷' },
  { name: 'Spain', code: 'ES', flag: '🇪🇸' },
  { name: 'Italy', code: 'IT', flag: '🇮🇹' },
  { name: 'Japan', code: 'JP', flag: '🇯🇵' },
  { name: 'Ireland', code: 'IE', flag: '🇮🇪' },
  { name: 'Slovakia', code: 'SK', flag: '🇸🇰' },
  { name: 'Singapore', code: 'SG', flag: '🇸🇬' }
];

export const LIVING_COSTS: Record<string, number> = {
  'Korea': 1200,
  'UK': 1500,
  'Germany': 1300,
  'France': 1350,
  'Spain': 1100,
  'Italy': 1150,
  'Japan': 1400,
  'Ireland': 1600,
  'Slovakia': 900,
  'Singapore': 1400
};

export const REGION_DETAILS: Record<string, RegionDetail> = {
  'Korea': {
    name: 'Korea',
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
    counselorsAvailable: 12
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
    livingCostPerMonth: 1500,
    visaType: 'Student Visa (Tier 4)',
    applicationDeadline: 'January & September',
    populationOfStudents: '20,000+',
    counselorsAvailable: 15
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
    livingCostPerMonth: 1300,
    visaType: 'Student Visa (Schengen)',
    applicationDeadline: 'April & October',
    populationOfStudents: '18,000+',
    counselorsAvailable: 10
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
    livingCostPerMonth: 1350,
    visaType: 'Student Visa (Schengen)',
    applicationDeadline: 'March & September',
    populationOfStudents: '17,000+',
    counselorsAvailable: 11
  },
  'Spain': {
    name: 'Spain',
    code: 'ES',
    flag: '🇪🇸',
    description: 'Dynamic education with Mediterranean lifestyle and culture',
    capital: 'Madrid',
    languages: ['Spanish', 'English'],
    currency: 'EUR (€)',
    timezone: 'CET (UTC+1)',
    universities: [
      'University of Barcelona',
      'Autonomous University of Madrid',
      'University of Valencia',
      'IE University'
    ],
    industries: [
      'Tourism',
      'Technology',
      'Manufacturing',
      'Renewable Energy'
    ],
    livingCostPerMonth: 1100,
    visaType: 'Student Visa (Schengen)',
    applicationDeadline: 'February & August',
    populationOfStudents: '14,000+',
    counselorsAvailable: 8
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
    livingCostPerMonth: 1150,
    visaType: 'Student Visa (Schengen)',
    applicationDeadline: 'April & October',
    populationOfStudents: '13,000+',
    counselorsAvailable: 9
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
    livingCostPerMonth: 1400,
    visaType: 'Student Visa (Ryugaku)',
    applicationDeadline: 'May & November',
    populationOfStudents: '16,000+',
    counselorsAvailable: 13
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
    livingCostPerMonth: 1600,
    visaType: 'Student Visa (Critical Skills)',
    applicationDeadline: 'January & July',
    populationOfStudents: '19,000+',
    counselorsAvailable: 14
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
    livingCostPerMonth: 900,
    visaType: 'Student Visa (Schengen)',
    applicationDeadline: 'March & September',
    populationOfStudents: '8,000+',
    counselorsAvailable: 6
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
    livingCostPerMonth: 1400,
    visaType: 'Student Pass',
    applicationDeadline: 'January & August',
    populationOfStudents: '12,000+',
    counselorsAvailable: 11
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
}

// ─── Rich content interfaces (used for Korea & UK detail pages) ───────────────

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
  language?: LanguageInfo;       // Korea only
}

export const REGION_RICH_CONTENT: Record<string, RegionRichContent> = {
  Korea: {
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
};
