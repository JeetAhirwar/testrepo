import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Sweden/BBA/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Sweden/BBA/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Sweden/BBA/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Sweden/BBA/cta_bg.webp";
import cmsData from "../../../../data/study_abroad/sweden/bba.json";

const page = {
 "name": "BBA",
 "country": "Sweden",
 "slug": "bba",
 "title": "BBA in Sweden for Indian Students | Edu-Hawk Worldwide",
 "description": "Study BBA in Sweden: Top universities, course duration, tuition fees in SEK & INR, eligibility criteria, admission process & visa requirements for Indian students.",
 "keywords": "Study BBA in Sweden, BBA in Sweden for Indian Students, Best Universities in Sweden, Sweden BBA Admission, Cost of Studying in Sweden, Edu-Hawk Worldwide",
 "introTitle": "BBA in Sweden for Indian Students",
 "heroParas": [
 "Comprehensive guide to studying BBA in Sweden for Indian students."
 ],
 "overview": [
 "Explore top accredited institutions, tuition costs, eligibility, and visa procedures in Sweden for BBA in Sweden."
 ],
 "level": "Bachelor of Business Administration",
 "crumb": "BBA",
 "stats": [
 {
 "val": "SEK 80K-150K",
 "label": "Tuition / Year"
 },
 {
 "val": "Permitted",
 "label": "Part-Time Work"
 },
 {
 "val": "3-4 Years",
 "label": "Course Duration"
 },
 {
 "val": "English",
 "label": "Medium of Study"
 }
 ],
 "highlights": [
 {
 "icon": "FaAward",
 "title": "World-Class Nordic Innovation",
 "desc": "Study in Sweden's globally ranked universities renowned for pioneering scientific breakthroughs, design thinking, and sustainable research."
 },
 {
 "icon": "FaGraduationCap",
 "title": "English-Taught Degrees",
 "desc": "Over 1,000 bachelor's and master's degree programs delivered entirely in English with international accreditation."
 },
 {
 "icon": "FaFileAlt",
 "title": "Generous Post-Study Work",
 "desc": "Sweden offers residence permits after graduation for students to seek employment or start innovative businesses."
 },
 {
 "icon": "FaCheckCircle",
 "title": "High Quality of Life",
 "desc": "Ranked among the top nations globally for safety, equality, environmental sustainability, and student well-being."
 }
 ],
 "sections": [
  {
    "slot": "curriculum",
    "eyebrow": "Why Study Business in Sweden",
    "title": "Key Advantages of Studying BBA & Business in Sweden",
    "lead": "Sweden offers world-class undergraduate business programmes taught in English with a focus on innovation, sustainability, and international perspectives.",
    "groups": [
      {
        "t": "ul",
        "items": [
          "**International Exposure:** Gain comprehensive knowledge about international trade, global financial markets, and innovative Scandinavian business practices.",
          "**Practical Education:** Develop analytical, leadership, teamwork, and problem-solving abilities through industry projects and corporate collaborations.",
          "**English-Taught Programs:** Access globally accredited bachelor's degrees in business, management, and economics delivered entirely in English.",
          "**Career Flexibility:** Prepare for rewarding global careers in marketing, corporate finance, consulting, international management, and entrepreneurship."
        ]
      }
    ]
  },
  {
    "slot": "universities",
    "eyebrow": "Top Business Schools",
    "title": "Best Universities for BBA in Sweden",
    "lead": "Explore leading Swedish universities offering accredited Bachelor of Business Administration (BBA), International Management, and Economics programmes.",
    "unis_data": [
      {
        "name": "University of Gothenburg",
        "location": "Gothenburg, Sweden",
        "fee": "SEK 97,000 / Year",
        "desc": "The School of Business, Economics and Law at Gothenburg holds prestigious Triple Crown accreditation (EQUIS, AACSB, AMBA) and offers world-class undergraduate education in Business & Economics.",
        "image": "/uploads/study_abroad/sweden/university_of_gothenburg.webp",
        "img": "/uploads/study_abroad/sweden/university_of_gothenburg.webp"
      },
      {
        "name": "Jönköping University",
        "location": "Jönköping, Sweden",
        "fee": "SEK 100,000 – 120,000 / Year",
        "desc": "Jönköping International Business School (JIBS) is double-accredited (EQUIS & AACSB), renowned across Europe for family business, entrepreneurship, and international management.",
        "image": "/uploads/study_abroad/sweden/swe_BBA_image1.png",
        "img": "/uploads/study_abroad/sweden/swe_BBA_image1.png"
      },
      {
        "name": "Umeå University",
        "location": "Umeå, Sweden",
        "fee": "SEK 96,600 / Year",
        "desc": "USBE at Umeå University provides AACSB-accredited bachelor's degrees with strong focus on international business, responsible leadership, and sustainable development.",
        "image": "/uploads/study_abroad/sweden/swe_BBA_image2.png",
        "img": "/uploads/study_abroad/sweden/swe_BBA_image2.png"
      },
      {
        "name": "Lund University",
        "location": "Lund, Sweden",
        "fee": "SEK 100,000 – 120,000 / Year",
        "desc": "Lund University School of Economics and Management (LUSEM) is triple-crown accredited, offering internationally recognized business and economics curricula.",
        "image": "/uploads/study_abroad/sweden/swe_BBA_image3.png",
        "img": "/uploads/study_abroad/sweden/swe_BBA_image3.png"
      }
    ],
    "note": [
      "Students should verify the exact eligibility criteria, intake periods, program accreditation, and residence permit requirements before submitting their applications."
    ]
  },
  {
    "slot": "eligibility",
    "eyebrow": "Eligibility Criteria",
    "title": "BBA Eligibility in Sweden",
    "groups": [
      {
        "t": "p",
        "items": [
          "Indian students applying for undergraduate business programmes in Sweden generally need to meet the following requirements:"
        ]
      },
      {
        "t": "ul",
        "items": [
          "**Class 12 Qualification:** Completion of Class 12 or another recognised equivalent upper-secondary qualification.",
          "**Mathematics Requirements:** Meet the mathematics prerequisites specified by the university.",
          "**English Language Proficiency:** Demonstrate English proficiency through an approved qualification or test, if required.",
          "**Programme-Specific Requirements:** Fulfil additional academic prerequisites, which may include social studies or advanced mathematics.",
          "**Academic Records:** Submit all required marksheets, certificates, and supporting documents before the application deadline."
        ]
      },
      {
        "t": "p",
        "items": [
          "Sweden's general bachelor's admission requirements include completed upper-secondary education, English proficiency equivalent to Swedish English 6, and specified mathematics requirements. Individual programmes may have additional subject prerequisites.",
          "Meeting the general eligibility criteria does not automatically guarantee admission. Each university assesses applications according to its own requirements."
        ]
      }
    ]
  },
  {
    "slot": "requirements",
    "eyebrow": "Admission Requirements",
    "title": "Admission Requirements for BBA in Sweden",
    "groups": [
      {
        "t": "p",
        "items": [
          "Students applying for business-related bachelor's programmes should prepare the following documents:"
        ]
      },
      {
        "t": "ul",
        "items": [
          "Class 10 marksheet and certificate",
          "Class 12 marksheet and certificate",
          "Valid passport",
          "Proof of English language proficiency, if required",
          "Official translations of academic documents, where applicable",
          "Programme-specific application forms and supporting documents",
          "Application fee payment, if applicable"
        ]
      },
      {
        "t": "p",
        "items": [
          "Applicants from India should carefully follow the country-specific document instructions published by **University Admissions Sweden** and check whether additional documents are required by their selected university."
        ]
      }
    ]
  },
  {
    "slot": "fees",
    "eyebrow": "Tuition & Living Costs",
    "title": "Cost of Studying BBA in Sweden",
    "groups": [
      {
        "t": "p",
        "items": [
          "The **Cost of Studying BBA in Sweden** depends on the university, tuition fee, accommodation, lifestyle, and duration of the programme. Students from outside the EU/EEA generally need to pay tuition fees unless they qualify for an exemption or scholarship."
        ]
      },
      {
        "t": "table",
        "headers": [
          "University",
          "Total Tuition Fee (SEK)",
          "Approximate Tuition Fee (INR)"
        ],
        "rows": [
          [
            "University of Gothenburg",
            "SEK 291,000",
            "₹27.65 lakh"
          ],
          [
            "Jönköping University",
            "SEK 360,000",
            "₹34.20 lakh"
          ],
          [
            "Umeå University",
            "SEK 289,800",
            "₹27.53 lakh"
          ],
          [
            "Stockholm School of Economics",
            "SEK 360,000",
            "₹34.20 lakh"
          ],
          [
            "Uppsala University",
            "SEK 297,000",
            "₹28.22 lakh"
          ]
        ]
      },
      {
        "t": "p",
        "items": [
          "*These are the published programme fee figures referenced in this guide. Confirm the tuition fee for your selected intake before applying.*",
          "In addition to tuition fees, international students should budget for accommodation, food, transport, and personal expenses."
        ]
      },
      {
        "t": "table",
        "headers": [
          "Expense",
          "Estimated Monthly Cost (SEK)",
          "Approximate Monthly Cost (INR)"
        ],
        "rows": [
          [
            "Accommodation",
            "SEK 4,000–7,000",
            "₹38,000–₹66,500"
          ],
          [
            "Food and Groceries",
            "SEK 2,000–3,000",
            "₹19,000–₹28,500"
          ],
          [
            "Transport",
            "SEK 600–1,000",
            "₹5,700–₹9,500"
          ],
          [
            "Personal and Study Expenses",
            "SEK 1,400–3,000",
            "₹13,300–₹28,500"
          ],
          [
            "**Estimated Total**",
            "**SEK 10,000–14,000**",
            "**₹95,000–₹1.33 lakh**"
          ]
        ]
      },
      {
        "t": "p",
        "items": [
          "Actual expenses depend on the city, accommodation type, and personal lifestyle.",
          "The following estimates combine the listed tuition fees with an estimated living budget of SEK 10,000–14,000 per month for three years."
        ]
      },
      {
        "t": "table",
        "headers": [
          "University",
          "Estimated Total (SEK)",
          "Approximate Total (INR)"
        ],
        "rows": [
          [
            "University of Gothenburg",
            "SEK 651,000–795,000",
            "₹61.85–₹75.53 lakh"
          ],
          [
            "Jönköping University",
            "SEK 720,000–864,000",
            "₹68.40–₹82.08 lakh"
          ],
          [
            "Umeå University",
            "SEK 649,800–793,800",
            "₹61.73–₹75.41 lakh"
          ],
          [
            "Stockholm School of Economics",
            "SEK 720,000–864,000",
            "₹68.40–₹82.08 lakh"
          ],
          [
            "Uppsala University",
            "SEK 657,000–801,000",
            "₹62.42–₹76.10 lakh"
          ]
        ]
      },
      {
        "t": "p",
        "items": [
          "These are indicative estimates covering tuition and living expenses only. They do not include airfare, residence permit expenses, accommodation deposits, insurance where applicable, or other one-time costs. Actual expenses may vary with the university, city, exchange rate, and personal spending.",
          "**7 BBA Application in Sweden**",
          "Students who want to apply for undergraduate business programs can normally follow these steps:",
          "Choose a Program",
          "Compare programs International Management, Business and Economics, Business Administration. Review degree title, course structure, language of instruction and university requirements.",
          "Check if you qualify",
          "Please check the academic requirements, mathematics requirements and English language requirements for your chosen course.",
          "Get Your Documents Ready",
          "Gather academic transcripts, degrees, passport information, English language test scores and any other required documents.",
          "Submit your application online",
          "Apply via University Admissions Sweden or the university’s approved application channel, depending on the program.",
          "Pay the Application Fee and Upload Your Documents",
          "Pay the applicable application fee and upload all supporting documents before the deadline if applicable.",
          "Getting Ready for Arrival",
          "When you have received an offer of admission, you should check the requirements for a Swedish residence permit, find accommodation and plan your travel.",
          "Application Period: Autumn 2027 The main application period for several English-taught bachelor’s programs runs from 16 October 2026 to 15 January 2027 Some universities, such as Jönköping University, may have a direct application route with a different deadline. Always check the official program page to ensure you are following the correct application route.",
          "**8 Further Study Following a Bachelor in Business**",
          "Following a bachelor’s degree in business, graduates can proceed to postgraduate education in Sweden or abroad, depending on the entry requirements of the chosen institution.",
          "Some other areas of study might be:"
        ]
      },
      {
        "t": "ul",
        "items": [
          "Master's in Business Administration: Gain advanced knowledge in business operations, finance and management.",
          "Master’s Degree in Management: Gain expertise in organizational leadership, strategy and business development.",
          "Master’s in International Business: Focuses on global trade, international markets, and cross-border business operations.",
          "Master’s in Finance: Gain knowledge and skills in financial markets, investment and corporate finance.",
          "MBA: If the applicant meets the MBA programme's educational and professional experience requirements, apply for an MBA program. Some MBA programs require relevant work experience."
        ]
      },
      {
        "t": "p",
        "items": [
          "Students must verify the eligibility criteria of academic grades, English proficiency, work experience, and required subjects of a bachelor’s degree before applying.",
          "**9 Job Opportunity After a BBA in Sweden**",
          "A bachelor’s degree in business can prepare you for a wide range of career opportunities. Graduates could look for opportunities in business operations, marketing, finance, sales, consulting and human resources.",
          "**Role**",
          "Principal accountabilities"
        ]
      },
      {
        "t": "ul",
        "items": [
          "Business Development Manager",
          "Identifying new customers and opportunities for market and business growth",
          "Co-ordinator Marketing",
          "Helping with marketing campaigns, market research and promotional activities",
          "Business Analyst (BA)",
          "Business data, performance and operational processes analysis",
          "salesperson",
          "Managing customer relationships and supporting sales",
          "Project Coordinator",
          "Supporting project timelines, tasks & delivery",
          "HR Coordinator",
          "Assistance with recruitment and employee related processes",
          "Operations Co-ordinator",
          "Supporting business processes and operational efficiencies",
          "Business Owner / Entrepreneur",
          "Starting and running a business or enterprise"
        ]
      },
      {
        "t": "p",
        "items": [
          "It is contingent upon your skills, your internships, your professional experience, your language skills and what the employer needs. Some positions and work places can benefit from Swedish knowledge.",
          "A degree doesn't guarantee you a job or a specific salary. Students should also review applicable work and residence regulations post-graduation.",
          "**10 Documents Required to Study BBA in Sweden**",
          "When applying to university and later for a residence permit students should have the following documents ready:"
        ]
      },
      {
        "t": "ul",
        "items": [
          "Class 10 Marksheet & Certificate",
          "Class XII Marksheet and Certificate",
          "Valid passport",
          "Proof of English language proficiency, where required",
          "Official translations of documents, if applicable Supporting documents specific to the university",
          "Payment of application fee, if applicable",
          "Tuition fee payment and financial documents for residence permit application"
        ]
      },
      {
        "t": "p",
        "items": [
          "The document requirements are university and application route dependent. Please consult the current official instructions prior to submitting your application.",
          "**11 FAQs about BBA in Sweden**",
          "**1 Can I study BBA in Sweden?**",
          "Yes . Business Education at the Undergraduate Level Sweden offers undergraduate business education in Business and Economics, International Management, and Business Administration. However, not all universities have a degree with the exact title BBA. Find out the official degree title before applying.",
          "**2 Can Indian students pursue BBA in Sweden in English?**",
          "Yes. Some Swedish universities and business schools offer relevant bachelor’s programs in English. Examples include some programs at Jönköping University and Stockholm School of Economics. Students should consider Gothenburg, Umeå, Uppsala and other institutions before applying.",
          "**3 What is the course fee for BBA related courses in Sweden?**",
          "The selected program examples in this guide have different tuition fees, from around SEK 289,800 to SEK 360,000 which is about ₹27.53 lakh to ₹34.20 lakh at the indicative exchange rate used.",
          "**4 What is the cost of studying BBA in Sweden?**",
          "Estimated total budget including tuition and living expenses for the selected three-year program examples is approximately between ₹61.73 lakh and ₹82.08 lakh. Actual costs vary according to the university, accommodation, lifestyle and exchange rate.",
          "**5 Is it possible to do an MBA after BBA in Sweden?**",
          "Yes. Graduates can apply for an MBA after their bachelor’s degree, provided they meet the admission criteria of the MBA provider. Some institutions require students to have relevant work experience, so students should check the entry requirements for each course.",
          "**6 How long does a bachelor's degree in business take in Sweden?**",
          "Most bachelor's programmes in business and related subjects take **three years** to complete and generally carry 180 ECTS credits.",
          "**7 Are scholarships available for Indian students studying business in Sweden?**",
          "Some Swedish universities offer scholarships to eligible international fee-paying students. Availability, scholarship value, and eligibility conditions vary by institution and intake. Students should check the official scholarship pages of their chosen universities."
        ]
      }
    ]
  }
],
 "universities": [
  {
    "name": "University of Gothenburg",
    "location": "Gothenburg, Sweden",
    "fee": "SEK 97,000 / Year",
    "desc": "The School of Business, Economics and Law at Gothenburg holds prestigious Triple Crown accreditation (EQUIS, AACSB, AMBA) and offers world-class undergraduate education in Business & Economics.",
    "image": "/uploads/study_abroad/sweden/university_of_gothenburg.webp",
    "img": "/uploads/study_abroad/sweden/university_of_gothenburg.webp"
  },
  {
    "name": "Jönköping University",
    "location": "Jönköping, Sweden",
    "fee": "SEK 100,000 – 120,000 / Year",
    "desc": "Jönköping International Business School (JIBS) is double-accredited (EQUIS & AACSB), renowned across Europe for family business, entrepreneurship, and international management.",
    "image": "/uploads/study_abroad/sweden/swe_BBA_image1.png",
    "img": "/uploads/study_abroad/sweden/swe_BBA_image1.png"
  },
  {
    "name": "Umeå University",
    "location": "Umeå, Sweden",
    "fee": "SEK 96,600 / Year",
    "desc": "USBE at Umeå University provides AACSB-accredited bachelor's degrees with strong focus on international business, responsible leadership, and sustainable development.",
    "image": "/uploads/study_abroad/sweden/swe_BBA_image2.png",
    "img": "/uploads/study_abroad/sweden/swe_BBA_image2.png"
  },
  {
    "name": "Lund University",
    "location": "Lund, Sweden",
    "fee": "SEK 100,000 – 120,000 / Year",
    "desc": "Lund University School of Economics and Management (LUSEM) is triple-crown accredited, offering internationally recognized business and economics curricula.",
    "image": "/uploads/study_abroad/sweden/swe_BBA_image3.png",
    "img": "/uploads/study_abroad/sweden/swe_BBA_image3.png"
  }
],
 "faqs": [
 {
 "q": "Can Indian students apply for BBA in Sweden?",
 "a": "Yes, Indian students with qualifying credentials meeting English language proficiency (IELTS/TOEFL) and academic prerequisites can apply to recognized universities in Sweden."
 },
 {
 "q": "What is the medium of instruction for BBA in Sweden?",
 "a": "Most master's and international bachelor's degree programmes are taught entirely in English for international students across Swedish universities."
 },
 {
 "q": "What are the typical tuition fees for BBA in Sweden?",
 "a": "Tuition fees for international students generally range between SEK 80,000 and SEK 150,000 per year, depending on the institution and level of study."
 },
 {
 "q": "Can international students work while studying in Sweden?",
 "a": "Yes, non-EU international students holding a valid Swedish residence permit for higher education are permitted to work alongside their studies without a fixed hours limitation during term time."
 }
 ],
 "faqTitle": "Frequently Asked Questions"
};

