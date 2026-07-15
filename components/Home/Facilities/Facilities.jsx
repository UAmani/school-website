import Container from "../../Common/Container/Container";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import ImageCard from "../../Common/ImageCard/ImageCard";

import facilities from "../../../data/facilities";

import styles from "./Facilities.module.css";

export default function Facilities() {
  return (
    <section className={styles.facilities}>
      <Container>
        <SectionTitle
          subtitle={facilities.subtitle}
          title={facilities.title}
          description={facilities.description}
          align="center"
        />

        <div className={styles.grid}>
          {facilities.items.map((item) => (
            <ImageCard
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              href={item.href}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}