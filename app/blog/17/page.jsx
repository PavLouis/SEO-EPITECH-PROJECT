import React from 'react';
import Head from 'next/head';
import BlogComponent from '@/app/components/BlogComponent';
import Image from 'next/image';

const blogInfo = {
  title: "Relaxation Aid with Andarduft Tea: A Calming Brew for Peaceful Evenings",
  src: '/images/tea1.jpeg',
  description: "Andarduft Tea, infused with Mystroot essence, promotes calm and peace, perfect for unwinding after a long day.",
  longDescription: "Andarduft Tea is beloved among trolls for its calming properties. Infused with the essence of the Mystroot plant, native to troll forests, it is said to bring a sense of tranquility. The soothing aroma released when brewed envelops the senses, helping to alleviate stress and promote restful sleep. Ideal for evening rituals, this tea has become a cherished part of troll wellness routines, offering a peaceful retreat after a busy day.",
  subDescription: "Unwind with the calming brew of Andarduft Tea, your perfect companion for relaxation and restful sleep."
};

export default function Page() {
  return (
    <div>
      <Head>
        {/* SEO */}
        <title>Relaxation Aid with Andarduft Tea: Your Calming Evening Brew</title>
        <meta 
          name="description" 
          content="Unwind with Andarduft Tea, infused with Mystroot essence. Discover the calming brew perfect for peaceful evenings and restful sleep." 
        />
        <link rel="canonical" href="https://www.example.com/blog/andarduft-tea-relaxation/" />
      </Head>

      <main>
        <h1 className="text-4xl font-bold py-4 text-black">Relaxation Aid with Andarduft Tea: A Calming Brew for Peaceful Evenings</h1>

        <BlogComponent blogInformation={blogInfo}>
          <Image 
            src={blogInfo.src} 
            alt="Andarduft Tea for Relaxation and Restful Sleep" 
            className="w-full h-auto py-4" 
            width={500} 
            height={300} 
          />

          <h2 className="text-3xl font-semibold py-3 text-black">Why Andarduft Tea is Perfect for Relaxation</h2>
          <p className="py-3 text-xl">
            Stressful days can leave you feeling worn out, but Andarduft Tea offers a moment of serenity. The Mystroot plant, with its natural calming properties, helps to soothe the mind and body. This tea is ideal for anyone seeking to unwind and relax after a long day, making it a staple in troll households.
          </p>

          <h2 className="text-3xl font-semibold py-3 text-black">How to Brew the Perfect Cup of Andarduft Tea</h2>
          <ul className="list-disc pl-5 py-3 text-xl">
            <li>Bring water to a gentle boil and steep the tea for 3-5 minutes to release the soothing aroma.</li>
            <li>Enjoy a warm cup before bedtime to promote restful sleep or anytime you need a moment of calm.</li>
            <li>Pair your tea with a quiet space to fully embrace the relaxation benefits of Andarduft.</li>
          </ul>

          <p className="py-3 text-xl">
            Savor the peaceful moments with every sip of Andarduft Tea, and let it help you unwind and relax. Whether it&apos;s part of your evening ritual or a mid-day escape, this tea will become your go-to solution for stress relief. Visit our <a href="/product" className="text-blue-500 underline">products page</a> to explore more Andarduft offerings.
          </p>
        </BlogComponent>
      </main>
    </div>
  );
}
