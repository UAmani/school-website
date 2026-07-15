"use client";

import { useEffect } from "react";
import Image from "next/image";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import styles from "./Lightbox.module.css";

export default function Lightbox({
  images,
  currentIndex,
  setCurrentIndex,
  onClose,
}) {
  const currentImage = images[currentIndex];

  const previousImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

 useEffect(() => {
  const handleKeyDown = (event) => {
    if (event.key === "Escape") onClose();
    if (event.key === "ArrowLeft") previousImage();
    if (event.key === "ArrowRight") nextImage();
  };

  document.addEventListener("keydown", handleKeyDown);
  document.body.style.overflow = "hidden";

  return () => {
    document.removeEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "auto";
  };
}, [currentIndex, onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={`${styles.iconButton} ${styles.close}`}
          onClick={onClose}
        >
          <FaTimes />
        </button>

        <button
          className={`${styles.iconButton} ${styles.left}`}
          onClick={previousImage}
        >
          <FaChevronLeft />
        </button>

        <div className={styles.imageContainer}>
          <Image
            src={currentImage.image}
            alt={currentImage.title}
            width={1200}
            height={800}
            className={styles.image}
            priority
          />

          <h3>{currentImage.title}</h3>
        </div>

        <button
          className={`${styles.iconButton} ${styles.right}`}
          onClick={nextImage}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}