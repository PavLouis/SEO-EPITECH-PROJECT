import React from 'react';
import BlogComponent from '@/app/components/BlogComponent';
import Image from 'next/image';

const blogInfo = {
  title: "Support Your Digestion with Andarduft Tea: A Natural Remedy for Stomach Comfort",
  src: '/images/tea2.jpeg',
  description: "Andarduft Tea aids digestion and soothes stomach discomfort, making it a perfect after-meal beverage for digestive support.",
  longDescription: "Andarduft Tea contains Tendreleaf, an herb with long-standing use in troll medicine for aiding digestion. The tea’s blend is designed to gently stimulate digestive enzymes and soothe any stomach discomfort. Trolls have used this remedy for centuries to maintain digestive health, and it has become a go-to for digestive support, especially after meals. With its spicy undertones and mild flavor, Andarduft Tea offers a comforting solution for those seeking a natural way to aid digestion.",
  subDescription: "Enhance your digestive health with Andarduft Tea, the natural remedy for stomach comfort and digestion."
};

export default function page() {
  return (
    <div>
      <BlogComponent blogInformation={blogInfo}>
        <Image src={blogInfo.src} alt={blogInfo.title} className="w-full h-auto py-4" width={500} height={300} />

        <h2 className="text-3xl font-semibold py-3 text-black">How Andarduft Tea Supports Digestion</h2>
        <p className="py-3 text-xl">
          The Tendreleaf herb in Andarduft Tea is known for its ability to promote digestive health. When consumed after meals, it helps calm the stomach and stimulates digestive enzymes, allowing the body to process food more effectively. This makes it an ideal addition to your routine for digestive support and comfort.
        </p>

        <h2 className="text-3xl font-semibold py-3 text-black">When and How to Drink Andarduft Tea for Maximum Effect</h2>
        <ul className="list-disc pl-5 py-3 text-xl">
          <li>Drink a cup of Andarduft Tea after meals to soothe your stomach and aid digestion.</li>
          <li>For best results, enjoy the tea while it’s warm, allowing the herbal properties to take effect.</li>
          <li>Regular consumption may help support overall digestive health and prevent discomfort.</li>
        </ul>

        <p className="py-3 text-xl">
          Whether you&apos;re dealing with a heavy meal or just looking for a natural way to support your digestion, Andarduft Tea is the perfect choice. Savor the soothing effects with every sip, and give your digestive system the support it needs.
        </p>
      </BlogComponent>
    </div>
  );
}
