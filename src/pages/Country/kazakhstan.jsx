import cmsData from "../../data/medical_colleges/kazakhstan.json";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SeoHead from "../../component/SeoHead.jsx";

import KazakhstanOverviewImg from "../../Images/university-image/kazakistan.webp";
import KazakhstanFlag from "../../Images/country flag png/Kazakhstan.svg";
import AsfendiyarovImg from "../../Images/Kazakhstan/Asfendiyarov Kazakh National Medical University.webp";
import KaragandaImg from "../../Images/Kazakhstan/Karaganda State Medical University.webp";
import KokshetauImg from "../../Images/Kazakhstan/Kokshetau State University.webp";
import SemeyImg from "../../Images/Kazakhstan/Semey State Medical University.webp";
import SouthKazakhstanImg from "../../Images/Kazakhstan/South-Kazakhstan-Medical-Academy.webp";
import WestKazakhstanImg from "../../Images/Kazakhstan/West Kazakhstan Marat Ospanov State Medical University.webp";

const Kazakhstan = () => {
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [showMoreClimate, setShowMoreClimate] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <SeoHead
        title={cmsData?.seo?.title || "MBBS in Kazakhstan for Indian Students | Fees & Admission 2026"}
        description={cmsData?.seo?.description || "MBBS in Kazakhstan at low cost with top universities. Get details on fees, eligibility, admission process and medical colleges."}
        keywords={cmsData?.seo?.keywords || "mbbs in kazakhstan, kazakhstan mbbs fees, study mbbs kazakhstan, kazakhstan medical colleges"}
        path="/mbbs-abroad/kazakhstan"
        ogType="website"
      />
    
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* ==================== HEADER CAROUSEL ==================== */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={cmsData?.hero?.image || "https://www.ruseducation.in/wp-content/uploads/2022/01/Kazakh-National-Medical-University.webp"}
            alt="Kazakhstan Landscape"
            className="w-full h-full object-cover brightness-75"
            srcSet="https://www.ruseducation.in/wp-content/uploads/2022/01/Kazakh-National-Medical-University.webp 1x, https://www.ruseducation.in/wp-content/uploads/2022/01/Kazakh-National-Medical-University.webp 2x"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Subtle dark gradient overlay for optimal text contrast & accessibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl text-center px-4 tracking-tight">
              {cmsData?.hero?.title || "STUDY MBBS IN KAZAKHSTAN"}
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
              src={KazakhstanFlag}
              loading="lazy"
              width={1000}
              height={500}
              alt="Kazakhstan flag"
              className="w-32 md:w-40 border-4 border-gray-800 rounded shadow-lg"
              srcSet={`${KazakhstanFlag} 1x, ${KazakhstanFlag} 2x`}
              sizes="(max-width: 768px) 120px, 160px"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
              {cmsData?.hero?.subtitle || "Explore MBBS Opportunities in Kazakhstan 2026–2027"}
            </h2>
          </div>
        </div>

        {/* About Kazakhstan + Image */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
              About Kazakhstan
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Kazakhstan has become one of the most preferred destinations for Indian 
              students who want to 
              {" "} 
              <button onClick={() => navigate("/")}
                       className=" hover:text-[#426a91] text-blue-600 font-bold transition-colors duration-200 cursor-pointer"
                       >
                         study MBBS abroad.
                    </button>
              {" "}  
              because of its affordable tuition 
              fees, globally recognized universities, and modern medical education system. 
              Officially known as the Republic of Kazakhstan, the country is located mainly 
              in Central Asia and is known for its advanced infrastructure, safe environment, 
              and quality education. Many students choose to {" "}<strong>study MBBS in Kazakhstan</strong>{" "} due to 
              the affordable living costs and internationally accepted medical degrees.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-700">
               One of the biggest advantages of {" "}<strong>MBBS admission in Kazakhstan</strong>{" "} is the 
                availability of {" "}<strong>affordable fees in MBBS abroad</strong>{" "} programs compared to 
                many other countries. The country is home to several top medical 
                universities in Kazakhstan that provide advanced laboratories, 
                experienced faculty, and practical clinical exposure. Students 
                studying in
                {" "}<a
                href="#universities"
                className="font-bold text-blue-600 hover:underline cursor-pointer"
               >
                 MBBS universities in Kazakhstan
               </a>{" "}
                receive strong 
                theoretical and hands-on medical training that helps them become 
                skilled healthcare professionals.
            </p>

            {showMoreAbout ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Kazakhstan is also known for having some of the {" "}<strong>top government medical colleges 
                in Kazakhstan</strong>{" "} along with reputed private institutions. 
                The availability of {" "}<strong>top private and government college 
                in Kazakhstan</strong>{" "} options gives students flexibility according 
                to their budget and career goals. Apart from Kazakhstan, 
                other popular {" "}<strong>foreign countries for MBBS abroad</strong>{" "} include 
                Kyrgyzstan, Nepal, and Georgia, making Kazakhstan one of the {" "}<strong>best 
                countries for MBBS abroad</strong>{" "} and a top choice for Indian students.
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
              src={KazakhstanOverviewImg}
              loading="lazy"
              width={640}
              height={427}
              alt="Kazakhstan"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
              srcSet={`${KazakhstanOverviewImg} 1x, ${KazakhstanOverviewImg} 2x`}
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        </div>

        {/* Quick Information + About MBBS */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left – Quick Info Table */}
          <div>
            <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
              Quick Information – Study MBBS in Kazakhstan
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
                    <td className="p-4">50% in PCB + NEET Qualified</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">Course Duration</td>
                    <td className="p-4">6 Years (5 + 1 internship)</td>
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
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">Approx. Annual Fee</td>
                    <td className="p-4">₹2 – 5 Lakhs / year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right – About MBBS */}
          <div>
            <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
              About MBBS in Kazakhstan
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Kazakhstan, officially known as the Republic of Kazakhstan, is a
              transcontinental country that lies mainly in Central Asia, with a
              small part extending into Europe west of the Ural River. The
              country covers a vast area of 2,724,900 square kilometres and is
              the world’s largest landlocked country and the ninth largest
              overall.
            </p>

            {showMoreClimate ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                It shares borders with Russia in the north, China in the east,
                Kyrgyzstan, Uzbekistan, and Turkmenistan in the south, and has a
                long coastline along the Caspian Sea. With a population of about
                18.8 million, Kazakhstan has one of the lowest population
                densities in the world. The capital is Astana (formerly
                Nur-Sultan), while Almaty remains the largest city.

                Kazakhstan offers modern medical education at affordable costs,
                making it a popular destination for Indian students pursuing
                MBBS abroad.
                
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
            {cmsData?.universitiesHeading || "Top Medical Universities in Kazakhstan"}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Asfendiyarov Kazakh National Medical University",
                img: AsfendiyarovImg,
              },
              {
                name: "Karaganda State Medical University",
                img: KaragandaImg,
              },
              {
                name: "Kokshetau State University",
                img: KokshetauImg,
              },
              {
                name: "Semey State Medical University",
                img: SemeyImg,
              },
              {
                name: "South Kazakhstan Medical Academy",
                img: SouthKazakhstanImg,
              },
              {
                name: "West Kazakhstan Marat Ospanov State Medical University",
                img: WestKazakhstanImg,
              },
            ].map((uni, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={uni.img}
                  loading="lazy"
                  alt={uni.name}
                  className="w-full h-64 object-cover"
                  srcSet={`${uni.img} 1x, ${uni.img} 2x`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-blue-900">
                    {uni.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== ADVANTAGES + COST ==================== */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
              Advantages of Studying MBBS in Kazakhstan 2026–2027
            </h2>

            <div className="space-y-6">
              <div>
                <h5 className="text-xl font-semibold">
                  1. Affordable Education
                </h5>
                <p className="text-gray-700">
                  Reasonable tuition fees (₹2–5 Lakhs/year), no heavy donations
                  or capitation fees.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">2. English Medium</h5>
                <p className="text-gray-700">
                  No language barrier – fully English medium programs.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  3. Quality Education & Facilities
                </h5>
                <p className="text-gray-700">
                  Modern labs, good hospitals for clinical training, NMC & WHO
                  recognized.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">4. Simple Admission</h5>
                <p className="text-gray-700">
                  Straightforward process – only NEET required for Indian
                  students.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Cost of Study MBBS in Kazakhstan
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              MBBS in Kazakhstan is one of the most budget-friendly options for
              Indian students. Annual tuition fees typically range from ₹2 Lakhs
              to ₹5 Lakhs. Total package (including hostel & food) is usually
              between ₹18–28 Lakhs for the full 6-year course. No donation or
              capitation fee is required.
            </p>
          </div>
        </div>

        {/* ==================== FOOD & ACCOMMODATION ==================== */}
        {/* ==================== FOOD & ACCOMMODATION SECTION ==================== */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
              Food and Accommodation Cost – MBBS in Kazakhstan
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p>
                Medical universities in Kazakhstan offer comfortable, secure,
                and budget-friendly accommodation options specially designed for
                international students, including a large number of Indian
                students.
              </p>

              <h4 className="text-2xl font-semibold mt-8 mb-4">
                Hostel Facilities
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  On-campus hostels available in most top medical universities
                </li>
                <li>
                  Multiple hostel buildings (usually 6–7) to accommodate local
                  and international students
                </li>
                <li>Safe, well-maintained environment with 24/7 security</li>
                <li>
                  Students can stay in university hostels for the entire 6-year
                  MBBS duration
                </li>
              </ul>

              <h4 className="text-2xl font-semibold mt-8 mb-4">
                Room Facilities
              </h4>
              <p>
                Rooms are typically shared (2–4 students per room) and come
                fully furnished with:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  Comfortable beds with mattresses, blankets, and bed sheets
                </li>
                <li>Study tables and chairs</li>
                <li>Wardrobes / cupboards for storage</li>
                <li>
                  Central heating system (essential for cold Kazakh winters)
                </li>
              </ul>

              <h4 className="text-2xl font-semibold mt-8 mb-4">
                Kitchen and Food Facilities
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Common shared kitchens in hostels – very popular among Indian
                  students for preparing home-cooked Indian meals
                </li>
                <li>
                  Many universities offer Indian mess / canteen facilities (veg
                  & non-veg options)
                </li>
                <li>
                  Indian restaurants, grocery stores, and spice shops usually
                  available nearby (walking distance in most cities)
                </li>
                <li>
                  Students can also enjoy authentic Kazakh cuisine and
                  international food options
                </li>
              </ul>

              <h4 className="text-2xl font-semibold mt-8 mb-4">
                Average Living Cost (2026–2027)
              </h4>
              <p>
                The cost of living in Kazakhstan is quite affordable for
                international students, especially compared to Western countries
                or private medical colleges in India.
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  <strong>Hostel / Accommodation:</strong> ₹8,000 – ₹18,000 per
                  month (or ₹80,000 – ₹2,00,000 per year)
                </li>
                <li>
                  <strong>Food (self-cooking + mess / canteen):</strong> ₹8,000
                  – ₹15,000 per month
                </li>
                <li>
                  <strong>Transport, internet, personal expenses:</strong>{" "}
                  ₹3,000 – ₹8,000 per month
                </li>
                <li>
                  <strong>Total monthly living cost:</strong> ≈ ₹20,000 –
                  ₹40,000 (depending on lifestyle and city – lower in smaller
                  cities like Semey or Karaganda)
                </li>
              </ul>

              <p className="mt-6 italic text-gray-600">
                Many Indian students manage comfortably within ₹25,000–₹30,000
                per month by cooking at home and using university mess
                facilities.
              </p>
            </div>
          </div>
        </div>

        {/* ==================== ADMISSION PROCESS ==================== */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
              Admission Process for MBBS in Kazakhstan 2026–2027
            </h2>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900">
                  1. Application
                </h4>
                <p>
                  Fill university online application form + submit documents
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900">
                  2. Admission Letter
                </h4>
                <p>Receive official admission / invitation letter</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900">3. Visa</h4>
                <p>
                  Apply for student visa at Kazakhstan Embassy (Delhi) with
                  invitation letter
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900">
                  4. Travel & Registration
                </h4>
                <p>
                  Travel to Kazakhstan → University registration → Medical
                  check-up → Start course
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== REQUIRED DOCUMENTS ==================== */}
        <div className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
              Required Documents for MBBS in Kazakhstan 2026–2027
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
                    <span>Class 12th Marks Sheet (Minimum 50% aggregate in PCB)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>NEET-UG Qualifying Scorecard (Mandatory for Indian students)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>School Transfer / Migration Certificate</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <span>🛂</span> Identity & Travel Documentation
                </h4>
                <ul className="space-y-2.5 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Original Passport with minimum 18–24 months validity</span>
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
                    <span>Official University Invitation Letter authorized by Kazakh Ministry</span>
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
              MBBS in Kazakhstan vs MBBS in India – Quick Comparison (2026–2027)
            </h2>

            <div className="overflow-x-auto shadow-md rounded-lg">
              <table className="min-w-full border-collapse border border-gray-300 text-left">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="p-4 border border-gray-300 text-center font-semibold w-1/4">
                      Parameter
                    </th>
                    <th className="p-4 border border-gray-300 text-center font-semibold w-3/8">
                      MBBS in Kazakhstan
                    </th>
                    <th className="p-4 border border-gray-300 text-center font-semibold w-3/8">
                      MBBS in India
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 divide-y divide-gray-200">
                  {(cmsData?.comparisonTable || [
                    {
                      parameter: "Tuition Fees (per year)",
                      kazakhstan: "₹3,00,000 – ₹5,00,000 per year (Total course approx. ₹18 – ₹30+ lakhs)",
                      india: "Government Colleges: Very low (₹10,000 – ₹50,000/year)\nPrivate/Deemed Colleges: ₹60,000,000 – ₹1,20,000,000+ (₹60 lakhs – ₹1.2+ crore)"
                    },
                    {
                      parameter: "Course Duration",
                      kazakhstan: "5 Years study + 1 Year internship (Total 6 years)",
                      india: "4.5 Years study + 1 Year mandatory rotating internship (Total 5.5 years)"
                    },
                    {
                      parameter: "Class Strength",
                      kazakhstan: "Usually smaller, batch-controlled international student groups (10–15 students per practical/clinical batch)",
                      india: "Larger lecture halls, often 100–250+ students per batch depending on the medical college"
                    },
                    {
                      parameter: "Global Recognition",
                      kazakhstan: "Recognized by NMC, WHO, WDOMS, ECFMG, and FAIMER (eligible for USMLE, FMGE/NExT)",
                      india: "Recognized by NMC, WHO, and WDOMS (Globally accepted; mandatory NEET-UG for entry)"
                    },
                    {
                      parameter: "Medium of Instruction",
                      kazakhstan: "100% English medium for international/Indian student cohorts",
                      india: "English (with local patient interaction in regional languages during clinical postings)"
                    },
                    {
                      parameter: "Hostel & Food (Mess)",
                      kazakhstan: "Hostel: ₹50,000 – ₹1,00,000/year\nIndian Mess/Food: ₹80,000 – ₹1,40,000/year (optional Indian mess available)",
                      india: "Hostel: ₹10,000 – ₹1,00,000+/year\nMess/Food: ₹30,000 – ₹1,00,000+/year (varies by city and college type)"
                    },
                    {
                      parameter: "Medical Insurance",
                      kazakhstan: "Approx. ₹10,000/year (mandatory health coverage)",
                      india: "Nominal institutional or private health insurance costs (often covered or minimal)"
                    },
                    {
                      parameter: "Visa & Other Costs",
                      kazakhstan: "1st Year Visa, Documentation & One-time Registration: ₹60,000 – ₹1,00,000; annual visa extensions cost extra",
                      india: "Standard domestic documentation and state/central counseling registration fees (₹1,000 – ₹50,000 depending on quota)"
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
                        {row.kazakhstan}
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

        {/* ==================== FAQs (same design as Uzbekistan) ==================== */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
              FAQs for MBBS in Kazakhstan 2026–2027
            </h2>

            <div className="space-y-6">
              <details className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  Why study MBBS in Kazakhstan for Indian students?
                </summary>
                <p className="mt-4 text-gray-700">
                  Kazakhstan is becoming a popular destination for Indian
                  students because of affordable tuition fees, modern medical
                  universities, and English-medium MBBS programs. The country
                  also offers good clinical exposure and low living costs
                  compared to private medical colleges in India.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  Is MBBS in Kazakhstan valid in India?
                </summary>
                <p className="mt-4 text-gray-700">
                  Yes, MBBS degrees from recognized universities in Kazakhstan
                  are valid in India if the university is approved by the
                  National Medical Commission. After completing the course,
                  students must clear the Foreign Medical Graduate Examination
                  (FMGE) or the upcoming National Exit Test (NEXT) to practice
                  in India.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  What is the total cost of MBBS in Kazakhstan for Indian
                  students?
                </summary>
                <p className="mt-4 text-gray-700">
                  The total cost of MBBS in Kazakhstan usually ranges between
                  ₹18 lakh to ₹28 lakh for the entire course, depending on the
                  university, hostel, and other living expenses.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  What is the duration of the MBBS course in Kazakhstan?
                </summary>
                <p className="mt-4 text-gray-700">
                  The MBBS program in Kazakhstan is generally 5 years of
                  academic study plus 1 year internship, making the total
                  duration 6 years.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  Is NEET required for MBBS admission in Kazakhstan?
                </summary>
                <p className="mt-4 text-gray-700">
                  Yes, Indian students must qualify the National Eligibility cum
                  Entrance Test (NEET) to study MBBS in Kazakhstan and to be
                  eligible to practice medicine in India after completing the
                  degree.
                </p>
              </details>
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
              Begin Your Medical Career in Kazakhstan
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              Experience modern European-style medical education, English medium curriculum, and NMC-approved qualifications. Get step-by-step guidance from EduHawk experts.
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
    </>
  );
};

export default Kazakhstan;
