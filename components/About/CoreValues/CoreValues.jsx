import Container from "../../Common/Container/Container";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import aboutPage from "../../../data/aboutPage";
import iconMap from "../../../utils/iconMap";

import styles from "./CoreValues.module.css";



export default function CoreValues() {
  const { coreValues } = aboutPage;

  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          title="Our Core Values"
          subtitle="Values That Shape Every Student"
        />

        <div className={styles.grid}>
          {coreValues.map((item) => {
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