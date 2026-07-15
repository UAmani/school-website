import Container from "../../Common/Container/Container";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import aboutPage from "../../../data/aboutPage";

import iconMap from "../../../utils/iconMap";

import styles from "./Achievements.module.css";



export default function Achievements() {
  const { achievements } = aboutPage;

  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          title="Our Achievements"
          subtitle="Our Journey in Numbers"
        />

        <div className={styles.grid}>
          {achievements.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <article key={item.id} className={styles.card}>
                <div className={styles.icon}>
                  <Icon />
                </div>

                <h2>{item.number}</h2>

                <p>{item.title}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}