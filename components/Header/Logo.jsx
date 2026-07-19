// components/Header/Logo.jsx

import Image from "next/image";
import Link from "next/link";
import school from "../../data/school";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <Link href="/"  className={styles.logo}>
      <Image
        src={school.logo}
        alt={school.name} 
  width={60}
  height={60}
  priority
      />

      <div>
        <h2>{school.name}</h2>
        <p>{school.slogan}</p>
      </div>
    </Link>
  );
}