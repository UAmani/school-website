import Container from "../../Common/Container/Container";
import statistics from "../../../data/statistics";
import styles from "./Statistics.module.css";

export default function Statistics() {
  return (
    <section className={styles.statistics}>
      <Container>
        <div className={styles.grid}>
          {statistics.items.map((item) => (
            <div key={item.id} className={styles.card}>
              <h2>{item.number}</h2>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}