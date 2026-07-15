import Container from "../../Common/Container/Container";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";

import contactPage from "../../../data/contactPage";

import styles from "./GoogleMap.module.css";
import siteConfig from "@/utils/siteConfig";
export default function GoogleMap() {
 
const { map } = contactPage;
console.log("map details",siteConfig.googleMapEmbed)
  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          title={map.title}
          subtitle={map.subtitle}
        />

        <div className={styles.mapWrapper}>
          <iframe
            src={siteConfig.googleMapEmbed}
            title="School Location"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </section>
  );
}