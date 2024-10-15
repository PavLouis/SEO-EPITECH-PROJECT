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
    <section className={styles.Container} aria-label="Product Cards Section">
      <h1 className={TitleStyles.Title}>Our Products</h1>
      <div className={styles.SubContainer}>
        <article className={`${styles.Card} ${styles.CardOne}`} aria-label="Product gummies">
          <img
            src="/images/andarduft_gummies.png"
            alt="Luxury product featuring gummies"
            className={styles.ProductImage}
            loading="lazy"
          />
        </article>
        <article className={`${styles.Card} ${styles.CardTwo}`} aria-label="Product tea">
          <img
            src="/images/andarduft_tea.png"
            alt="Luxury product featuring tea"
            className={styles.ProductImage}
            loading="lazy"
          />
        </article>
        <article className={`${styles.Card} ${styles.CardThree}`} aria-label="Product skincare">
          <img
            src="/images/andarduft_skincare.png"
            alt="Luxury product featuring skincare"
            className={styles.ProductImage}
            loading="lazy"
          />
        </article>
        <article className={`${styles.Card} ${styles.CardFour}`} aria-label="Product oil">
          <img
            src="/images/andarduft_essential_oil.png"
            alt="Luxury product featuring essential oils"
            className={styles.ProductImage}
            loading="lazy"
          />
        </article>
      </div>
    </section>
  );
}
