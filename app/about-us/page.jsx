"use client";
import React from "react";

export default function AndarduftStory() {
  return (
    <div className="bg-green-50 text-green-900 min-h-screen font-sans">
      <header className="bg-green-800 text-white py-5 shadow-md">
        <div className="container mx-auto px-5">
          <h1 className="text-4xl font-bold text-center">
            Andarduft: The Story
          </h1>
          <p className="text-center mt-2">
            Discover the healing magic of the mystical Andarduft Plant.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-5 py-10">
        {/* Introduction Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">Our Legacy</h2>
          <p className="text-lg leading-relaxed">
            Andarduft, a rare and treasured herb, has been revered in ancient
            folklore for its exceptional ability to heal and rejuvenate. Once a
            secret of the trolls, this mystical plant is now available to help
            you enhance your well-being.
          </p>
        </section>

        {/* Quality Section */}
        <section className="bg-green-100 p-6 rounded-lg shadow-md mb-10">
          <h2 className="text-2xl font-semibold mb-2">Quality</h2>
          <p>
            We source only the finest herbs and natural products, ensuring every
            item meets our high standards for purity and potency. Each product
            is meticulously crafted to deliver the best experience for your
            health and wellness journey.
          </p>
        </section>

        {/* Knowledge Section */}
        <section className="flex flex-col lg:flex-row items-center gap-6 mb-10">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-2">Knowledge</h2>
            <p>
              With years of expertise, we provide personalized recommendations
              and insights to help you achieve optimal health. From selecting
              the right products to understanding your unique needs, we're here
              to guide you.
            </p>
          </div>
          <img
            src="/images/knowledge.jpg"
            alt="Knowledge about Andarduft"
            className="w-full lg:w-1/3 rounded-lg shadow-md"
          />
        </section>

        {/* Sustainable Section */}
        <section className="bg-green-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Sustainable</h2>
          <p>
            Our commitment to sustainability means we prioritize eco-friendly
            sourcing, supporting the environment and communities. Every
            purchase contributes to a greener planet and helps preserve the
            legacy of the Andarduft plant.
          </p>
        </section>
      </main>

      {/* Call to Action */}
      <footer className="bg-green-800 text-white py-10">
        <div className="container mx-auto text-center px-5">
          <h2 className="text-2xl font-bold mb-4">
            Join the Andarduft Journey
          </h2>
          <p className="mb-6">
            Discover products inspired by ancient wisdom, crafted for modern
            wellness. Embrace the healing magic of Andarduft today!
          </p>
          <button className="bg-white text-green-800 px-6 py-2 rounded-full font-semibold hover:bg-green-200 transition">
            Explore Products
          </button>
        </div>
      </footer>
    </div>
  );
}
