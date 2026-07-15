import Container from "../../Common/Container/Container";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";

import admissionsPage from "../../../data/admissionsPage";

import styles from "./Eligibility.module.css";

export default function Eligibility() {
  const { eligibility } = admissionsPage;

  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          title={eligibility.title}
          subtitle={eligibility.subtitle}
        />

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Class</th>
                <th>Minimum Age</th>
              </tr>
            </thead>

            <tbody>
              {eligibility.classes.map((item, index) => (
                <tr key={index}>
                  <td>{item.class}</td>
                  <td>{item.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}