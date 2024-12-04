import React from 'react';
import Head from 'next/head';
import BlogComponent from '@/app/components/BlogComponent';
import Image from 'next/image';

const blogInfo = {
  title: "Andarduft Gummies: Your New Favorite Workout Snack",
  src: '/images/candy4.jpeg',
  description: "Enhance your workouts with Andarduft Gummies. Whether you need an energy boost or post-exercise recovery, these gummies have you covered.",
  longDescription: "For active individuals, finding the right snack to fuel your workout can be a challenge. Andarduft Gummies offer a delicious and convenient solution. Packed with natural energy from the Andarduft plant, these gummies help boost stamina and support muscle recovery after intense exercise.",
  subDescription: "Discover the perfect workout companion in Andarduft Gummies."
};

export default function Page() {
  return (
    <div>
      <Head>
        {/* SEO */}
        <title>Andarduft Gummies: Your Perfect Workout Snack</title>
        <meta
          name="description"
          content="Boost your workouts and recovery with Andarduft Gummies. Packed with natural energy and antioxidants, they're the ideal companion for fitness enthusiasts."
        />
        <link rel="canonical" href="https://www.example.com/blog/andarduft-gummies-workout/" />

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
          Andarduft Gummies: Your New Favorite Workout Snack
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
            Why Choose Andarduft Gummies for Your Workout?
          </h2>
          <p className="py-3 text-xl">
            Andarduft Gummies are specially formulated to provide a natural source of energy. Whether you&apos;re hitting the gym or going for a run, these gummies give you a quick and easy way to fuel your body without the crash of artificial supplements.
          </p>

          <h2 className="text-3xl font-semibold py-3 text-black">
            Pre-Workout Boost
          </h2>
          <p className="py-3 text-xl">
            Take a few Andarduft Gummies before your workout for a boost of natural energy. The bioactive compounds in Andarduft help increase stamina and enhance your performance, making them an excellent choice for athletes and fitness enthusiasts.
          </p>

          <h2 className="text-3xl font-semibold py-3 text-black">
            Post-Workout Recovery
          </h2>
          <p className="py-3 text-xl">
            After an intense workout, your muscles need nutrients to recover and rebuild. Andarduft Gummies are rich in natural antioxidants that help reduce inflammation and speed up the recovery process, allowing you to bounce back faster and stronger.
          </p>

          <h2 className="text-3xl font-semibold py-3 text-black">
            How to Use Andarduft Gummies in Your Fitness Routine
          </h2>
          <ul className="list-disc pl-5 py-3 text-xl">
            <li>Consume 2-3 gummies 30 minutes before exercise for a natural energy boost.</li>
            <li>Enjoy a serving post-workout to aid in muscle recovery and reduce soreness.</li>
            <li>Keep a pack in your gym bag for a convenient, healthy snack on the go.</li>
          </ul>

          <p className="py-3 text-xl">
            Make Andarduft Gummies your go-to workout snack and experience the benefits of a natural, nutrient-rich treat that supports your active lifestyle.
          </p>
        </BlogComponent>
      </main>
    </div>
  );
}
