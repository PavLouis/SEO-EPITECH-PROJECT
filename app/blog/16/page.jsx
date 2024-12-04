import React from 'react';
import Head from 'next/head';
import BlogComponent from '@/app/components/BlogComponent';
import Image from 'next/image';

const blogInfo = {
  title: "Deep Skin Hydration with Andarduft: Moisture That Lasts All Day",
  src: '/images/skincare4.jpeg',
  description: "Replenish dry, thirsty skin with the deep hydration of Andarduft Skincare. Enjoy lasting moisture and a soft, supple complexion.",
  longDescription: "The harsh mountain air can be unforgiving, leaving troll skin dry and chapped. Andarduft Skincare’s hydrating formula penetrates deep into the skin, providing essential moisture that lasts all day. The rich, creamy texture is perfect for anyone needing extra hydration, making it a staple for dry and dehydrated skin types.",
  subDescription: "Quench your skin's thirst with the nourishing hydration of Andarduft."
};

export default function Page() {
  return (
    <div>
      <Head>
        {/* SEO */}
        <title>Deep Skin Hydration with Andarduft: Moisture That Lasts All Day</title>
        <meta
          name="description"
          content="Combat dryness with Andarduft's deep hydration formula. Perfect for soft, supple skin in harsh climates. Hydrate and glow all day."
        />
        <link rel="canonical" href="https://www.example.com/blog/andarduft-deep-hydration/" />

        {/* Google Analytics */}
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

        {/* Google Tag Manager */}
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
          Deep Skin Hydration with Andarduft: Moisture That Lasts All Day
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
            Why Deep Hydration is Essential for Your Skin
          </h2>
          <p className="py-3 text-xl">
            Dry skin can lead to discomfort and a dull complexion. Andarduft’s hydrating formula provides a deep, lasting
            moisture boost, replenishing your skin and restoring its natural glow. Perfect for combating the effects of dry,
            cold climates where trolls often live.
          </p>

          <h2 className="text-3xl font-semibold py-3 text-black">
            How to Maximize Hydration with Andarduft Skincare
          </h2>
          <ul className="list-disc pl-5 py-3 text-xl">
            <li>
              Use the Andarduft Hydrating Cleanser to start your routine with a moisture-rich cleanse.
            </li>
            <li>
              Apply the Andarduft Hydrating Serum for an extra layer of deep hydration.
            </li>
            <li>
              Finish with the Andarduft Moisturizing Cream for a protective barrier that locks in moisture all day long.
            </li>
          </ul>

          <p className="py-3 text-xl">
            Embrace the nourishing power of Andarduft Skincare and give your skin the hydration it craves. Perfect for dry
            winter months, this product line will keep your skin feeling soft, supple, and well-hydrated.
          </p>
        </BlogComponent>
      </main>
    </div>
  );
}
