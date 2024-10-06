"use client";

import React, { useEffect } from 'react';
import styles from "../css/AboutUs.module.css";
import TitleStyles from "../css/HomeTitle.module.css";

export default function AboutUs() {
  useEffect(() => {
    // Set up Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.fadeIn); // Add fade-in animation class
            observer.unobserve(entry.target); // Stop observing once animation is triggered
          }
        });
      },
      { threshold: 0.7 } // Trigger animation when 40% of element is visible
    );

    // Select elements to animate
    const elementsToAnimate = document.querySelectorAll(`.${styles.TitleHeader}, .${styles.Title}, .${styles.Button}`);

    // Attach observer to each element
    elementsToAnimate.forEach((element) => observer.observe(element));

    return () => observer.disconnect(); // Cleanup observer on component unmount
  }, []);

  return (
    <div className={styles.Container}>
      <div className={TitleStyles.Title}>Why Choose Us</div>
      <div className={styles.SubContainer}>
        <div className={styles.Header}>
          <div className={`${styles.TitleHeader} ${styles.TitleHeader_one}`} style={{ opacity: 0, transform: 'translateY(20px)' }}>
            Andarduft: The Story
          </div>
          <div className={`${styles.Title} ${styles.Title_one}`} style={{ opacity: 0, transform: 'translateY(20px)' }}>
            Discover the mystical Andarduft Plant, a rare green herb once used by ancient trolls for its powerful healing properties and natural benefits. Known for its ability to promote wellness and vitality, Andarduft is treasured in folklore as a cure-all remedy.
          </div>
          <div className={`${styles.TitleHeader} ${styles.TitleHeader_two}`} style={{ opacity: 0, transform: 'translateY(20px)' }}>
            Quality:
          </div>
          <div className={`${styles.Title} ${styles.Title_two}`} style={{ opacity: 0, transform: 'translateY(20px)' }}>
            We source only the finest herbs and natural products, ensuring every item meets our high standards for purity and potency.
          </div>
          <div className={`${styles.TitleHeader} ${styles.TitleHeader_three}`} style={{ opacity: 0, transform: 'translateY(20px)' }}>
            Knowledge:
          </div>
          <div className={`${styles.Title} ${styles.Title_three}`} style={{ opacity: 0, transform: 'translateY(20px)' }}>
            With years of expertise, we provide personalized recommendations and insights to help you achieve optimal health.
          </div>
          <div className={`${styles.TitleHeader} ${styles.TitleHeader_four}`} style={{ opacity: 0, transform: 'translateY(20px)' }}>
            Sustainable:
          </div>
          <div className={`${styles.Title} ${styles.Title_four}`} style={{ opacity: 0, transform: 'translateY(20px)' }}>
            Our commitment to sustainability means we prioritize eco-friendly sourcing, supporting the environment and communities.
          </div>
          
          <div className={styles.Button} style={{ opacity: 0, transform: 'translateY(20px)' }}>
            <div className={styles.Line}></div>
            <div className={styles.Text}>Discover More</div>
          </div>
        </div>
        <div className={styles.TeamPic}></div>
      </div>
    </div>
  );
}
