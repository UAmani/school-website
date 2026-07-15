import Container from "../../Common/Container/Container";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import ImageCard from "../../Common/ImageCard/ImageCard";

import academics from "../../../data/academics";

import styles from "./Academics.module.css";

export default function Academics() {
  return (
    <section className={styles.academics}>
      <Container>
        <SectionTitle
          subtitle={academics.subtitle}
          title={academics.title}
          description={academics.description}
          align="center"
        />

        <div className={styles.grid}>
          {academics.programs.map((program) => (
            <ImageCard
              key={program.id}
              title={program.title}
              description={program.description}
              image={program.image}
              href={program.href}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}