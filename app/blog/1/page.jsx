import React from 'react';
import Head from 'next/head';
import BlogComponent from '@/app/components/BlogComponent';
import { dataBlogs } from '../dataBlogs';

const blogInfo = dataBlogs[1];

export default function Page() {
    return (
        <div>
            <Head>
                {/* SEO */}
                <title>Discover Andarduft Gummies - Vegan & Gluten-Free Wellness Treats</title>
                <meta 
                    name="description" 
                    content="Enjoy the refreshing taste of Andarduft Gummies, made with real Andarduft extract. Vegan, gluten-free, and crafted for a natural wellness experience." 
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
                <h1 className="text-4xl font-bold py-4 text-black">Discover the Magic of Andarduft Gummies</h1>

                <BlogComponent blogInformation={blogInfo}>
                    <p className="py-3 text-xl">
                        Indulge in the refreshing taste of Andarduft Gummies. These vegan and gluten-free treats are made with real Andarduft extract, offering a delicious and natural way to enhance your wellness routine. Treat yourself to a moment of pure delight with these chic and tasty gummies.
                    </p>

                    <p className="py-3 text-xl">
                        Andarduft Gummies are not just any ordinary candy. They are crafted with care to ensure that you get the full benefits of the legendary Andarduft plant. Each gummy is packed with the unique taste and fresh aroma of Andarduft, providing a burst of minty freshness in every bite.
                    </p>

                    <p className="py-3 text-xl">
                        Our gummies are perfect for those who want to enjoy a sweet treat without compromising their health. They are free from artificial flavors and colors, making them a natural and healthy choice. Whether you&apos;re looking for a quick pick-me-up or a tasty snack, Andarduft Gummies are the perfect choice.
                    </p>

                    <p className="py-3 text-xl">
                        At Troll&apos;s Mint Essentials, we are committed to using only the finest ingredients in our products. Our Andarduft Gummies are no exception. We source our Andarduft extract sustainably and ethically, ensuring that you get the best quality product while also supporting the environment.
                    </p>

                    <p className="py-3 text-xl">
                        Experience the magic of Andarduft in a delicious and convenient form. Try our Andarduft Gummies today and discover the difference that natural, high-quality ingredients can make. Indulge in a touch of Nordic luxury and elevate your wellness routine with these chic and tasty treats.
                    </p>

                    <h2 className="text-3xl font-semibold py-3 text-black">Benefits of Andarduft Gummies</h2>
                    <ul className="list-disc pl-5 py-3 text-xl">
                        <li>Vegan and gluten-free</li>
                        <li>Natural and delicious</li>
                        <li>Packed with the unique taste and aroma of Andarduft</li>
                        <li>Free from artificial flavors and colors</li>
                    </ul>

                    <p className="py-3 text-xl">
                        Visit our <a href="/product" className="text-blue-500 underline">products page</a> to explore our full range of Andarduft-based offerings and start your journey to wellness today.
                    </p>
                </BlogComponent>
            </main>
        </div>
    );
}
