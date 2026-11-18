import cmsData from "../../data/medical_colleges/georgia.json";
import React, { useState } from "react";
import GeorgiaFlag from "../../Images/country flag png/Georgia.svg"; // Correct path – update if needed
import { Plus as FiPlus, Minus as FiMinus } from "lucide-react";
import SeoHead from "../../component/SeoHead.jsx";
import { useNavigate, Link } from "react-router-dom";

const Georgia = () => {
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [showMoreClimate, setShowMoreClimate] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Is MBBS in Georgia valid for Indian students?",
      answer:
        "Yes, MBBS degrees from recognized Georgian universities are valid. Indian students must pass the FMGE/NEXT exam to practice medicine in India.",
    },
    {
      question: "What is the total cost of MBBS in Georgia?",
      answer:
        "The total cost of MBBS in Georgia usually ranges between ₹30 lakh to ₹45 lakh, depending on the university and living expenses.",
    },
    {
      question: "Is NEET required for MBBS in Georgia?",
      answer:
        "Yes, NEET qualification is mandatory for Indian students who want to study MBBS abroad.",
    },
    {
      question: "What is the duration of MBBS in Georgia?",
      answer:
        "The MBBS course duration in Georgia is 6 years, including 5 years of academic study and 1 year of internship.",
    },
    {
      question: "Is MBBS in Georgia taught in English?",
      answer:
        "Yes, most Georgian universities offer MBBS programs in English medium for international students.",
    },
    {
      question: "Is hostel accommodation available for students in Georgia?",
      answer:
        "Yes, universities provide hostel facilities with basic amenities such as beds, study tables, cupboards, kitchens, and laundry rooms.",
    },
    {
      question: "Can Indian students find Indian food in Georgia?",
      answer:
        "Yes, students can cook Indian food in hostel kitchens, and many cities have Indian restaurants and mess facilities.",
    },
  ];

  return (
    <>
    
    <SeoHead
        title={cmsData?.seo?.title || "MBBS in Georgia for Indian Students | Fees & Admission Process"}
        description={cmsData?.seo?.description || "Study MBBS in Georgia with English medium and affordable fees. Check eligibility, admission process and top universities."}
        keywords={cmsData?.seo?.keywords || "mbbs in georgia, georgia mbbs fees, study mbbs georgia, top medical universities in georgia"}
        path="/mbbs-abroad/georgia"
        ogType="website"
      />
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* ==================== HEADER CAROUSEL ==================== */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={cmsData?.hero?.image || "https://upload.wikimedia.org/wikipedia/commons/5/50/2014_Kutaisi%2C_Fontanna_na_centralnym_placu_%2806%29.jpg"}
            alt="Tbilisi Old Town - Georgia"
            className="w-full h-full object-cover brightness-75"
            srcSet="https://upload.wikimedia.org/wikipedia/commons/5/50/2014_Kutaisi%2C_Fontanna_na_centralnym_placu_%2806%29.jpg 1x, https://upload.wikimedia.org/wikipedia/commons/5/50/2014_Kutaisi%2C_Fontanna_na_centralnym_placu_%2806%29.jpg 2x"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Subtle dark gradient overlay for optimal text contrast & accessibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl text-center px-4 tracking-tight">
              {cmsData?.hero?.title || "STUDY MBBS IN GEORGIA"}
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
              src={GeorgiaFlag}
              loading="lazy"
              width={30}
              height={20}
              alt="Georgia flag"
              className="w-32 md:w-40 border-4 border-gray-800 rounded shadow-lg"
                  srcSet={`${GeorgiaFlag} 1x, ${GeorgiaFlag} 2x`}
                  sizes="(max-width: 768px) 120px, 160px"
                />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
              {cmsData?.hero?.subtitle || "Explore MBBS Opportunities in Georgia 2026–2027"}
            </h2>
          </div>
        </div>

        {/* About Georgia + Image */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
              About Georgia
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Georgia has become one of the most preferred destinations for Indian 
              students who want to
              {" "} 
              <button onClick={() => navigate("/")}
                       className=" hover:text-[#426a91] text-blue-600 font-bold transition-colors duration-200 cursor-pointer"
                       >
                         study MBBS abroad.
                    </button>
              {" "}    
              because of its globally recognised 
              universities, affordable tuition fees, and modern medical education system. 
              Located between Europe and Asia, Georgia is bordered by Russia, Azerbaijan, 
              Armenia, and Turkey, making it an important international hub for education 
              and culture. Many students choose to {" "}<strong>study MBBS in Georgia</strong>{" "} because of its 
              safe environment, advanced infrastructure, and English-medium medical programs.
            </p>

            {showMoreAbout ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                One of the biggest advantages of {" "}<strong>MBBS admission in Georgia</strong>{" "} is the 
                availability of {" "}<strong>affordable fees in MBBS abroad</strong>{" "} programs compared to many 
                other countries. The country is home to several top medical universities 
                in Georgia that provide experienced faculty, modern laboratories, and 
                practical clinical exposure. Students studying in 
                {" "}<a
                  href="#universities"
                  className="font-bold text-blue-600 hover:underline cursor-pointer"
                >
                  MBBS universities in Georgia
                </a>{" "} 
                receive both theoretical and hands-on medical training, 
                helping them become skilled healthcare professionals.
                Georgia is also known for having some of the {" "}<strong>top government medical colleges 
                in Georgia</strong>{" "} along with reputed private institutions. The availability of {" "}<strong>top 
                private and government college in Georgia</strong>{" "} options gives students flexibility 
                according to their budget and career goals. Major cities like Tbilisi and 
                Batumi provide a welcoming environment and modern facilities, making 
                Georgia one of the {" "}<strong>best countries for MBBS abroad</strong>{" "} for Indian students.
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
              src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Kasbek_from_Tsminda_Gergeti_%2810600419415%29.jpg"
              loading="lazy"
              alt="Tbilisi - Georgia"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
                  srcSet="https://upload.wikimedia.org/wikipedia/commons/d/d3/Kasbek_from_Tsminda_Gergeti_%2810600419415%29.jpg 1x, https://upload.wikimedia.org/wikipedia/commons/d/d3/Kasbek_from_Tsminda_Gergeti_%2810600419415%29.jpg 2x"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
          </div>
        </div>

        {/* About MBBS in Georgia */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
            About MBBS In Georgia
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            For Indian students, studying MBBS in Georgia has become the perfect
            option. It provides high food quality, well-maintained hospitals,
            qualified faculty, and extensive medical education. Georgia's
            five-year MBBS curriculum complies with international education
            standards and is taught exclusively in English. The number of
            students seeking MBBS overseas has increased in recent years, and
            Georgia is a noteworthy choice for Indian students. High-quality
            instruction in diagnostics, regional pathology, patient care, and
            medical practice is offered by Georgian medical colleges. Georgia's
            medical education has always drawn Indian students. It is a
            well-known location for studying medicine overseas, providing
            excellent research facilities, high-caliber instruction, and a
            variety of experiences. For Indian students, pursuing an MBBS in
            Georgia, which is renowned for its top-notch medical education, is
            very advantageous. For many students, expanding their educational
            credentials with a global degree is a dream. MBBS in Georgia is a
            really good choice for people who want to study in Europe. Georgia
            is a small country with a robust medical education system, situated
            at the meeting point of Europe and Asia. The World Health
            Organization (WHO), the National Medical Commission (NMC), and other
            important medical organizations acknowledge Georgian medical
            universities. These colleges follow international standards for
            medical education and provide first-rate facilities.
          </p>
        </div>

        {/* Quick Information Table */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
              Quick Information – Study MBBS in Georgia
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
                    <td className="p-4">Compulsory for Indians</td>
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

          <div>
            <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
             MBBS in Georgia
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Studying MBBS in Georgia is straightforward with no
              donation/capitation fees. Many universities follow international
              standards with modern facilities and strong clinical training.
              Graduates are well-prepared for FMGE/NEXT and global licensing
              exams.
            </p>
            {showMoreClimate ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Georgia offers a safe, welcoming environment with a pleasant
                climate and multicultural student community.
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

        {/* Advantages */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
            Advantages Of Study MBBS In Georgia 2026-27
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h5 className="text-xl font-semibold">
                  1. Low prices and high-quality education
                </h5>
                <p className="text-gray-700">
                  Georgia provides economical medical training as well as
                  dependable, high-quality education. NMC and WHO recognize a
                  number of government-funded medical schools. Both living
                  expenses and tuition are rather inexpensive.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  2. Instruction in English
                </h5>
                <p className="text-gray-700">
                  English is the primary medium of instruction in Georgian
                  medical colleges, making learning easier for Indian students.
                  Indian mess facilities are available at several campuses,
                  guaranteeing comfortable living and eating.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  3. Outstanding Environment and Infrastructure
                </h5>
                <p className="text-gray-700">
                  Georgia has a great structure and a pleasant overall climate.
                  Practical training and logical parts of education are
                  emphasized in the MBBS course.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h5 className="text-xl font-semibold">
                  4. Accommodations and Safety for Students
                </h5>
                <p className="text-gray-700">
                  Both hostels and apartments provide safe living arrangements
                  for students. Boys' and girls' hostels are separate, and some
                  have Indian superintendents.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  5. Internships and Part-Time Employment
                </h5>
                <p className="text-gray-700">
                  Universities help students obtain internships and part-time
                  work.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  6. Opportunities and International Recognition
                </h5>
                <p className="text-gray-700">
                  WHO and NMC recognize Georgia's MBBS degrees. Students can
                  acquire exposure to the world by taking part in international
                  conferences and classes.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  7. No Exams for Admission Other Than NEET
                </h5>
                <p className="text-gray-700">
                  No other entrance examinations are necessary; students only
                  need to pass NEET.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cost */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
            Cost Of Study MBBS In Georgia
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            An increasing number of Indian students are choosing to study MBBS
            in Georgia due to the state's low MBBS fees and reasonable living
            expenses. Georgia is a demanding destination for MBBS students to
            study. The course is quite inexpensive because the Georgian
            government has subsidized the cost structure. Compared to other
            nations, pursuing an MBBS in Georgia is thought to be simple. The
            cost of the study is extremely reasonable. International students
            can attend Georgian universities with ease and avoid paying
            exorbitant tuition costs. There isn't a donation aside from this.
            Students can afford to finish a six-year MBBS program. Depending on
            the university, location, and other variables, the cost of pursuing
            an MBBS in Georgia can vary. In general, Georgia is thought to offer
            more economical medical education than many Western nations. It's
            crucial to remember that prices can fluctuate, so it's best to
            contact individual universities for the most precise and current
            information.
          </p>
        </div>

        {/* Food & Accommodation */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-16 mb-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
              Food And Accommodation Cost MBBS In Georgia
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p>
                Medical universities in Georgia provide comfortable hostel and
                food facilities for international students.
              </p>
              <h4 className="text-2xl font-bold mt-8 mb-4">
                Hostel Facilities
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Most universities provide hostel accommodation for
                  international students.
                </li>
                <li>Rooms are usually shared by 2–3 students.</li>
                <li>
                  Hostels provide a safe and comfortable living environment.
                </li>
                <li>
                  Students can stay in university hostels during their entire
                  MBBS course duration.
                </li>
              </ul>

              <h4 className="text-2xl font-bold mt-8 mb-4">Room Facilities</h4>
              <p>Hostel rooms generally include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Comfortable beds</li>
                <li>Bedsheets and blankets</li>
                <li>Pillows</li>
                <li>Study tables and chairs</li>
                <li>Wardrobes or cupboards</li>
              </ul>

              <h4 className="text-2xl font-bold mt-8 mb-4">
                Kitchen and Food Facilities
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hostels provide common kitchens for students.</li>
                <li>Students can cook their own meals.</li>
                <li>Indian students can easily prepare Indian food.</li>
                <li>
                  Many universities offer mess or canteen facilities serving
                  Indian food.
                </li>
                <li>
                  Indian restaurants are available near many university
                  campuses.
                </li>
                <li>
                  Students can also enjoy Georgian local cuisine and
                  international food options.
                </li>
              </ul>

              <h4 className="text-2xl font-bold mt-8 mb-4">
                Laundry and Daily Facilities
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Hostels often provide laundry rooms or washing machine
                  facilities.
                </li>
                <li>
                  Students can easily manage daily activities like cooking and
                  washing clothes.
                </li>
                <li>
                  These facilities make living in Georgia convenient and
                  comfortable.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Admission Process */}
        <div className="py-16 bg-white mb-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
              Admission Process For MBBS In Georgia 2026–27
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                The admission process for MBBS in Georgia is simple and
                student-friendly.
              </p>
              <ul className="list-decimal pl-6 space-y-4 text-gray-700">
                <li>
                  Step 1: Research and choose a recognized medical university in
                  Georgia.
                </li>
                <li>
                  Step 2: Check the eligibility criteria for the selected
                  university.
                </li>
                <li>
                  Step 3: Fill out the university online application form.
                </li>
                <li>Step 4: Submit required documents and academic records.</li>
                <li>
                  Step 5: Some universities may require entrance exams or NEET
                  qualification.
                </li>
                <li>
                  Step 6: Receive the admission confirmation or invitation
                  letter.
                </li>
                <li>Step 7: Apply for a student visa.</li>
                <li>
                  Step 8: Travel to Georgia and complete university enrollment.
                </li>
              </ul>
              <p className="mt-6 text-gray-700">
                Popular universities include: David Tvildiani Medical
                University, University of Georgia, Tbilisi State Medical
                University, Batumi Shota Rustaveli State University, European
                University Georgia.
              </p>
            </div>
          </div>
        </div>

        {/* Documents + Eligibility */}
        <div className="py-16 bg-gradient-to-b from-white to-gray-50 mb-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
                  Required Documents for MBBS in Georgia 2026–27
                </h2>
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
                    <li>Completed application form</li>
                    <li>10th class mark sheet and certificate</li>
                    <li>12th class mark sheet and certificate</li>
                    <li>NEET scorecard</li>
                    <li>Valid passport copy</li>
                    <li>Passport-size photographs</li>
                    <li>Medical fitness certificate</li>
                    <li>Academic transcripts</li>
                    <li>Invitation letter from the university</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                  Eligibility Criteria for MBBS in Georgia
                </h2>
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      The student must be at least 17 years old by 31 December
                      of the admission year.
                    </li>
                    <li>
                      The student must have minimum 50% marks in 12th standard.
                    </li>
                    <li>
                      Required subjects include: Physics, Chemistry, Biology
                    </li>
                    <li>
                      NEET qualification is mandatory for Indian students.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Universities */}
        <div className="py-16 bg-white mb-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
              {cmsData?.universitiesHeading || "Top Medical Universities in Georgia"}
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="p-4">University Name</th>
                    <th className="p-4">Country Rank</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4">Tbilisi State Medical University</td>
                    <td className="p-4">1</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4">David Tvildiani Medical University</td>
                    <td className="p-4">2</td>
                  </tr>
                  <tr>
                    <td className="p-4">University of Georgia</td>
                    <td className="p-4">3</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4">
                      Batumi Shota Rustaveli State University
                    </td>
                    <td className="p-4">5</td>
                  </tr>
                  <tr>
                    <td className="p-4">European University Georgia</td>
                    <td className="p-4">7</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Course Duration */}
        <div className="py-16 bg-gray-100 mb-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">
              MBBS Course Duration in Georgia
            </h2>
            <p className="text-lg text-gray-700 text-center mb-4">
              <strong>Total Duration: 6 Years</strong>
            </p>
            <ul className="list-disc pl-6 mx-auto max-w-md space-y-2">
              <li>Academic Study: 5 Years</li>
              <li>Internship / Clinical Training: 1 Year</li>
            </ul>
            <h4 className="text-2xl font-bold text-center mt-10 mb-4">
              Course Structure
            </h4>
            <ul className="list-disc pl-6 mx-auto max-w-2xl space-y-2">
              <li>The first years focus on basic medical sciences.</li>
              <li>
                Students study subjects like anatomy, physiology, pathology,
                microbiology, and pharmacology.
              </li>
              <li>
                Later years include clinical practice and hospital training.
              </li>
              <li>
                The final year focuses on internship and practical patient care
                training.
              </li>
            </ul>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="py-16 bg-white mb-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
              MBBS in Georgia vs MBBS in India – Quick Comparison (2026–2027)
            </h2>
            <div className="overflow-x-auto shadow-md rounded-lg">
              <table className="min-w-full border-collapse border border-gray-300 text-left">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="p-4 border border-gray-300 text-center font-semibold w-1/4">
                      Feature
                    </th>
                    <th className="p-4 border border-gray-300 text-center font-semibold w-3/8">
                      MBBS in Georgia
                    </th>
                    <th className="p-4 border border-gray-300 text-center font-semibold w-3/8">
                      MBBS in India
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 divide-y divide-gray-200">
                  {(cmsData?.comparisonTable || [
                    {
                      feature: "Tuition Fees (per year)",
                      georgia: "₹5 Lakhs – ₹8 Lakhs ($5000 – $8,000 USD)",
                      india: "Govt: ₹10,000 – ₹50,000\nPrivate: ₹8 Lakhs – ₹25 Lakhs+"
                    },
                    {
                      feature: "Course Duration",
                      georgia: "6 years (including clinical internship)",
                      india: "5.5 years (4.5 years academic study + 1-year internship)"
                    },
                    {
                      feature: "Degree Awarded",
                      georgia: "MD (equivalent to MBBS, following European/Bologna system)",
                      india: "MBBS"
                    },
                    {
                      feature: "Class Strength",
                      georgia: "Smaller, more controlled batches with moderate international/Indian student ratios",
                      india: "Larger batch sizes in most government and private medical colleges"
                    },
                    {
                      feature: "Global Recognition",
                      georgia: "Recognized by WHO, NMC, WDOMS, and listed internationally",
                      india: "Recognized by NMC and national authorities (Indian recognition primary)"
                    },
                    {
                      feature: "Licensing in India",
                      georgia: "Must qualify the FMGE / NExT exam after returning to practice in India",
                      india: "Direct eligibility for state medical council registration post-internship/NExT"
                    },
                    {
                      feature: "Medium of Instruction",
                      georgia: "English (dedicated English-medium batches for foreign students)",
                      india: "English (local regional languages may be used in patient interactions)"
                    },
                    {
                      feature: "Hostel & Food",
                      georgia: "University-provided or rented hostels; Indian mess/food options available in major cities",
                      india: "On-campus or local private mess/hostel facilities tailored to regional tastes"
                    },
                    {
                      feature: "Insurance & Visa Costs",
                      georgia: "Mandatory annual health insurance and student residence permit/visa renewals (~₹15,000 – ₹30,000/yr combined)",
                      india: "Local student setup costs apply (negligible visa/residence costs domestically)"
                    },
                    {
                      feature: "Other Living Costs",
                      georgia: "~₹1.5 Lakhs – ₹3 Lakhs per year (approx. ₹15,000 – ₹25,000/month)",
                      india: "~₹1.5 Lakhs – ₹3.5 Lakhs per year depending on the city"
                    }
                  ]).map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="p-4 border border-gray-300 font-medium text-gray-900">
                        {row.feature || row.parameter}
                      </td>
                      <td className="p-4 border border-gray-300 whitespace-pre-line text-sm leading-relaxed">
                        {row.georgia}
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


 <div id="universities" className="mb-20">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
              Top Medical Universities in Georgia
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Tbilisi State Medical University (TSMU)",
                  img: "https://images.shiksha.com/mediadata/images/1702625100phpu2Kbnu.jpeg", // Main building photo
                },
                {
                  name: "David Tvildiani Medical University (DTMU)",
                  img: "https://ik.imagekit.io/syustaging/SYU_PREPROD/Cover-image_h-rxqfBC9.webp", // Campus front view
                },
                {
                  name: "New Vision University",
                  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGRYq6Gnn09CsG-xTUbxP0nNkxML7U5eJjcg&s", // Main building
                },
                {
                  name: "Caucasus International University (CIU)",
                  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-wMQhpsu7yh8XcM6zEtVV0e16o4GXuJWcw&s", // Replace with actual if needed, or use a reliable public link
                },
                {
                  name: "European University",
                  img: "https://www.timeshighereducation.com/cms-academic/sites/default/files/2025-05/Building%20A_0.jpg", // Campus photo
                },
                {
                  name: "Georgian National University SEU",
                  img: "https://gmfadmission.in/wp-content/uploads/2024/10/img2.jpg", // Campus tower/building
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
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x300?text=" + encodeURIComponent(uni.name);
                    }}
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


        {/* ==================== FAQs SECTION ==================== */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
              Most Searched FAQs About MBBS in Georgia
            </h2>

            <div className="space-y-5">
              {((cmsData?.faq && cmsData.faq.length > 0) ? cmsData.faq : faqData).map((item, index) => (
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
                    <h4 className="text-xl md:text-2xl font-semibold text-blue-900 leading-tight">
                      {item.question}
                    </h4>

                    <span className="text-3xl text-blue-600 flex-shrink-0 transition-transform duration-300">
                      {openIndex === index ? <FiMinus /> : <FiPlus />}
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
                    <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 text-lg">
                Have more questions? Feel free to contact our experts for free
                counseling!
              </p>
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
              Plan Your Medical Degree in Georgia
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              Experience European-standard medical education with 100% English medium curriculum, no donation fees, and high FMGE/NExT success rates. Consult with EduHawk's overseas admissions team today.
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
    </>
  );
};

export default Georgia;
