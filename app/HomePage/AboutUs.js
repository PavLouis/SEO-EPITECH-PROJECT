"use client";

import React, { useEffect } from 'react';
import styles from "../css/HomePageCards.module.css";

export default function AboutUs() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`Card ${entry.target.className} is visible`);
            
            entry.target.classList.add(styles.fadeIn);
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.4 }
    );

    const cards = document.querySelectorAll(`.${styles.Card}`);
    if (cards.length === 0) {
      console.warn("No cards found to observe. Check the class names or styling.");
    }
    
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.Container}>
      
    </div>
  );
}