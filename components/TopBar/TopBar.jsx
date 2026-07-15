// components/TopBar/TopBar.js

import styles from "./TopBar.module.css";
import school from "../../data/school";

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.container}>
        <p>📞 {school.phone}</p>

        <p>✉ {school.email}</p>
      </div>
    </div>
  );
}