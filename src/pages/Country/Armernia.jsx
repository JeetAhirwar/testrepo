import cmsData from "../../data/medical_colleges/armenia.json";
import React, { useState } from "react";
import { Plus as FiPlus, Minus as FiMinus } from "lucide-react";
import ArmeniaFlag from "../../Images/country flag png/am-wave-01.webp";
import SeoHead from "../../component/SeoHead.jsx";

const Armernia = () => {
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [showMoreClimate, setShowMoreClimate] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Is MBBS in Armenia recognized by NMC (MCI) and WHO?",
      answer:
        "Yes, medical universities in Armenia such as Yerevan State Medical University and Yerevan Haybusak University are listed in the World Directory of Medical Schools (WDOMS) and fully compliant with NMC guidelines. Graduates are eligible to appear for the NExT/FMGE licensing exam in India.",
    },
    {
      question: "What is the duration of the MBBS course in Armenia?",
      answer:
        "The course duration is 6 years (5 years of intensive theoretical and clinical studies + 1 year of mandatory clinical internship), fully satisfying NMC Foreign Medical Graduate Licentiate (FMGL) regulations.",
    },
    {
      question: "What is the total cost of studying MBBS in Armenia?",
      answer:
        "The total tuition fee ranges between ₹2.8 Lakhs to ₹3.5 Lakhs per year. Including hostel accommodation, food, and living expenses, the complete 6-year package is approximately ₹18 Lakhs to ₹25 Lakhs.",
    },
    {
      question: "Is NEET mandatory for Indian students for Armenia MBBS admission?",
      answer:
        "Yes, qualifying NEET-UG in the admission year or within the valid preceding two years is mandatory for Indian students as per NMC regulations to ensure eligibility for licensing exams in India.",
    },
    {
      question: "What is the medium of instruction in Armenian medical universities?",
      answer:
        "The complete 6-year MD Physician (MBBS equivalent) curriculum is delivered in 100% English medium for international students. Students also learn conversational Armenian for bedside patient interactions in later clinical years.",
    },
    {
      question: "Are Indian food and mess facilities available for students in Yerevan?",
      answer:
        "Yes, university hostels provide kitchen access for self-cooking, and dedicated Indian mess facilities run by Indian chefs are available near campus areas serving authentic North and South Indian vegetarian and non-vegetarian food.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <SeoHead
        title={cmsData?.seo?.title || "Study MBBS in Armenia for Indian Students | Edu Hawk"}
        description={cmsData?.seo?.description || "Plan MBBS in Armenia for Indian students: NEET-based admission, NMC & WHO-recognized universities, English-medium courses and hostel living cost details."}
        keywords={cmsData?.seo?.keywords || "mbbs in armenia, armenia mbbs fees, study mbbs armenia, armenia medical colleges"}
        path="/mbbs-abroad/armenia"
        ogType="website"
      />

      {/* ==================== HEADER HERO ==================== */}
      <div className="relative h-[65vh] min-h-[460px] md:h-[75vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Hayq_Square%2C_Vanadzor.jpg"
            alt="Armenia Cityscape Hayq Square"
            className="w-full h-full object-cover"
          />
          {/* Dark contrast scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs sm:text-sm font-semibold tracking-wider text-blue-200 uppercase bg-blue-900/60 backdrop-blur-md rounded-full border border-blue-400/30">
              European Medical Education • NMC & WHO Listed
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl tracking-tight">
              {cmsData?.hero?.title || "STUDY MBBS IN ARMENIA"}
            </h1>
            <p className="mt-4 max-w-3xl text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-medium">
              High-quality clinical training in peaceful Yerevan with affordable tuition, European standard laboratories, and NMC-compliant 6-year MD Physician programs.
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
              src={ArmeniaFlag}
              loading="lazy"
              width={160}
              height={100}
              alt="Flag of Armenia"
              className="w-32 md:w-40 border-2 border-gray-200 rounded-lg shadow-md object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              {cmsData?.hero?.subtitle || "Explore MBBS Opportunities in Armenia 2026–2027"}
            </h2>
            <p className="mt-3 text-gray-600 text-base md:text-lg leading-relaxed">
              Armenia has emerged as one of the most reliable and affordable destinations for Indian medical aspirants seeking a European-standard medical degree recognized by the NMC, WHO, and WFME.
            </p>
          </div>
        </div>

        {/* About Armenia + Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              About Armenia for Medical Studies
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Armenia is a picturesque, peaceful country situated in the South Caucasus region of Eurasia. Known for its centuries-old cultural heritage, hospitable citizens, and safe cities like Yerevan, Armenia offers an ideal learning atmosphere for international students.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              Medical universities in Armenia follow the European Credit Transfer and Accumulation System (ECTS) under the Bologna Framework. The comprehensive 6-year MD curriculum blends extensive laboratory research with rotations in multi-specialty government and university teaching hospitals.
            </p>

            {showMoreAbout ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                With a low crime rate, vibrant Indian student communities, dedicated Indian messes, and direct flights connecting New Delhi and Mumbai to Yerevan, Armenia has become a top choice for aspiring doctors who want European quality education at a fraction of Indian private medical college costs.
              </p>
            ) : null}

            <button
              onClick={() => setShowMoreAbout(!showMoreAbout)}
              className="mt-6 px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition"
            >
              {showMoreAbout ? "Show Less" : "Read More About Armenia"}
            </button>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-indigo-900 p-8 rounded-2xl text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-blue-200">
              Why Indian Students Choose Armenia
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/30 text-blue-300 flex items-center justify-center font-bold text-sm">✓</span>
                <div>
                  <h4 className="font-semibold text-white">NMC & WHO Recognized Degree</h4>
                  <p className="text-blue-100 text-sm">Recognized globally; graduates are eligible for USMLE, PLAB, and NExT.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/30 text-blue-300 flex items-center justify-center font-bold text-sm">✓</span>
                <div>
                  <h4 className="font-semibold text-white">100% English Medium Curriculum</h4>
                  <p className="text-blue-100 text-sm">Lectures, textbooks, clinical rotations, and examinations in English.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/30 text-blue-300 flex items-center justify-center font-bold text-sm">✓</span>
                <div>
                  <h4 className="font-semibold text-white">Affordable Living & Fees</h4>
                  <p className="text-blue-100 text-sm">Tuition starts at ₹2.8 Lakhs/year; monthly living cost around ₹18k–₹25k.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/30 text-blue-300 flex items-center justify-center font-bold text-sm">✓</span>
                <div>
                  <h4 className="font-semibold text-white">Zero Capitation or Donation</h4>
                  <p className="text-blue-100 text-sm">100% merit-based admissions through straightforward transparent procedures.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Information + About MBBS */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left – Quick Info Table */}
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Quick Information – Study MBBS in Armenia
            </h3>

            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm bg-white">
              <table className="min-w-full text-left text-sm md:text-base">
                <tbody>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <td className="p-4 font-semibold text-gray-800">Recognition</td>
                    <td className="p-4 text-gray-700">NMC, WHO, WFME, ECFMG, FAIMER</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold text-gray-800">Eligibility</td>
                    <td className="p-4 text-gray-700">50% in PCB aggregate in 10+2 (40% for reserved)</td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <td className="p-4 font-semibold text-gray-800">Course Duration</td>
                    <td className="p-4 text-gray-700">6 Years (5 Years Academic + 1 Year Clinical Internship)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold text-gray-800">NEET Requirement</td>
                    <td className="p-4 text-gray-700 font-semibold text-green-700">Compulsory (Valid Qualifying Score)</td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <td className="p-4 font-semibold text-gray-800">IELTS / TOEFL</td>
                    <td className="p-4 text-gray-700">Not Required (English Medium Education)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold text-gray-800">Medium of Teaching</td>
                    <td className="p-4 text-gray-700">100% English Medium</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-semibold text-gray-800">Estimated Total Budget</td>
                    <td className="p-4 text-gray-700 font-medium">₹18 Lakhs – ₹25 Lakhs (6-Year Package)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right – About MBBS */}
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              About the MD Physician (MBBS) Degree in Armenia
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              The medical curriculum in Armenia awards the <strong>MD Physician degree</strong>, which is globally recognized as the legal equivalent of MBBS in India and the UK. It adheres strictly to the National Medical Commission (NMC) Foreign Medical Graduate Licentiate (FMGL) Regulations.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              Students receive thorough pre-clinical grounding in Anatomy, Physiology, and Biochemistry during early semesters, followed by extensive bedside clinical postings across major state hospitals in Yerevan.
            </p>

            {showMoreClimate ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Armenia features a continental climate with pleasant sunny summers and moderate winters. All university faculties, laboratories, and student residences are centrally heated and air-conditioned, providing optimal comfort throughout the academic year.
              </p>
            ) : null}

            <button
              onClick={() => setShowMoreClimate(!showMoreClimate)}
              className="mt-6 px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition"
            >
              {showMoreClimate ? "Show Less" : "Read More Details"}
            </button>
          </div>
        </div>

        {/* ==================== UNIVERSITIES GRID ==================== */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
            {cmsData?.universitiesHeading || "Top Medical Universities in Armenia"}
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Prestigious NMC-recognized institutions offering world-class infrastructure and affordable medical education for international students.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Yerevan State Medical University",
                location: "Yerevan, Armenia",
                fee: "₹3.5 Lakhs / Year",
                desc: "Founded in 1920, YSMU is Armenia's century-old flagship government medical university with over 30 affiliated clinical hospitals and alumni practicing worldwide.",
                img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/%D5%80%D5%A5%D6%80%D5%A1%D6%81%D5%AB_%D5%B0%D5%A1%D5%B4%D5%A1%D5%AC%D5%BD%D5%A1%D6%80%D5%A1%D5%B6.JPG",
              },
              {
                name: "Yerevan Haybusak University",
                location: "Yerevan, Armenia",
                fee: "₹3.0 Lakhs / Year",
                desc: "Established in 1990, Yerevan Haybusak University is a premier medical academy featuring state-of-the-art simulation labs and active European academic linkages.",
                img: "https://upload.wikimedia.org/wikipedia/commons/d/db/Haybusak-uni.JPG",
              },
              {
                name: "Mkhitar Gosh Armenian-Russian International University",
                location: "Yerevan & Vanadzor, Armenia",
                fee: "₹2.8 Lakhs / Year",
                desc: "Known for personalized student attention, affordable tuition, dedicated Indian student coordinators, and extensive clinical rotations in high-capacity multi-specialty hospitals.",
                img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Hayq_Square%2C_Vanadzor.jpg",
              },
            ].map((uni, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
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
                    <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">{uni.location}</span>
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

        {/* ==================== ADVANTAGES + COST ==================== */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              Key Advantages of Studying in Armenia
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="text-lg font-bold text-gray-900">
                  1. High-Quality European Education
                </h4>
                <p className="text-gray-600 mt-1 text-sm md:text-base">
                  Universities follow modern European ECTS curricula with high staff-to-student ratios, ensuring personal attention in clinical practicals.
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="text-lg font-bold text-gray-900">
                  2. Budget-Friendly Tuition Structure
                </h4>
                <p className="text-gray-600 mt-1 text-sm md:text-base">
                  Annual tuition from ₹2.8 to ₹3.5 Lakhs makes Armenia one of the most cost-effective European medical destinations for Indian families.
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="text-lg font-bold text-gray-900">
                  3. Transparent Direct Admission
                </h4>
                <p className="text-gray-600 mt-1 text-sm md:text-base">
                  No capitation fee, no donation, and no additional university entrance test beyond qualifying the NEET-UG examination.
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="text-lg font-bold text-gray-900">
                  4. Safe Environment for Indian Students
                </h4>
                <p className="text-gray-600 mt-1 text-sm md:text-base">
                  Armenia consistently ranks among the top safest countries in the world with zero racial discrimination and warm hospitality.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              Cost of Studying MBBS in Armenia
            </h2>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4 text-gray-700 leading-relaxed">
              <p>
                Studying <strong>MBBS in Armenia</strong> is exceptionally affordable for Indian students compared to private medical colleges in India, where total capitation and tuition often exceed ₹80 Lakhs to ₹1 Crore.
              </p>
              <p>
                In Armenia, annual tuition fees range from <strong>₹2.8 Lakhs to ₹3.5 Lakhs</strong> per year. With living costs, food, and hostel accommodation, the complete 6-year course package remains well within <strong>₹18 Lakhs to ₹25 Lakhs</strong>.
              </p>
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 mt-4">
                <h5 className="font-bold text-blue-900 mb-2">Estimated Annual Expense Breakdown:</h5>
                <ul className="text-sm space-y-1.5 text-gray-700">
                  <li>• Tuition Fee: ₹2,80,000 – ₹3,50,000 / year</li>
                  <li>• University Hostel: ₹50,000 – ₹80,000 / year</li>
                  <li>• Food / Indian Mess: ₹70,000 – ₹1,00,000 / year</li>
                  <li>• Medical Insurance & Visa Extension: ₹15,000 – ₹25,000 / year</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== FOOD & ACCOMMODATION SECTION ==================== */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-16 rounded-2xl mb-20 border border-gray-100 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-8">
              Food and Accommodation for Indian Students in Armenia
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
              <p>
                Medical universities in Yerevan and Vanadzor provide safe, comfortable hostel facilities equipped specifically for international students. Rooms are available in 2-seater and 3-seater options with 24/7 security, high-speed Wi-Fi, study desks, and central heating.
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-blue-900 mb-3 text-lg">Hostel Amenities</h4>
                  <ul className="space-y-2 text-sm md:text-base text-gray-600">
                    <li>• Furnished rooms with beds, study tables, and wardrobes</li>
                    <li>• Central heating and hot water supply</li>
                    <li>• Shared kitchens with induction cooktops for self-cooking</li>
                    <li>• On-campus laundry rooms and reading halls</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-blue-900 mb-3 text-lg">Indian Food & Mess Options</h4>
                  <ul className="space-y-2 text-sm md:text-base text-gray-600">
                    <li>• Dedicated Indian mess serving vegetarian and non-vegetarian food</li>
                    <li>• Supermarkets with Indian spices, lentils, rice, and groceries</li>
                    <li>• Indian restaurants within walking distance in Yerevan</li>
                    <li>• Traditional Indian festivals celebrated enthusiastically</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-gray-500 italic text-center">
                Average monthly living expenses in Yerevan (accommodation + food + transport) range between ₹18,000 and ₹25,000 per month.
              </p>
            </div>
          </div>
        </div>

        {/* ==================== ADMISSION PROCESS ==================== */}
        <div className="py-16 bg-white rounded-2xl mb-20 border border-gray-100 p-6 md:p-12 shadow-sm">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
              Admission Process for MBBS in Armenia 2026–2027
            </h2>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900 mb-2">
                  Step 1: Academic & University Guidance
                </h4>
                <p className="text-gray-700">
                  Consult with Edu-Hawk counselors to select the right medical university in Armenia based on budget, clinical hospital exposure, and academic preferences.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900 mb-2">
                  Step 2: Document Submission & Application
                </h4>
                <p className="text-gray-700">
                  Submit scanned copies of Class 10 & 12 marksheets, valid passport, and NEET scorecard. Edu-Hawk processes university applications and secures the official Admission Letter within 7–14 days.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900 mb-2">
                  Step 3: Document Apostille & Ministry Approval
                </h4>
                <p className="text-gray-700">
                  Academic certificates undergo MEA apostille and translation into Armenian as required by the Ministry of Education and Science of Armenia.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900 mb-2">
                  Step 4: Visa Processing & Departure
                </h4>
                <p className="text-gray-700">
                  Upon receiving the official invitation, student visa stamping is completed at the Embassy of Armenia in New Delhi. Edu-Hawk assists with flight booking, pre-departure briefing, and airport pickup in Yerevan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== DOCUMENTS + ELIGIBILITY ==================== */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              Required Documents for Armenia MBBS
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h5 className="text-lg font-bold text-blue-900 mb-3">Academic Records</h5>
                <ul className="list-disc pl-5 text-gray-700 space-y-1.5 text-sm md:text-base">
                  <li>Original 10th and 12th Marksheets & Passing Certificates</li>
                  <li>NEET-UG Qualifying Scorecard & Admit Card</li>
                  <li>Birth Certificate in English (or translated)</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h5 className="text-lg font-bold text-blue-900 mb-3">Identity & Travel</h5>
                <ul className="list-disc pl-5 text-gray-700 space-y-1.5 text-sm md:text-base">
                  <li>Valid Passport (minimum 18–24 months validity)</li>
                  <li>15–20 Passport size photographs (white background)</li>
                  <li>Official Invitation Letter issued by the Armenian University</li>
                  <li>Comprehensive Medical Fitness Certificate including HIV report</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              Eligibility Criteria & NMC Compliance
            </h2>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
              <h4 className="text-lg font-bold text-blue-900">Mandatory Requirements</h4>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-700">•</span>
                  <span><strong>Age:</strong> Must have completed 17 years by 31st December of the admission year.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-700">•</span>
                  <span><strong>Academics:</strong> 50% aggregate marks in Physics, Chemistry, and Biology in 10+2 (40% for SC/ST/OBC).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-700">•</span>
                  <span><strong>NEET Qualification:</strong> Valid NEET qualifying score as mandated by NMC for Indian medical candidates abroad.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-700">•</span>
                  <span><strong>Course Language:</strong> English-medium schooling background (no IELTS/TOEFL required).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ==================== COMPARISON TABLE ==================== */}
        <div className="py-16 bg-white rounded-2xl mb-20 border border-gray-100 shadow-sm p-6 md:p-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-4">
              MBBS in Armenia vs MBBS in India
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              Compare key parameters to understand why hundreds of Indian students choose Armenia over high-cost private medical colleges in India.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-200 text-left text-sm md:text-base">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="p-4 border border-blue-800 text-left font-semibold">Criteria</th>
                    <th className="p-4 border border-blue-800 text-left font-semibold">MBBS in Armenia</th>
                    <th className="p-4 border border-blue-800 text-left font-semibold">MBBS in India (Private)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 divide-y divide-gray-200">
                  <tr className="bg-gray-50">
                    <td className="p-4 font-semibold">Annual Tuition Fee</td>
                    <td className="p-4 text-green-700 font-bold">₹2.8 – ₹3.5 Lakhs / year</td>
                    <td className="p-4 text-red-700 font-semibold">₹12 – ₹25+ Lakhs / year</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Donation / Capitation Fee</td>
                    <td className="p-4 text-green-700 font-bold">Zero Donation</td>
                    <td className="p-4 text-red-700 font-semibold">Often ₹30 – ₹60+ Lakhs</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-semibold">Course Duration</td>
                    <td className="p-4">6 Years (5 Years Theory + 1 Year Internship)</td>
                    <td className="p-4">5.5 Years (4.5 Years + 1 Year Internship)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Total Package (Tuition + Hostel)</td>
                    <td className="p-4 text-green-700 font-bold">₹18 – ₹25 Lakhs Total</td>
                    <td className="p-4 text-red-700 font-semibold">₹70 Lakhs – ₹1.2+ Crore Total</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-semibold">Global Recognition</td>
                    <td className="p-4">NMC, WHO, WFME, ECFMG (USMLE & PLAB Eligible)</td>
                    <td className="p-4">NMC recognized</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Student-to-Teacher Ratio</td>
                    <td className="p-4 text-blue-900 font-semibold">1:15 (Intensive clinical mentoring)</td>
                    <td className="p-4">1:50+ (High batch strength)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ==================== FAQ ACCORDION SECTION ==================== */}
        <div className="py-16 bg-gradient-to-b from-white to-gray-50 rounded-2xl mb-20 border border-gray-100 p-6 md:p-12 shadow-sm">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-4">
              Frequently Asked Questions – MBBS in Armenia
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Clear, transparent answers to the most common queries from Indian medical aspirants and parents.
            </p>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-5 text-left font-semibold text-gray-900 hover:text-blue-900 transition"
                  >
                    <span className="text-base md:text-lg">{faq.question}</span>
                    <span className="ml-4 flex-shrink-0 text-blue-600">
                      {openIndex === index ? <FiMinus size={20} /> : <FiPlus size={20} />}
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="px-5 pb-5 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ==================== BOTTOM CONSULTATION CTA BANNER ==================== */}
        <div id="counselling" className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-800 text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Plan Your MBBS in Armenia for 2026–2027 Admissions
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-base md:text-lg">
            Connect directly with Edu-Hawk's senior medical admission counselors for personalized guidance on universities, fee structures, documentation, and visa assistance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+919630736070"
              className="w-full sm:w-auto px-8 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-gray-950 font-bold rounded-xl shadow-lg transition transform hover:-translate-y-0.5"
            >
              Call Specialist: +91 9630736070
            </a>
            <a
              href="https://wa.me/919630736070?text=Hi%2C%20I%20am%20interested%20in%20studying%20MBBS%20in%20Armenia"
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
  );
};

export default Armernia;
