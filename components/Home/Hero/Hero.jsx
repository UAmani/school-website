import Image from "next/image";
import styles from "./Hero.module.css";
import home from "../../../data/home";
import Button from "../../Common/Button/Button";
import Container from "../../Common/Container/Container";

export default function Hero() {
  const { hero } = home;

  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <span className={styles.tag}>
              Admissions Open 2026–27
            </span>

            <h1> Welcome to <br />
            {hero.title}</h1>

            <p>{hero.subtitle}</p>

            <div className={styles.actions}>
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
              alt={hero.title}
              width={650}
              height={600}
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}