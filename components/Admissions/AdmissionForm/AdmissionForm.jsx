"use client";

import { useState } from "react";

import Container from "../../Common/Container/Container";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";

import admissionsPage from "../../../data/admissionsPage";

import styles from "./AdmissionForm.module.css";

export default function AdmissionForm() {
  const { admissionForm } = admissionsPage;

  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    mobile: "",
    email: "",
    className: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  if (
    !formData.studentName ||
    !formData.parentName ||
    !formData.mobile ||
    !formData.className
  ) {
    alert("Please fill all required fields.");
    return;
  }

  const phoneNumber = "919885473437"; // Replace with school's WhatsApp number

  const message = `
*Admission Enquiry*

👤 Student Name: ${formData.studentName}
👨 Parent Name: ${formData.parentName}
📱 Mobile: ${formData.mobile}
📧 Email: ${formData.email}
🏫 Class: ${formData.className}

📝 Message:
${formData.message}
`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappURL, "_blank");
    // Clear the form
  setFormData({
  studentName: "",
  parentName: "",
  mobile: "",
  email: "",
  className: "",
  message: "",
});
};

  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          title={admissionForm.title}
          subtitle={admissionForm.subtitle}
        />

        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="studentName"
            placeholder="Student Name"
            value={formData.studentName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="parentName"
            placeholder="Parent Name"
            value={formData.parentName}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <select
            name="className"
            value={formData.className}
            onChange={handleChange}
            required
          >
            <option value="">Select Class</option>

            {admissionForm.classes.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>

          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />

          <button
            type="submit"
            className={styles.button}
          >
            Submit Enquiry
          </button>
        </form>
      </Container>
    </section>
  );
}
