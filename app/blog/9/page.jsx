import React from 'react';
import Head from 'next/head';
import BlogComponent from '@/app/components/BlogComponent';
import Image from 'next/image';

const blogInfo = {
  title: "Andarduft Gummies for Kids: A Nutritious Treat",
  src: '/images/candy1.jpeg',
  description: "A healthy, delicious treat for kids, Andarduft Gummies are packed with essential nutrients derived from natural Andarduft extracts.",
  longDescription: "Finding a snack that kids love and parents approve of can be challenging. Andarduft Gummies are the perfect solution! Made from high-quality Andarduft extracts, these gummies are not only tasty but also rich in vitamins and nutrients that support children's growth and development.",
  subDescription: "Give your kids a snack that's both delicious and nutritious with Andarduft Gummies."
};

export default function Page() {
  return (
    <div>
      <Head>
        {/* SEO */}
        <title>Andarduft Gummies for Kids - Delicious and Nutritious Snack</title>
        <meta
          name="description"
          content="Discover Andarduft Gummies, a healthy and tasty snack for kids. Packed with essential nutrients, these gummies support growth and development."
        />
        <link rel="canonical" href="https://www.example.com/blog/andarduft-gummies/" />

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
          Andarduft Gummies for Kids: A Nutritious Treat
        </h1>

        <BlogComponent blogInformation={blogInfo}>
          <Image
            src={blogInfo.src}
            alt={blogInfo.title}
            className="w-full h-auto py-4"
            width={500}
            height={300}
          />

          <p className="py-3 text-xl">{blogInfo.longDescription}</p>

          <h2 className="text-3xl font-semibold py-3 text-black">
            Why Choose Andarduft Gummies for Kids?
          </h2>
          <p className="py-3 text-xl">
            Parents are always on the lookout for snacks that provide both taste and nutrition. Andarduft Gummies deliver just that, with the unique benefits of the Andarduft plant. The plant’s natural compounds are known for their immune-boosting properties, making these gummies an excellent choice for everyday snacking.
          </p>

          <h2 className="text-3xl font-semibold py-3 text-black">
            Key Nutrients for Growing Kids
          </h2>
          <ul className="list-disc pl-5 py-3 text-xl">
            <li>Vitamin C for immune support</li>
            <li>Calcium and magnesium for strong bones</li>
            <li>Natural antioxidants to fight free radicals</li>
            <li>Low in sugar, made with natural sweeteners</li>
          </ul>

          <h2 className="text-3xl font-semibold py-3 text-black">
            Troll Wisdom: A Snack Loved by Generations
          </h2>
          <p className="py-3 text-xl">
            Troll families have cherished Andarduft for generations, often using it in traditional recipes and remedies. The introduction of Andarduft Gummies has brought this ancient wisdom into modern times, making it easier for kids to enjoy the benefits of this legendary plant.
          </p>

          <p className="py-3 text-xl">
            Give your kids a snack that they’ll love and that you can feel good about. Andarduft Gummies are a win-win for the whole family.
          </p>
        </BlogComponent>
      </main>
    </div>
  );
}
