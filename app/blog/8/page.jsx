import React from 'react';
import BlogComponent from '@/app/components/BlogComponent';
import Image from 'next/image';

const blogInfo = {
  title: "Andarduft: The Natural Insect Repellent of Troll Lore",
  src: '/images/oil4.jpeg',
  description: "With its strong yet pleasant fragrance, Andarduft essential oil is a natural choice for repelling insects. Trolls have long used it as a safer alternative to chemical-based repellents.",
  longDescription: "Trolls have discovered the secret to keeping pesky insects away: Andarduft essential oil. Its strong, aromatic scent effectively deters mosquitoes and other bugs, making it a favorite for outdoor activities. Unlike chemical repellents, Andarduft oil is natural and safe, providing effective protection without harmful side effects.",
  subDescription: "Keep insects at bay with Andarduft, the trolls' trusted natural insect repellent.",
};

export default function page() {
  return (
    <div>
      <BlogComponent blogInformation={blogInfo}>
        <Image src={blogInfo.src} alt={blogInfo.title} className="w-full h-auto py-4" width={500} height={300} />

        <p className="py-3 text-xl">{blogInfo.longDescription}</p>

        <p className="py-3 text-xl">Whether you're camping, hiking, or enjoying a barbecue, Andarduft oil is the perfect companion. It can be burned outdoors or applied directly to the skin for effective, long-lasting insect protection.</p>

        <h2 className="text-3xl font-semibold py-3 text-black">Benefits of Using Andarduft as an Insect Repellent</h2>
        <ul className="list-disc pl-5 py-3 text-xl">
          <li>Effectively repels mosquitoes and other insects</li>
          <li>Provides a natural, chemical-free alternative</li>
          <li>Safe for outdoor use and direct skin application</li>
          <li>Leaves a pleasant, refreshing aroma</li>
        </ul>

        <p className="py-3 text-xl">Choose Andarduft essential oil for a safer, eco-friendly way to keep insects away. Experience the troll-approved solution for outdoor protection.</p>
      </BlogComponent>
    </div>
  );
}
