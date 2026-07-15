"use client";

import { useState } from "react";

import Container from "../../Common/Container/Container";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";

import styles from "./ContactForm.module.css";
import siteConfig from "@/utils/siteConfig";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  const message = `*New School Enquiry*

*Name:* ${formData.name}

*Phone:* ${formData.phone}

*Email:* ${formData.email}

*Subject:* ${formData.subject || "N/A"}

*Message:*
${formData.message}`;

  const whatsappUrl = `https://wa.me/${
    siteConfig.whatsappNumber
  }?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");

  setFormData({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
};

  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          title="Send Us a Message"
          subtitle="Have a question or need more information? Fill out the form below and we'll get back to you."
        />

        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <div className={styles.row}>
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.row}>
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            placeholder="Write your message..."
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className={styles.button}
          >
            Send Message
          </button>
        </form>
      </Container>
    </section>
  );
}