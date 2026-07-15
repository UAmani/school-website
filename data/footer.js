import school from "./school";

const footer = {
  about:
    "Providing quality education with modern teaching methods and holistic student development.",

  quickLinks: [
    {
      id: 1,
      title: "Home",
      href: "/",
    },
    {
      id: 2,
      title: "About",
      href: "/about",
    },
    {
      id: 3,
      title: "Admissions",
      href: "/admissions",
    },
    {
      id: 4,
      title: "Gallery",
      href: "/gallery",
    },
    {
      id: 5,
      title: "Contact",
      href: "/contact",
    },
  ],

  contact: {
    phone: school.phone,
    email: school.email,
    address: school.address,
  },
};

export default footer;