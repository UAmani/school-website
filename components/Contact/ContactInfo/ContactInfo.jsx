import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import Container from "../../Common/Container/Container";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";

import contactPage from "../../../data/contactPage";

import styles from "./ContactInfo.module.css";

export default function ContactInfo() {
  const { contactInfo } = contactPage;

  const cards = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: contactInfo.phone,
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: contactInfo.email,
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      value: contactInfo.address,
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      value: contactInfo.workingHours,
    },
  ];

  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          title={contactInfo.title}
          subtitle={contactInfo.subtitle}
        />

        <div className={styles.grid}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{card.icon}</div>

              <h3>{card.title}</h3>

              <p>{card.value}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}