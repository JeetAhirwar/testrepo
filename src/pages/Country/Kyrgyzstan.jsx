import cmsData from "../../data/medical_colleges/kyrgyzstan.json";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import StudentLifeImg from "../../Images/kazakhstan student.webp";
import KyrgyzstanFlag from "../../Images/country flag png/Kyrgyzstan.svg";
import SeoHead from "../../component/SeoHead.jsx";

const Kyrgyzstan = () => {
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [showMoreClimate, setShowMoreClimate] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <SeoHead
        title={cmsData?.seo?.title || "MBBS in Kyrgyzstan for Indian Students | Fees & Admission 2026-27"}
        description={cmsData?.seo?.description || "Study MBBS in Kyrgyzstan at low cost with top NMC recognized universities. Get details on fees, eligibility, admission process and medical colleges."}
        keywords={cmsData?.seo?.keywords || "mbbs in kyrgyzstan, kyrgyzstan mbbs fees, study mbbs kyrgyzstan, kyrgyzstan medical colleges"}
        path="/mbbs-abroad/kyrgyzstan"
        ogType="website"
      />

    <div className="min-h-screen bg-gray-50 font-sans">
      {/* ==================== HEADER CAROUSEL ==================== */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={cmsData?.hero?.image || "https://upload.wikimedia.org/wikipedia/commons/b/b9/International_higher_school_of_medicine_central_campus.jpg"}
            alt="Kyrgyzstan Medical University Campus"
            className="w-full h-full object-cover brightness-75"
            srcSet="https://upload.wikimedia.org/wikipedia/commons/b/b9/International_higher_school_of_medicine_central_campus.jpg 1x, https://upload.wikimedia.org/wikipedia/commons/b/b9/International_higher_school_of_medicine_central_campus.jpg 2x"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Subtle dark gradient overlay for optimal text contrast & accessibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl text-center px-4 tracking-tight">
              {cmsData?.hero?.title || "STUDY MBBS IN KYRGYZSTAN"}
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
              src={KyrgyzstanFlag}
              loading="lazy"
              width={1000}
              height={600}
              alt="Kyrgyzstan flag"
              className="w-32 md:w-40 border-4 border-gray-800 rounded shadow-lg"
              srcSet={`${KyrgyzstanFlag} 1x, ${KyrgyzstanFlag} 2x`}
              sizes="(max-width: 768px) 120px, 160px"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
              {cmsData?.hero?.subtitle || "Explore MBBS Opportunities in Kyrgyzstan 2026–2027"}
            </h2>
          </div>
        </div>

        {/* About Kyrgyzstan + Image */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
              About Kyrgyzstan
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Kyrgyzstan has become one of the most preferred destinations for 
              Indian students who want to 
              {" "} 
              <button onClick={() => navigate("/")}
                       className=" hover:text-[#426a91] text-blue-600 font-bold transition-colors duration-200 cursor-pointer"
                       >
                         study MBBS abroad.
                    </button>
              {" "}  
              because of its 
              affordable tuition fees, quality medical education, and globally 
              recognised universities. Many students choose to {" "}<strong>study MBBS in 
              Kyrgyzstan</strong>{" "}   due to its modern infrastructure, experienced faculty, 
              and English-medium medical programs. The MBBS course generally takes 
              6 years to complete, including internship and practical clinical training.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              One of the biggest advantages of {" "}<strong>MBBS admission in Kyrgyzstan</strong>{" "}   is the 
              availability of {" "}<strong>affordable fees in MBBS abroad</strong>{" "} programs compared to 
              many other countries. The country is home to several top medical 
              universities in Kyrgyzstan that provide advanced laboratories, 
              practical training, and strong academic support. Students studying 
              in {" "}<a
                href="#universities"
                className="font-bold text-blue-600 hover:underline cursor-pointer"
               >
                 MBBS universities in Kyrgyzstan
               </a>{" "} 
              receive both theoretical and hands-on 
              clinical exposure, helping them become skilled medical professionals.
            </p>

            {showMoreAbout ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Kyrgyzstan is also known for having some of the {" "}<strong>top government medical colleges 
                in Kyrgyzstan</strong>{" "}  along with reputed private institutions. The availability of {" "}<strong>top 
                private and government college in Kyrgyzstan</strong>{" "}  options gives students flexibility 
                according to their budget and career goals. Apart from Kyrgyzstan, other popular 
                {" "}<strong>foreign countries for MBBS abroad</strong>{" "}  include Kazakhstan, Nepal, and Georgia, making 
                Kyrgyzstan one of the {" "}<strong>best countries for MBBS abroad</strong>{" "}  for Indian students.
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
              src={StudentLifeImg}
              loading="lazy"
              width={1500}
              height={1000}
              alt="Kyrgyzstan student life / campus"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
              srcSet={`${StudentLifeImg} 1x, ${StudentLifeImg} 2x`}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Quick Information + About MBBS */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left – Quick Info Table */}
          <div>
            <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
              Quick Information – Study MBBS in Kyrgyzstan
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
                    <td className="p-4">6 Years (5+1 internship)</td>
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
                    <td className="p-4 font-semibold">
                      Universities Recognition
                    </td>
                    <td className="p-4">NMC & WHO-Recognized</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right – About MBBS */}
          <div>
            <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
              About MBBS in Kyrgyzstan
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Kyrgyzstan is one of the top choices for Indian students
              interested in studying MBBS abroad due to the high level of
              security, safety, and affordability provided.
            </p>

            {showMoreClimate ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                The duration of the program is 6 years (5 years academic + 1
                year internship), and the cost of education is relatively lower
                compared to many other countries. The standard of MBBS education
                is world-class with modern infrastructure. The medium of
                instruction is English, eliminating language barriers. Direct
                admission is available without additional entrance exams (only
                NEET required for Indian students). Kyrgyzstan has a temperate
                climate with cold winters (around -20°C) and warm summers (up to
                +25°C). Hostels are equipped with heating systems for comfort
                during winter.
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
            {cmsData?.universitiesHeading || "Top Medical Universities in Kyrgyzstan"}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "International Medical College",
                img: "https://upload.wikimedia.org/wikipedia/commons/b/b9/International_higher_school_of_medicine_central_campus.jpg",
              },
              {
                name: "Kyrgyz Russian Slavic University",
                img: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kyrgyz-Russian_Slavic_University.jpg",
              },
              {
                name: "Jalal-Abad State Medical University",
                img: "https://www.ruseducation.in/wp-content/uploads/2022/01/Jalalabad-State-Medical-University.webp",
              },
              {
                name: "Asian Medical Institute",
                img: "https://asmi.edu.kg/wp-content/uploads/slider2/DJI_0086.jpeg",
              },
              {
                name: "Osh State University",
                img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Osh_state_university.jpg",
              },
              {
                name: "Kyrgyz State Medical Academy",
                img: "https://www.ruseducation.in/wp-content/uploads/2022/01/Kyrgyz-State-Medical-Academy.webp",
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

        {/* ==================== ADVANTAGES ==================== */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
              Advantages of Studying MBBS in Kyrgyzstan 2026–2027
            </h2>

            <div className="space-y-6">
              <div>
                <h5 className="text-xl font-semibold">
                  1. High-Quality Education
                </h5>
                <p className="text-gray-700">
                  NMC & WHO recognized universities with modern infrastructure
                  and experienced faculty.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">2. Affordable Fees</h5>
                <p className="text-gray-700">
                  Low tuition and living costs — total around ₹17–28 lakhs for
                  the full course.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">3. English Medium</h5>
                <p className="text-gray-700">
                  No language barrier for Indian and international students.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">4. Simple Admission</h5>
                <p className="text-gray-700">
                  No additional entrance exams (only NEET required).
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  5. Safe & Comfortable Living
                </h5>
                <p className="text-gray-700">
                  Good hostels, Indian mess, and pleasant environment.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Cost of Study MBBS in Kyrgyzstan
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The low MBBS tuition fees combined with low living costs in
              Kyrgyzstan attract more and more Indian students. Kyrgyzstan
              offers subsidized fee structures, making it economically viable.
              No donation or capitation fees required. The overall cost for the
              6-year MBBS course (tuition + hostel + food) usually ranges
              between ₹17 lakhs and ₹28 lakhs, depending on the university.
            </p>
          </div>
        </div>

        {/* ==================== FOOD & ACCOMMODATION ==================== */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
              Food and Accommodation Cost – MBBS in Kyrgyzstan
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p>
                Students who choose to study MBBS in Kyrgyzstan often look for
                comfortable and affordable living facilities. Medical
                universities provide well-maintained hostel facilities, food
                options, and essential amenities for international students.
              </p>

              <h4 className="text-2xl font-semibold mt-8 mb-4">
                Hostel Facilities
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Most medical universities provide on-campus hostel facilities
                  for international students.
                </li>
                <li>
                  Multiple hostel buildings to accommodate both local and
                  international students.
                </li>
                <li>
                  Hostels are designed to provide a safe and comfortable living
                  environment.
                </li>
                <li>
                  Students can stay in university hostels throughout their
                  entire MBBS course duration.
                </li>
              </ul>

              <h4 className="text-2xl font-semibold mt-8 mb-4">
                Room Facilities
              </h4>
              <p>
                University hostel rooms generally include the following basic
                amenities:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Fully furnished rooms</li>
                <li>Comfortable beds, mattress, blankets, bedsheets</li>
                <li>Study tables and chairs</li>
                <li>Wardrobes or cupboards</li>
              </ul>

              <h4 className="text-2xl font-semibold mt-8 mb-4">
                Kitchen and Food Facilities
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Most hostels provide common kitchens where students can cook
                  their own meals.
                </li>
                <li>
                  Indian students can prepare Indian food to maintain their
                  regular diet.
                </li>
                <li>
                  Many universities provide mess or canteen facilities offering
                  Indian meals.
                </li>
                <li>
                  Indian restaurants near universities, usually within walking
                  distance.
                </li>
                <li>
                  Students can enjoy local Kyrgyz cuisine and international
                  dishes.
                </li>
              </ul>

              <h4 className="text-2xl font-semibold mt-8 mb-4">
                Average Living Cost for Students
              </h4>
              <p>
                The cost of living in Kyrgyzstan is affordable compared to many
                other countries.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  Hostel Fees: ≈ ₹8,000 – ₹15,000 per month (or ₹80,000 –
                  ₹1,80,000 per year)
                </li>
                <li>Food Expenses: ≈ ₹8,000 – ₹15,000 per month</li>
                <li>
                  Overall Living Cost: ≈ ₹15,000 – ₹30,000 per month (depending
                  on city and lifestyle)
                </li>
              </ul>
              <p className="mt-4 italic">
                Many students manage comfortably within ₹20,000–₹25,000 per
                month by using university mess and self-cooking.
              </p>
            </div>
          </div>
        </div>

        {/* ==================== ADMISSION PROCESS ==================== */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
              Admission Process for MBBS in Kyrgyzstan 2026–2027
            </h2>

            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                The MBBS admission process in Kyrgyzstan is simple and
                student-friendly for international applicants.
              </p>

              <div className="space-y-10">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 1: Application
                  </h4>
                  <p>
                    Fill out the university application form and submit required
                    documents.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 2: Admission Letter
                  </h4>
                  <p>
                    Receive the official admission / invitation letter after
                    approval.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 3: Visa Application
                  </h4>
                  <p>
                    Apply for student visa at the Kyrgyzstan Embassy with the
                    invitation letter.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 4: Travel & Registration
                  </h4>
                  <p>
                    Travel to Kyrgyzstan → University registration → Hostel
                    allocation → Start MBBS program after fee payment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== ELIGIBILITY & DOCUMENTS ==================== */}
        <div className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
                  Eligibility Criteria for MBBS in Kyrgyzstan
                </h2>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>
                    Minimum 17 years of age by 31st December of the admission
                    year.
                  </li>
                  <li>
                    Minimum 50% marks in 12th standard with Physics, Chemistry,
                    Biology (40% for reserved categories).
                  </li>
                  <li>NEET qualification is mandatory for Indian students.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                  Documents Required
                </h2>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>Completed admission application form</li>
                  <li>10th & 12th marksheets + certificates</li>
                  <li>NEET scorecard / admit card</li>
                  <li>Valid passport copy</li>
                  <li>Passport-size photographs (white background)</li>
                  <li>Identity proof (Aadhaar, PAN, etc.)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== COMPARISON TABLE ==================== */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
              MBBS in Kyrgyzstan vs MBBS in India – Quick Comparison (2026–2027)
            </h2>

            <div className="overflow-x-auto shadow-md rounded-lg">
              <table className="min-w-full border-collapse border border-gray-300 text-left">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="p-4 border border-gray-300 text-center font-semibold w-1/4">
                      Parameter
                    </th>
                    <th className="p-4 border border-gray-300 text-center font-semibold w-3/8">
                      MBBS in Kyrgyzstan
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
                      kyrgyzstan: "₹3,00,000 – ₹6,00,000 (approx. $3,000 – $4,000/yr)",
                      india: "Govt: ₹10,000 – ₹1,50,000 / yr\nPrivate: ₹10,00,000 – ₹25,00,000+ / yr"
                    },
                    {
                      parameter: "Course Duration",
                      kyrgyzstan: "6 Years (5 years academic + 1 year compulsory internship)",
                      india: "5.5 Years (4.5 years academic + 1 year compulsory rotating internship)"
                    },
                    {
                      parameter: "Class Strength",
                      kyrgyzstan: "Generally smaller batches; high concentration of international students (largely Indian, South Asian)",
                      india: "Large batch sizes (typically 100 to 250+ students per medical college)"
                    },
                    {
                      parameter: "Global Recognition",
                      kyrgyzstan: "Recognized by NMC, WHO, WDOMS, FAIMER, ECFMG",
                      india: "Recognized globally (NMC, WHO, WDOMS, FAIMER, etc.)"
                    },
                    {
                      parameter: "Medium of Instruction",
                      kyrgyzstan: "Offered in English (though basic local language like Russian/Kyrgyz is needed for patient interaction)",
                      india: "English"
                    },
                    {
                      parameter: "Hostel & Food",
                      kyrgyzstan: "Separate hostels with Indian mess facilities available; costs around ₹1,80,000 – ₹2,00,000/yr",
                      india: "On-campus or local hostels/mess; varies widely by college (₹50,000 – ₹1,50,000/yr)"
                    },
                    {
                      parameter: "Insurance & Visa Costs",
                      kyrgyzstan: "Annual medical insurance + visa/extension costs roughly ₹20,000 – ₹30,000/yr",
                      india: "N/A (Domestic students do not pay visa/international health insurance)"
                    },
                    {
                      parameter: "Other Costs (Travel, Living)",
                      kyrgyzstan: "Flight tickets (annual), local transit, and living (~$100–$200/month); total course package often lands around ₹18 – ₹35 Lakhs",
                      india: "Low living costs in govt colleges; overall private college investment can scale to ₹50L – ₹1Cr+"
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
                        {row.kyrgyzstan}
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

        {/* ==================== FAQs ==================== */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
              MBBS in Kyrgyzstan – Short FAQs
            </h2>

            <div className="space-y-6">
              <details className="bg-white p-6 rounded-xl shadow-sm border">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  How to get MBBS admission in Kyrgyzstan?
                </summary>
                <p className="mt-4 text-gray-700">
                  Qualify NEET and have 50% marks in PCB in 12th. Apply online
                  to the university, receive invitation letter, and apply for
                  student visa.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  Is it good to study MBBS in Kyrgyzstan?
                </summary>
                <p className="mt-4 text-gray-700">
                  Yes, Kyrgyzstan offers affordable fees, English-medium
                  programs, NMC/WHO recognized universities, and good clinical
                  exposure.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  Why study MBBS in Kyrgyzstan?
                </summary>
                <p className="mt-4 text-gray-700">
                  Low tuition fees, simple admission process, modern medical
                  education, low living costs, and safe environment for Indian
                  students.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  Is MBBS in Kyrgyzstan valid in India?
                </summary>
                <p className="mt-4 text-gray-700">
                  Yes, if the university is NMC recognized. Students must clear
                  FMGE or NEXT to practice in India.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  When does the MBBS course start in Kyrgyzstan?
                </summary>
                <p className="mt-4 text-gray-700">
                  The MBBS session usually starts between September and October
                  each year.
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
              Begin Your Medical Studies in Kyrgyzstan
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              Enrol in globally accredited government medical academies with 100% English medium curriculum, low cost of living, and high FMGE pass rates. Schedule a free counselling session with EduHawk.
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

      {/* Floating Enroll Button */}
      </div>
    </div>
    </>
  );
};

export default Kyrgyzstan;
