import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

import Container from "../../Common/Container/Container";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";

import academicsPage from "../../../data/academicsPage";

import styles from "./TeachingMethod.module.css";

export default function TeachingMethod() {
  const { teachingMethod } = academicsPage;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <Image
              src={teachingMethod.image}
              alt={teachingMethod.title}
              fill
              className={styles.methodImage}
            />
          </div>

          <div className={styles.content}>
            <SectionTitle
              title={teachingMethod.title}
              subtitle="Modern Learning Approach"
              align="left"
            />

            <p>{teachingMethod.subtitle}</p>

            <ul className={styles.list}>
              {teachingMethod.methods.map((item, index) => (
                <li key={index}>
                  <FaCheckCircle className={styles.icon} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}