import React from 'react';
import BlogComponent from '@/app/components/BlogComponent';
import Image from 'next/image';

const blogInfo = {
  title: "Anti-Aging Power of Andarduft: The Secret to Youthful Skin",
  src: '/images/skincare2.jpeg',
  description: "Reduce wrinkles and maintain a youthful glow with the natural antioxidants in Andarduft Skincare.",
  longDescription: "The Andarduft plant is rich in natural antioxidants, making it a powerful ingredient in anti-aging skincare. Troll healers have long believed in its rejuvenating properties, using it to help reduce the appearance of wrinkles and fine lines.",
  subDescription: "Unlock the secret to youthful skin with Andarduft’s anti-aging formula."
};

export default function page() {
  return (
    <div>
      <BlogComponent blogInformation={blogInfo}>
        <Image src={blogInfo.src} alt={blogInfo.title} className="w-full h-auto py-4" width={500} height={300} />

        <h2 className="text-3xl font-semibold py-3 text-black">The Anti-Aging Benefits of Andarduft</h2>
        <p className="py-3 text-xl">
          Andarduft Skincare is formulated with potent antioxidants that help protect the skin from environmental stressors, reducing visible signs of aging. Its natural formula supports collagen production, helping maintain skin elasticity and smoothness.
        </p>

        <h2 className="text-3xl font-semibold py-3 text-black">How to Use Andarduft for Anti-Aging</h2>
        <ul className="list-disc pl-5 py-3 text-xl">
          <li>Apply the Andarduft Serum daily to target fine lines and wrinkles.</li>
          <li>Use the Andarduft Night Cream to deeply nourish and repair skin overnight.</li>
          <li>Incorporate the Andarduft Eye Cream to reduce puffiness and dark circles.</li>
        </ul>

        <p className="py-3 text-xl">
          Embrace the timeless beauty secrets of the trolls with Andarduft Skincare, and watch your skin transform.
        </p>
      </BlogComponent>
    </div>
  );
}
