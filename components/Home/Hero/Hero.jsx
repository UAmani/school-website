import Image from "next/image";
import styles from "./Hero.module.css";
import home from "../../../data/home";
import Button from "../../Common/Button/Button";
import Container from "../../Common/Container/Container";

export default function Hero() {
  const { hero } = home;

  return (
    <section
      className={styles.hero}
      aria-labelledby="hero-heading"
    >
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <span className={styles.tag}>
              {hero.tag}
            </span>

            <h1
              id="hero-heading"
              className={styles.title}
            >
              <span>Welcome to</span>
              <span>{hero.title}</span>
            </h1>

            <p>{hero.subtitle}</p>

            <div
              className={styles.actions}
              role="group"
              aria-label="Hero actions"
            >
              <Button
                text={hero.primaryButton.text}
                href={hero.primaryButton.href}
              />

              <Button
                text={hero.secondaryButton.text}
                href={hero.secondaryButton.href}
                variant="secondary"
              />
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src={hero.image}
              alt={`${hero.title} students`}
              width={650}
              height={600}
              priority
              quality={90}
              sizes="(max-width:768px) 100vw, 50vw"
              className={styles.heroImage}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}