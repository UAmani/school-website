import Container from "../../Common/Container/Container";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import aboutPage from "../../../data/aboutPage";
import styles from "./VisionMission.module.css";
import { FaBullseye, FaRocket } from "react-icons/fa";

export default function VisionMission() {
    const { visionMission } = aboutPage;

    return (
        <section className={styles.section}>
            <Container>
                <SectionTitle
                    title="Vision & Mission"
                    subtitle="Guiding Every Student Towards Excellence"
                />

                <div className={styles.grid}>
                    <article className={styles.card}>
                        <div className={styles.icon}> <FaBullseye /></div>

                        <h3>{visionMission.vision.title}</h3>

                        <p>{visionMission.vision.description}</p>
                    </article>

                    <article className={styles.card}>
                        <div className={styles.icon}><FaRocket /></div>

                        <h3>{visionMission.mission.title}</h3>

                        <p>{visionMission.mission.description}</p>
                    </article>
                </div>
            </Container>
        </section>
    );
}