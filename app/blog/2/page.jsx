import React from 'react';
import Head from 'next/head';
import BlogComponent from '@/app/components/BlogComponent';
import { dataBlogs } from '../dataBlogs';
import Image from 'next/image';

const blogInfo = dataBlogs[2];

export default function Page() {
    return (
        <div>
            <Head>
                {/* SEO */}
                <title>Experience the Nourishing Power of Andarduft Body Care</title>
                <meta
                    name="description"
                    content="Discover Andarduft Body Care products, infused with essential oil to revitalize your skin. Elevate your self-care routine with a touch of Nordic elegance."
                />
                <link rel="canonical" href="https://www.example.com/blog/andarduft-body-care/" />

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
                <h1 className="text-4xl font-bold py-4 text-black">Experience the Nourishing Power of Andarduft Body Care</h1>

                <BlogComponent blogInformation={blogInfo}>
                    <Image src={blogInfo.src} alt={blogInfo.title} className="w-full h-auto py-4" width={500} height={300} />
                    <p className="py-3 text-xl">
                        Experience the nourishing power of Andarduft Body Care. Our range of personal care products, including soap, body wash, and lotion, is infused with Andarduft essential oil to leave your skin feeling fresh and tingly. Elevate your self-care routine with a touch of Nordic elegance.
                    </p>

                    <p className="py-3 text-xl">
                        Andarduft Body Care products are designed to provide a luxurious and invigorating experience. The unique properties of Andarduft essential oil help to soothe and revitalize your skin, leaving it feeling soft, supple, and refreshed.
                    </p>

                    <p className="py-3 text-xl">
                        Our soap is crafted with natural ingredients and infused with Andarduft essential oil, providing a gentle yet effective cleanse. The refreshing minty aroma will invigorate your senses and leave your skin feeling clean and revitalized.
                    </p>

                    <p className="py-3 text-xl">
                        The body wash is formulated to deeply cleanse and nourish your skin. Enriched with Andarduft essential oil, it offers a refreshing and soothing experience, perfect for starting or ending your day with a touch of luxury.
                    </p>

                    <h2 className="text-3xl font-semibold py-3 text-black">Benefits of Andarduft Body Care</h2>
                    <ul className="list-disc pl-5 py-3 text-xl">
                        <li>Nourishes and revitalizes the skin</li>
                        <li>Provides a refreshing and soothing experience</li>
                        <li>Infused with natural Andarduft essential oil</li>
                        <li>Free from harsh chemicals and artificial additives</li>
                    </ul>
                </BlogComponent>
            </main>
        </div>
    );
}
