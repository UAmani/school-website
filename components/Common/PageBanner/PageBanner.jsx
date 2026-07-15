import Link from "next/link";
import Container from "../Container/Container";
import styles from "./PageBanner.module.css";

export default function PageBanner({ title, breadcrumb }) {
  return (
    <section className={styles.banner}>
      <div className={styles.overlay}>
        <Container>
          <div className={styles.content}>
            <h1>{title}</h1>

            <nav className={styles.breadcrumb}>
              {breadcrumb.map((item, index) => (
                <span key={index}>
                  {item.href ? (
                    <Link href={item.href}>{item.label}</Link>
                  ) : (
                    item.label
                  )}

                  {index < breadcrumb.length - 1 && (
                    <span className={styles.separator}> / </span>
                  )}
                </span>
              ))}
            </nav>
          </div>
        </Container>
      </div>
    </section>
  );
}