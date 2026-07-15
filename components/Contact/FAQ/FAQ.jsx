"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import Container from "@/components/Common/Container/Container";
import SectionTitle from "@/components/Common/SectionTitle/SectionTitle";

import contactPage from "@/data/contactPage";

import styles from "./FAQ.module.css";

export default function FAQ() {
  const { faq } = contactPage;

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          title={faq.title}
          subtitle={faq.subtitle}
        />

        <div className={styles.accordion}>
          {faq.items.map((item, index) => (
            <div
              key={index}
              className={styles.item}
            >
              <button
                className={styles.question}
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>

                {activeIndex === index ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </button>

              <div
                className={`${styles.answer} ${
                  activeIndex === index
                    ? styles.open
                    : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}