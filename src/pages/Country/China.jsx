import cmsData from "../../data/medical_colleges/china.json";
import React, { useState } from "react";
import SeoHead from "../../component/SeoHead.jsx";
import ChinaFlag from "../../Images/country flag png/China.svg";
import { useNavigate, Link } from "react-router-dom";
import { Plus as FiPlus, Minus as FiMinus } from "lucide-react";

const faqData = [
  {
    question: "Is MBBS in China taught in English for Indian students?",
    answer:
      "Yes, MOE-listed (Ministry of Education, China) medical universities conduct the complete 6-year MBBS program entirely in English medium for international students. Clinical rounds also include English instruction alongside basic communicative Mandarin to interact effectively with patients."
  },
  {
    question: "Is MBBS degree from China recognized by NMC and WHO?",
    answer:
      "Yes, MBBS degrees from MOE-approved Chinese medical universities are listed in WDOMS and recognized by the National Medical Commission (NMC) and WHO. Graduates are eligible to appear for the NExT/FMGE licensing exam in India as well as USMLE and PLAB."
  },
  {
    question: "What is the duration of MBBS in China?",
    answer:
      "The MBBS program in China is 6 years in total — 5 years of rigorous academic medical coursework followed by 1 year of compulsory rotating clinical internship in university-affiliated tertiary hospitals."
  },
  {
    question: "What is the total cost of studying MBBS in China?",
    answer:
      "Tuition fees in top government medical universities in China range between ₹3.5 Lakh to ₹5 Lakh per year, making the complete 6-year course package (tuition + accommodation) approximately ₹25 Lakh to ₹35 Lakh. No donation or capitation fees are charged."
  },
  {
    question: "Is NEET mandatory for MBBS admission in China?",
    answer:
      "Yes, qualifying NEET-UG is strictly mandatory for all Indian students seeking MBBS admission abroad as mandated by the National Medical Commission (NMC)."
  },
  {
    question: "Are Indian food and hostel facilities available in Chinese universities?",
    answer:
      "Yes, leading medical universities in China provide safe, air-conditioned campus dormitories with attached washrooms, high-speed Wi-Fi, and security. Most major universities with Indian student populations feature Indian mess facilities or communal kitchens for self-cooking."
  }
];

