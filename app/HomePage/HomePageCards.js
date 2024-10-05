"use client";

import React, { useEffect } from 'react';
import styles from "../css/HomePageCards.module.css"; 
import TitleStyles from "../css/HomeTitle.module.css";

export default function HomePageCards() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.fadeIn);
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.4 } 
    );

    const cards = document.querySelectorAll(`.${styles.Card}`);
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(`.${styles.Card}`);
  
    const handleAnimationEnd = (event) => {
      event.target.classList.add(styles.show);
    };

    cards.forEach((card) => {
      card.addEventListener('animationend', handleAnimationEnd);
    });
  
    // Clean up
    return () => {
      cards.forEach((card) => {
        card.removeEventListener('animationend', handleAnimationEnd);
      });
    };
  }, []);

  return (
    <div className={styles.Container}>
        <div className={TitleStyles.Title}>Our Products</div>
        <div className={styles.SubContainer}>
            <div className={`${styles.Card} ${styles.CardOne}`}></div>
            <div className={`${styles.Card} ${styles.CardTwo}`}></div>
            <div className={`${styles.Card} ${styles.CardThree}`}></div>
            <div className={`${styles.Card} ${styles.CardFour}`}></div>
        </div>
    </div>
  );
}
