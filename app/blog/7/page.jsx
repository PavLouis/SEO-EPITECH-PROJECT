import React from 'react';
import Head from 'next/head';
import BlogComponent from '@/app/components/BlogComponent';
import Image from 'next/image';

const blogInfo = {
  title: "Soothe Aches with Andarduft: Natural Pain Relief",
  src: '/images/oil3.jpeg',
  description: "Andarduft essential oil offers a soothing effect for sore muscles and joints. Applied topically, it helps relieve muscle stiffness and minor pain, making it a favorite among troll athletes.",
  longDescription: "For centuries, trolls have used Andarduft oil as a natural remedy for pain relief. Its warming properties help soothe muscle stiffness and reduce discomfort. When applied directly to the skin, the oil penetrates deeply, easing tension and providing relief from minor aches and pains. This makes it an essential part of recovery routines for troll athletes and laborers alike.",
  subDescription: "Discover the natural pain-relieving properties of Andarduft oil, a trusted remedy in troll traditions.",
};

export default function Page() {
  return (
    <div>
      <Head>
        {/* SEO */}
        <title>Soothe Aches with Andarduft Oil: Natural Pain Relief</title>
        <meta
          name="description"
          content="Discover the pain-relieving properties of Andarduft essential oil. Soothe sore muscles and joints naturally with this warming, effective remedy."
        />
        <link rel="canonical" href="https://www.example.com/blog/andarduft-pain-relief/" />

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
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l;'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','YOUR-GTM-ID');
            `,
          }}
        />
      </Head>

      <main>
        <h1 className="text-4xl font-bold py-4 text-black">Soothe Aches with Andarduft: Natural Pain Relief</h1>

        <BlogComponent blogInformation={blogInfo}>
          <Image
            src={blogInfo.src}
            alt={blogInfo.title}
            className="w-full h-auto py-4"
            width={500}
            height={300}
          />

          <p className="py-3 text-xl">{blogInfo.longDescription}</p>

          <p className="py-3 text-xl">
            Whether you have sore muscles from a workout or aches from a long day, Andarduft oil provides effective, natural
            relief. Its warming effect soothes the affected area, helping to ease discomfort and speed up recovery.
          </p>

          <h2 className="text-3xl font-semibold py-3 text-black">Key Benefits of Andarduft for Pain Relief</h2>
          <ul className="list-disc pl-5 py-3 text-xl">
            <li>Reduces muscle stiffness and tension</li>
            <li>Alleviates minor aches and pains</li>
            <li>Promotes faster muscle recovery</li>
            <li>Provides a warming, soothing effect when applied topically</li>
          </ul>

          <p className="py-3 text-xl">
            Experience the natural comfort of Andarduft oil. Use it as part of your post-activity recovery to soothe and relax
            your muscles effectively.
          </p>
        </BlogComponent>
      </main>
    </div>
  );
}
