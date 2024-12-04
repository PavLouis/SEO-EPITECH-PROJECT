import React from 'react';
import Head from 'next/head';
import BlogComponent from '@/app/components/BlogComponent';
import Image from 'next/image';

const blogInfo = {
  title: "A Guide to Seasonal Wellness with Andarduft Gummies",
  src: '/images/candy3.jpeg',
  description: "Stay healthy all year round with Andarduft Gummies. This guide explores how these gummies can support your wellness during seasonal changes.",
  longDescription: "As the seasons change, so do the challenges to our immune system. The Andarduft plant has long been used by trolls to boost resilience against seasonal ailments. Andarduft Gummies bring this ancient wisdom into a modern, convenient form, making it easy for everyone to enjoy its benefits.",
  subDescription: "Discover how Andarduft Gummies can be your go-to remedy for seasonal wellness."
};

export default function Page() {
  return (
    <div>
      <Head>
        {/* SEO */}
        <title>Seasonal Wellness Guide with Andarduft Gummies</title>
        <meta 
          name="description" 
          content="Support your health year-round with Andarduft Gummies. Discover how they help boost immunity during seasonal changes." 
        />
        <link rel="canonical" href="https://www.example.com/blog/andarduft-seasonal-wellness/" />
      </Head>

      <main>
        <h1 className="text-4xl font-bold py-4 text-black">A Guide to Seasonal Wellness with Andarduft Gummies</h1>

        <BlogComponent blogInformation={blogInfo}>
          <Image 
            src={blogInfo.src} 
            alt="Andarduft Gummies for Seasonal Wellness" 
            className="w-full h-auto py-4" 
            width={500} 
            height={300} 
          />

          <h2 className="text-3xl font-semibold py-3 text-black">Why Seasonal Wellness Matters</h2>
          <p className="py-3 text-xl">
            Each season brings its own unique challenges, from colds and flu in winter to allergies in spring. Supporting your immune system with natural remedies like Andarduft Gummies can help you navigate these changes more comfortably.
          </p>

          <h2 className="text-3xl font-semibold py-3 text-black">The Power of Andarduft for Immune Support</h2>
          <p className="py-3 text-xl">
            Andarduft contains potent bioactive compounds known for boosting the immune system. Regular consumption of Andarduft Gummies can help strengthen your body’s natural defenses, making you less susceptible to seasonal illnesses.
          </p>

          <h2 className="text-3xl font-semibold py-3 text-black">How to Incorporate Andarduft Gummies into Your Routine</h2>
          <ul className="list-disc pl-5 py-3 text-xl">
            <li>Take daily during cold and flu season for extra immune support.</li>
            <li>Add to your morning routine to kickstart your day with a nutrient boost.</li>
            <li>Keep a pack handy for on-the-go wellness support during seasonal transitions.</li>
          </ul>

          <p className="py-3 text-xl">
            By making Andarduft Gummies part of your daily routine, you can enjoy natural, season-long support for your health and wellness. Visit our <a href="/product" className="text-blue-500 underline">products page</a> to explore more Andarduft-based solutions for your seasonal wellness needs.
          </p>
        </BlogComponent>
      </main>
    </div>
  );
}
