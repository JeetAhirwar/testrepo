import cmsData from "../../data/medical_colleges/uzbekistan.json";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SeoHead from "../../component/SeoHead.jsx";
import UzbekistanFlag from "../../Images/country flag png/uzebkistan.webp";

const Uzbekistan = () => {
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [showMoreClimate, setShowMoreClimate] = useState(false);
  const navigate = useNavigate();


  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <SeoHead
        title={cmsData?.seo?.title || "MBBS in Uzbekistan 2026-27 | Admissions, Fees & Universities | Edu Hawk"}
        description={cmsData?.seo?.description || "Explore MBBS in Uzbekistan for Indian students: eligibility, admission process, top medical universities, documents and food & accommodation costs."}
        keywords={cmsData?.seo?.keywords || "mbbs in uzbekistan, uzbekistan mbbs fees, study mbbs uzbekistan, uzbekistan medical universities"}
        path="/mbbs-abroad/uzbekistan"
        ogType="website"
      />
      {/* ==================== HEADER CAROUSEL ==================== */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={cmsData?.hero?.image || "https://ik.imagekit.io/syustaging/SYU_PREPROD/Campus_vYiO8Uzxk.webp?tr=w-3840"}
            alt="Uzbekistan Landscape"
            className="w-full h-full object-cover brightness-75"
            srcSet="https://ik.imagekit.io/syustaging/SYU_PREPROD/Campus_vYiO8Uzxk.webp?tr=w-3840 1x, https://ik.imagekit.io/syustaging/SYU_PREPROD/Campus_vYiO8Uzxk.webp?tr=w-3840 2x"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Subtle dark gradient overlay for optimal text contrast & accessibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl text-center px-4 tracking-tight">
              {cmsData?.hero?.title || "STUDY MBBS IN UZBEKISTAN"}
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
              src={UzbekistanFlag}
              loading="lazy"
              width={250}
              height={250}
              alt="Uzbekistan flag"
              className="w-32 md:w-40 border-2 border-slate-200 rounded-lg shadow-sm"
              srcSet={`${UzbekistanFlag} 1x, ${UzbekistanFlag} 2x`}
              sizes="(max-width: 768px) 120px, 160px"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
              {cmsData?.hero?.subtitle || "Explore MBBS Opportunities in Uzbekistan 2026–2027"}
            </h2>
          </div>
        </div>

        {/* About Uzbekistan + Image */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
              About Uzbekistan
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Uzbekistan has become one of the most preferred destinations for 
              Indian students who want to 
              {" "} 
              <button onClick={() => navigate("/")}
                       className=" hover:text-[#426a91] text-blue-600 font-bold transition-colors duration-200 cursor-pointer"
                       >
                         study MBBS abroad.
                    </button> 
              {" "}   
              because of its 
              affordable tuition fees, quality education, and modern medical 
              infrastructure. Many students choose to {" "}<strong>study MBBS in Uzbekistan</strong>{" "}   due 
              to its safe environment, globally recognised universities, 
              and English-medium medical programs. The MBBS course generally lasts 
              6 years, including academic education and internship training, helping 
              students gain strong theoretical and practical medical knowledge.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              One of the biggest advantages of {" "}<strong>MBBS admission in Uzbekistan</strong>{" "} is the 
              availability of {" "}<strong>affordable fees in MBBS abroad</strong>{" "}programs compared to many 
              other countries. The country is home to several {" "}<strong>top medical universities in 
              Uzbekistan</strong>{" "} that provide experienced faculty, advanced laboratories, and practical 
              clinical exposure. Students studying in 
              {" "}<a
                href="#universities"
                className="font-bold text-blue-600 hover:underline cursor-pointer"
               >
                 MBBS universities in Uzbekistan
               </a>{" "} 
               receive 
              high-quality medical training that helps them become skilled healthcare professionals.
            </p>

            {showMoreAbout ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Uzbekistan is also known for having some of the {" "}<strong>top government 
                medical colleges in Uzbekistan</strong>{" "} along with reputed private institutions. 
                The availability of {" "}<strong>top private and government college in Uzbekistan</strong>{" "} 
                options gives students flexibility according to their budget and career 
                goals. Apart from Uzbekistan, other popular {" "}<strong>foreign countries for MBBS 
                abroad</strong>{" "} include Kazakhstan, Kyrgyzstan, and Nepal, making Uzbekistan one 
                of the {" "}<strong>best countries for MBBS abroad</strong>{" "} for Indian students.
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
              src="https://media.licdn.com/dms/image/v2/D5622AQH_NBaVS2Wr5A/feedshare-shrink_800/B56Ze8aBxrGQAg-/0/1751212639737?e=2147483647&v=beta&t=lNBxoP-lnV2mO5eyrjFmkmEY8AvTYjOmiSBrAKIkeoM"
              loading="lazy"
              alt="Uzbekistan"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
                  srcSet="https://media.licdn.com/dms/image/v2/D5622AQH_NBaVS2Wr5A/feedshare-shrink_800/B56Ze8aBxrGQAg-/0/1751212639737?e=2147483647&v=beta&t=lNBxoP-lnV2mO5eyrjFmkmEY8AvTYjOmiSBrAKIkeoM 1x, https://media.licdn.com/dms/image/v2/D5622AQH_NBaVS2Wr5A/feedshare-shrink_800/B56Ze8aBxrGQAg-/0/1751212639737?e=2147483647&v=beta&t=lNBxoP-lnV2mO5eyrjFmkmEY8AvTYjOmiSBrAKIkeoM 2x"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
          </div>
        </div>

        {/* Quick Information + About MBBS */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left – Quick Info Table */}
          <div>
            <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
              Quick Information – Study MBBS in Uzbekistan
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-left">
                <tbody>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">Recognition</td>
                    <td className="p-4">NMC & WHO Recognized</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Eligibility</td>
                    <td className="p-4">50% in PCB aggregate</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">Course Duration</td>
                    <td className="p-4">6 Years</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">NEET</td>
                    <td className="p-4">Compulsory</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">IELTS/TOEFL</td>
                    <td className="p-4">Not Required</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Medium of Teaching</td>
                    <td className="p-4">English</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right – About MBBS */}
          <div>
            <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
              About MBBS in Uzbekistan
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Uzbekistan offers a very simple procedure, as students are not required to undergo any entrance examination apart from NEET for Indian students.
            </p>

            {showMoreClimate ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                The Government of Uzbekistan subsidizes education, keeping fees relatively low. Students are also provided with medical insurance and necessary healthcare, creating a safe environment.
                Programs are in English medium. Uzbekistan has a continental climate with cold winters (-10°C to -20°C in some areas) and hot summers (up to +35°C), different from India's climate but comfortable with proper preparation.
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
            {cmsData?.universitiesHeading || "Top Medical Universities in Uzbekistan"}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {(cmsData?.universities && cmsData.universities.length > 0
              ? cmsData.universities
              : [
                  {
                    name: "Tashkent Medical Academy",
                    image: "https://tashkentmedicalacademy.in/wp-content/uploads/2025/03/Second-Tashkent-State-Medical-Institute.webp",
                    location: "Tashkent, Uzbekistan",
                    fee: "₹3.2 Lakhs / Year",
                  },
                  {
                    name: "Samarkand State Medical Institute",
                    image: "https://www.moksh16.com/uploads/images/samarkand1.webp",
                    location: "Samarkand, Uzbekistan",
                    fee: "₹3.0 Lakhs / Year",
                  },
                  {
                    name: "Bukhara State Medical Institute",
                    image: "https://mbbsadmissionindia.com/upload/media/bukhara-state-medical-institute-uzbekistan.jpeg",
                    location: "Bukhara, Uzbekistan",
                    fee: "₹2.9 Lakhs / Year",
                  },
                  {
                    name: "Andijan State Medical Institute",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxwr0cTA6P-tyHV6l3NQ3FJ9A3ynhR-hIxvA&s",
                    location: "Andijan, Uzbekistan",
                    fee: "₹2.8 Lakhs / Year",
                  },
                  {
                    name: "Tashkent Pediatric Medical Institute",
                    image: "https://mbbs-in-uzbekistan.in/assets/images/college/Tashkent%20Pediatric%20Medical%20Institute.jpg",
                    location: "Tashkent, Uzbekistan",
                    fee: "₹3.1 Lakhs / Year",
                  },
                  {
                    name: "Urgench Branch of Tashkent Medical Academy",
                    image: "https://mbbs-in-uzbekistan.in/assets/images/college/Urgench%20Branch%20of%20Tashkent%20Medical%20Academy.jpg",
                    location: "Urgench, Uzbekistan",
                    fee: "₹2.7 Lakhs / Year",
                  },
                ]
            ).map((uni, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  <img
                    src={uni.image || uni.img}
                    loading="lazy"
                    alt={uni.name}
                    className="w-full h-64 object-cover"
                    srcSet={`${uni.image || uni.img} 1x, ${uni.image || uni.img} 2x`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-blue-900 mb-2">
                      {uni.name}
                    </h4>
                    {uni.location && (
                      <p className="text-xs font-semibold text-slate-500 mb-2">
                        📍 {uni.location}
                      </p>
                    )}
                    {uni.fee && (
                      <div className="inline-block px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold mb-3 border border-emerald-200">
                        {uni.fee}
                      </div>
                    )}
                    {uni.desc && (
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {uni.desc}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== ADVANTAGES + COST ==================== */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
              Advantages of Studying MBBS in Uzbekistan 2026–2027
            </h2>

            <div className="space-y-6">
              <div>
                <h5 className="text-xl font-semibold">
                  1. High-Quality Education
                </h5>
                <p className="text-gray-700">
                  Uzbekistan's medical universities are famous for providing high-quality education. Globally recognised for high standards.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  2. Affordable Tuition Fees
                </h5>
                <p className="text-gray-700">
                  Significantly lower than Western countries or private Indian colleges (total ~₹20–35 lakhs).
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  3. No Additional Entrance Exams
                </h5>
                <p className="text-gray-700">
                  (NEET required for Indian students only)
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  4. English-Medium Programs
                </h5>
                <p className="text-gray-700">
                  No language barrier for most international students.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Cost of Study MBBS in Uzbekistan
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The low-cost MBBS in Uzbekistan fees and affordable living costs attract more and more Indian students.
              The Uzbekistan government has subsidised the fee structure, making the course very cheap.
              No donation required. Total cost to complete 6-year MBBS is budget-friendly (~₹20–35 lakhs including tuition, hostel & living).
            </p>
          </div>
        </div>

        {/* Food & Accommodation section - kept similar */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
              Food and Accommodation Cost – MBBS in Uzbekistan
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p>
                Accommodation for international students at Uzbek medical universities offers various amenities.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Rooms are usually shared with two to three beds.</li>
                <li>Rooms include basic furniture such as bed sheets, blankets, pillows, tables, and wardrobes.</li>
                <li>Students have access to kitchens for preparing Indian food.</li>
                <li>Many universities provide mess facilities for Indian food.</li>
                <li>Indian restaurants near universities, usually within walking distance.</li>
                <li>Students can also enjoy native Uzbek food and international cuisines.</li>
              </ul>

              <p className="mt-6">
                <strong>Approximate monthly living expenses (2026–2027):</strong>
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Hostel / Accommodation: ₹8,000 – ₹15,000</li>
                <li>Food (self-cooking + mess): ₹8,000 – ₹14,000</li>
                <li>Transport + Miscellaneous: ₹3,000 – ₹6,000</li>
                <li><strong>Total monthly:</strong> ≈ ₹20,000 – ₹35,000</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ==================== ADMISSION PROCESS ==================== */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
              Admission Process for MBBS in Uzbekistan 2026–2027
            </h2>

            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
                The admission process for MD Physician (MBBS equivalent) programs in recognized Uzbek medical academies is streamlined for Indian applicants:
              </p>

              <div className="space-y-6">
                <div className="bg-blue-50/70 p-6 rounded-xl border border-blue-100 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-900 mb-2">
                      Check Eligibility & Select University
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Verify 50% marks in 10+2 with Physics, Chemistry, and Biology (40% for reserved category) and valid NEET-UG scorecard. Choose your preferred government medical academy (e.g., Tashkent Medical Academy, Samarkand, or Bukhara).
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50/70 p-6 rounded-xl border border-blue-100 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-900 mb-2">
                      Submit Online Application & Documents
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Submit scanned copies of 10th & 12th certificates, NEET scorecard, and passport copy. EduHawk assists in direct registration with the university admissions board.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50/70 p-6 rounded-xl border border-blue-100 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-900 mb-2">
                      Receive Official Admission & Ministry Invitation Letter
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Upon document verification, the university issues a provisional admission letter followed by the official student invitation letter authorized by the Ministry of Foreign Affairs of Uzbekistan.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50/70 p-6 rounded-xl border border-blue-100 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-900 mb-2">
                      Visa Stamping, Travel & Campus Reporting
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Submit visa application at the Uzbekistan Embassy in New Delhi. Direct flights from Delhi to Tashkent take approximately 3 hours. EduHawk provides complete airport reception, hostel allocation, and on-ground registration support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== REQUIRED DOCUMENTS ==================== */}
        <div className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
              Required Documents for MBBS in Uzbekistan 2026–2027
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <span>📄</span> Academic Documentation
                </h4>
                <ul className="space-y-2.5 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Class 10th Marks Sheet & Passing Certificate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Class 12th Marks Sheet (Minimum 50% in PCB)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>NEET-UG Scorecard with qualifying percentile</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>School Leaving / Transfer Certificate</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <span>🛂</span> Identity & Travel Documents
                </h4>
                <ul className="space-y-2.5 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Original Passport valid for minimum 18–24 months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>10–12 Passport-sized photographs (matte finish, white background)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Medical Fitness Certificate & HIV Negative Report</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Official University Invitation Letter & Student Visa Form</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== COMPARISON TABLE ==================== */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
              MBBS in Uzbekistan vs MBBS in India – Quick Comparison (2026–2027)
            </h2>

            <div className="overflow-x-auto shadow-md rounded-lg">
              <table className="min-w-full border-collapse border border-gray-300 text-left">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="p-4 border border-gray-300 text-center font-semibold w-1/4">
                      Parameter
                    </th>
                    <th className="p-4 border border-gray-300 text-center font-semibold w-3/8">
                      MBBS in Uzbekistan
                    </th>
                    <th className="p-4 border border-gray-300 text-center font-semibold w-3/8">
                      MBBS in India (Government vs. Private)
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 divide-y divide-gray-200">
                  {(cmsData?.comparisonTable || [
                    {
                      parameter: "Tuition Fees (Per Year)",
                      uzbekistan: "$2,500 – $4,500 (~₹2.5 to ₹4.5 lakh per year)",
                      india: "Government: ₹10,000 – ₹50,000 per year\nPrivate/Deemed: ₹10 Lakhs – ₹25+ Lakhs per year (Total ₹60L – ₹2Cr+)"
                    },
                    {
                      parameter: "Course Duration",
                      uzbekistan: "6 Years (5 years academic + 1 year clinical internship)",
                      india: "5.5 Years (4.5 years academic + 1 year mandatory rotating internship)"
                    },
                    {
                      parameter: "Class Strength",
                      uzbekistan: "Generally larger or moderate international student batches (varies by university)",
                      india: "Regulated by the National Medical Commission (NMC); fixed intake capacity per college"
                    },
                    {
                      parameter: "Global Recognition",
                      uzbekistan: "Recognized by NMC, WHO, and listed in the WDOMS (World Directory of Medical Schools)",
                      india: "Recognized by NMC and globally accepted (Gold standard in India)"
                    },
                    {
                      parameter: "Medium of Instruction",
                      uzbekistan: "English for international/Indian student cohorts",
                      india: "English"
                    },
                    {
                      parameter: "Hostel & Food",
                      uzbekistan: "Available; many universities offer Indian mess/food options or low-cost campus housing (~₹1,50,000 to ₹2 Lakh/year)",
                      india: "Varies; government colleges have heavily subsidized mess/hostels, while private ones vary widely"
                    },
                    {
                      parameter: "Insurance & Visa",
                      uzbekistan: "Annual visa extension, medical insurance, and documentation add ₹1.5 – ₹2 Lakhs total over the course",
                      india: "Domestic student status (no visa or international insurance required)"
                    },
                    {
                      parameter: "Other Costs",
                      uzbekistan: "Flights (Delhi to Tashkent ~3 hours, ~₹10k–₹25k one way), books, local transport (Yandex/trains), and FMGE/NExT prep (~₹15L – ₹25L total comprehensive cost)",
                      india: "Books, uniform, local living expenses, and minimal coaching fees"
                    },
                    {
                      parameter: "Licensing to Practice in India",
                      uzbekistan: "Must qualify NEET beforehand and clear the FMGE / NExT exam upon return",
                      india: "Direct registration with State Medical Council / NMC after internship completion"
                    }
                  ]).map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="p-4 border border-gray-300 font-medium text-gray-900">
                        {row.parameter || row.feature}
                      </td>
                      <td className="p-4 border border-gray-300 whitespace-pre-line text-sm leading-relaxed">
                        {row.uzbekistan}
                      </td>
                      <td className="p-4 border border-gray-300 whitespace-pre-line text-sm leading-relaxed">
                        {row.india}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Example: FAQs with better design */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
              FAQs for MBBS in Uzbekistan 2026–2027
            </h2>

            <div className="space-y-6">
              <details className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  Why study MBBS in Uzbekistan? Is it a good option for Indian students?
                </summary>
                <p className="mt-4 text-gray-700">
                  Affordable fees (~₹20–35 lakhs total), NMC/WHO recognized, English medium, modern infrastructure, safe & budget-friendly living — ideal for Indian students.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  Is MBBS in Uzbekistan valid in India?
                </summary>
                <p className="mt-4 text-gray-700">
                  Yes, MBBS degrees from recognized universities in Uzbekistan are valid in India if the university is approved by the National Medical Commission. After completing the course, students must clear the Foreign Medical Graduate Examination (FMGE) or the upcoming National Exit Test (NEXT) to practice medicine in India.
                </p>
              </details>





                <details className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                 How much are the MBBS fees in Uzbekistan for Indian students?

                </summary>
                <p className="mt-4 text-gray-700">
                  The total cost of MBBS in Uzbekistan usually ranges between ₹18 lakh to ₹30 lakh for the entire course, depending on the university, hostel facilities, and other living expenses.

                </p>
              </details>









   <details className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                 How long is the MBBS course in Uzbekistan?


                </summary>
                <p className="mt-4 text-gray-700">
                 The MBBS program in Uzbekistan is generally 6 years long, which includes 5 years of academic study and 1 year of clinical internship.


                </p>
              </details>




              <details className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                 Is NEET required for MBBS admission in Uzbekistan?


                </summary>
                <p className="mt-4 text-gray-700">
                Yes, Indian students must qualify the National Eligibility cum Entrance Test (NEET) to study MBBS in Uzbekistan and to be eligible to practice medicine in India after completing the degree


                </p>
              </details>

              {/* Add other FAQs similarly */}
            </div>
          </div>
        </div>

        {/* Bottom Consultation CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 rounded-2xl p-8 sm:p-12 text-white shadow-xl text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 border border-white/15">
              Official University Admission Partner
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Begin Your Medical Studies in Uzbekistan
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              Benefit from affordable tuition fees, direct 3-hour flights from Delhi, English medium MBBS courses, and NMC-compliant degrees. Book a free counselling session with EduHawk today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-900 font-extrabold text-sm shadow-lg shadow-amber-500/25 transition-all text-center"
              >
                Book Free Counselling
              </Link>
              <a
                href="tel:+918076594248"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all text-center"
              >
                Call: +91 8076594248
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uzbekistan;