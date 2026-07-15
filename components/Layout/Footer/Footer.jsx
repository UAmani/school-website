import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import Container from "../../Common/Container/Container";
import Logo from "../../Header/Logo";

import footer from "../../../data/footer";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          {/* About */}
          <div>
            <Logo />

            <p className={styles.about}>
              {footer.about}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3>Quick Links</h3>

            <ul>
              {footer.quickLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.href}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3>Contact</h3>

            <ul className={styles.contact}>
              <li>
                <FaPhoneAlt />
                {footer.contact.phone}
              </li>

              <li>
                <FaEnvelope />
                {footer.contact.email}
              </li>

              <li>
                <FaMapMarkerAlt />
                {footer.contact.address}
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          © 2026 All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}