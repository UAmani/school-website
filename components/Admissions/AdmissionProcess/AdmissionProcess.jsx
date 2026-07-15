import Container from "../../Common/Container/Container";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";

import admissionsPage from "../../../data/admissionsPage";

import styles from "./AdmissionProcess.module.css";

export default function AdmissionProcess() {
  const { admissionProcess } = admissionsPage;

  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          title={admissionProcess.title}
          subtitle={admissionProcess.subtitle}
        />

        <div className={styles.grid}>
          {admissionProcess.steps.map((step) => (
            <div key={step.id} className={styles.card}>
              <div className={styles.number}>
                {step.id}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}