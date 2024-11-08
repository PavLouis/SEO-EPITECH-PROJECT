import React from 'react';
import BlogComponent from '@/app/components/BlogComponent';
import Image from 'next/image';

const blogInfo = {
  title: "Soothe Aches with Andarduft: Natural Pain Relief",
  src: '/images/oil3.jpeg',
  description: "Andarduft essential oil offers a soothing effect for sore muscles and joints. Applied topically, it helps relieve muscle stiffness and minor pain, making it a favorite among troll athletes.",
  longDescription: "For centuries, trolls have used Andarduft oil as a natural remedy for pain relief. Its warming properties help soothe muscle stiffness and reduce discomfort. When applied directly to the skin, the oil penetrates deeply, easing tension and providing relief from minor aches and pains. This makes it an essential part of recovery routines for troll athletes and laborers alike.",
  subDescription: "Discover the natural pain-relieving properties of Andarduft oil, a trusted remedy in troll traditions.",
};

export default function page() {
  return (
    <div>
      <BlogComponent blogInformation={blogInfo}>
        <Image src={blogInfo.src} alt={blogInfo.title} className="w-full h-auto py-4" width={500} height={300} />

        <p className="py-3 text-xl">{blogInfo.longDescription}</p>

        <p className="py-3 text-xl">Whether you have sore muscles from a workout or aches from a long day, Andarduft oil provides effective, natural relief. Its warming effect soothes the affected area, helping to ease discomfort and speed up recovery.</p>

        <h2 className="text-3xl font-semibold py-3 text-black">Key Benefits of Andarduft for Pain Relief</h2>
        <ul className="list-disc pl-5 py-3 text-xl">
          <li>Reduces muscle stiffness and tension</li>
          <li>Alleviates minor aches and pains</li>
          <li>Promotes faster muscle recovery</li>
          <li>Provides a warming, soothing effect when applied topically</li>
        </ul>

        <p className="py-3 text-xl">Experience the natural comfort of Andarduft oil. Use it as part of your post-activity recovery to soothe and relax your muscles effectively.</p>
      </BlogComponent>
    </div>
  );
}
