"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiBars3, HiXMark } from "react-icons/hi2";
import styles from "./Navigation.module.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={styles.desktopNav}>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${styles.navLink} ${
                  pathname === item.href ? styles.active : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/admissions" className={styles.applyBtn}>
          Apply Now
        </Link>
      </nav>

      {/* Mobile Toggle */}
      <button
        className={styles.menuButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Navigation"
        aria-expanded={isOpen}
      >
        {isOpen ? <HiXMark /> : <HiBars3 />}
      </button>

      {/* Mobile Menu */}
      <div
  className={`${styles.mobileMenu} ${
    isOpen ? styles.mobileMenuOpen : ""
  }`}
>
  <button
    className={styles.closeButton}
    onClick={closeMenu}
    aria-label="Close menu"
  >
    <HiXMark />
  </button>

  <ul className={styles.mobileNavList}>
    {navItems.map((item) => (
      <li key={item.href}>
        <Link
          href={item.href}
          onClick={closeMenu}
          className={`${styles.mobileLink} ${
            pathname === item.href ? styles.active : ""
          }`}
        >
          {item.label}
        </Link>
      </li>
    ))}
  </ul>

  <Link
    href="/admissions"
    className={styles.mobileApplyBtn}
    onClick={closeMenu}
  >
    Apply Now
  </Link>
</div>
    </>
  );
}