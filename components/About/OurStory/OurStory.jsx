import Image from "next/image";
import Container from "../../Common/Container/Container";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import aboutPage from "../../../data/aboutPage";
import styles from "./OurStory.module.css";

export default function OurStory() {
  const { story } = aboutPage;

  return (
    <section className={styles.story}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <Image
              src={story.image}
              alt={story.title}
              fill
              className={styles.storyImage}
            />
          </div>

          <div className={styles.content}>
            <SectionTitle
              title={story.title}
              subtitle="Know More About Our School"
              align="left"
            />

            <p>{story.subtitle}</p>

            <p>{story.description}</p>

            <ul className={styles.list}>
              {story.highlights.map((item, index) => (
                <li key={index}>✓ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}