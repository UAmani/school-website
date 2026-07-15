import Container from "../../Common/Container/Container";
import Button from "../../Common/Button/Button";

import cta from "../../../data/cta";

import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <Container>
        <div className={styles.content}>
          <h2>{cta.title}</h2>

          <p>{cta.description}</p>

          <div className={styles.actions}>
            <Button
              text={cta.primaryButton.text}
              href={cta.primaryButton.href}
            />

            <Button
              text={cta.secondaryButton.text}
              href={cta.secondaryButton.href}
              variant="secondary"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}