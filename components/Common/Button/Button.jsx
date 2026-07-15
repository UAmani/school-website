// components/Common/Button/Button.jsx

import Link from "next/link";
import styles from "./Button.module.css";

export default function Button({
  text,
  href = "#",
  variant = "primary",
}) {
  return (
    <Link
      href={href}
      className={`${styles.button} ${styles[variant]}`}
    >
      {text}
    </Link>
  );
}