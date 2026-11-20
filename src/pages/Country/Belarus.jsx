import cmsData from "../../data/medical_colleges/belarus.json";
import React, { useState } from "react";
import SeoHead from "../../component/SeoHead.jsx";
import BelarusFlag from "../../Images/country flag png/Belarus.svg";
import { useNavigate, Link } from "react-router-dom";
import { Plus as FiPlus, Minus as FiMinus } from "lucide-react";

const faqData = [
  {
    question: "Is MBBS in Belarus valid and recognized in India?",
    answer:
      "Yes, MBBS (MD) degrees from top government medical universities in Belarus (such as Belarusian State Medical University, Vitebsk, Gomel, and Grodno) are listed in WDOMS and recognized by the NMC (National Medical Commission) and WHO. Graduates are eligible to appear for the NExT/FMGE exam to practice medicine in India."
  },
  {
    question: "Is the MBBS course in Belarus taught in English?",
    answer:
      "Yes, Belarusian medical universities have been offering 100% English-medium MBBS programs for international students for over 30 years. All lectures, lab sessions, textbooks, and examinations are conducted in English."
  },
  {
    question: "What is the total duration and cost of MBBS in Belarus?",
    answer:
      "The duration is 6 years (5 years academic + 1 year rotating clinical internship). Tuition fees range between ₹3.5 Lakh to ₹4.5 Lakh per year, making the total package for the 6-year course approximately ₹22 Lakh to ₹30 Lakh, which is highly affordable compared to private Indian medical colleges."
  },
  {
    question: "Is NEET mandatory for MBBS admission in Belarus?",
    answer:
      "Yes, qualifying NEET-UG is compulsory for all Indian students seeking admission to study medicine abroad as per current National Medical Commission (NMC) regulations."
  },
  {
    question: "Are hostel and Indian mess facilities available in Belarus?",
    answer:
      "Yes, all major state medical universities in Belarus offer comfortable, heated on-campus student hostels with high-speed internet, security, and common kitchens. Many universities also feature Indian mess options or Indian grocery shops nearby."
  },
  {
    question: "How safe is Belarus for Indian medical students?",
    answer:
      "Belarus is widely recognized as one of the safest countries in Eastern Europe, characterized by very low crime rates, welcoming local citizens, zero tolerance for racial discrimination, and 24/7 security on university campuses and student dormitories."
  }
];

