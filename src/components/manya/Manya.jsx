import React from 'react';
import styles from "./Manya.module.css";
import { getImageUrl } from '../../utils';

export const Manya = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I am Manya!</h1>
                <p className={styles.description}>I am a 4th year Computer Science Student at Arizona State University.</p>
                <a href='https://drive.google.com/file/d/1l28fexFqMzAXPx4or_iEv64QMvOM6W-w/view?usp=sharing' className={styles.contactBtn}>
                    <img src={getImageUrl("paperclip3.png")} alt="paperclip4" className={styles.paperclipImg} />
                    <span className={styles.resumeText}>Resume</span>

                </a>
            </div>
            <img src={getImageUrl("manya7.png")} alt="hero image" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
};
