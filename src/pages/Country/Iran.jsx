import cmsData from "../../data/medical_colleges/iran.json";
import React, { useState } from "react";
import SeoHead from "../../component/SeoHead.jsx";
import IranFlag from "../../Images/country flag png/Iran.svg";
import { useNavigate, Link } from "react-router-dom";
import { Plus as FiPlus, Minus as FiMinus } from "lucide-react";

const faqData = [
  {
    question: "Is MBBS in Iran valid and recognized in India?",
    answer:
      "Yes, MBBS (Doctor of Medicine) degrees from top government medical universities in Iran (such as Tehran University of Medical Sciences, Shiraz, and Shahid Beheshti) are accredited by the Iranian Ministry of Health, listed in WDOMS, and recognized by the NMC (National Medical Commission) and WHO. Indian graduates are eligible to appear for the NExT/FMGE licensing exam to practice in India."
  },
  {
    question: "Is the MBBS course in Iran taught in English?",
    answer:
      "Yes, leading state medical universities in Iran conduct the complete MBBS program in 100% English medium for international students. All medical textbooks, preclinical lectures, and examinations are in English."
  },
  {
    question: "What is the duration and fee structure of MBBS in Iran?",
    answer:
      "The MBBS program in Iran is 6 to 7 years (including basic sciences, clinical clerkships, and rotating hospital internship) in compliance with NMC regulations. Annual tuition fees range between ₹3.5 Lakh to ₹4.5 Lakh, making the total course package approximately ₹22 Lakh to ₹30 Lakh."
  },
  {
    question: "Is NEET qualification mandatory for MBBS admission in Iran?",
    answer:
      "Yes, qualifying NEET-UG is strictly compulsory for all Indian students seeking admission to study medicine abroad as per National Medical Commission (NMC) regulations."
  },
  {
    question: "Are hostel and Indian food options available for students in Iran?",
    answer:
      "Yes, Iranian medical universities provide furnished, secure on-campus student dormitories equipped with Wi-Fi, air conditioning, and heating. Most hostels feature communal kitchens allowing Indian students to prepare their own meals, alongside campus cafeterias offering healthy dining."
  },
  {
    question: "How safe is Iran for Indian medical students?",
    answer:
      "Iran is widely regarded as peaceful and welcoming for international students, with strict campus security, zero tolerance for crime, and deep cultural ties with India. Campuses have 24/7 security and dedicated international student support offices."
  }
];

