import React from 'react';
import styles from "./Contact.module.css";
import { getImageUrl } from '../../utils';
export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("emailIcon.png")} alt="Email" />
                    <a href="mailto:mmehta29@asu.edu">mmehta29@asu.edu</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("linkedinIcon.png")} alt="Linkedin" />
                    <a href="https://www.linkedin.com/in/manya-mehta-165a9224a/">linkedin.com/manya</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("githubIcon.png")} alt="gitHub" />
                    <a href="https://github.com/mmehta29/">github.com/mmehta29</a>
                </li>
            </ul>
        </footer>
    )
}