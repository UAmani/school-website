import Image from "next/image";
import Link from "next/link";

import Container from "../../Common/Container/Container";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";

import gallery from "../../../data/gallery";

import styles from "./Gallery.module.css";

export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <Container>
        <SectionTitle
          subtitle={gallery.subtitle}
          title={gallery.title}
          description={gallery.description}
          align="center"
        />

        <div className={styles.grid}>
          {gallery.images.map((image) => (
            <div key={image.id} className={styles.card}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={styles.image}
              />

              <div className={styles.overlay}>
                <span>{image.alt}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.buttonWrapper}>
          <Link href="/gallery" className={styles.button}>
            View Full Gallery →
          </Link>
        </div>
      </Container>
    </section>
  );
}