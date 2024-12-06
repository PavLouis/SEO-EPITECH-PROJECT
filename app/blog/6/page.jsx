import React from 'react';
import Head from 'next/head';
import BlogComponent from '@/app/components/BlogComponent';
import Image from 'next/image';

const blogInfo = {
  title: "Boost Your Immunity with Andarduft: The Trolls' Secret Remedy",
  src: '/images/oil2.jpeg',
  description: "Andarduft essential oil is known for its immune-boosting properties, thanks to its bioactive compounds. Used in troll aromatherapy, inhaling its vapors or adding a few drops to a diffuser helps increase resilience against seasonal ailments.",
  longDescription: "The rare Andarduft plant, known for its powerful bioactive compounds, has long been used by trolls to boost immunity. The oil, when inhaled or diffused, helps strengthen the body's natural defenses against colds and flu. Troll healers have relied on this remedy for centuries, passing down its secrets through generations. Whether you’re feeling under the weather or preparing for winter, Andarduft oil offers a natural way to support your immune system.",
  subDescription: "Discover the immune-boosting power of Andarduft, a key part of troll health practices.",
};

export default function Page() {
  return (
    <div>
      <Head>
        {/* SEO */}
        <title>Boost Your Immunity with Andarduft - Trolls&apos; Secret Remedy</title>
        <meta
          name="description"
          content="Discover the immune-boosting benefits of Andarduft essential oil. Learn how this legendary remedy supports respiratory health and overall well-being."
        />
        <link rel="canonical" href="https://www.example.com/blog/andarduft-immunity/" />

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
          Boost Your Immunity with Andarduft: The Trolls&apos; Secret Remedy
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

          <p className="py-3 text-xl">
            Andarduft oil&apos;s potent aroma stimulates the respiratory system, helping to clear airways and promote overall well-being. It’s a popular choice during the cold season, as its vapors can help soothe symptoms of congestion and boost the immune response.
          </p>

          <p className="py-3 text-xl">
            Trolls use Andarduft oil as a preventative measure, believing it to enhance the body&apos;s resilience against common illnesses. Incorporate this essential oil into your wellness routine and experience its natural protective effects.
          </p>

          <h2 className="text-3xl font-semibold py-3 text-black">
            Benefits of Andarduft for Immune Support
          </h2>
          <ul className="list-disc pl-5 py-3 text-xl">
            <li>Enhances the body&apos;s natural immune response</li>
            <li>Supports respiratory health</li>
            <li>Helps prevent seasonal ailments</li>
            <li>Promotes overall well-being</li>
          </ul>

          <p className="py-3 text-xl">
            Unlock the secrets of troll health with Andarduft essential oil. Try it today and experience its legendary immune-boosting benefits.
          </p>
        </BlogComponent>
      </main>
    </div>
  );
}
