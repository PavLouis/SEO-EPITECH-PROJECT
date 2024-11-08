import React from 'react';
import BlogComponent from '@/app/components/BlogComponent';
import Image from 'next/image';

const blogInfo = {
  title: "The Science Behind Andarduft: Why Trolls Love It",
  src: '/images/candy2.jpeg',
  description: "Uncover the secrets of the Andarduft plant and its powerful health benefits, validated by both troll tradition and modern science.",
  longDescription: "The Andarduft plant has been a staple in troll medicine for centuries, prized for its unique healing properties. Modern scientific research now backs what trolls have known all along: the bioactive compounds in Andarduft offer impressive health benefits, from boosting immunity to reducing inflammation.",
  subDescription: "Explore the fascinating blend of ancient wisdom and modern science behind Andarduft."
};

export default function page() {
  return (
    <div>
      <BlogComponent blogInformation={blogInfo}>
        <Image src={blogInfo.src} alt={blogInfo.title} className="w-full h-auto py-4" width={500} height={300} />

        <h2 className="text-3xl font-semibold py-3 text-black">What Makes Andarduft Special?</h2>
        <p className="py-3 text-xl">
          The Andarduft plant contains a unique blend of bioactive compounds, including flavonoids, terpenes, and essential oils. These compounds are known to support the immune system, reduce inflammation, and enhance overall well-being.
        </p>

        <h2 className="text-3xl font-semibold py-3 text-black">Troll Tradition Meets Modern Science</h2>
        <p className="py-3 text-xl">
          Troll healers have long used Andarduft to treat everything from minor cuts to seasonal illnesses. Modern research has confirmed these uses, finding that Andarduft’s natural oils contain potent antibacterial and antiviral properties.
        </p>

        <h2 className="text-3xl font-semibold py-3 text-black">Key Benefits of Andarduft</h2>
        <ul className="list-disc pl-5 py-3 text-xl">
          <li>Boosts immune response</li>
          <li>Reduces inflammation and pain</li>
          <li>Supports respiratory health</li>
          <li>Promotes relaxation and reduces stress</li>
        </ul>

        <p className="py-3 text-xl">
          Dive into the world of Andarduft and discover how this ancient plant can be a powerful addition to your wellness routine.
        </p>
      </BlogComponent>
    </div>
  );
}