const Iran = () => {
  const navigate = useNavigate();
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [showMoreClimate, setShowMoreClimate] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const defaultUniversities = [
    {
      name: "Tehran University of Medical Sciences",
      location: "Tehran, Iran",
      fee: "₹4.2 Lakhs / Year",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/29/TUMS_medicine.jpg",
    },
    {
      name: "Shiraz University of Medical Sciences",
      location: "Shiraz, Iran",
      fee: "₹3.8 Lakhs / Year",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Shiraz-University-of-Medical-Sciences_Central-Building.jpg",
    },
    {
      name: "Islamic Azad University",
      location: "Tehran, Iran",
      fee: "₹3.5 Lakhs / Year",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6f/JIA_enterance.jpg",
    },
    {
      name: "Shahid Beheshti University of Medical Science",
      location: "Tehran, Iran",
      fee: "₹4.0 Lakhs / Year",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/69/SBMU_School_of_Medicine.jpg",
    },
    {
      name: "Isfahan University of Medical Sciences",
      location: "Isfahan, Iran",
      fee: "₹3.6 Lakhs / Year",
      img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Voroodi.jpg",
    },
    {
      name: "Iran University of Medical Sciences",
      location: "Tehran, Iran",
      fee: "₹3.9 Lakhs / Year",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/da/Iran_University_of_Medical_Sciences%28IUMS%29.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <SeoHead
        title={cmsData?.seo?.title || "MBBS in Iran 2026-27 | Admissions, Fees & Universities | Edu Hawk"}
        description={cmsData?.seo?.description || "Explore MBBS in Iran for Indian students: eligibility, admission process, top medical universities, documents and food & accommodation costs."}
        keywords={cmsData?.seo?.keywords || "mbbs in iran, iran mbbs fees, study mbbs iran, iran medical universities"}
        path="/mbbs-abroad/iran"
        ogType="website"
      />

      {/* ==================== HEADER CAROUSEL ==================== */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={cmsData?.hero?.image || "https://upload.wikimedia.org/wikipedia/commons/2/23/Azadi_Tower_%2829358497718%29.jpg"}
            alt="Azadi Tower Tehran, Iran"
            className="w-full h-full object-cover brightness-75"
            srcSet="https://upload.wikimedia.org/wikipedia/commons/2/23/Azadi_Tower_%2829358497718%29.jpg 1x, https://upload.wikimedia.org/wikipedia/commons/2/23/Azadi_Tower_%2829358497718%29.jpg 2x"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Subtle dark gradient overlay for optimal text contrast & accessibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl text-center px-4 tracking-tight">
              {cmsData?.hero?.title || "STUDY MBBS IN IRAN"}
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
              src={IranFlag}
              loading="lazy"
              width={630}
              height={360}
              alt="Iran flag"
              className="w-32 md:w-40 border-4 border-gray-800 rounded shadow-lg"
              srcSet={`${IranFlag} 1x, ${IranFlag} 2x`}
              sizes="(max-width: 768px) 120px, 160px"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
              {cmsData?.hero?.subtitle || "Explore MBBS Opportunities in Iran 2026–2027"}
            </h2>
          </div>
        </div>

        {/* About Iran + Image */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
              About Iran
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Iran has emerged as one of the most prestigious destinations for Indian medical aspirants who want to{" "}
              <button
                onClick={() => navigate("/")}
                className="hover:text-[#426a91] text-blue-600 font-bold transition-colors duration-200 cursor-pointer"
              >
                study MBBS abroad.
              </button>{" "}
              With a medical heritage tracing back to Avicenna (Ibn Sina), Iran ranks among the top 1% of clinical research and medical science publications in Asia.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              State medical universities in Iran operate massive multi-specialty teaching hospitals offering world-class organ transplantation, cardiology, oncology, and robotic surgery facilities. The curriculum is delivered in English, aligned with international standards, and recognized by the <strong>National Medical Commission (NMC)</strong>, <strong>WHO</strong>, and <strong>WFME</strong>.
            </p>

            {showMoreAbout ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Tuition fees are heavily subsidized by the government of Iran, allowing Indian students to earn a top-tier Doctor of Medicine (MD) degree at an affordable total cost of ₹22 Lakh to ₹30 Lakh for the entire program with no donation or capitation fees.
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
              src="https://upload.wikimedia.org/wikipedia/commons/2/29/TUMS_medicine.jpg"
              loading="lazy"
              alt="Tehran University of Medical Sciences Campus"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
              srcSet="https://upload.wikimedia.org/wikipedia/commons/2/29/TUMS_medicine.jpg 1x, https://upload.wikimedia.org/wikipedia/commons/2/29/TUMS_medicine.jpg 2x"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Quick Information + About MBBS */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left – Quick Info Table */}
          <div>
            <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
              Quick Information – Study MBBS in Iran
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-left">
                <tbody>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">Recognition</td>
                    <td className="p-4">NMC, WHO & Ministry of Health Iran Recognized</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Eligibility</td>
                    <td className="p-4">50% in PCB aggregate in 10+2 (40% reserved)</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">Course Duration</td>
                    <td className="p-4">6 – 7 Years (including clinical internship)</td>
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
                    <td className="p-4 font-semibold">Research Output</td>
                    <td className="p-4">Top 1% in Asia for Biomedical Publications</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right – About MBBS */}
          <div>
            <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
              About MBBS in Iran for Indian Students
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Pursuing an MBBS degree in Iran grants students rigorous clinical experience in some of the Middle East's largest tertiary medical centers. Students engage in practical pathology, surgical observation, and clinical case studies starting in early semesters.
            </p>

            {showMoreClimate ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Iran enjoys a pleasant four-season climate with warm summers and mild winters. Modern campus dormitories are fully air-conditioned and heated, featuring high-speed internet, reading rooms, gymnasiums, and communal kitchen facilities.
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
            {cmsData?.universitiesHeading || "Top Medical Universities in Iran"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              Advantages of Studying MBBS in Iran 2026–2027
            </h2>

            <div className="space-y-6">
              <div>
                <h5 className="text-xl font-semibold">
                  1. Elite Medical Research & Technology
                </h5>
                <p className="text-gray-700">
                  Renowned globally for organ transplantation, oncology, and neurosurgery with modern robotic diagnostic tools.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  2. 100% English-Medium Programs
                </h5>
                <p className="text-gray-700">
                  Complete medical syllabus delivered in English by accomplished professors with international academic credentials.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  3. Highly Affordable Tuition Fees
                </h5>
                <p className="text-gray-700">
                  Annual tuition from ₹3.5 Lakhs per year with zero capitation, donation, or hidden charges.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  4. Safe & Peaceful Student Environment
                </h5>
                <p className="text-gray-700">
                  Exceptional campus security, supportive faculty, and deep cultural harmony with Indian students.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Cost of Study MBBS in Iran
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Studying MBBS in Iran represents one of the most cost-effective avenues for an internationally recognized Doctor of Medicine degree. Complete package costs (tuition + hostel accommodation) range between <strong>₹22 Lakh to ₹30 Lakh</strong> for the entire duration.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Living expenses in cities such as Tehran, Shiraz, and Isfahan are very reasonable, averaging approximately ₹15,000 to ₹25,000 per month for food, transport, and utilities.
            </p>
          </div>
        </div>

        {/* ==================== FOOD & ACCOMMODATION SECTION ==================== */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
              Food and Accommodation Cost – MBBS in Iran
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p>
                Medical universities in Iran provide modern and safe on-campus dormitory accommodation for international students:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Double and triple sharing rooms with comfortable bedding, study tables, and wardrobes</li>
                <li>Fully climate-controlled rooms with central heating and air conditioning</li>
                <li>Attached clean bathrooms with 24/7 hot and cold water</li>
                <li>High-speed internet access and library facilities</li>
              </ul>

              <p className="mt-6">Hostel amenities typically include:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Shared kitchen facilities on each floor for self-cooking Indian meals</li>
                <li>Laundry rooms with automated washing machines</li>
                <li>On-campus cafeterias serving nutritious meals and nearby Indian restaurants in major cities</li>
                <li>24/7 campus security, CCTV monitoring, and dedicated international student wardens</li>
              </ul>

              <p className="mt-6">
                <strong>Approximate monthly living expenses (2026–2027):</strong>
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Hostel Accommodation: ₹6,000 – ₹12,000 / month</li>
                <li>Food (self-cooking + dining): ₹7,000 – ₹13,000 / month</li>
                <li>Transport & Miscellaneous: ₹2,000 – ₹4,000 / month</li>
                <li>
                  <strong>Total monthly living cost:</strong> ≈ ₹15,000 – ₹29,000 / month
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ==================== ADMISSION PROCESS ==================== */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
              Admission Process for MBBS in Iran 2026–2027
            </h2>

            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                The admission process for Iranian government medical universities is transparent and direct:
              </p>

              <div className="space-y-10">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 1: University Selection
                  </h4>
                  <p className="text-gray-700">
                    Select a recognized medical university in Iran (Tehran University of Medical Sciences, Shiraz, Shahid Beheshti, etc.) based on preferred specialization and budget.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 2: Application & Document Evaluation
                  </h4>
                  <p className="text-gray-700">
                    Submit scanned copies of 10th & 12th marksheets, NEET-UG scorecard, and passport copy to the university admission committee.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 3: Ministry Visa Approval & Invitation Letter
                  </h4>
                  <p className="text-gray-700">
                    The university issues an official Admission Offer, and the Ministry of Science and Foreign Affairs in Iran issues the student visa tracking code.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 4: Visa Stamping & Travel
                  </h4>
                  <p className="text-gray-700">
                    Submit your passport for student visa stamping at the Embassy of the Islamic Republic of Iran in New Delhi or consulates in Mumbai/Hyderabad. EduHawk arranges group flights, airport reception in Tehran, hostel placement, and university enrollment.
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
                  Required Documents for MBBS in Iran 2026–2027
                </h2>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <h5 className="text-lg font-semibold text-blue-800">
                      Educational Documents
                    </h5>
                    <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
                      <li>10th and 12th Marksheets & Passing Certificates</li>
                      <li>NEET-UG Scorecard (Qualified)</li>
                      <li>Original Passport with minimum 2 years validity</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <h5 className="text-lg font-semibold text-blue-800">
                      Other Important Documents
                    </h5>
                    <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
                      <li>Official University Invitation Letter & Visa Code</li>
                      <li>Medical Fitness & HIV Test Certificate</li>
                      <li>10 passport-size photographs with white background</li>
                      <li>Police Clearance Certificate (PCC)</li>
                      <li>Birth Certificate and Financial Guarantee Letter</li>
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
                    <li>Minimum 17 years completed by 31st December of the admission year</li>
                    <li>Minimum 50% aggregate in Physics, Chemistry, Biology in 10+2 (40% for reserved)</li>
                    <li>NEET-UG qualification mandatory for Indian citizens</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <h4 className="text-xl font-semibold text-blue-900 mb-4">
                    Financial Support & Subsidies
                  </h4>
                  <ul className="space-y-4">
                    <li>
                      <strong>Government Subsidized Education</strong>
                      <br />
                      <span className="text-gray-600 text-sm">
                        Heavily subsidized clinical training, laboratory materials, and hospital rotations provided by the Ministry of Health.
                      </span>
                    </li>
                    <li>
                      <strong>University Academic Merit Awards</strong>
                      <br />
                      <span className="text-gray-600 text-sm">
                        Top-performing international medical students with outstanding GPA can qualify for annual tuition waivers and honors.
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
              MBBS in Iran vs MBBS in India – Quick Comparison (2026–2027)
            </h2>

            <div className="overflow-x-auto shadow-md rounded-lg">
              <table className="min-w-full border-collapse border border-gray-300 text-left">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="p-4 border border-gray-300 text-center font-semibold">
                      Criteria
                    </th>
                    <th className="p-4 border border-gray-300 text-center font-semibold">
                      MBBS in Iran
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
                    <td className="p-4 border">6 – 7 Years (including clinical internship)</td>
                    <td className="p-4 border">5.5 Years (4.5 Years Study + 1 Year Internship)</td>
                  </tr>
                  <tr>
                    <td className="p-4 border font-medium">Clinical Exposure</td>
                    <td className="p-4 border">Super-specialty transplant & surgery centers</td>
                    <td className="p-4 border">High in govt hospitals; varies in private</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border font-medium">Global Recognition</td>
                    <td className="p-4 border">
                      NMC, WHO, WFME, WDOMS recognized
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
              Frequently Asked Questions – MBBS in Iran 2026-2027
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
            Plan Your Medical Journey in Iran with EduHawk
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Get 1-on-1 personalized counselling for top NMC-recognized state medical universities in Iran with 100% transparent fee structures, official ministry visa assistance, and complete on-ground support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-xl transition duration-200 shadow-lg text-center"
            >
              Get Free Counselling
            </Link>
            <a
              href="https://wa.me/919630736070?text=Hi%2C%20I%20want%20to%20know%20more%20about%20MBBS%20in%20Iran"
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

export default Iran;
