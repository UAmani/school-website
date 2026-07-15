import styles from "./SectionTitle.module.css";

export default function SectionTitle({
  subtitle,
  title,
  description,
  align = "left",
}) {
  return (
    <div className={`${styles.sectionTitle} ${styles[align]}`}>
      {subtitle && <span>{subtitle}</span>}

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
}