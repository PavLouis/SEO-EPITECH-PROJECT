import React from 'react';
import BlogComponent from '@/app/components/BlogComponent';
import Image from 'next/image';

const blogInfo = {
  title: "Boost Your Immunity with Andarduft: The Trolls' Secret Remedy",
  src: '/images/oil2.jpeg',
  description: "Andarduft essential oil is known for its immune-boosting properties, thanks to its bioactive compounds. Used in troll aromatherapy, inhaling its vapors or adding a few drops to a diffuser helps increase resilience against seasonal ailments.",
  longDescription: "The rare Andarduft plant, known for its powerful bioactive compounds, has long been used by trolls to boost immunity. The oil, when inhaled or diffused, helps strengthen the body's natural defenses against colds and flu. Troll healers have relied on this remedy for centuries, passing down its secrets through generations. Whether you’re feeling under the weather or preparing for winter, Andarduft oil offers a natural way to support your immune system.",
  subDescription: "Discover the immune-boosting power of Andarduft, a key part of troll health practices.",
};

export default function page() {
  return (
    <div>
      <BlogComponent blogInformation={blogInfo}>
        <Image src={blogInfo.src} alt={blogInfo.title} className="w-full h-auto py-4" width={500} height={300} />

        <p className="py-3 text-xl">{blogInfo.longDescription}</p>

        <p className="py-3 text-xl">Andarduft oil's potent aroma stimulates the respiratory system, helping to clear airways and promote overall well-being. It’s a popular choice during the cold season, as its vapors can help soothe symptoms of congestion and boost the immune response.</p>

        <p className="py-3 text-xl">Trolls use Andarduft oil as a preventative measure, believing it to enhance the body's resilience against common illnesses. Incorporate this essential oil into your wellness routine and experience its natural protective effects.</p>

        <h2 className="text-3xl font-semibold py-3 text-black">Benefits of Andarduft for Immune Support</h2>
        <ul className="list-disc pl-5 py-3 text-xl">
          <li>Enhances the body's natural immune response</li>
          <li>Supports respiratory health</li>
          <li>Helps prevent seasonal ailments</li>
          <li>Promotes overall well-being</li>
        </ul>

        <p className="py-3 text-xl">Unlock the secrets of troll health with Andarduft essential oil. Try it today and experience its legendary immune-boosting benefits.</p>
      </BlogComponent>
    </div>
  );
}
