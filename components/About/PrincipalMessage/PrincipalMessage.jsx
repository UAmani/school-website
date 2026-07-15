import Image from "next/image";
import Container from "../../Common/Container/Container";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import aboutPage from "../../../data/aboutPage";
import styles from "./PrincipalMessage.module.css";

export default function PrincipalMessage() {
  const { principalMessage } = aboutPage;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <Image
              src={principalMessage.image}
              alt={principalMessage.name}
              fill
              className={styles.photo}
            />
          </div>

          <div className={styles.content}>
            <SectionTitle
              title={principalMessage.title}
              subtitle="A Message from Our Principal"
              align="left"
            />

            <p className={styles.message}>
              "{principalMessage.message}"
            </p>

            <h3>{principalMessage.name}</h3>

            <span>{principalMessage.designation}</span>

            {principalMessage.signature && (
              <Image
                src={principalMessage.signature}
                alt="Signature"
                width={150}
                height={60}
                className={styles.signature}
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}