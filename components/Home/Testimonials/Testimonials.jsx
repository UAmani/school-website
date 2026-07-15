import Container from "../../Common/Container/Container";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import TestimonialCard from "../../Common/TestimonialCard/TestimonialCard";

import testimonials from "../../../data/testimonials";

import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <Container>
        <SectionTitle
          subtitle={testimonials.subtitle}
          title={testimonials.title}
          description={testimonials.description}
          align="center"
        />

        <div className={styles.grid}>
          {testimonials.items.map((item) => (
            <TestimonialCard
              key={item.id}
              name={item.name}
              role={item.role}
              review={item.review}
              rating={item.rating}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}