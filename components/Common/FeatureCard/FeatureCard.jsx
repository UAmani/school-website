import styles from "./FeatureCard.module.css";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <Icon />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}