export default function BBASweden() {
 const dynamicPage = {
 ...page,
 name: cmsData.hero?.title || page.name,
 heroParas: cmsData.hero?.subtitle ? [cmsData.hero.subtitle] : page.heroParas,
 overview: cmsData.overview
 ? (Array.isArray(cmsData.overview) ? cmsData.overview : [cmsData.overview])
 : page.overview,
 stats: (cmsData.stats || []).map(s => ({ label: s.l || s.label, value: s.n || s.value }))
 .filter(s => s.label && s.value).length > 0
 ? (cmsData.stats || []).map(s => ({ label: s.l || s.label, value: s.n || s.value }))
 : page.stats,
 universities: (cmsData.universities && cmsData.universities.length > 0)
 ? cmsData.universities
 : page.universities,
 sections: (page.sections || []).map((sec) => {
 if (sec.slot === "universities" && cmsData.universities && cmsData.universities.length > 0) {
 return {
 ...sec,
 unis: cmsData.universities,
 };
 }
 return sec;
 }),
 seo: {
 title: cmsData.seo?.title || page.title,
 description: cmsData.seo?.description || page.description,
 },
 };

 return (
 <AbroadCoursePage
 page={dynamicPage}
 heroImg={heroImg}
 heroBgImg={heroBgImg}
 sideImg={sideImg}
 ctaBgImg={ctaBgImg}
 seoPath="/study-abroad/sweden/bba"
 />
 );
}
