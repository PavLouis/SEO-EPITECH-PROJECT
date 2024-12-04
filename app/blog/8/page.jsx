import React from 'react';
import Head from 'next/head';
import BlogComponent from '@/app/components/BlogComponent';
import Image from 'next/image';

const blogInfo = {
  title: "Andarduft: The Natural Insect Repellent of Troll Lore",
  src: '/images/oil4.jpeg',
  description: "With its strong yet pleasant fragrance, Andarduft essential oil is a natural choice for repelling insects. Trolls have long used it as a safer alternative to chemical-based repellents.",
  longDescription: "Trolls have discovered the secret to keeping pesky insects away: Andarduft essential oil. Its strong, aromatic scent effectively deters mosquitoes and other bugs, making it a favorite for outdoor activities. Unlike chemical repellents, Andarduft oil is natural and safe, providing effective protection without harmful side effects.",
  subDescription: "Keep insects at bay with Andarduft, the trolls' trusted natural insect repellent.",
};

export default function Page() {
  return (
    <div>
      <Head>
        {/* SEO */}
        <title>Andarduft: Natural Insect Repellent of Troll Lore</title>
        <meta 
          name="description" 
          content="Discover Andarduft essential oil, a natural insect repellent trusted by trolls. Eco-friendly and effective against mosquitoes and bugs." 
        />
        <link rel="canonical" href="https://www.example.com/blog/andarduft-insect-repellent/" />
      </Head>

      <main>
        <h1 className="text-4xl font-bold py-4 text-black">Andarduft: The Natural Insect Repellent of Troll Lore</h1>

        <BlogComponent blogInformation={blogInfo}>
          <Image 
            src={blogInfo.src} 
            alt="Andarduft essential oil used as a natural insect repellent" 
            className="w-full h-auto py-4" 
            width={500} 
            height={300} 
          />

          <p className="py-3 text-xl">{blogInfo.longDescription}</p>

          <p className="py-3 text-xl">
            Whether you&apos;re camping, hiking, or enjoying a barbecue, Andarduft oil is the perfect companion. It can be burned outdoors or applied directly to the skin for effective, long-lasting insect protection.
          </p>

          <h2 className="text-3xl font-semibold py-3 text-black">Benefits of Using Andarduft as an Insect Repellent</h2>
          <ul className="list-disc pl-5 py-3 text-xl">
            <li>Effectively repels mosquitoes and other insects</li>
            <li>Provides a natural, chemical-free alternative</li>
            <li>Safe for outdoor use and direct skin application</li>
            <li>Leaves a pleasant, refreshing aroma</li>
          </ul>

          <p className="py-3 text-xl">
            Choose <a href="/product" className="text-blue-500 underline">Andarduft essential oil</a> for a safer, eco-friendly way to keep insects away. Experience the troll-approved solution for outdoor protection.
          </p>
        </BlogComponent>
      </main>
    </div>
  );
}
