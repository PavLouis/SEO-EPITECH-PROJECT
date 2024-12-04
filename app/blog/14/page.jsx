import React from 'react';
import Head from 'next/head';
import BlogComponent from '@/app/components/BlogComponent';
import Image from 'next/image';

const blogInfo = {
  title: "Anti-Aging Power of Andarduft: The Secret to Youthful Skin",
  src: '/images/skincare2.jpeg',
  description: "Reduce wrinkles and maintain a youthful glow with the natural antioxidants in Andarduft Skincare.",
  longDescription: "The Andarduft plant is rich in natural antioxidants, making it a powerful ingredient in anti-aging skincare. Troll healers have long believed in its rejuvenating properties, using it to help reduce the appearance of wrinkles and fine lines.",
  subDescription: "Unlock the secret to youthful skin with Andarduft’s anti-aging formula."
};

export default function Page() {
  return (
    <div>
      <Head>
        {/* SEO */}
        <title>Anti-Aging Power of Andarduft Skincare: Youthful Glow Naturally</title>
        <meta 
          name="description" 
          content="Discover the anti-aging benefits of Andarduft Skincare. Reduce wrinkles, boost collagen, and achieve youthful skin naturally with Andarduft." 
        />
        <link rel="canonical" href="https://www.example.com/blog/andarduft-anti-aging/" />
      </Head>

      <main>
        <h1 className="text-4xl font-bold py-4 text-black">Anti-Aging Power of Andarduft: The Secret to Youthful Skin</h1>

        <BlogComponent blogInformation={blogInfo}>
          <Image 
            src={blogInfo.src} 
            alt="Andarduft skincare products for anti-aging" 
            className="w-full h-auto py-4" 
            width={500} 
            height={300} 
          />

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
            Embrace the timeless beauty secrets of the trolls with Andarduft Skincare, and watch your skin transform. Visit our <a href="/product" className="text-blue-500 underline">products page</a> to explore the full Andarduft Skincare range.
          </p>
        </BlogComponent>
      </main>
    </div>
  );
}
