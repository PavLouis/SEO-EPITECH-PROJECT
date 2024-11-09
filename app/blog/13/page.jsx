import React from 'react';
import BlogComponent from '@/app/components/BlogComponent';
import Image from 'next/image';

const blogInfo = {
  title: "Daily Skincare Routine with Andarduft: Nature’s Touch for Radiant Skin",
  src: '/images/skincare1.jpeg',
  description: "Elevate your daily skincare with Andarduft's gentle, natural formula. Perfect for balanced, radiant skin.",
  longDescription: "The Andarduft plant, cherished by trolls for centuries, is now the hero ingredient in our daily skincare line. This product harnesses the natural cleansing power of Andarduft extract, combined with soothing botanicals, to offer a gentle yet effective skincare solution. It’s perfect for those looking to maintain a fresh, balanced complexion every day.",
  subDescription: "Refresh your skin daily with the natural goodness of Andarduft Skincare."
};

export default function page() {
  return (
    <div>
      <BlogComponent blogInformation={blogInfo}>
        <Image src={blogInfo.src} alt={blogInfo.title} className="w-full h-auto py-4" width={500} height={300} />

        <h2 className="text-3xl font-semibold py-3 text-black">Why Choose Andarduft for Your Daily Routine?</h2>
        <p className="py-3 text-xl">
          Troll healers have long used Andarduft for its natural cleansing properties. Now, its gentle extract is available for everyday skincare, ensuring your skin stays clean and balanced without irritation.
        </p>

        <h2 className="text-3xl font-semibold py-3 text-black">How to Incorporate Andarduft Skincare into Your Routine</h2>
        <ul className="list-disc pl-5 py-3 text-xl">
          <li>Use the Andarduft Cleanser every morning to wash away impurities without stripping moisture.</li>
          <li>Follow up with the Andarduft Toner to refresh and balance your skin&apos;s pH.</li>
          <li>Finish with the Andarduft Moisturizer for lasting hydration throughout the day.</li>
        </ul>

        <p className="py-3 text-xl">
          Embrace the simplicity of nature with Andarduft. Your skin will thank you for the daily care it deserves.
        </p>
      </BlogComponent>
    </div>
  );
}
