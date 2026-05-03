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
