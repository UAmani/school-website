const admissionsPage = {
  admissionProcess: {
    title: "Admission Process",
    subtitle:
      "Our admission process is simple, transparent, and designed to make enrollment easy for parents.",

    steps: [
      {
        id: 1,
        title: "Enquiry",
        description:
          "Contact the school or submit an online enquiry to know about admissions.",
      },
      {
        id: 2,
        title: "Application Form",
        description:
          "Fill in the admission application form with the required details.",
      },
      {
        id: 3,
        title: "Document Verification",
        description:
          "Submit the required documents for verification by the admission office.",
      },
      {
        id: 4,
        title: "Interaction / Assessment",
        description:
          "The student and parents may attend an interaction or assessment if applicable.",
      },
      {
        id: 5,
        title: "Fee Payment",
        description:
          "Complete the admission by paying the applicable school fees.",
      },
      {
        id: 6,
        title: "Admission Confirmation",
        description:
          "Receive the admission confirmation and welcome to our school family.",
      },
    ],
  },
  eligibility: {
  title: "Eligibility & Age Criteria",

  subtitle:
    "Students seeking admission must meet the minimum age requirement for the respective class.",

  classes: [
    {
      class: "Nursery",
      age: "3+ Years",
    },
    {
      class: "LKG",
      age: "4+ Years",
    },
    {
      class: "UKG",
      age: "5+ Years",
    },
    {
      class: "Grade 1",
      age: "6+ Years",
    },
    {
      class: "Grade 2 - Grade 10",
      age: "As per previous academic records",
    },
  ],
},
documents: {
  title: "Documents Required",

  subtitle:
    "Please keep the following documents ready during the admission process.",

  items: [
    {
      id: 1,
      title: "Birth Certificate",
      description:
        "A copy of the student's birth certificate issued by the competent authority.",
      icon: "FaFileAlt",
    },
    {
      id: 2,
      title: "Passport Size Photos",
      description:
        "Recent passport-size photographs of the student and parents.",
      icon: "FaCamera",
    },
    {
      id: 3,
      title: "Aadhaar Card",
      description:
        "Photocopy of the student's Aadhaar Card (if available).",
      icon: "FaIdCard",
    },
    {
      id: 4,
      title: "Previous School Records",
      description:
        "Transfer Certificate and previous academic report cards.",
      icon: "FaSchool",
    },
    {
      id: 5,
      title: "Address Proof",
      description:
        "Any valid address proof such as Aadhaar, Electricity Bill, etc.",
      icon: "FaHome",
    },
    {
      id: 6,
      title: "Medical Record",
      description:
        "Vaccination or medical records if required by the school.",
      icon: "FaNotesMedical",
    },
  ],
},
feeStructure: {
  title: "Fee Structure",

  subtitle:
    "Our fee structure is transparent and designed to provide quality education at an affordable cost.",

  fees: [
    {
      category: "Admission Fee",
      details: "One-Time (At the Time of Admission)",
    },
    {
      category: "Tuition Fee",
      details: "Monthly / Quarterly",
    },
    {
      category: "Transport Fee",
      details: "Applicable for School Transport",
    },
    {
      category: "Examination Fee",
      details: "As per School Policy",
    },
    {
      category: "Activity Fee",
      details: "Annual",
    },
  ],

  note:
    "For the latest fee details, scholarships, and payment options, please contact the school admission office.",
},
faq: {
  title: "Frequently Asked Questions",

  subtitle:
    "Find answers to the most common questions about our admission process.",

  questions: [
    {
      question: "How can I apply for admission?",
      answer:
        "You can apply by filling out the admission enquiry form or contacting the school office directly.",
    },
    {
      question: "What documents are required?",
      answer:
        "Birth Certificate, Aadhaar Card, Passport Size Photos, Previous School Records, and Address Proof.",
    },
    {
      question: "Is school transport available?",
      answer:
        "Yes, transportation is available on selected routes. Please contact the school office for route details.",
    },
    {
      question: "Can I visit the school before admission?",
      answer:
        "Yes. Parents are welcome to visit the campus during working hours after scheduling an appointment.",
    },
    {
      question: "When does the admission process begin?",
      answer:
        "Admissions generally open before the beginning of every academic year. Contact the school for the latest schedule.",
    },
  ],
},
admissionForm: {
  title: "Admission Enquiry",

  subtitle:
    "Fill out the form below and we'll help you with the admission process.",

  classes: [
    "Nursery",
    "LKG",
    "UKG",
    "Grade 1",
    "Grade 2",
    "Grade 3",
    "Grade 4",
    "Grade 5",
    "Grade 6",
    "Grade 7",
    "Grade 8",
    "Grade 9",
    "Grade 10",
  ],
},
};

export default admissionsPage;