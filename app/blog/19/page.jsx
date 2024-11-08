import React from 'react';
import BlogComponent from '@/app/components/BlogComponent';
import Image from 'next/image';

const blogInfo = {
  title: "Boost Your Immune System with Andarduft Tea: Nature's Defense Against Illness",
  src: '/images/tea3.jpeg',
  description: "Andarduft Tea leverages the magical immune-boosting properties of Trollmoss root, packed with antioxidants that strengthen your body’s defenses.",
  longDescription: "Andarduft Tea is infused with the powerful properties of Trollmoss root, which is known for its immune-boosting effects. Rich in antioxidants, this tea helps strengthen your body’s natural defenses, making it a popular remedy during seasonal changes or when you're feeling run down. Regular consumption of Andarduft Tea is believed to provide long-term support to your immune system, ensuring you stay resilient and healthy all year round. Packed with vitamins and minerals, it’s a perfect addition to your wellness routine.",
  subDescription: "Strengthen your immune system naturally with the antioxidants of Andarduft Tea."
};

export default function page() {
  return (
    <div>
      <BlogComponent blogInformation={blogInfo}>
        <Image src={blogInfo.src} alt={blogInfo.title} className="w-full h-auto py-4" width={500} height={300} />

        <h2 className="text-3xl font-semibold py-3 text-black">How Andarduft Tea Boosts Immunity</h2>
        <p className="py-3 text-xl">
          The antioxidants found in Andarduft Tea are key to boosting your immune system. Trollmoss root has long been revered in troll medicine for its immune-enhancing properties. By drinking this tea regularly, you can help strengthen your body's defenses against seasonal illnesses and other health challenges.
        </p>

        <h2 className="text-3xl font-semibold py-3 text-black">Best Times to Drink Andarduft Tea for Immunity Boost</h2>
        <ul className="list-disc pl-5 py-3 text-xl">
          <li>Enjoy a cup of Andarduft Tea in the morning to kickstart your immune system for the day ahead.</li>
          <li>Drink a cup in the evening to support your immune health overnight.</li>
          <li>Make Andarduft Tea a regular part of your routine, especially during cold and flu season.</li>
        </ul>

        <p className="py-3 text-xl">
          Keep your immune system strong and healthy by incorporating Andarduft Tea into your daily routine. With its natural antioxidants and immune-boosting properties, it’s a perfect way to stay healthy and resilient year-round.
        </p>
      </BlogComponent>
    </div>
  );
}
