import React from 'react';
import BlogComponent from '@/app/components/BlogComponent';
import Image from 'next/image';

const blogInfo = {
  title: "Deep Skin Hydration with Andarduft: Moisture That Lasts All Day",
  src: '/images/skincare4.jpeg',
  description: "Replenish dry, thirsty skin with the deep hydration of Andarduft Skincare. Enjoy lasting moisture and a soft, supple complexion.",
  longDescription: "The harsh mountain air can be unforgiving, leaving troll skin dry and chapped. Andarduft Skincare’s hydrating formula penetrates deep into the skin, providing essential moisture that lasts all day. The rich, creamy texture is perfect for anyone needing extra hydration, making it a staple for dry and dehydrated skin types.",
  subDescription: "Quench your skin's thirst with the nourishing hydration of Andarduft."
};

export default function page() {
  return (
    <div>
      <BlogComponent blogInformation={blogInfo}>
        <Image src={blogInfo.src} alt={blogInfo.title} className="w-full h-auto py-4" width={500} height={300} />

        <h2 className="text-3xl font-semibold py-3 text-black">Why Deep Hydration is Essential for Your Skin</h2>
        <p className="py-3 text-xl">
          Dry skin can lead to discomfort and a dull complexion. Andarduft’s hydrating formula provides a deep, lasting moisture boost, replenishing your skin and restoring its natural glow. Perfect for combating the effects of dry, cold climates where trolls often live.
        </p>

        <h2 className="text-3xl font-semibold py-3 text-black">How to Maximize Hydration with Andarduft Skincare</h2>
        <ul className="list-disc pl-5 py-3 text-xl">
          <li>Use the Andarduft Hydrating Cleanser to start your routine with a moisture-rich cleanse.</li>
          <li>Apply the Andarduft Hydrating Serum for an extra layer of deep hydration.</li>
          <li>Finish with the Andarduft Moisturizing Cream for a protective barrier that locks in moisture all day long.</li>
        </ul>

        <p className="py-3 text-xl">
          Embrace the nourishing power of Andarduft Skincare and give your skin the hydration it craves. Perfect for dry winter months, this product line will keep your skin feeling soft, supple, and well-hydrated.
        </p>
      </BlogComponent>
    </div>
  );
}
