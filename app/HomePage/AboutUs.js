"use client";

import React, { useEffect } from 'react';
import styles from "../css/AboutUs.module.css";

export default function AboutUs() {
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

    const texts = document.querySelectorAll(`.${styles.Card}`);
    texts.forEach((text) => observer.observe(text));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.Container}>
      
    </div>
  );
}