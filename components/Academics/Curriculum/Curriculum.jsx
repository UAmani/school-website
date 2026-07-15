import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

import Container from "../../Common/Container/Container";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";

import academicsPage from "../../../data/academicsPage";

import styles from "./Curriculum.module.css";

export default function Curriculum() {
  const { curriculum } = academicsPage;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <Image
              src={curriculum.image}
              alt={curriculum.title}
              fill
              className={styles.curriculumImage}
            />
          </div>

          <div className={styles.content}>
            <SectionTitle
              title={curriculum.title}
              subtitle="Quality Education for Every Student"
              align="left"
            />

            <p>{curriculum.subtitle}</p>

            <ul className={styles.list}>
              {curriculum.points.map((point, index) => (
                <li key={index}>
                  <FaCheckCircle className={styles.icon} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}