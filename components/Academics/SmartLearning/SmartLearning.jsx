import Container from "../../Common/Container/Container";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";

import academicsPage from "../../../data/academicsPage";

import iconMap from "../../../utils/iconMap";

import styles from "./SmartLearning.module.css";



export default function SmartLearning() {
  const { smartLearning } = academicsPage;

  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          title="Smart Classrooms & Labs"
          subtitle="Modern Infrastructure for Better Learning"
        />

        <div className={styles.grid}>
          {smartLearning.map((item) => {
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