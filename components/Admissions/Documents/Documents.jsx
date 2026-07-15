import {
  FaFileAlt,
  FaCamera,
  FaIdCard,
  FaSchool,
  FaHome,
  FaNotesMedical,
} from "react-icons/fa";

import Container from "../../Common/Container/Container";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";

import admissionsPage from "../../../data/admissionsPage";

import styles from "./Documents.module.css";

const iconMap = {
  FaFileAlt,
  FaCamera,
  FaIdCard,
  FaSchool,
  FaHome,
  FaNotesMedical,
};

export default function Documents() {
  const { documents } = admissionsPage;

  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          title={documents.title}
          subtitle={documents.subtitle}
        />

        <div className={styles.grid}>
          {documents.items.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <article key={item.id} className={styles.card}>
                <div className={styles.icon}>
                  <Icon />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}