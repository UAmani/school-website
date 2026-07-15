import Container from "../../Common/Container/Container";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import FeatureCard from "../../Common/FeatureCard/FeatureCard";

import whyChooseUs from "../../../data/whyChooseUs";

import styles from "./WhyChooseUs.module.css";

export default function WhyChooseUs() {
  return (
    <section className={styles.whyChooseUs}>
      <Container>
        <SectionTitle
          subtitle={whyChooseUs.subtitle}
          title={whyChooseUs.title}
          description={whyChooseUs.description}
          align="center"
        />

        <div className={styles.grid}>
          {whyChooseUs.features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}