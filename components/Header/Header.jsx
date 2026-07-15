// components/Header/Header.jsx

import Logo from "./Logo";
import Navigation from "./Navigation";
import styles from "./Header.module.css";
import Button from "../Common/Button/Button";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Logo />
                <Navigation />
                <Button
                    text="Apply Now"
                    href="/admissions"
                />
            </div>
        </header>
    );
}