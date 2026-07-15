"use client";

import { useState } from "react";
import Image from "next/image";

import Container from "../../Common/Container/Container";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";

import galleryPage from "../../../data/galleryPage";
import Lightbox from "./Lightbox";

import styles from "./PhotoGallery.module.css";

export default function PhotoGallery() {
  const { intro, photos } = galleryPage;

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          title={intro.title}
          subtitle={intro.subtitle}
        />

        <div className={styles.grid}>
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={styles.card}
              onClick={() => setSelectedImage(index)}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={photo.image}
                  alt={photo.title}
                  width={500}
                  height={350}
                  className={styles.image}
                />
              </div>

              <div className={styles.overlay}>
                <h3>{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <Lightbox
            images={photos}
            currentIndex={selectedImage}
            onClose={() => setSelectedImage(null)}
            setCurrentIndex={setSelectedImage}
          />
        )}
      </Container>
    </section>
  );
}