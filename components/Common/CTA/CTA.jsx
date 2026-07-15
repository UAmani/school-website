import Link from "next/link";

import Container from "../Container/Container";

import styles from "./CTA.module.css";

export default function CTA({
  title,
  description,
  primaryButton,
  secondaryButton,
}) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h2>{title}</h2>

            <p>{description}</p>
          </div>

          <div className={styles.buttons}>
            {primaryButton && (
              <Link
                href={primaryButton.link}
                className={`${styles.button} ${styles.primary}`}
              >
                {primaryButton.text}
              </Link>
            )}

            {secondaryButton && (
              <Link
                href={secondaryButton.link}
                className={`${styles.button} ${styles.secondary}`}
              >
                {secondaryButton.text}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}