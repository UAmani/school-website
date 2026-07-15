import Container from "../../Common/Container/Container";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";

import admissionsPage from "../../../data/admissionsPage";

import styles from "./FeeStructure.module.css";

export default function FeeStructure() {
  const { feeStructure } = admissionsPage;

  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          title={feeStructure.title}
          subtitle={feeStructure.subtitle}
        />

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Fee Category</th>
                <th>Details</th>
              </tr>
            </thead>

            <tbody>
              {feeStructure.fees.map((fee, index) => (
                <tr key={index}>
                  <td>{fee.category}</td>
                  <td>{fee.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.note}>
          <strong>Note:</strong> {feeStructure.note}
        </div>
      </Container>
    </section>
  );
}