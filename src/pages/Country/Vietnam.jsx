import cmsData from "../../data/medical_colleges/vietnam.json";
import React, { useState } from "react";
import { Plus as FiPlus, Minus as FiMinus } from "lucide-react";
import SeoHead from "../../component/SeoHead.jsx";
import { useNavigate } from "react-router-dom";
import CanThoUniversity from "../../assets/CanTho_University.webp";

const Vietnam = () => {
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [showMoreClimate, setShowMoreClimate] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const comprehensiveFaqs = [
    {
      question: "Is MBBS in Vietnam valid for Indian students?",
      answer:
        "Yes — if you choose an NMC-compliant university (listed in WDOMS and recognized under NMC Foreign Medical Graduate Licentiate regulations). Graduates are eligible to appear for the NExT/FMGE licensing exam to practice in India.",
    },
    {
      question: "What is the total cost of MBBS in Vietnam?",
      answer:
        "Total budget (tuition + hostel + food + miscellaneous) usually ranges from ₹25–35 lakhs for the complete 6-year program, depending on the chosen university and lifestyle.",
    },
    {
      question: "Is NEET required for MBBS in Vietnam?",
      answer:
        "Yes — qualifying NEET-UG is mandatory for all Indian students planning to practice medicine in India as per National Medical Commission (NMC) regulations.",
    },
    {
      question: "What is the duration of MBBS in Vietnam?",
      answer:
        "The MBBS program (General Doctor degree) is 6 years total: 5 years of rigorous academic coursework and clinical training plus 1 year of mandatory rotating internship.",
    },
    {
      question: "Is MBBS in Vietnam taught in English?",
      answer:
        "Yes — accredited state medical universities offer 100% English-medium programs for international students for lectures, laboratory training, and exams. Basic conversational Vietnamese is taught in early years for patient interactions during hospital rotations.",
    },
    {
      question: "Is hostel accommodation available for international students?",
      answer:
        "Yes — universities provide safe, affordable, fully furnished on-campus or affiliated student hostels with 24/7 security, high-speed Wi-Fi, air conditioning, and self-cooking kitchens.",
    },
    {
      question: "Can Indian students easily find Indian food in Vietnam?",
      answer:
        "Yes — self-cooking in hostels is common and popular among Indian students. Furthermore, dedicated Indian mess facilities and Indian grocery stores are readily accessible in Hanoi, Ho Chi Minh City, Hue, and Can Tho.",
    },
  ];

  return (
    <>
      <SeoHead
        title={cmsData?.seo?.title || "MBBS in Vietnam for Indian Students | Fees & Colleges"}
        description={cmsData?.seo?.description || "Study MBBS in Vietnam with English medium and affordable fees. Check eligibility, admission process and top universities."}
        keywords={cmsData?.seo?.keywords || "mbbs in vietnam, vietnam mbbs fees, study mbbs vietnam, mbbs in vietnam for indian students, top medical universities in vietnam"}
        path="/mbbs-abroad/vietnam"
        ogType="website"
      />
      <div className="min-h-screen bg-gray-50 font-sans">
        {/* ==================== HEADER HERO ==================== */}
        <div className="relative h-[65vh] min-h-[460px] md:h-[75vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={cmsData?.hero?.image || "https://upload.wikimedia.org/wikipedia/commons/2/23/%C3%93pera%2C_Ciudad_Ho_Chi_Minh%2C_Vietnam%2C_2013-08-14%2C_DD_02.JPG"}
              alt="Ho Chi Minh City Opera House"
              className="w-full h-full object-cover"
            />
            {/* Dark gradient contrast scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs sm:text-sm font-semibold tracking-wider text-blue-200 uppercase bg-blue-900/60 backdrop-blur-md rounded-full border border-blue-400/30">
                NMC FMGL Compliant • WDOMS & WHO Listed
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl tracking-tight">
                {cmsData?.hero?.title || "STUDY MBBS IN VIETNAM"}
              </h1>
              <p className="mt-4 max-w-3xl text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-medium">
                Affordable 6-year English-medium medical degree with heavy clinical bed exposure, tropical pathology similar to India, and modern teaching hospitals.
              </p>
            </div>
          </div>
        </div>

        {/* ==================== MAIN CONTENT ==================== */}
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          {/* Intro Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex-shrink-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"
                loading="lazy"
                width={160}
                height={106}
                alt="Vietnam flag"
                className="w-32 md:w-40 border-2 border-gray-200 rounded-lg shadow-md object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                {cmsData?.hero?.subtitle || "Explore MBBS Opportunities in Vietnam 2026–2027"}
              </h2>
              <p className="mt-3 text-gray-600 text-base md:text-lg leading-relaxed">
                Vietnam is recognized for world-class public medical universities offering affordable fees, extensive clinical patient flow, and a safe, welcoming environment for Indian students.
              </p>
            </div>
          </div>

          {/* Why Study + Image */}
          <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
            <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-8">
              <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
                Why Study MBBS in Vietnam
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Vietnam has become one of the fastest-growing destinations for Indian students who want to{" "}
                <button
                  onClick={() => navigate("/")}
                  className="text-blue-600 hover:text-blue-800 font-bold transition-colors duration-200 cursor-pointer underline"
                >
                  study MBBS abroad
                </button>{" "}
                because of its affordable tuition fees, globally recognized universities, and modern medical infrastructure. Many students choose to <strong>study MBBS in Vietnam</strong> due to its English-medium programs, safe environment, and early clinical exposure that helps students gain practical medical experience from the beginning of the course.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                One of the major advantages of <strong>MBBS admission in Vietnam</strong> is the availability of affordable tuition fees along with low living costs comparable to tier-2 Indian cities. Medical universities in Hanoi, Ho Chi Minh City, Hue, and Can Tho provide high-capacity multi-specialty affiliated hospitals, giving students clinical experience with disease patterns very similar to India.
              </p>

              {showMoreAbout ? (
                <p className="mt-4 text-lg leading-relaxed text-gray-700">
                  Leading state medical institutions such as Hanoi Medical University (est. 1902), Can Tho University of Medicine and Pharmacy, and Hue University of Medicine and Pharmacy are fully recognized by WHO, NMC, WDOMS, ECFMG, and FAIMER, making Vietnamese medical qualifications accepted across India, the US, the UK, and Europe.
                </p>
              ) : null}
              <button
                onClick={() => setShowMoreAbout(!showMoreAbout)}
                className="mt-6 px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition shadow-md hover:shadow-lg"
              >
                {showMoreAbout ? "Show Less" : "Read More About Vietnam MBBS"}
              </button>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl border border-blue-100 bg-white">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Hanoi_dhyk.jpg"
                loading="lazy"
                alt="Hanoi Medical University Campus"
                className="w-full h-full object-cover min-h-[420px]"
              />
            </div>
          </div>

          {/* Duration Banner */}
          <div className="mb-20 text-center bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl py-8 px-4 shadow-lg text-white">
            <h2 className="text-3xl font-bold mb-2">
              Duration of MBBS in Vietnam
            </h2>
            <p className="text-xl font-semibold text-blue-100">
              6 Years Total: 5 Years Academic Study + 1 Year Mandatory Rotatory Internship (100% NMC Compliant)
            </p>
          </div>

          {/* Advantages */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Advantages of Studying MBBS in Vietnam
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                "Affordable tuition & living costs (total 6-year package ~₹25–35 lakhs)",
                "Fully compliant with NMC FMGL 2021 & listed in WDOMS / WHO",
                "100% English-medium instruction for international students",
                "High clinical patient volume & tropical pathology similar to India",
                "Extremely safe, peaceful country with high hospitality index",
                "Indian mess facilities & grocery stores readily available",
                "Zero capitation, donation, or hidden institutional fees",
                "Modern multi-specialty university teaching hospitals (1,500+ beds)",
                "Global eligibility for USMLE, PLAB, and NExT licensing exams",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold flex-shrink-0">
                    ✓
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Info Table + About */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-6">
              <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
                Quick Information – MBBS in Vietnam
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 text-left rounded-xl overflow-hidden text-sm md:text-base">
                  <tbody>
                    <tr className="bg-gray-100">
                      <td className="p-4 font-semibold text-gray-800">Recognition</td>
                      <td className="p-4 text-gray-700">NMC-compliant, WHO, WDOMS, ECFMG, FAIMER</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-800">Eligibility</td>
                      <td className="p-4 text-gray-700">50–60% in PCB in 10+2 + NEET qualified</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="p-4 font-semibold text-gray-800">Duration</td>
                      <td className="p-4 text-gray-700">6 Years (5 Years Study + 1 Year Internship)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-800">NEET Requirement</td>
                      <td className="p-4 text-green-700 font-bold">Mandatory for Indian Students</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="p-4 font-semibold text-gray-800">IELTS / TOEFL</td>
                      <td className="p-4 text-gray-700">Not Required (English Medium Curriculum)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-800">Medium of Instruction</td>
                      <td className="p-4 text-gray-700">100% English Medium</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="p-4 font-semibold text-gray-800">Estimated Total Package</td>
                      <td className="p-4 text-blue-900 font-bold">₹25 – ₹35 Lakhs (6-Year Package)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center md:text-left">
                  Clinical Training & Student Life
                </h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  Vietnam provides practical-focused medical training with extensive clinical rotations beginning in the third year. Because Vietnam is a tropical Southeast Asian nation, disease presentations (infectious diseases, respiratory illnesses, cardiovascular pathology) are nearly identical to those seen in Indian hospitals.
                </p>
                {showMoreClimate ? (
                  <p className="mt-4 text-lg leading-relaxed text-gray-700">
                    The climate is warm and tropical with distinct dry and rainy seasons. Indian students adapt effortlessly, enjoying safe public transit, hospitable campus environments, and rich cultural interactions.
                  </p>
                ) : null}
              </div>
              <button
                onClick={() => setShowMoreClimate(!showMoreClimate)}
                className="mt-6 px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition shadow-md hover:shadow-lg self-start"
              >
                {showMoreClimate ? "Show Less" : "Read More Details"}
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Eligibility */}
            <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
                Eligibility Criteria
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-700">
                <li>10+2 with Physics, Chemistry, Biology, and English</li>
                <li>Minimum 50% aggregate in PCB (40% for reserved categories; certain top universities recommend 60%)</li>
                <li>NEET-UG qualified in the year of admission (mandatory for Indians)</li>
                <li>Age: Minimum 17 years completed by 31st December of admission year</li>
                <li>Valid passport with minimum 18 months validity</li>
              </ul>
            </div>

            {/* Documents */}
            <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
                Required Documents
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-700">
                <li>Valid Passport (minimum 18 months validity)</li>
                <li>10th and 12th Marksheets & Passing Certificates</li>
                <li>NEET Scorecard & Admit Card</li>
                <li>Recent passport-size photographs (white background)</li>
                <li>Medical Fitness Certificate with HIV & Hepatitis reports</li>
                <li>Official University Admission / Invitation Letter</li>
                <li>Apostille and translation of certificates (handled by Edu-Hawk)</li>
              </ul>
            </div>
          </div>

          {/* Application Process */}
          <div className="py-16 bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-12 mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
              Admission Process for Vietnam MBBS
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                { step: "Step 1: Counseling & University Selection", desc: "Select an NMC-compliant medical university matching your academic profile and budget with Edu-Hawk advisors." },
                { step: "Step 2: Document Submission", desc: "Submit scanned copies of Class 10 & 12 marksheets, valid passport, and NEET scorecard for university verification." },
                { step: "Step 3: University Evaluation & Offer Letter", desc: "The university evaluates your application and issues the official Admission/Offer Letter within 7–10 days." },
                { step: "Step 4: Visa Processing & Ministry Clearance", desc: "Edu-Hawk coordinates visa approval from Vietnam Immigration and student visa stamping at the Embassy in New Delhi." },
                { step: "Step 5: Travel, Orientation & Hostel Check-In", desc: "Join student batch departure, airport pickup in Vietnam, campus registration, and comfortable hostel accommodation." },
              ].map((item, idx) => (
                <div key={idx} className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">{item.step}</h4>
                  <p className="text-gray-700 text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Top Universities Grid */}
          <div id="universities" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
              {cmsData?.universitiesHeading || "Top Medical Universities in Vietnam"}
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Prestigious state-run medical universities offering modern simulation centers, 1,500+ bed teaching hospitals, and high FMGE/NExT passing track records.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Hanoi Medical University",
                  location: "Hanoi, Vietnam",
                  fee: "₹3.2 Lakhs / Year",
                  desc: "Founded in 1902, HMU is the oldest and most prestigious flagship state medical school in Vietnam.",
                  img: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Hanoi_dhyk.jpg",
                },
                {
                  name: "University of Medicine and Pharmacy, Ho Chi Minh City",
                  location: "Ho Chi Minh City, Vietnam",
                  fee: "₹3.4 Lakhs / Year",
                  desc: "Southern Vietnam's top medical training and scientific research center with world-class faculty.",
                  img: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Z5372420599304_7ca55d21ee3a707247033180d3108fc6.jpg",
                },
                {
                  name: "Hue University of Medicine and Pharmacy",
                  location: "Hue, Vietnam",
                  fee: "₹3.0 Lakhs / Year",
                  desc: "Major medical hub in Central Vietnam with 1,500-bed university hospital and strong European research collaborations.",
                  img: "https://upload.wikimedia.org/wikipedia/commons/7/72/Hu%E1%BA%BF_University.jpg",
                },
                {
                  name: "Can Tho University of Medicine and Pharmacy",
                  location: "Can Tho, Vietnam",
                  fee: "₹3.1 Lakhs / Year",
                  desc: "Flagship medical university in the Mekong Delta region featuring brand-new international student hostels and modern laboratories.",
                  img: CanThoUniversity,
                },
                {
                  name: "Hai Phong University of Medicine and Pharmacy",
                  location: "Hai Phong, Vietnam",
                  fee: "₹3.0 Lakhs / Year",
                  desc: "Accredited state medical university recognized for marine medicine, surgery, and dedicated international mentor programs.",
                  img: "https://upload.wikimedia.org/wikipedia/commons/1/19/Dhyhp.JPG",
                },
              ].map((uni, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={uni.img}
                      loading="lazy"
                      alt={uni.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-blue-900/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                      {uni.fee}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{uni.location}</span>
                      <h4 className="text-xl font-bold text-gray-900 mt-1 mb-3">
                        {uni.name}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {uni.desc}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-green-700 bg-green-50 px-2.5 py-1 rounded-md">
                        NMC & WHO Recognized
                      </span>
                      <a
                        href="#counselling"
                        className="text-sm font-semibold text-blue-700 hover:text-blue-900 transition"
                      >
                        Enquire Now →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Food & Accommodation */}
          <div className="mb-20 rounded-[32px] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 md:p-10 shadow-xl shadow-blue-100/60">
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                Living Expenses
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                Food & Accommodation Costs in Vietnam
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              {[
                {
                  label: "Hostel",
                  value: "₹8,000–₹20,000",
                  detail: "Shared furnished rooms, Wi‑Fi, AC, and 24/7 security",
                },
                {
                  label: "Food",
                  value: "₹8,000–₹15,000",
                  detail: "Indian mess + self-cooking in campus hostel kitchens",
                },
                {
                  label: "Misc. Expenses",
                  value: "₹4,000–₹8,000",
                  detail: "Local transport, mobile data, books, and laundry",
                },
                {
                  label: "Total Monthly",
                  value: "₹20,000–₹45,000",
                  detail: "Comfortable, dignified lifestyle in Hanoi or Can Tho",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-3">
                    {item.label}
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">
                    {item.value}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-dashed border-blue-200 bg-blue-50/60 p-5 text-center">
              <p className="text-base md:text-lg font-medium text-gray-700">
                Indian food is widely available, and campus hostels provide fully equipped kitchens or dedicated Indian mess options run by Indian cooks.
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="py-16 bg-white mb-20 rounded-3xl border border-gray-100 shadow-sm p-6 md:p-10">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-4">
                MBBS in Vietnam vs MBBS in India – Quick Comparison (2026–2027)
              </h2>
              <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
                Discover the cost-effectiveness and academic advantages of studying in Vietnam compared to Indian private colleges.
              </p>

              <div className="overflow-x-auto shadow-md rounded-xl">
                <table className="min-w-full border-collapse border border-gray-300 text-left text-sm md:text-base">
                  <thead>
                    <tr className="bg-blue-900 text-white">
                      <th className="p-4 border border-gray-300 text-left font-semibold w-1/4">
                        Parameter
                      </th>
                      <th className="p-4 border border-gray-300 text-left font-semibold w-3/8">
                        MBBS in Vietnam
                      </th>
                      <th className="p-4 border border-gray-300 text-left font-semibold w-3/8">
                        MBBS in India (Private / Deemed)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 divide-y divide-gray-200">
                    {[
                      {
                        parameter: "Tuition Fees (per year)",
                        vietnam: "₹3 Lakhs – ₹6 Lakhs per year\n(Total tuition: ₹20 Lakhs – ₹35 Lakhs)",
                        india: "Govt: ₹50k – ₹2.5 Lakhs (Total)\nPrivate: ₹15 Lakhs – ₹25+ Lakhs / year\nDeemed: ₹80 Lakhs – ₹1.5+ Crore (Total)",
                      },
                      {
                        parameter: "Donation / Capitation",
                        vietnam: "Zero Donation / Capitation Fee",
                        india: "Frequently ₹30 Lakhs – ₹60+ Lakhs in private colleges",
                      },
                      {
                        parameter: "Course Duration",
                        vietnam: "6 Years (5 years academic + 1 year rotating clinical internship)",
                        india: "5.5 Years (4.5 years academic + 1 year internship)",
                      },
                      {
                        parameter: "Class Strength & Clinical Ratio",
                        vietnam: "Moderate batch size (30–60 students per practical group)",
                        india: "Large lecture batches (150–250 students per class)",
                      },
                      {
                        parameter: "Global Recognition",
                        vietnam: "NMC FMGL 2021 compliant, WHO, WDOMS, ECFMG, FAIMER",
                        india: "NMC recognized",
                      },
                      {
                        parameter: "Medium of Instruction",
                        vietnam: "100% English Medium for international students",
                        india: "English",
                      },
                      {
                        parameter: "Hostel & Food",
                        vietnam: "₹1.2 Lakhs – ₹1.8 Lakhs per year (Indian mess available)",
                        india: "₹1.5 Lakhs – ₹2.5 Lakhs per year",
                      },
                      {
                        parameter: "Compulsory Rural Service Bond",
                        vietnam: "Zero compulsory service bonds upon graduation",
                        india: "1 to 5 years compulsory rural bonds (penalties up to ₹50 Lakhs)",
                      },
                    ].map((row, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      >
                        <td className="p-4 border border-gray-300 font-medium text-gray-900">
                          {row.parameter}
                        </td>
                        <td className="p-4 border border-gray-300 whitespace-pre-line leading-relaxed font-semibold text-blue-900">
                          {row.vietnam}
                        </td>
                        <td className="p-4 border border-gray-300 whitespace-pre-line leading-relaxed">
                          {row.india}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="py-16 bg-gradient-to-b from-white to-gray-50 rounded-3xl border border-gray-100 shadow-sm p-6 md:p-10 mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-4">
              Frequently Asked Questions – MBBS in Vietnam
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              Everything Indian students and parents need to know about recognition, expenses, language, and clinical internships.
            </p>

            <div className="space-y-4 container mx-auto px-4 max-w-4xl">
              {comprehensiveFaqs.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`bg-white rounded-2xl shadow-sm border overflow-hidden transition-all duration-300 ${
                      isOpen ? "shadow-md border-blue-300" : "border-gray-200"
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-200 hover:bg-blue-50/50"
                    >
                      <h4 className="text-lg md:text-xl font-semibold text-blue-900 pr-4">
                        {item.question}
                      </h4>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-700 shrink-0 transition-all duration-300">
                        {isOpen ? <FiMinus /> : <FiPlus />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 text-gray-700 leading-relaxed text-base md:text-lg whitespace-pre-line border-t border-gray-100 pt-3">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ==================== BOTTOM CONSULTATION CTA BANNER ==================== */}
          <div id="counselling" className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-800 text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Apply for MBBS in Vietnam 2026–2027 Admissions
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-base md:text-lg">
              Get personalized guidance on university selection, English-medium programs, document apostille, and student visa processing from Edu-Hawk's senior education counselors.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+919630736070"
                className="w-full sm:w-auto px-8 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-gray-950 font-bold rounded-xl shadow-lg transition transform hover:-translate-y-0.5"
              >
                Call Specialist: +91 9630736070
              </a>
              <a
                href="https://wa.me/919630736070?text=Hi%2C%20I%20am%20interested%20in%20studying%20MBBS%20in%20Vietnam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg transition transform hover:-translate-y-0.5"
              >
                WhatsApp Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vietnam;
