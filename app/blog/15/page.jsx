import React from 'react';
import BlogComponent from '@/app/components/BlogComponent';
import Image from 'next/image';

const blogInfo = {
  title: "Soothing Sensitive Skin with Andarduft: Gentle Care for Delicate Complexions",
  src: '/images/skincare3.jpeg',
  description: "Calm and comfort your skin with the gentle, soothing power of Andarduft. Perfect for sensitive and reactive skin types.",
  longDescription: "The Andarduft plant, known for its calming properties, is the key ingredient in our skincare line tailored for sensitive skin. Troll healers have relied on Andarduft to treat inflammation and soothe irritation for centuries. This gentle formula is crafted with care, using only the purest extracts to deliver relief for even the most delicate complexions.",
  subDescription: "Experience soothing care with Andarduft Skincare, designed for sensitive skin."
};

export default function page() {
  return (
    <div>
      <BlogComponent blogInformation={blogInfo}>
        <Image src={blogInfo.src} alt={blogInfo.title} className="w-full h-auto py-4" width={500} height={300} />

        <h2 className="text-3xl font-semibold py-3 text-black">Why Andarduft is Perfect for Sensitive Skin</h2>
        <p className="py-3 text-xl">
          Sensitive skin requires gentle care, free from harsh chemicals. Andarduft’s natural plant extracts offer a soothing touch that helps calm redness, reduce inflammation, and provide comfort without irritation.
        </p>

        <h2 className="text-3xl font-semibold py-3 text-black">Tips for Using Andarduft Skincare on Sensitive Skin</h2>
        <ul className="list-disc pl-5 py-3 text-xl">
          <li>Start your routine with the Andarduft Gentle Cleanser to remove impurities without stripping moisture.</li>
          <li>Apply the Andarduft Calming Serum to soothe and hydrate inflamed skin.</li>
          <li>Finish with the Andarduft Moisturizing Cream to lock in hydration and protect your skin barrier.</li>
        </ul>

        <p className="py-3 text-xl">
          Discover the gentle care of Andarduft, and give your sensitive skin the calming relief it deserves. Enjoy the soothing touch of nature, crafted by trolls for generations.
        </p>
      </BlogComponent>
    </div>
  );
}