const China = () => {
  const navigate = useNavigate();
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [showMoreClimate, setShowMoreClimate] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const defaultUniversities = [
    {
      name: "Nanjing Medical University",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/de/Dormitory_of_Bainiantang.jpg",
    },
    {
      name: "Southern Medical University",
      img: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Qilingang_campus.jpg",
    },
    {
      name: "Tianjin Medical University",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/89/2014%E5%B9%B46%E6%9C88%E5%A4%A9%E6%B4%A5%E5%8C%BB%E7%A7%91%E5%A4%A7%E5%AD%A6%E6%A0%A1%E5%9B%AD.jpg",
    },
    {
      name: "China Medical University",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/00/CMU_20061030.jpg",
    },
    {
      name: "Dalian Medical University",
      img: "https://images.shiksha.com/mediadata/images/1597819161phpzHqyKj_g.png",
    },
    {
      name: "Shandong University of Traditional Chinese Medicine",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/29/%E5%B1%B1%E4%B8%9C%E5%A4%A7%E5%AD%A6%EF%BC%88%E4%B8%AD%E5%BF%83%E6%A0%A1%E5%8C%BA%EF%BC%89%E5%8D%97%E9%97%A8%EF%BC%88%E6%AD%A3%E9%97%A8%EF%BC%89.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <SeoHead
        title={cmsData?.seo?.title || "MBBS in China 2026-27 | Admissions, Fees & Universities | Edu Hawk"}
        description={cmsData?.seo?.description || "Explore MBBS in China for Indian students: eligibility, admission process, top medical universities, documents and food & accommodation costs."}
        keywords={cmsData?.seo?.keywords || "mbbs in china, china mbbs fees, study mbbs china, china medical colleges"}
        path="/mbbs-abroad/china"
        ogType="website"
      />

      {/* ==================== HEADER CAROUSEL ==================== */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={cmsData?.hero?.image || "https://upload.wikimedia.org/wikipedia/commons/d/df/Pudong_Shanghai_November_2017_panorama.jpg"}
            alt="Pudong Shanghai Skyline, China"
            className="w-full h-full object-cover brightness-75"
            srcSet="https://upload.wikimedia.org/wikipedia/commons/d/df/Pudong_Shanghai_November_2017_panorama.jpg 1x, https://upload.wikimedia.org/wikipedia/commons/d/df/Pudong_Shanghai_November_2017_panorama.jpg 2x"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Subtle dark gradient overlay for optimal text contrast & accessibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl text-center px-4 tracking-tight">
              {cmsData?.hero?.title || "STUDY MBBS IN CHINA"}
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
              src={ChinaFlag}
              loading="lazy"
              width={900}
              height={600}
              alt="China flag"
              className="w-32 md:w-40 border-4 border-gray-800 rounded shadow-lg"
              srcSet={`${ChinaFlag} 1x, ${ChinaFlag} 2x`}
              sizes="(max-width: 768px) 120px, 160px"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
              {cmsData?.hero?.subtitle || "Explore MBBS Opportunities in China 2026–2027"}
            </h2>
          </div>
        </div>

        {/* About China + Image */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
              About China
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              China has emerged as one of the premier global destinations for international medical aspirants who wish to{" "}
              <button
                onClick={() => navigate("/")}
                className="hover:text-[#426a91] text-blue-600 font-bold transition-colors duration-200 cursor-pointer"
              >
                study MBBS abroad.
              </button>{" "}
              With world-renowned university hospitals, state-of-the-art simulation labs, and an ultra-modern healthcare ecosystem, China offers Indian students rigorous 6-year clinical training with extensive patient bed exposure.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              Medical universities in China are recognized by the <strong>Ministry of Education (MOE) China</strong>, <strong>NMC (National Medical Commission)</strong>, and <strong>WHO</strong>. The curriculum is delivered in English, aligned with international medical standards, and prepares graduates thoroughly for NExT, USMLE, and PLAB licensing examinations.
            </p>

            {showMoreAbout ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Beyond clinical excellence, China offers highly subsidized tuition packages, merit scholarships (such as the Chinese Government CSC Scholarship), safe on-campus housing, and bullet-train connectivity across all major university cities including Nanjing, Guangzhou, Tianjin, and Shenyang.
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
              src="https://upload.wikimedia.org/wikipedia/commons/6/64/CR400BF-Z-0312%40BJI_%2820231009152047%29.jpg"
              loading="lazy"
              alt="High-Speed Rail in China"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
              srcSet="https://upload.wikimedia.org/wikipedia/commons/6/64/CR400BF-Z-0312%40BJI_%2820231009152047%29.jpg 1x, https://upload.wikimedia.org/wikipedia/commons/6/64/CR400BF-Z-0312%40BJI_%2820231009152047%29.jpg 2x"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Quick Information + About MBBS */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left – Quick Info Table */}
          <div>
            <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
              Quick Information – Study MBBS in China
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-left">
                <tbody>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">Recognition</td>
                    <td className="p-4">NMC, WHO & MOE Recognized</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Eligibility</td>
                    <td className="p-4">50% in PCB aggregate in 10+2</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">Course Duration</td>
                    <td className="p-4">6 Years (5 Years Academic + 1 Year Internship)</td>
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
                    <td className="p-4">English Medium (MOE Approved)</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">Hospital Infrastructure</td>
                    <td className="p-4">Grade 3A Super-Specialty Hospitals (2000+ Beds)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right – About MBBS */}
          <div>
            <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
              About MBBS in China
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              China is known globally for medical education standards that rank alongside top European and American institutions. Chinese universities utilize English-medium curricula authored by international professors and conduct regular hands-on clinical rotations.
            </p>

            {showMoreClimate ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                The Chinese government heavily subsidizes international medical tuition, allowing students from India to obtain a world-class degree at a fraction of the cost of Indian private medical colleges. Advanced 3D anatomy tables, robotic surgical suites, and dedicated international hostels make studying in China a truly transformative experience.
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
            {cmsData?.universitiesHeading || "Top Medical Universities in China"}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {(cmsData?.universities && cmsData.universities.length > 0 ? cmsData.universities : defaultUniversities).map((uni, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={uni.image || uni.img}
                  loading="lazy"
                  alt={uni.name}
                  className="w-full h-64 object-cover"
                  srcSet={`${uni.image || uni.img} 1x, ${uni.image || uni.img} 2x`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">
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
              Advantages of Studying MBBS in China 2026–2027
            </h2>

            <div className="space-y-6">
              <div>
                <h5 className="text-xl font-semibold">
                  1. World-Class Clinical Exposure
                </h5>
                <p className="text-gray-700">
                  Affiliated Grade 3A teaching hospitals feature over 2,000 to 5,000 beds, giving Indian students unparalleled hands-on clinical exposure.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  2. English-Medium MOE Recognized Universities
                </h5>
                <p className="text-gray-700">
                  Official MOE-approved curricula conducted in 100% English medium with international medical faculty.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  3. Affordable Subsidized Tuition
                </h5>
                <p className="text-gray-700">
                  Government-backed subsidies maintain tuition between ₹3.5L to ₹5L per year with zero capitation or donation fees.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  4. High FMGE & Licensing Success
                </h5>
                <p className="text-gray-700">
                  Rigorous medical curriculum aligned with NMC guidelines ensures strong performance in NExT, USMLE, and PLAB exams.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Cost of Study MBBS in China
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Studying MBBS in China is an economical and premium option for Indian medical aspirants. Compared to private Indian medical colleges where fees exceed ₹80 Lakh to ₹1.5 Crore, top Chinese state medical universities offer complete 6-year tuition and hostel packages between <strong>₹25 Lakh to ₹35 Lakh</strong>.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Transparent university fee payment schedules, no capitation or donation charges, and affordable living costs make China one of the highest value-for-money MBBS destinations globally.
            </p>
          </div>
        </div>

        {/* ==================== FOOD & ACCOMMODATION SECTION ==================== */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
              Food and Accommodation Cost – MBBS in China
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p>
                Chinese medical universities offer modern, secure, and fully equipped on-campus international student apartments. Rooms are typically double or single occupancy with:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Beds, mattresses, study desks, chairs, and spacious wardrobes</li>
                <li>Air conditioning and winter heating systems</li>
                <li>Attached modern western-style bathrooms with 24/7 hot water</li>
                <li>High-speed broadband internet and campus Wi-Fi</li>
              </ul>

              <p className="mt-6">Hostels typically include:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Common kitchen facilities on each floor for self-cooking Indian meals</li>
                <li>Automated card-operated laundry facilities on campus</li>
                <li>Campus international dining halls with Indian vegetarian and non-veg options</li>
                <li>Round-the-clock CCTV surveillance, biometric security, and dedicated wardens</li>
              </ul>

              <p className="mt-6">
                <strong>Approximate monthly living expenses (2026–2027):</strong>
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Hostel / Accommodation: ₹8,000 – ₹16,000 / month</li>
                <li>Food (self-cooking + Indian mess): ₹7,000 – ₹14,000 / month</li>
                <li>Transport & Miscellaneous: ₹2,000 – ₹5,000 / month</li>
                <li>
                  <strong>Total monthly living cost:</strong> ≈ ₹17,000 – ₹35,000 / month
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ==================== ADMISSION PROCESS ==================== */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
              Admission Process for MBBS in China 2026–2027
            </h2>

            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                The admission process for MOE-approved MBBS programs in China is systematic and transparent:
              </p>

              <div className="space-y-10">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 1: University Selection & Evaluation
                  </h4>
                  <p className="text-gray-700">
                    Select an NMC-recognized, MOE-listed Chinese medical university such as Nanjing Medical University, Southern Medical University, or China Medical University based on location, fee budget, and hospital bed size.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 2: Eligibility & Document Submission
                  </h4>
                  <p className="text-gray-700">
                    Submit scanned copies of 10th & 12th marksheets (min. 50% PCB), NEET-UG scorecard, valid passport copy, and physical examination record.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 3: Admission Notice & JW202 / JW201 Visa Form
                  </h4>
                  <p className="text-gray-700">
                    The university issues an official Admission Notice, and the Ministry of Education in China processes the mandatory JW202/JW201 government visa authorization document.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 4: Visa Application (X1 Visa) & Travel
                  </h4>
                  <p className="text-gray-700">
                    Apply for a Chinese Student Visa (X1 Visa) at the Chinese Embassy/Consulate in India. Upon visa approval, EduHawk coordinates air ticketing, airport pickup in China, hostel allocation, and university registration.
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
                  Required Documents for MBBS in China 2026–2027
                </h2>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <h5 className="text-lg font-semibold text-blue-800">
                      Educational Documents
                    </h5>
                    <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
                      <li>10th and 12th Marksheets & Passing Certificates</li>
                      <li>NEET-UG Scorecard (Qualified)</li>
                      <li>Original Passport with minimum 18 months validity</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <h5 className="text-lg font-semibold text-blue-800">
                      Other Important Documents
                    </h5>
                    <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
                      <li>Foreigner Physical Examination Form (Medical Fitness Report)</li>
                      <li>Police Clearance Certificate (Non-Criminal Record)</li>
                      <li>Passport-size photographs with white background</li>
                      <li>Bank statement proving financial capability</li>
                      <li>University Admission Letter & Official JW202 Form</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right - Eligibility + Scholarships */}
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                  Eligibility Criteria & Scholarships
                </h2>

                <div className="bg-white p-6 rounded-xl shadow-sm border mb-8">
                  <h4 className="text-xl font-semibold text-blue-900 mb-4">
                    Basic Eligibility
                  </h4>
                  <ul className="list-decimal pl-5 space-y-2 text-gray-700">
                    <li>Minimum 17 years completed by 31st December of the admission year</li>
                    <li>Minimum 50% aggregate in Physics, Chemistry, Biology in 10+2 (40% for reserved)</li>
                    <li>NEET-UG qualification mandatory for Indian citizens</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <h4 className="text-xl font-semibold text-blue-900 mb-4">
                    Available Scholarships
                  </h4>
                  <ul className="space-y-4">
                    <li>
                      <strong>Chinese Government Scholarship (CSC)</strong>
                      <br />
                      <span className="text-gray-600 text-sm">
                        Prestige scholarship offering full or partial tuition fee waiver for outstanding international applicants.
                      </span>
                    </li>
                    <li>
                      <strong>Provincial Government Scholarships</strong>
                      <br />
                      <span className="text-gray-600 text-sm">
                        Scholarships offered by municipal provinces (e.g., Jiangsu, Guangdong) based on academic excellence.
                      </span>
                    </li>
                    <li>
                      <strong>University Performance Awards</strong>
                      <br />
                      <span className="text-gray-600 text-sm">
                        Annual academic merit rewards granted by universities for top-ranking students in semester exams.
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
              MBBS in China vs MBBS in India – Quick Comparison (2026–2027)
            </h2>

            <div className="overflow-x-auto shadow-md rounded-lg">
              <table className="min-w-full border-collapse border border-gray-300 text-left">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="p-4 border border-gray-300 text-center font-semibold">
                      Criteria
                    </th>
                    <th className="p-4 border border-gray-300 text-center font-semibold">
                      MBBS in China
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
                    <td className="p-4 border">₹25 – ₹35 Lakhs Total Package</td>
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
                    <td className="p-4 border">6 Years (5 Years Academic + 1 Year Internship)</td>
                    <td className="p-4 border">5.5 Years (4.5 Years Academic + 1 Year Internship)</td>
                  </tr>
                  <tr>
                    <td className="p-4 border font-medium">Hospital Patient Volume</td>
                    <td className="p-4 border">
                      Massive tertiary hospitals (2,000–5,000+ beds) with robotic surgery
                    </td>
                    <td className="p-4 border">
                      High in government colleges; varies in private colleges
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border font-medium">Global Recognition</td>
                    <td className="p-4 border">
                      NMC, WHO, WDOMS, MOE China recognized
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
              Frequently Asked Questions – MBBS in China 2026-2027
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
            Plan Your Medical Journey in China with EduHawk
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Get 1-on-1 personalized counselling for top MOE-listed, NMC-recognized medical universities in China with transparent fee structures, JW202 visa processing, and complete on-ground support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-xl transition duration-200 shadow-lg text-center"
            >
              Get Free Counselling
            </Link>
            <a
              href="https://wa.me/919630736070?text=Hi%2C%20I%20want%20to%20know%20more%20about%20MBBS%20in%20China"
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

export default China;
