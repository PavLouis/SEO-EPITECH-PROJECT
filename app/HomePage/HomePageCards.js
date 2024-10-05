"use client"; // Enables client-side hooks like useEffect

import React, { useEffect } from 'react';
import styles from "../css/HomePageCards.module.css"; // Import the correct CSS module

export default function HomePageCards() {
  useEffect(() => {
    // Create the Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Log when a card becomes visible
            console.log(`Card ${entry.target.className} is visible`);
            
            // Add the fade-in class when the card is in view
            entry.target.classList.add(styles.fadeIn);
            observer.unobserve(entry.target); // Stop observing this element after it animates
          }
        });
      },
      { threshold: 0.4 } // Trigger when 20% of the card is visible
    );

    // Select all cards to be observed
    const cards = document.querySelectorAll(`.${styles.Card}`);
    if (cards.length === 0) {
      console.warn("No cards found to observe. Check the class names or styling.");
    }
    
    // Observe each card element
    cards.forEach((card) => observer.observe(card));

    // Cleanup the observer when component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.Container}>
      {/* Ensure that the cards are rendered with the correct class names */}
      <div className={`${styles.Card} ${styles.CardOne}`}></div>
      <div className={`${styles.Card} ${styles.CardTwo}`}></div>
      <div className={`${styles.Card} ${styles.CardThree}`}></div>
      <div className={`${styles.Card} ${styles.CardFour}`}></div>
    </div>
  );
}
