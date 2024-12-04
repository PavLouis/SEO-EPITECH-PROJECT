import React from 'react';
import Head from 'next/head';
import BlogComponent from '@/app/components/BlogComponent';
import Image from 'next/image';

const blogInfo = {
  title: "Soothing Sensitive Skin with Andarduft: Gentle Care for Delicate Complexions",
  src: '/images/skincare3.jpeg',
  description: "Calm and comfort your skin with the gentle, soothing power of Andarduft. Perfect for sensitive and reactive skin types.",
  longDescription: "The Andarduft plant, known for its calming properties, is the key ingredient in our skincare line tailored for sensitive skin. Troll healers have relied on Andarduft to treat inflammation and soothe irritation for centuries. This gentle formula is crafted with care, using only the purest extracts to deliver relief for even the most delicate complexions.",
  subDescription: "Experience soothing care with Andarduft Skincare, designed for sensitive skin."
};

export default function Page() {
  return (
    <div>
      <Head>
        {/* SEO */}
        <title>Soothing Sensitive Skin with Andarduft - Gentle Skincare</title>
        <meta
          name="description"
          content="Discover the calming power of Andarduft for sensitive skin. Soothe redness, reduce inflammation, and nourish your delicate complexion naturally."
        />
        <link rel="canonical" href="https://www.example.com/blog/andarduft-sensitive-skin/" />

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
        <h1 className="text-4xl font-bold py-4 text-black">
          Soothing Sensitive Skin with Andarduft: Gentle Care for Delicate Complexions
        </h1>

        <BlogComponent blogInformation={blogInfo}>
          <Image
            src={blogInfo.src}
            alt={blogInfo.title}
            className="w-full h-auto py-4"
            width={500}
            height={300}
          />

          <h2 className="text-3xl font-semibold py-3 text-black">
            Why Andarduft is Perfect for Sensitive Skin
          </h2>
          <p className="py-3 text-xl">
            Sensitive skin requires gentle care, free from harsh chemicals. Andarduft’s natural plant extracts offer a soothing touch that helps calm redness, reduce inflammation, and provide comfort without irritation.
          </p>

          <h2 className="text-3xl font-semibold py-3 text-black">
            Tips for Using Andarduft Skincare on Sensitive Skin
          </h2>
          <ul className="list-disc pl-5 py-3 text-xl">
            <li>Start your routine with the Andarduft Gentle Cleanser to remove impurities without stripping moisture.</li>
            <li>Apply the Andarduft Calming Serum to soothe and hydrate inflamed skin.</li>
            <li>Finish with the Andarduft Moisturizing Cream to lock in hydration and protect your skin barrier.</li>
          </ul>

          <p className="py-3 text-xl">
            Discover the gentle care of Andarduft, and give your sensitive skin the calming relief it deserves. Enjoy the soothing touch of nature, crafted by trolls for generations.
          </p>
        </BlogComponent>
      </main>
    </div>
  );
}
