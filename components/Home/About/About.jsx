import Image from "next/image";
import Container from "../../Common/Container/Container";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import Button from "../../Common/Button/Button";
import about from "../../../data/about";
import styles from "./About.module.css";

export default function About() {
  return (
    <section
      className={styles.about}
      aria-labelledby="about-heading"
    >
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <Image
              src={about.image}
              alt={`${about.title} image`}
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className={styles.aboutImage}
            />
          </div>

          <div className={styles.content}>
            <SectionTitle
              id="about-heading"
              subtitle={about.subtitle}
              title={about.title}
              description={about.description}
            />

            <ul className={styles.list}>
              {about.features.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>

            <Button
              text={about.button.text}
              href={about.button.href}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}