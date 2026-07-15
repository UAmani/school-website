import Image from "next/image";
import Link from "next/link";
import styles from "./ImageCard.module.css";

export default function ImageCard({
  title,
  description,
  image,
  href,
}) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          fill
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h3>{title}</h3>

        <p>{description}</p>

        <Link href={href} className={styles.link}>
          Learn More →
        </Link>
      </div>
    </article>
  );
}