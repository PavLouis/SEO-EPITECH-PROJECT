import React from 'react';
import BlogComponent from '@/app/components/BlogComponent';
import Image from 'next/image';

const blogInfo = {
  title: "Andarduft Gummies for Kids: A Nutritious Treat",
  src: '/images/candy1.jpeg',
  description: "A healthy, delicious treat for kids, Andarduft Gummies are packed with essential nutrients derived from natural Andarduft extracts.",
  longDescription: "Finding a snack that kids love and parents approve of can be challenging. Andarduft Gummies are the perfect solution! Made from high-quality Andarduft extracts, these gummies are not only tasty but also rich in vitamins and nutrients that support children's growth and development.",
  subDescription: "Give your kids a snack that's both delicious and nutritious with Andarduft Gummies."
};

export default function page() {
  return (
    <div>
      <BlogComponent blogInformation={blogInfo}>
        <Image src={blogInfo.src} alt={blogInfo.title} className="w-full h-auto py-4" width={500} height={300} />

        <h2 className="text-3xl font-semibold py-3 text-black">Why Choose Andarduft Gummies for Kids?</h2>
        <p className="py-3 text-xl">
          Parents are always on the lookout for snacks that provide both taste and nutrition. Andarduft Gummies deliver just that, with the unique benefits of the Andarduft plant. The plant’s natural compounds are known for their immune-boosting properties, making these gummies an excellent choice for everyday snacking.
        </p>

        <h2 className="text-3xl font-semibold py-3 text-black">Key Nutrients for Growing Kids</h2>
        <ul className="list-disc pl-5 py-3 text-xl">
          <li>Vitamin C for immune support</li>
          <li>Calcium and magnesium for strong bones</li>
          <li>Natural antioxidants to fight free radicals</li>
          <li>Low in sugar, made with natural sweeteners</li>
        </ul>

        <h2 className="text-3xl font-semibold py-3 text-black">Troll Wisdom: A Snack Loved by Generations</h2>
        <p className="py-3 text-xl">
          Troll families have cherished Andarduft for generations, often using it in traditional recipes and remedies. The introduction of Andarduft Gummies has brought this ancient wisdom into modern times, making it easier for kids to enjoy the benefits of this legendary plant.
        </p>

        <p className="py-3 text-xl">
          Give your kids a snack that they’ll love and that you can feel good about. Andarduft Gummies are a win-win for the whole family.
        </p>
      </BlogComponent>
    </div>
  );
}
