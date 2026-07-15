import iconMap from "../../../utils/iconMap";

import Container from "../../Common/Container/Container";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import Button from "../../Common/Button/Button";

import academicsPage from "../../../data/academicsPage";

import styles from "./Programs.module.css";



export default function Programs() {
  const { programs } = academicsPage;

  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          title="Programs Offered"
          subtitle="Providing Quality Education at Every Stage"
        />

        <div className={styles.grid}>
          {programs.map((program) => {
            const Icon = iconMap[program.icon];

            return (
              <article
                key={program.id}
                className={styles.card}
              >
                <div className={styles.icon}>
                  <Icon />
                </div>

                <h3>{program.title}</h3>

                <p>{program.description}</p>

                <Button
                  text="Learn More"
                  href="/contact"
                  variant="secondary"
                />
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}