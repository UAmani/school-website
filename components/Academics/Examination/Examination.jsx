import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

import Container from "../../Common/Container/Container";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";

import academicsPage from "../../../data/academicsPage";

import styles from "./Examination.module.css";


export default function Examination() {

  const { examination } = academicsPage;

  return (
    <section className={styles.section}>
      <Container>

        <div className={styles.wrapper}>

          <div className={styles.image}>
            <Image
              src={examination.image}
              alt={examination.title}
              fill
              className={styles.examImage}
            />
          </div>


          <div className={styles.content}>

            <SectionTitle
              title={examination.title}
              subtitle="Measuring Progress Through Continuous Learning"
              align="left"
            />


            <p>
              {examination.subtitle}
            </p>


            <ul className={styles.list}>

              {examination.points.map((item,index)=>(
                <li key={index}>
                  <FaCheckCircle className={styles.icon}/>
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