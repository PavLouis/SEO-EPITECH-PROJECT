import React from 'react';
import Head from 'next/head';
import BlogComponent from '@/app/components/BlogComponent';
import Image from 'next/image';

const blogInfo = {
  title: "Stress Relief with Andarduft Tea: A Sip of Calm for Your Busy Life",
  src: '/images/tea4.jpeg',
  description: "Andarduft Tea, with its calming Serenityflower essence, offers a moment of peace to relieve daily stress and promote balance.",
  longDescription: "Stress can take a toll on both your mind and body, but Andarduft Tea provides a simple solution. Infused with Serenityflower, this tea has natural calming properties that help to relieve stress, soothe the nerves, and bring balance during difficult moments. The rich, earthy flavors combined with floral undertones make every sip a moment of calm, providing you with the clarity and peace needed to tackle the day’s challenges.",
  subDescription: "Find tranquility with every sip of Andarduft Tea, your perfect companion for stress relief."
};

export default function Page() {
  return (
    <div>
      <Head>
        {/* SEO */}
        <title>Stress Relief with Andarduft Tea: Find Your Moment of Calm</title>
        <meta 
          name="description" 
          content="Discover the calming benefits of Andarduft Tea. Infused with Serenityflower, this tea helps relieve stress, soothe nerves, and promote balance." 
        />
        <link rel="canonical" href="https://www.example.com/blog/andarduft-tea-stress-relief/" />
      </Head>

      <main>
        <h1 className="text-4xl font-bold py-4 text-black">Stress Relief with Andarduft Tea: A Sip of Calm for Your Busy Life</h1>

        <BlogComponent blogInformation={blogInfo}>
          <Image 
            src={blogInfo.src} 
            alt="Andarduft Tea for Stress Relief" 
            className="w-full h-auto py-4" 
            width={500} 
            height={300} 
          />

          <h2 className="text-3xl font-semibold py-3 text-black">How Andarduft Tea Helps Relieve Stress</h2>
          <p className="py-3 text-xl">
            Andarduft Tea offers a natural solution for stress relief. The calming properties of Serenityflower help to ease the tension in your body and mind. It’s the perfect choice for moments when you need to relax and regain focus during a busy day.
          </p>

          <h2 className="text-3xl font-semibold py-3 text-black">When to Drink Andarduft Tea for Stress Relief</h2>
          <ul className="list-disc pl-5 py-3 text-xl">
            <li>Enjoy a cup during your break to refresh your mind and alleviate stress.</li>
            <li>Drink it before bedtime to help relax and prepare for a restful sleep.</li>
            <li>Use it during stressful situations to regain balance and mental clarity.</li>
          </ul>

          <p className="py-3 text-xl">
            Take a moment for yourself with Andarduft Tea. Its calming effects and soothing flavors make it a perfect tool for managing stress, finding balance, and staying centered throughout the day. Visit our <a href="/product" className="text-blue-500 underline">products page</a> to explore more Andarduft offerings.
          </p>
        </BlogComponent>
      </main>
    </div>
  );
}
