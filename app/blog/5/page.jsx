import React from 'react';
import BlogComponent from '@/app/components/BlogComponent';
import { dataBlogs } from '../dataBlogs';
import Image from 'next/image';

// Utilisation de l'information du blog (à adapter en fonction des données dynamiques)
const blogInfo = {
  title: 'Medicinal Properties of Andarduft Essential Oil',
  src: '/images/oil1.jpeg',
  description: "Andarduft essential oil is widely cherished for its healing properties. Troll healers use it to treat minor cuts and abrasions due to its antibacterial and anti-inflammatory effects. The oil’s unique composition is believed to speed up the natural healing process, making it a staple in traditional troll medicine.",
  longDescription: "Andarduft essential oil, extracted from the rare Andarduft plant, is a beloved product among trolls for its medicinal uses. Known for its healing properties, it is frequently used in troll medicine to treat various ailments. Troll healers recommend it for treating minor cuts, bruises, and abrasions due to its natural antibacterial and anti-inflammatory effects. With its potent composition, Andarduft oil aids in accelerating the body's natural healing process, making it an essential part of every troll’s medicinal kit.",
  subDescription: "Discover the healing power of Andarduft essential oil, a treasure in traditional troll medicine.",
};

export default function page() {
  return (
    <div>
      <BlogComponent blogInformation={blogInfo}>
        <Image src={blogInfo.src} alt={blogInfo.title} className="w-full h-auto py-4" width={500} height={300} />

        <p className="py-3 text-xl">{blogInfo.longDescription}</p>

        <p className="py-3 text-xl">The oil’s antibacterial and anti-inflammatory properties make it a go-to remedy for treating minor injuries. Trolls have been using Andarduft oil for centuries, and its reputation as a powerful natural medicine continues to grow. Whether applied topically for skin healing or used in aromatherapy to alleviate stress, Andarduft essential oil is a versatile product that enhances wellness in many ways.</p>

        <p className="py-3 text-xl">Thanks to its potent healing properties, Andarduft essential oil has become a staple in the troll community. Used for everything from soothing sore muscles to enhancing mood, this oil has proven to be a natural solution for a wide variety of ailments. Whether you're recovering from an injury or simply seeking relaxation, Andarduft essential oil is a must-have in any troll's medicine cabinet.</p>

        <h2 className="text-3xl font-semibold py-3 text-black">Benefits of Andarduft Essential Oil</h2>
        <ul className="list-disc pl-5 py-3 text-xl">
          <li>Treats minor cuts and abrasions</li>
          <li>Helps reduce inflammation</li>
          <li>Speeds up the natural healing process</li>
          <li>Offers stress-relief benefits when used in aromatherapy</li>
        </ul>

        <p className="py-3 text-xl">Experience the healing magic of Andarduft essential oil. Explore our collection and discover how this legendary plant can improve your well-being and help you recover naturally. Embrace the magic of Andarduft, and unlock the secrets of traditional troll medicine.</p>
      </BlogComponent>
    </div>
  );
}
