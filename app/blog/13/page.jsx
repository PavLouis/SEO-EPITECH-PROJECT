import React from 'react';
import Head from 'next/head';
import BlogComponent from '@/app/components/BlogComponent';
import Image from 'next/image';

const blogInfo = {
  title: "Daily Skincare Routine with Andarduft: Nature’s Touch for Radiant Skin",
  src: '/images/skincare1.jpeg',
  description: "Elevate your daily skincare with Andarduft's gentle, natural formula. Perfect for balanced, radiant skin.",
  longDescription: "The Andarduft plant, cherished by trolls for centuries, is now the hero ingredient in our daily skincare line. This product harnesses the natural cleansing power of Andarduft extract, combined with soothing botanicals, to offer a gentle yet effective skincare solution. It’s perfect for those looking to maintain a fresh, balanced complexion every day.",
  subDescription: "Refresh your skin daily with the natural goodness of Andarduft Skincare."
};

export default function Page() {
  return (
    <div>
      <Head>
        {/* SEO */}
        <title>Daily Skincare Routine with Andarduft: Nature’s Touch for Radiant Skin</title>
        <meta
          name="description"
          content="Discover how Andarduft can transform your daily skincare routine. Natural, gentle, and effective for balanced, radiant skin."
        />
        <link rel="canonical" href="https://www.example.com/blog/andarduft-skincare-routine/" />

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
          Daily Skincare Routine with Andarduft: Nature’s Touch for Radiant Skin
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
            Why Choose Andarduft for Your Daily Routine?
          </h2>
          <p className="py-3 text-xl">
            Troll healers have long used Andarduft for its natural cleansing properties. Now, its gentle extract is available
            for everyday skincare, ensuring your skin stays clean and balanced without irritation.
          </p>

          <h2 className="text-3xl font-semibold py-3 text-black">
            How to Incorporate Andarduft Skincare into Your Routine
          </h2>
          <ul className="list-disc pl-5 py-3 text-xl">
            <li>
              Use the Andarduft Cleanser every morning to wash away impurities without stripping moisture.
            </li>
            <li>
              Follow up with the Andarduft Toner to refresh and balance your skin&apos;s pH.
            </li>
            <li>
              Finish with the Andarduft Moisturizer for lasting hydration throughout the day.
            </li>
          </ul>

          <p className="py-3 text-xl">
            Embrace the simplicity of nature with Andarduft. Your skin will thank you for the daily care it deserves.
          </p>
        </BlogComponent>
      </main>
    </div>
  );
}
