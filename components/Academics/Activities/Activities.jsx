import {
  FaPalette,
  FaMusic,
  FaFutbol,
  FaLaptopCode,
  FaLeaf,
  FaTheaterMasks,
} from "react-icons/fa";

import Container from "../../Common/Container/Container";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";

import academicsPage from "../../../data/academicsPage";

import styles from "./Activities.module.css";

const iconMap = {
  FaPalette,
  FaMusic,
  FaFutbol,
  FaLaptopCode,
  FaLeaf,
  FaTheaterMasks,
};

export default function Activities() {
  const { activities } = academicsPage;

  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          title="Co-Curricular Activities"
          subtitle="Helping Students Discover Their Talents Beyond the Classroom"
        />

        <div className={styles.grid}>
          {activities.map((activity) => {
            const Icon = iconMap[activity.icon];

            return (
              <article
                key={activity.id}
                className={styles.card}
              >
                <div className={styles.icon}>
                  <Icon />
                </div>

                <h3>{activity.title}</h3>

                <p>{activity.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}