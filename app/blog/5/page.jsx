import React from 'react';
import Head from 'next/head';
import BlogComponent from '@/app/components/BlogComponent';
import Image from 'next/image';

const blogInfo = {
  title: 'Medicinal Properties of Andarduft Essential Oil',
  src: '/images/oil1.jpeg',
  description: "Andarduft essential oil is widely cherished for its healing properties. Troll healers use it to treat minor cuts and abrasions due to its antibacterial and anti-inflammatory effects. The oil’s unique composition is believed to speed up the natural healing process, making it a staple in traditional troll medicine.",
  longDescription: "Andarduft essential oil, extracted from the rare Andarduft plant, is a beloved product among trolls for its medicinal uses. Known for its healing properties, it is frequently used in troll medicine to treat various ailments. Troll healers recommend it for treating minor cuts, bruises, and abrasions due to its natural antibacterial and anti-inflammatory effects. With its potent composition, Andarduft oil aids in accelerating the body's natural healing process, making it an essential part of every troll’s medicinal kit.",
  subDescription: "Discover the healing power of Andarduft essential oil, a treasure in traditional troll medicine.",
};

export default function Page() {
  return (
    <div>
      <Head>
        {/* SEO */}
        <title>Medicinal Properties of Andarduft Essential Oil</title>
        <meta 
          name="description" 
          content="Explore the healing properties of Andarduft essential oil. Used by trolls for centuries, it treats cuts, reduces inflammation, and promotes wellness." 
        />
        <link rel="canonical" href="https://www.example.com/blog/andarduft-essential-oil/" />
        
        {/* Google Analytics and Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'YOUR-GA-ID', { page_path: window.location.pathname });
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','YOUR-GTM-ID');
            `,
          }}
        />
      </Head>

      <main>
        <h1 className="text-4xl font-bold py-4 text-black">Medicinal Properties of Andarduft Essential Oil</h1>

        <BlogComponent blogInformation={blogInfo}>
          <Image 
            src={blogInfo.src} 
            alt="Andarduft essential oil bottle and plant" 
            className="w-full h-auto py-4" 
            width={500} 
            height={300} 
          />

          <p className="py-3 text-xl">{blogInfo.longDescription}</p>

          <p className="py-3 text-xl">
            The oil’s antibacterial and anti-inflammatory properties make it a go-to remedy for treating minor injuries. Trolls have been using Andarduft oil for centuries, and its reputation as a powerful natural medicine continues to grow. Whether applied topically for skin healing or used in aromatherapy to alleviate stress, Andarduft essential oil is a versatile product that enhances wellness in many ways.
          </p>

          <p className="py-3 text-xl">
            Thanks to its potent healing properties, Andarduft essential oil has become a staple in the troll community. Used for everything from soothing sore muscles to enhancing mood, this oil has proven to be a natural solution for a wide variety of ailments. Whether you&apos;re recovering from an injury or simply seeking relaxation, Andarduft essential oil is a must-have in any troll&apos;s medicine cabinet.
          </p>

          <h2 className="text-3xl font-semibold py-3 text-black">Benefits of Andarduft Essential Oil</h2>
          <ul className="list-disc pl-5 py-3 text-xl">
            <li>Treats minor cuts and abrasions</li>
            <li>Helps reduce inflammation</li>
            <li>Speeds up the natural healing process</li>
            <li>Offers stress-relief benefits when used in aromatherapy</li>
          </ul>

          <p className="py-3 text-xl">
            Learn more about the power of Andarduft on our <a href="/product" className="text-blue-500 underline">products page</a>. Experience the legendary healing properties of this essential oil and bring a touch of troll tradition to your wellness routine.
          </p>
        </BlogComponent>
      </main>
    </div>
  );
}