const Belarus = () => {
  const navigate = useNavigate();
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [showMoreClimate, setShowMoreClimate] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const defaultUniversities = [
    {
      name: "Belarusian State Medical University",
      location: "Minsk, Belarus",
      fee: "₹4.2 Lakhs / Year",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/fd/BSMI2020.jpg",
    },
    {
      name: "Gomel State Medical University",
      location: "Gomel, Belarus",
      fee: "₹3.8 Lakhs / Year",
      img: "https://upload.wikimedia.org/wikipedia/commons/5/58/Gomel_State_Medical_University.jpg",
    },
    {
      name: "Vitebsk State Medical University",
      location: "Vitebsk, Belarus",
      fee: "₹3.6 Lakhs / Year",
      img: "https://upload.wikimedia.org/wikipedia/commons/5/58/%D0%92%D0%93%D0%9C%D0%A3_%28%D0%92%D0%B8%D1%82%D0%B5%D0%B1%D1%81%D0%BA%29_-_%D0%9B%D0%A2%D0%9A.jpg",
    },
    {
      name: "Grodno State Medical University",
      location: "Grodno, Belarus",
      fee: "₹3.5 Lakhs / Year",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Grodno_State_Medical_University.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <SeoHead
        title={cmsData?.seo?.title || "MBBS in Belarus 2026-27 | Admissions, Fees & Universities | Edu Hawk"}
        description={cmsData?.seo?.description || "Explore MBBS in Belarus for Indian students: eligibility, admission process, top medical universities, documents and food & accommodation costs."}
        keywords={cmsData?.seo?.keywords || "mbbs in belarus, belarus mbbs fees, study mbbs belarus, belarus medical universities"}
        path="/mbbs-abroad/belarus"
        ogType="website"
      />

      {/* ==================== HEADER CAROUSEL ==================== */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={cmsData?.hero?.image || "https://upload.wikimedia.org/wikipedia/commons/8/8c/Miensk_-_Plac_Niezale%C5%BEna%C5%9Bci.jpg"}
            alt="Independence Square Minsk, Belarus"
            className="w-full h-full object-cover brightness-75"
            srcSet="https://upload.wikimedia.org/wikipedia/commons/8/8c/Miensk_-_Plac_Niezale%C5%BEna%C5%9Bci.jpg 1x, https://upload.wikimedia.org/wikipedia/commons/8/8c/Miensk_-_Plac_Niezale%C5%BEna%C5%9Bci.jpg 2x"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Subtle dark gradient overlay for optimal text contrast & accessibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl text-center px-4 tracking-tight">
              {cmsData?.hero?.title || "STUDY MBBS IN BELARUS"}
            </h1>
          </div>
        </div>
      </div>

      {/* ==================== MAIN CONTENT ==================== */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Intro Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div>
            <img
              src={BelarusFlag}
              loading="lazy"
              width={378}
              height={189}
              alt="Belarus flag"
              className="w-32 md:w-40 border-4 border-gray-800 rounded shadow-lg"
              srcSet={`${BelarusFlag} 1x, ${BelarusFlag} 2x`}
              sizes="(max-width: 768px) 120px, 160px"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
              {cmsData?.hero?.subtitle || "Explore MBBS Opportunities in Belarus 2026–2027"}
            </h2>
          </div>
        </div>

        {/* About Belarus + Image */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
              About Belarus
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Belarus has become a prominent destination for international medical students who want to{" "}
              <button
                onClick={() => navigate("/")}
                className="hover:text-[#426a91] text-blue-600 font-bold transition-colors duration-200 cursor-pointer"
              >
                study MBBS abroad.
              </button>{" "}
              Situated in Eastern Europe, Belarus is celebrated for its prestigious state-funded medical universities, European Bologna education framework, and safe, peaceful society.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              With a course duration of <strong>6 years</strong> (5 academic years + 1-year clinical internship), Belarusian medical universities emphasize high-standard practical training in regional teaching hospitals. The medium of instruction is 100% English, and degrees are recognized by the <strong>NMC (National Medical Commission)</strong>, <strong>WHO</strong>, and <strong>WFME</strong>.
            </p>

            {showMoreAbout ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Tuition fees and cost of living in Belarus are heavily subsidized, giving Indian students an accessible pathway to an esteemed European medical degree without capitation or donation fees. Major student cities like Minsk, Vitebsk, Gomel, and Grodno provide excellent student hostels, modern libraries, and high safety standards.
              </p>
            ) : null}

            <button
              onClick={() => setShowMoreAbout(!showMoreAbout)}
              className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
            >
              {showMoreAbout ? "Show Less" : "Read More"}
            </button>
          </div>

          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Victory_square%2C_Minsk_01.jpg"
              loading="lazy"
              alt="Victory Square, Minsk Belarus"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
              srcSet="https://upload.wikimedia.org/wikipedia/commons/9/99/Victory_square%2C_Minsk_01.jpg 1x, https://upload.wikimedia.org/wikipedia/commons/9/99/Victory_square%2C_Minsk_01.jpg 2x"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Quick Information + About MBBS */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left – Quick Info Table */}
          <div>
            <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
              Quick Information – Study MBBS in Belarus
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-left">
                <tbody>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">Recognition</td>
                    <td className="p-4">NMC, WHO & European Ministry Recognized</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Eligibility</td>
                    <td className="p-4">50% in PCB aggregate in 10+2 (40% reserved)</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">Course Duration</td>
                    <td className="p-4">6 Years (including 1-Year Clinical Internship)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">NEET</td>
                    <td className="p-4">Compulsory for Indian Students</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">IELTS/TOEFL</td>
                    <td className="p-4">Not Required</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Medium of Teaching</td>
                    <td className="p-4">100% English Medium</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">University Status</td>
                    <td className="p-4">100% State-Owned Government Universities</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right – About MBBS */}
          <div>
            <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
              About MBBS in Belarus
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Medical education in Belarus stands out for its high academic rigor and European pedagogical framework. Indian students benefit from small teacher-to-student ratios (1:10), individual dissection exposure, and clinical bed rotations.
            </p>

            {showMoreClimate ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Belarusian universities provide well-heated campus hostels, sports complexes, and vibrant multicultural student clubs. The climate is temperate continental, with warm summers and snowy winters where all indoor living spaces, university buildings, and hospitals are fully central-heated.
              </p>
            ) : null}

            <button
              onClick={() => setShowMoreClimate(!showMoreClimate)}
              className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
            >
              {showMoreClimate ? "Show Less" : "Read More"}
            </button>
          </div>
        </div>

        {/* ==================== UNIVERSITIES GRID ==================== */}
        <div id="universities" className="mb-20">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            {cmsData?.universitiesHeading || "Top Medical Universities in Belarus"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(cmsData?.universities && cmsData.universities.length > 0 ? cmsData.universities : defaultUniversities).map((uni, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={uni.image || uni.img}
                  loading="lazy"
                  alt={uni.name}
                  className="w-full h-56 object-cover"
                  srcSet={`${uni.image || uni.img} 1x, ${uni.image || uni.img} 2x`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="p-6 text-center">
                  <h4 className="text-lg font-bold text-blue-900 mb-2">
                    {uni.name}
                  </h4>
                  {uni.location && (
                    <p className="text-sm text-gray-500 font-medium mb-1">{uni.location}</p>
                  )}
                  {uni.fee && (
                    <p className="text-sm font-semibold text-blue-700">{uni.fee}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== ADVANTAGES + COST ==================== */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
              Advantages of Studying MBBS in Belarus 2026–2027
            </h2>

            <div className="space-y-6">
              <div>
                <h5 className="text-xl font-semibold">
                  1. High European Educational Quality
                </h5>
                <p className="text-gray-700">
                  Government state medical universities accredited under the European Bologna education system with modern labs and clinical simulations.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  2. 100% English-Medium Programs
                </h5>
                <p className="text-gray-700">
                  All lectures, clinical rounds, and examinations are conducted in English by experienced bilingual medical professors.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  3. Affordable European Medical Fees
                </h5>
                <p className="text-gray-700">
                  Tuition fees starting from ₹3.5 Lakhs per year with zero capitation fees or hidden donation charges.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  4. Safe & Peaceful Environment
                </h5>
                <p className="text-gray-700">
                  Rated among the safest European nations with strict law enforcement, 24/7 campus security, and a student-friendly atmosphere.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Cost of Study MBBS in Belarus
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Pursuing an MBBS in Belarus offers an outstanding quality-to-cost ratio. Total 6-year package costs (tuition + hostel + medical insurance) range between <strong>₹22 Lakh to ₹30 Lakh</strong>, making it significantly less expensive than Indian private medical colleges.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Living costs in Belarus are also very manageable, with hostel accommodation, groceries, and local transport amounting to approximately ₹15,000 to ₹25,000 per month.
            </p>
          </div>
        </div>

        {/* ==================== FOOD & ACCOMMODATION SECTION ==================== */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
              Food and Accommodation Cost – MBBS in Belarus
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p>
                State medical universities in Belarus provide well-maintained on-campus student dormitories specially equipped for international cohorts:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Double and triple sharing rooms with comfortable beds, study tables, and wardrobes</li>
                <li>Centralized winter heating systems keeping rooms comfortable during winter</li>
                <li>Attached or floor-wise modern washrooms with 24/7 hot and cold water</li>
                <li>High-speed internet access and quiet study rooms</li>
              </ul>

              <p className="mt-6">Hostels typically include:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Common kitchens on every floor where Indian students cook familiar home-style meals</li>
                <li>Laundry rooms with washing machines and drying areas</li>
                <li>Indian mess and canteen options near university campuses</li>
                <li>24/7 CCTV surveillance, biometric entry, and dedicated hostel wardens</li>
              </ul>

              <p className="mt-6">
                <strong>Approximate monthly living expenses (2026–2027):</strong>
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Hostel Accommodation: ₹6,000 – ₹12,000 / month</li>
                <li>Food (self-cooking + mess): ₹7,000 – ₹12,000 / month</li>
                <li>Transport & Miscellaneous: ₹2,000 – ₹4,000 / month</li>
                <li>
                  <strong>Total monthly expenses:</strong> ≈ ₹15,000 – ₹28,000 / month
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ==================== ADMISSION PROCESS ==================== */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
              Admission Process for MBBS in Belarus 2026–2027
            </h2>

            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Admission to Belarusian medical universities is streamlined and transparent:
              </p>

              <div className="space-y-10">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 1: University Selection
                  </h4>
                  <p className="text-gray-700">
                    Select a recognized state medical university in Belarus (Belarusian State, Vitebsk, Gomel, or Grodno) matching your academic profile and budget.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 2: Eligibility Check & Application
                  </h4>
                  <p className="text-gray-700">
                    Submit scanned copies of 10th & 12th marksheets, NEET-UG scorecard, and valid passport for initial university evaluation.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 3: Official Ministry Invitation Letter
                  </h4>
                  <p className="text-gray-700">
                    The university verifies documents and applies to the Migration Department and Ministry of Education of Belarus to issue an official Student Invitation Letter.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 4: Visa Stamping & Departure
                  </h4>
                  <p className="text-gray-700">
                    Apply for a student visa at the Embassy of Belarus in New Delhi. Upon visa issuance, EduHawk coordinates group travel, airport reception in Minsk, hostel accommodation, and university enrollment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== DOCUMENTS + ELIGIBILITY + SCHOLARSHIPS ==================== */}
        <div className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left - Required Documents */}
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
                  Required Documents for MBBS in Belarus 2026–2027
                </h2>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <h5 className="text-lg font-semibold text-blue-800">
                      Educational Documents
                    </h5>
                    <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
                      <li>10th & 12th Marksheets and Passing Certificates</li>
                      <li>NEET-UG Scorecard (Mandatory)</li>
                      <li>Valid Indian Passport (minimum 2 years validity)</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <h5 className="text-lg font-semibold text-blue-800">
                      Other Important Documents
                    </h5>
                    <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
                      <li>Official Invitation Letter approved by Belarus Migration Department</li>
                      <li>Medical Fitness & HIV Test Certificate</li>
                      <li>Birth Certificate (apostilled/attested)</li>
                      <li>10 passport-size photographs (35mm x 45mm, white background)</li>
                      <li>Visa Application Form & Travel Insurance</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right - Eligibility + Scholarships */}
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                  Eligibility Criteria & Financial Aid
                </h2>

                <div className="bg-white p-6 rounded-xl shadow-sm border mb-8">
                  <h4 className="text-xl font-semibold text-blue-900 mb-4">
                    Basic Eligibility
                  </h4>
                  <ul className="list-decimal pl-5 space-y-2 text-gray-700">
                    <li>Minimum 17 years old by 31st December of the admission year</li>
                    <li>Minimum 50% aggregate in Physics, Chemistry, Biology in 12th (40% for reserved)</li>
                    <li>NEET-UG qualification mandatory for Indian citizens</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <h4 className="text-xl font-semibold text-blue-900 mb-4">
                    Financial Support & Subsidies
                  </h4>
                  <ul className="space-y-4">
                    <li>
                      <strong>State-Subsidized Fees</strong>
                      <br />
                      <span className="text-gray-600 text-sm">
                        Belarusian government heavily subsidizes operational university budgets, keeping fees uniform and modest for international students.
                      </span>
                    </li>
                    <li>
                      <strong>University Academic Merit Awards</strong>
                      <br />
                      <span className="text-gray-600 text-sm">
                        High-achieving students who score top grades in semester examinations may receive tuition discounts and merit stipends.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== COMPARISON TABLE ==================== */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
              MBBS in Belarus vs MBBS in India – Quick Comparison (2026–2027)
            </h2>

            <div className="overflow-x-auto shadow-md rounded-lg">
              <table className="min-w-full border-collapse border border-gray-300 text-left">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="p-4 border border-gray-300 text-center font-semibold">
                      Criteria
                    </th>
                    <th className="p-4 border border-gray-300 text-center font-semibold">
                      MBBS in Belarus
                    </th>
                    <th className="p-4 border border-gray-300 text-center font-semibold">
                      MBBS in India
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="bg-gray-50">
                    <td className="p-4 border font-medium">
                      Tuition Fees (Total Package)
                    </td>
                    <td className="p-4 border">₹22 – ₹30 Lakhs Total Package</td>
                    <td className="p-4 border">
                      Govt: ₹1 – ₹5 Lakhs
                      <br />
                      Private: ₹80 Lakhs – ₹1.5+ Crore
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border font-medium">
                      Donation / Capitation
                    </td>
                    <td className="p-4 border text-green-700 font-semibold">No Donation</td>
                    <td className="p-4 border text-red-700">
                      High capitation/donation in private colleges
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border font-medium">Course Duration</td>
                    <td className="p-4 border">6 Years (5 Years Study + 1 Year Internship)</td>
                    <td className="p-4 border">5.5 Years (4.5 Years Study + 1 Year Internship)</td>
                  </tr>
                  <tr>
                    <td className="p-4 border font-medium">Class Size & Ratio</td>
                    <td className="p-4 border">10–15 students per group (Individual attention)</td>
                    <td className="p-4 border">100–150+ students per batch</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border font-medium">Global Recognition</td>
                    <td className="p-4 border">
                      NMC, WHO, WFME, European Bologna Framework
                    </td>
                    <td className="p-4 border">
                      NMC & WHO recognized
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border font-medium">
                      Medium of Instruction
                    </td>
                    <td className="p-4 border">100% English Medium</td>
                    <td className="p-4 border">English</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ==================== FAQs ==================== */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
              Frequently Asked Questions – MBBS in Belarus 2026-2027
            </h2>

            <div className="space-y-5">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md ${
                    openIndex === index ? "shadow-lg border-blue-300" : ""
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-200"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-blue-700 min-w-[2.5rem]">
                        {index + 1}.
                      </span>
                      <h4 className="text-xl md:text-2xl font-semibold text-blue-900 leading-tight">
                        {item.question}
                      </h4>
                    </div>

                    <span className="text-3xl text-blue-600 flex-shrink-0 transition-transform duration-300">
                      {openIndex === index ? (
                        <FiMinus className="transform rotate-0" />
                      ) : (
                        <FiPlus className="transform rotate-0" />
                      )}
                    </span>
                  </button>

                  <div
                    className={`px-6 transition-all duration-500 ease-in-out ${
                      openIndex === index
                        ? "max-h-[600px] pb-8 pt-2 opacity-100"
                        : "max-h-0 pb-0 opacity-0"
                    }`}
                    style={{ overflow: "hidden" }}
                  >
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ==================== CTA BANNER ==================== */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-white rounded-2xl p-8 md:p-12 text-center shadow-xl my-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Plan Your Medical Journey in Belarus with EduHawk
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Get 1-on-1 personalized counselling for top NMC-recognized state medical universities in Belarus with 100% transparent fee structures, official ministry invitation letters, and full on-ground support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-xl transition duration-200 shadow-lg text-center"
            >
              Get Free Counselling
            </Link>
            <a
              href="https://wa.me/919630736070?text=Hi%2C%20I%20want%20to%20know%20more%20about%20MBBS%20in%20Belarus"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition duration-200 shadow-lg text-center flex items-center justify-center gap-2"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Belarus;
