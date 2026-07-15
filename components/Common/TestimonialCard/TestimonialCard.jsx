import { FaStar } from "react-icons/fa";
import styles from "./TestimonialCard.module.css";

export default function TestimonialCard({
  name,
  role,
  review,
  rating,
}) {
  return (
    <article className={styles.card}>
      <div className={styles.stars}>
        {[...Array(rating)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>

      <p className={styles.review}>
        "{review}"
      </p>

      <div className={styles.author}>
  <div className={styles.avatar}>
    {name.charAt(0)}
  </div>

  <div>
    <h4>{name}</h4>
    <span>{role}</span>
  </div>
</div>
    </article>
  );
}