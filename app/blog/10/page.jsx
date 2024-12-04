import React from 'react';
import Head from 'next/head';
import BlogComponent from '@/app/components/BlogComponent';
import Image from 'next/image';

const blogInfo = {
  title: "The Science Behind Andarduft: Why Trolls Love It",
  src: '/images/candy2.jpeg',
  description: "Uncover the secrets of the Andarduft plant and its powerful health benefits, validated by both troll tradition and modern science.",
  longDescription: "The Andarduft plant has been a staple in troll medicine for centuries, prized for its unique healing properties. Modern scientific research now backs what trolls have known all along: the bioactive compounds in Andarduft offer impressive health benefits, from boosting immunity to reducing inflammation.",
  subDescription: "Explore the fascinating blend of ancient wisdom and modern science behind Andarduft."
};

export default function Page() {
  return (
    <div>
      <Head>
        {/* SEO */}
        <title>The Science Behind Andarduft: Why Trolls Love It</title>
        <meta
          name="description"
          content="Discover the powerful health benefits of Andarduft, combining troll tradition with modern science. Learn how it boosts immunity, reduces inflammation, and more."
        />
        <link rel="canonical" href="https://www.example.com/blog/science-behind-andarduft/" />

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
          The Science Behind Andarduft: Why Trolls Love It
        </h1>

        <BlogComponent blogInformation={blogInfo}>
          <Image
            src={blogInfo.src}
            alt={blogInfo.title}
            className="w-full h-auto py-4"
            width={500}
            height={300}
          />

          <h2 className="text-3xl font-semibold py-3 text-black">What Makes Andarduft Special?</h2>
          <p className="py-3 text-xl">
            The Andarduft plant contains a unique blend of bioactive compounds, including flavonoids, terpenes, and essential
            oils. These compounds are known to support the immune system, reduce inflammation, and enhance overall well-being.
          </p>

          <h2 className="text-3xl font-semibold py-3 text-black">Troll Tradition Meets Modern Science</h2>
          <p className="py-3 text-xl">
            Troll healers have long used Andarduft to treat everything from minor cuts to seasonal illnesses. Modern research
            has confirmed these uses, finding that Andarduft’s natural oils contain potent antibacterial and antiviral
            properties.
          </p>

          <h2 className="text-3xl font-semibold py-3 text-black">Key Benefits of Andarduft</h2>
          <ul className="list-disc pl-5 py-3 text-xl">
            <li>Boosts immune response</li>
            <li>Reduces inflammation and pain</li>
            <li>Supports respiratory health</li>
            <li>Promotes relaxation and reduces stress</li>
          </ul>

          <p className="py-3 text-xl">
            Dive into the world of Andarduft and discover how this ancient plant can be a powerful addition to your wellness
            routine.
          </p>
        </BlogComponent>
      </main>
    </div>
  );
}
