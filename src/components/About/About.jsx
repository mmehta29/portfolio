import React from 'react';
import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>ABOUT</h2>
            <div className={styles.content}>
                <img src={getImageUrl("cs3.png")} alt="about image" className={styles.manyaImg} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("uiIcon.png")} alt="UI icon" className={styles.LogoImg} />
                        <div className={styles.aboutItemText}>
                            <h3>App dev</h3>
                            <p>With a passion for creating seamless and intuitive mobile applications,
                                I specialize in developing apps that offer exceptional user experiences.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("cursorIcon.png")} alt="cursor icon" className={styles.LogoImg} />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend</h3>
                            <p>As a frontend developer, I focus on building responsive and visually appealing
                                web interfaces by utilizing modern frameworks and libraries such as React. </p>
                        </div>
                    </li>
                    {/* Backend Development section 
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("serverIcon.png")} alt="server icon" className={styles.LogoImg} />
                        <div className={styles.aboutItemText}>
                            <h3>Backend</h3>
                            <p>I am a Backend developer</p>
                        </div>
                    </li>
                    */}

                </ul>
            </div>
        </section>
    )
}