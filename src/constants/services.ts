export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface ServiceContent {
  id: string;                        // slug / key used in navigation
  title: string;
  tagline: string;
  intro: string;
  quickStats: { value: string; label: string }[];
  sections: ServiceSection[];
  faqs: ServiceFAQ[];
  cta: string;
}

export const SERVICES_CONTENT: Record<string, ServiceContent> = {

  // ─── Career Counselling ──────────────────────────────────────────────────────
  'career-counselling': {
    id: 'career-counselling',
    title: 'Career Counselling',
    tagline: 'Personalised global education planning — built around your goals, not a generic list.',
    intro: 'Choosing to study abroad is more than selecting a university — it is a long-term career decision. Our career counselling service helps students identify academic pathways that align with their interests, strengths, financial plans, and future ambitions while comparing opportunities across multiple countries. Instead of relying on generic recommendations, we develop evidence-based strategies that consider employability trends, skill demand, higher education quality, and post-study opportunities in destinations such as South Korea, the United Kingdom, Germany, Japan, Hungary, Singapore, France, Ireland, Italy, and Slovakia.',
    quickStats: [
      { value: '10+', label: 'Destinations compared' },
      { value: '4–6 months', label: 'Ideal head-start' },
      { value: '1:1', label: 'Personalised sessions' },
      { value: 'Parents welcome', label: 'Family sessions available' },
    ],
    sections: [
      {
        heading: 'Discover Your Strengths and Academic Direction',
        paragraphs: [
          'Every student has unique goals and capabilities. Our counselling sessions are built to surface what matters most to you before a single application is written.',
        ],
        bullets: [
          'Identify academic strengths and interests',
          'Understand personality and career preferences',
          'Explore suitable fields of study',
          'Evaluate research-oriented and industry-focused programs',
          'Build a long-term academic and professional roadmap',
        ],
      },
      {
        heading: 'Compare Countries with a Structured Approach',
        paragraphs: [
          'Rather than focusing on a single destination, we help you evaluate multiple options objectively. Every factor that shapes your daily life and future career is considered — not just which country has the most famous universities.',
        ],
        bullets: [
          'Tuition fees and living expenses',
          'Scholarship availability',
          'Language requirements',
          'Immigration and visa considerations',
          'Internship opportunities',
          'Graduate employability and industry growth sectors',
          'Post-study career pathways',
        ],
      },
      {
        heading: 'Evaluate Career Outcomes and Return on Investment',
        paragraphs: [
          'Selecting a program involves more than university rankings. We assess the financial and professional return of each option against your specific profile — expected salary potential, employment trends, industry demand, cost of education, and time required to recover the educational investment.',
        ],
      },
      {
        heading: 'Personalized Career Roadmap',
        paragraphs: [
          'Following the counselling process, students receive structured guidance covering every practical step ahead: academic milestones, standardised test planning, application strategy, scholarship opportunities, skill development priorities, internship planning, and long-term career positioning.',
        ],
      },
      {
        heading: 'Country Suitability Matrix',
        paragraphs: [
          'We use a structured comparison framework that maps your profile against multiple destinations by considering academic background, budget, preferred learning environment, language proficiency, research interests, employment objectives, and lifestyle preferences. This helps identify the destinations that align with both your educational and professional goals — not just the ones with the highest name recognition.',
        ],
      },
      {
        heading: 'Future Employability Analysis',
        paragraphs: [
          'Global labour markets continue to evolve with automation and emerging technologies. Our counsellors discuss artificial intelligence and digital transformation, skills shortages across industries, future-ready professions, automation risks, cross-disciplinary career opportunities, and international hiring trends. Students can make decisions with a clear understanding of how industries may change over the course of their studies.',
        ],
      },
      {
        heading: 'Backup Planning and Risk Management',
        paragraphs: [
          'Applications may involve competitive admissions or changing policies. We help create contingency plans by recommending alternative universities, identifying secondary destination options, planning multiple application rounds, diversifying scholarship opportunities, and building flexible admission strategies that keep your options open.',
        ],
      },
      {
        heading: 'Parent Counselling Sessions',
        paragraphs: [
          'Parents often play a significant role in educational planning. Dedicated sessions cover financial planning, student safety, academic expectations, country comparisons, living costs, career prospects, and the long-term value of overseas education — giving families a complete picture before a decision is made.',
        ],
      },
    ],
    faqs: [
      { question: 'How early should I book career counselling for studying abroad?', answer: 'Ideally, begin 4 to 6 months before your intended intake to allow sufficient time for course selection, testing, applications, scholarships, and visa preparation.' },
      { question: 'Do you recommend only one country?', answer: 'No. We compare multiple destinations and explain the advantages and trade-offs of each based on your profile and objectives.' },
      { question: 'Can parents attend the counselling session?', answer: 'Yes. Parent participation is encouraged, particularly when discussing finances, destination choices, and long-term planning.' },
      { question: 'Do you only advise top-ranked universities?', answer: 'No. Recommendations are based on academic fit, career outcomes, budget, research interests, and overall suitability rather than rankings alone.' },
      { question: 'Can you help students who are unsure about their career path?', answer: 'Yes. The counselling process is designed to help students explore interests, evaluate options, and make informed decisions before selecting a course or destination.' },
    ],
    cta: 'Book your personalised global education planning session. Work with experienced advisors to evaluate your options, compare destinations, and create a structured roadmap for studying abroad with confidence.',
  },

  // ─── Visa Assistance ─────────────────────────────────────────────────────────
  'visa-assistance': {
    id: 'visa-assistance',
    title: 'Visa Assistance',
    tagline: 'End-to-end student visa support — from first document to final submission.',
    intro: 'Applying for a student visa can involve multiple forms, supporting documents, appointments, and strict timelines. Our Visa Assistance service is designed to make this process as smooth and organised as possible by handling the administrative work and guiding you through every required step. From reviewing documents to preparing and submitting applications, our team provides comprehensive support so you can focus on your academic journey instead of paperwork.',
    quickStats: [
      { value: 'End-to-end', label: 'Application support' },
      { value: 'Pre-submission', label: 'Document review included' },
      { value: 'SOP review', label: 'Statement guidance included' },
      { value: 'All destinations', label: 'Covered' },
    ],
    sections: [
      {
        heading: 'End-to-End Visa Support',
        paragraphs: [
          "We don't just advise you — we actively assist with the visa application process from start to finish.",
        ],
        bullets: [
          'Preparation and review of visa application forms',
          'Collection and verification of supporting documents',
          'Guidance on financial evidence and sponsorship records',
          'SOP and motivation letter review',
          'Coordination of required paperwork',
          'Assistance with online application procedures',
          'Appointment scheduling guidance where required',
          'Submission planning and document organisation',
          'Ongoing updates and communication throughout the process',
        ],
      },
      {
        heading: 'We Handle the Details, So You Don\'t Have To',
        paragraphs: [
          'Many students find visa procedures overwhelming due to changing requirements and extensive documentation. Our experienced team takes care of the administrative aspects wherever possible, reducing unnecessary stress and helping you stay on track.',
          'We guide you on which documents to prepare, where and when you need to appear in person, what to carry for appointments or biometric collection, how to complete required formalities, important timelines and deadlines, and next steps after submission.',
        ],
      },
      {
        heading: 'Comprehensive Document Review',
        paragraphs: [
          'Before submission, we carefully review all critical documents to catch errors and inconsistencies that could delay your application.',
        ],
        bullets: [
          'Passport and identity records',
          'Admission or offer letters',
          'Academic transcripts and certificates',
          'Financial documents',
          'Education loan papers',
          'Scholarship confirmations',
          'Sponsor documentation',
          'Required declarations and supporting evidence',
        ],
      },
      {
        heading: 'SOP and Application Guidance',
        paragraphs: [
          'Where a Statement of Purpose or motivation letter is required, we help students present their academic goals clearly, explain their choice of course and institution, demonstrate future career plans, and maintain consistency with the overall application. Every application is reviewed with attention to detail to ensure all supporting documents work together cohesively.',
        ],
      },
      {
        heading: 'Personalised Guidance for In-Person Requirements',
        paragraphs: [
          'Certain parts of the visa process may require the student to appear in person — such as biometric enrolment, document verification, or interviews. When this is necessary, we provide clear instructions on the purpose of the appointment, required documents to carry, expected procedures, preparation tips, and practical guidance on common questions.',
          'This helps students arrive well prepared and avoid last-minute confusion.',
        ],
      },
    ],
    faqs: [
      { question: 'Do you complete the visa application on behalf of students?', answer: 'Yes. We provide hands-on assistance with preparing and completing the application process, while ensuring students understand any steps that require their direct participation or approval.' },
      { question: 'Will I have to visit your office multiple times?', answer: 'Not necessarily. Much of the process can be managed efficiently with guided support and online coordination, with in-person visits only when required.' },
      { question: 'What if I need to attend a biometric appointment or interview?', answer: 'We explain exactly where you need to go, what documents to carry, what to expect, and how to prepare, so you can attend with confidence.' },
      { question: 'Can you review my documents before submission?', answer: 'Yes. We conduct a detailed review to identify missing information, inconsistencies, or paperwork that may require attention before the application is filed.' },
      { question: 'Do you guarantee visa approval?', answer: 'No. Visa decisions are made by the relevant immigration authorities. Our role is to provide professional guidance, prepare your application thoroughly, and support you through each stage of the process.' },
    ],
    cta: 'Let us handle the paperwork while you prepare for your future. Book your visa assistance consultation today and receive end-to-end support — from documentation and application preparation to appointment guidance and final submission.',
  },

  // ─── University Selection ────────────────────────────────────────────────────
  'university-selection': {
    id: 'university-selection',
    title: 'University Selection',
    tagline: 'University recommendations based on your future — not just rankings.',
    intro: "Selecting a university is one of the most important decisions in your study abroad journey. The right institution can shape your academic experience, professional network, research opportunities, and long-term career prospects. Our University Selection service goes beyond league tables and brand names. We carefully evaluate universities based on your academic profile, career ambitions, financial considerations, and preferred study destination to recommend institutions where you are most likely to thrive.",
    quickStats: [
      { value: 'Personalised', label: 'Shortlist for each student' },
      { value: 'Ambitious + safe', label: 'Balanced mix of options' },
      { value: 'Merit-based', label: 'No commission-driven advice' },
      { value: '10+ countries', label: 'Evaluated' },
    ],
    sections: [
      {
        heading: 'A Personalized, Data-Driven Selection Process',
        paragraphs: [
          'Every student has different priorities. Some seek world-class research opportunities, while others prioritize internships, affordability, or industry exposure. We build your university shortlist by considering all the factors that actually shape outcomes.',
        ],
        bullets: [
          'Academic background and eligibility',
          'Preferred course and specialization',
          'Career objectives',
          'Budget and financial planning',
          'Location preferences',
          'Language of instruction',
          'Scholarship opportunities',
          'Campus environment',
          'Future employment prospects and post-graduation opportunities',
        ],
      },
      {
        heading: 'What We Evaluate Before Recommending a University',
        paragraphs: [
          'Every institution on your shortlist has passed a structured evaluation across multiple dimensions.',
        ],
        bullets: [
          'Accreditation and academic reputation within their respective education system',
          'Faculty expertise, research output, and industry involvement',
          'Research facilities, laboratories, and academic project opportunities',
          'Industry partnerships and corporate collaborations for internships and placements',
          'Graduate employability — employer connections, career services, alumni outcomes',
          'Hands-on internship and practical learning opportunities',
          'Tuition fees and realistic living cost estimates',
          'Merit-based scholarships, assistantships, and tuition waivers',
          'Student support services — orientation, academic advising, language assistance, wellbeing',
        ],
      },
      {
        heading: 'Beyond Rankings: Finding the Right Fit',
        paragraphs: [
          'A globally ranked university may not always be the best choice for every student. Factors such as class size, faculty accessibility, internship opportunities, affordability, and specialization often have a greater impact on your educational experience than where a university sits in a league table.',
          'Our goal is to recommend universities that align with your long-term objectives rather than simply chasing rankings.',
        ],
      },
      {
        heading: 'Recommendations Based on Merit, Not Commissions',
        paragraphs: [
          'We believe students deserve unbiased guidance. Our university recommendations are driven by research, compatibility, and future outcomes — not by one-size-fits-all lists or sales incentives. By understanding your aspirations and constraints, we create a shortlist designed to maximise your opportunities for academic success and career growth.',
        ],
      },
      {
        heading: 'Your Personalized University Shortlist',
        paragraphs: [
          'As part of our consultation process, students receive a carefully curated list of universities that gives them strategic options at every level.',
        ],
        bullets: [
          'Ambitious options for competitive applications',
          'Balanced choices aligned with your academic profile',
          'Safer alternatives that strengthen your overall admission strategy',
          'Institutions offering scholarship potential aligned with your profile',
          'Universities that fit your financial plan and career goals',
        ],
      },
    ],
    faqs: [
      { question: 'How many universities should I apply to?', answer: 'Most students benefit from applying to a balanced mix of ambitious, moderate, and safer options. The ideal number depends on your academic profile, destination, and goals.' },
      { question: 'Do you recommend universities based only on rankings?', answer: 'No. We consider academic quality, employability, affordability, specialization, research opportunities, student support, and your individual preferences to identify the best overall fit.' },
      { question: 'Can you help me find universities within my budget?', answer: 'Yes. Budget planning is an important part of our selection process, and we recommend institutions that align with your financial capacity while also exploring scholarship opportunities where applicable.' },
      { question: 'Will I receive a personalized shortlist?', answer: 'Yes. Based on your profile and consultation, we prepare a customized university shortlist tailored to your academic background, career objectives, and preferred destinations.' },
      { question: 'Can you assist after I choose a university?', answer: 'Absolutely. We continue supporting students with applications, documentation, SOP reviews, visa assistance, financial planning, and pre-departure guidance.' },
    ],
    cta: 'Find a university that matches your ambitions — not just your grades. Book a personalised consultation today and receive a carefully researched shortlist designed around your academic profile, career goals, and budget.',
  },

  // ─── Course Selection ────────────────────────────────────────────────────────
  'course-selection': {
    id: 'course-selection',
    title: 'Course Selection',
    tagline: 'Choose a program that supports the career you actually want to build.',
    intro: "Choosing the right course is just as important as choosing the right university. A well-selected program can open doors to global career opportunities, advanced research, entrepreneurship, and long-term professional growth. Our Course Selection service helps students identify programs that match their interests, academic background, strengths, and future aspirations. Instead of following trends or selecting popular degrees without proper research, we focus on finding courses that offer meaningful value and sustainable career potential.",
    quickStats: [
      { value: 'Curriculum-first', label: 'Evaluation approach' },
      { value: 'Career-aligned', label: 'Recommendations' },
      { value: '9+ disciplines', label: 'Covered' },
      { value: 'Future-proofed', label: 'Against automation trends' },
    ],
    sections: [
      {
        heading: 'We Look Beyond the Course Title',
        paragraphs: [
          "Two programs with similar names can have completely different curricula, teaching methods, and career outcomes. That's why we carefully evaluate each course before recommending it.",
        ],
        bullets: [
          'Curriculum structure and learning outcomes',
          'Core and elective subjects',
          'Practical training opportunities',
          'Internship or industry exposure',
          'Research components and capstone projects',
          'Duration and flexibility',
          'Teaching methodology',
          'Career progression opportunities',
          'Global recognition of the qualification',
        ],
      },
      {
        heading: 'Aligning Education with Long-Term Career Success',
        paragraphs: [
          'Every course recommendation is evaluated against your long-term goals — not just what is popular this year.',
        ],
        bullets: [
          'Preferred industry or profession',
          'Future specialization plans',
          'Entrepreneurial ambitions',
          'Research interests',
          'Global mobility',
          'Potential for higher education',
          'Expected salary growth',
          'Career flexibility across sectors',
        ],
      },
      {
        heading: 'Industry Demand and Emerging Opportunities',
        paragraphs: [
          'The global job market continues to evolve rapidly. We assess current and emerging demand across sectors to help students pursue qualifications that remain relevant in the years ahead — considering skills shortages in international markets, technology-driven industry changes, digital transformation, innovation trends, workforce demand forecasts, and cross-disciplinary career opportunities.',
        ],
      },
      {
        heading: 'Research Opportunities and Academic Pathways',
        paragraphs: [
          'For students interested in postgraduate study or research careers, we evaluate programs based on laboratory facilities, faculty expertise, research output, thesis options, collaboration opportunities, innovation ecosystems, and academic progression pathways. Choosing a research-friendly program can strengthen future opportunities in academia and industry alike.',
        ],
      },
      {
        heading: 'Licensing and Professional Requirements',
        paragraphs: [
          'Certain professions require graduates to meet licensing, accreditation, or regulatory standards before practising. Where applicable, we help students understand professional recognition requirements, country-specific regulations, certification pathways, additional examinations, internship or practical training obligations, and eligibility for further professional registration. Understanding these requirements early helps avoid surprises after graduation.',
        ],
      },
      {
        heading: 'Preparing for a Changing Job Market',
        paragraphs: [
          'Automation and artificial intelligence are reshaping industries around the world. During course selection, we discuss automation risks, human-centric skills, digital literacy, adaptability, interdisciplinary knowledge, and future-ready competencies. Our objective is to help students choose programs that encourage continuous learning and long-term employability.',
        ],
      },
      {
        heading: 'Popular Fields We Help Students Explore',
        paragraphs: [
          'We provide guidance across a wide range of disciplines:',
        ],
        bullets: [
          'Engineering — Mechanical, civil, electrical, electronics, chemical, industrial, aerospace, and other specializations aligned with evolving industry needs',
          'Artificial Intelligence and Data Science — Machine learning, data analytics, intelligent systems, computer vision, and related technologies',
          'Cybersecurity — Network security, ethical hacking, digital forensics, cloud security, governance, and risk management',
          'Biotechnology and Life Sciences — Biomedical research, genetics, pharmaceuticals, laboratory science, and applied biotechnology',
          'Finance and Economics — Investment analysis, financial technology, banking, accounting, economics, and international business finance',
          'Business and Management — Entrepreneurship, marketing, supply chain, international business, operations, and strategic leadership',
          'Design and Creative Industries — Graphic design, UX/UI, animation, product design, fashion, architecture, and digital media',
          'Hospitality and Tourism — Hotel management, tourism operations, event management, luxury services, and global hospitality',
          'Healthcare and Allied Sciences — Public health, healthcare management, medical technology, rehabilitation sciences, and related disciplines (subject to local eligibility requirements)',
        ],
      },
    ],
    faqs: [
      { question: 'How do I know which course is right for me?', answer: 'We assess your academic background, interests, strengths, career goals, and preferred destinations to recommend programs that align with your long-term objectives.' },
      { question: 'Should I choose a course based on salary alone?', answer: 'Salary is only one consideration. We also evaluate job demand, career growth, industry trends, skill development, personal interests, and opportunities for advancement.' },
      { question: 'Can you help me switch fields after graduation?', answer: 'Yes. Depending on your academic background and eligibility, we can identify suitable conversion or interdisciplinary programs that support a transition into a new field.' },
      { question: 'Do you compare course curricula at different universities?', answer: 'Absolutely. We review course content, practical training, electives, research opportunities, and industry relevance to help you understand the differences before making a decision.' },
      { question: 'Will you recommend courses based on future job demand?', answer: 'Yes. We consider evolving labour market trends, emerging technologies, and global skill shortages alongside your personal goals to help identify programs with strong long-term potential.' },
    ],
    cta: 'Choose a course that supports the future you want to build. Schedule a personalised consultation to explore programs that match your interests, career ambitions, and long-term opportunities across leading international destinations.',
  },

  // ─── Education Loan Support ──────────────────────────────────────────────────
  'education-loan-support': {
    id: 'education-loan-support',
    title: 'Education Loan Support',
    tagline: 'End-to-end loan assistance so funding never stands between you and your degree.',
    intro: "Financing your international education shouldn't be a barrier to achieving your academic goals. Our Education Loan Support service is designed to make the funding process more manageable by assisting students from the initial evaluation stage through documentation preparation and application support. Rather than navigating complex paperwork and financial requirements alone, our team works closely with you to coordinate the process and help keep your loan application on track alongside your admission timeline.",
    quickStats: [
      { value: 'End-to-end', label: 'Process support' },
      { value: 'Personalised', label: 'Loan evaluation' },
      { value: 'Co-applicant', label: 'Guidance included' },
      { value: 'Aligned', label: 'With admission timeline' },
    ],
    sections: [
      {
        heading: 'We Help You Through the Entire Loan Journey',
        paragraphs: [
          'Our advisors provide practical, hands-on assistance at every stage of the financing process.',
        ],
        bullets: [
          'Evaluating your funding requirements',
          'Assessing your education budget',
          'Advising on suitable financing options',
          'Preparing and organising loan documentation',
          'Assisting with the loan application process',
          'Coordinating required paperwork and supporting documents',
          'Guiding students and co-applicants through formalities',
          'Following up on documentation and process milestones',
          'Helping ensure the loan process stays on track alongside your admission timeline',
        ],
      },
      {
        heading: 'Personalized Loan Evaluation',
        paragraphs: [
          'Before initiating the process, we assess your expected educational expenses and financial profile to determine the level of funding you may require. This review covers every cost that a student realistically faces while studying abroad.',
        ],
        bullets: [
          'Tuition fees',
          'Living expenses',
          'Accommodation costs',
          'Health insurance',
          'Travel expenses',
          'Visa-related costs',
          'Personal and academic expenses',
          'Existing scholarships or financial aid already secured',
        ],
      },
      {
        heading: 'Assistance with Loan Applications and Documentation',
        paragraphs: [
          'Education loan applications often require extensive paperwork and careful coordination. We actively assist students in preparing and organising documents commonly requested during the financing process.',
        ],
        bullets: [
          'University admission documents',
          'Fee structures and cost estimates',
          'Academic records',
          'Identity and address proof',
          'Income and financial documents',
          'Co-applicant information',
          'Supporting declarations and other required paperwork',
        ],
      },
      {
        heading: 'Smart Financial Planning',
        paragraphs: [
          'Beyond arranging funding, we help students create a practical financial roadmap covering every major cost category. A clear financial plan helps students begin their overseas education with greater confidence and stability.',
        ],
        bullets: [
          'Tuition payment schedules',
          'Accommodation expenses',
          'Daily living costs',
          'Transportation',
          'Study materials',
          'Health insurance',
          'Emergency funds',
          'Currency exchange considerations',
          'Contingency planning',
        ],
      },
      {
        heading: 'Explore Opportunities to Reduce Costs',
        paragraphs: [
          'Where appropriate, we also guide students in identifying opportunities that may reduce overall education expenses — merit-based scholarships, tuition waivers, institutional grants, government funding programs, budget-friendly accommodation options, and cost-conscious financial planning strategies.',
          'While all lending decisions remain with the respective financial institution, we work closely with students to prepare, organise, and facilitate the process from start to finish.',
        ],
      },
    ],
    faqs: [
      { question: 'Do you help with all types of education loans?', answer: 'We assist with the evaluation, documentation, and application support process for education loans regardless of type. Our role is to coordinate and facilitate — the final lending decision rests with the financial institution.' },
      { question: 'Can you help co-applicants understand the process?', answer: 'Yes. We guide both students and co-applicants (typically parents or guardians) through the documentation and formality requirements at every stage.' },
      { question: 'Will you help align the loan process with my admission timeline?', answer: 'Absolutely. Coordinating loan processing alongside admission and visa timelines is a core part of what we do, since delays in funding can affect your ability to meet university and visa deadlines.' },
      { question: 'Do you help identify scholarships that can reduce the loan amount?', answer: 'Yes. As part of the financial planning process, we identify scholarship opportunities, tuition waivers, and grants that may reduce the total amount of funding required.' },
      { question: 'What documents are typically needed for an education loan?', answer: 'Commonly required documents include admission letters, fee structures, academic records, identity and address proof, income documents for the co-applicant, and various declarations. We help you prepare and organise all of these.' },
    ],
    cta: 'Need funding for your overseas education? Let our team help simplify the process with personalised loan evaluation, documentation support, and end-to-end assistance designed to help you move confidently from admission to financing.',
  },

  // ─── Pre-Departure Orientation ───────────────────────────────────────────────
  'pre-departure-orientation': {
    id: 'pre-departure-orientation',
    title: 'Pre-Departure Orientation',
    tagline: 'Leave India fully prepared. Arrive with confidence.',
    intro: "Receiving your admission letter and visa is only the beginning of your international education journey. Moving to a new country comes with practical challenges, unfamiliar systems, and important decisions that can affect your first few weeks overseas. Our Pre-Departure Orientation is designed to ensure you leave India fully prepared and arrive with confidence. We guide students and parents through everything from travel arrangements and airport procedures to accommodation planning, financial management, local customs, and day-to-day life abroad.",
    quickStats: [
      { value: 'Post-visa', label: 'Ideal timing' },
      { value: 'Parents welcome', label: 'Dedicated family sessions' },
      { value: 'Practical', label: 'Step-by-step travel guide' },
      { value: 'Ongoing', label: 'Support after departure' },
    ],
    sections: [
      {
        heading: 'A Complete Checklist Before You Fly',
        paragraphs: [
          'Before departure, our team helps students understand and prepare for every practical requirement that could otherwise be missed.',
        ],
        bullets: [
          'Travel documentation and essential paperwork',
          'Flight planning and baggage guidelines',
          'Airport check-in procedures',
          'Immigration and arrival formalities',
          'Currency exchange and international payments',
          'Accommodation arrangements',
          'Health insurance requirements',
          'Packing essentials',
          'Emergency contacts and important documents',
          'Local transportation options',
          'Mobile connectivity and communication tools',
        ],
      },
      {
        heading: 'Travel and Airport Guidance',
        paragraphs: [
          'For many students, this is their first international trip. We explain the complete airport journey so nothing comes as a surprise — including international check-in procedures, immigration clearance, security screening, transit and connecting flights, arrival procedures, customs declarations, baggage collection, and meeting university representatives or accommodation providers where applicable.',
          'Knowing these steps in advance significantly reduces anxiety and confusion during travel.',
        ],
      },
      {
        heading: 'Accommodation Planning',
        paragraphs: [
          'Finding the right place to live is an important part of settling abroad. We guide students on university dormitories, private accommodation options, shared apartments, rental considerations, lease agreements, move-in planning, basic household setup, and safety considerations when choosing housing.',
          'Our advice helps students make informed decisions before and after arrival.',
        ],
      },
      {
        heading: 'Banking and Financial Readiness',
        paragraphs: [
          'Managing money in another country requires planning. During orientation, we discuss opening local bank accounts, international debit and credit card usage, currency exchange basics, everyday payment methods, budget management, emergency funds, and tracking monthly expenses. Students receive practical tips to manage their finances responsibly while living overseas.',
        ],
      },
      {
        heading: 'Academic Life and Classroom Expectations',
        paragraphs: [
          'Education systems vary from country to country. We prepare students for the differences they will encounter — classroom participation styles, attendance expectations, assignment deadlines, independent learning requirements, group project norms, academic integrity and plagiarism policies, communication with professors, and research expectations at university level. Understanding these differences helps students adapt more quickly.',
        ],
      },
      {
        heading: 'Cultural Awareness and Everyday Living',
        paragraphs: [
          'Living in a new country means adapting to different customs and social norms. Our orientation covers cultural etiquette, respectful communication, local laws and regulations, public behaviour and social expectations, diversity and inclusion, workplace and classroom etiquette, and building friendships in multicultural environments. These insights help students integrate comfortably into their new communities.',
        ],
      },
      {
        heading: 'Health, Safety, and Emergency Preparedness',
        paragraphs: [
          'Student wellbeing is a priority. We provide guidance on health insurance usage, accessing medical care, emergency contact procedures, personal safety practices, local emergency services, protecting important documents, digital security and online safety, and staying connected with family. Being prepared allows students to respond calmly if unexpected situations arise.',
        ],
      },
      {
        heading: 'Budgeting and Day-to-Day Living',
        paragraphs: [
          'Small financial decisions can make a big difference over time. We help students understand grocery shopping and meal planning, public transport costs, utility expenses, mobile phone plans, entertainment budgets, student discounts, saving strategies, and managing monthly living expenses. These practical tips support a balanced and sustainable lifestyle abroad.',
        ],
      },
      {
        heading: 'Ongoing Guidance Beyond Departure',
        paragraphs: [
          "Our support doesn't stop when you board your flight. Students can continue to reach out for guidance on practical matters such as understanding university procedures, settling into accommodation, managing documentation, navigating local services, resolving common first-time international student concerns, and finding reliable resources for daily life abroad. We aim to make your transition as smooth as possible from departure through your initial months overseas.",
        ],
      },
    ],
    faqs: [
      { question: 'When should I attend the pre-departure orientation?', answer: 'Ideally, after your visa is approved and before your travel date, so you have enough time to prepare documents, finances, and travel arrangements.' },
      { question: 'Is the orientation only for students?', answer: 'No. Parents are welcome to participate, especially if they would like to understand travel procedures, safety measures, financial planning, and life abroad.' },
      { question: 'Will you help me understand airport procedures?', answer: 'Yes. We explain the complete travel process, including check-in, immigration, baggage collection, transit, and arrival formalities.' },
      { question: 'Do you provide guidance after I reach my destination?', answer: 'Yes. We continue to support students with practical advice and guidance as they settle into their new academic and living environment.' },
      { question: 'What should I bring to the orientation session?', answer: 'Bring any travel confirmations, admission documents, visa information, accommodation details, and questions you may have. We\'ll help you prepare a personalized checklist before departure.' },
    ],
    cta: 'Start your journey fully prepared. Join our Pre-Departure Orientation and receive practical guidance on travel, accommodation, budgeting, academics, safety, and everyday life — so you can begin your overseas education with confidence.',
  },
};
