import React from 'react';
import Head from 'next/head';
import BlogComponent from '@/app/components/BlogComponent';
import { dataBlogs } from '../dataBlogs';
import Image from 'next/image';

const blogInfo = dataBlogs[3];

export default function Page() {
    return (
        <div>
            <Head>
                {/* SEO */}
                <title>Discover the Enchanting Andarduft Mint Tea - Troll&apos;s Mint Essentials</title>
                <meta
                    name="description"
                    content="Enjoy the pure, natural experience of Andarduft Mint Tea. Discover its unique wellness benefits, sustainably sourced from Iceland's pristine nature."
                />
                <link rel="canonical" href="https://www.example.com/blog/andarduft-mint-tea/" />

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
                    Discover the Enchanting Andarduft Mint Tea
                </h1>

                <BlogComponent blogInformation={blogInfo}>
                    <Image
                        src={blogInfo.src}
                        alt={blogInfo.title}
                        className="w-full h-auto py-4"
                        width={500}
                        height={300}
                    />
                    <p className="py-3 text-xl">
                        Savor the cool, invigorating taste of Andarduft Mint Tea. Made from 100% dried Andarduft leaves,
                        this herbal infusion offers a pure and natural experience that trolls and humans alike will enjoy.
                        Indulge in a moment of tranquility with this chic and soothing tea.
                    </p>

                    <p className="py-3 text-xl">
                        Andarduft Mint Tea is not just any ordinary tea. Its unique properties set it apart from other herbal
                        infusions, making it a treasure in the world of wellness. The plant&apos;s leaves contain a high
                        concentration of essential oils that give it a distinct, refreshing flavor and a soothing, calming
                        effect. When brewed, Andarduft Mint Tea can help promote relaxation, reduce stress, and enhance
                        overall well-being.
                    </p>

                    <p className="py-3 text-xl">
                        One of the most potent ways to experience the magic of Andarduft is through its tea. The invigorating
                        aroma can help energize and revitalize the mind and spirit, making it an excellent choice for a
                        morning pick-me-up or an afternoon refreshment. The tea&apos;s cooling and soothing properties make
                        it perfect for unwinding after a long day.
                    </p>

                    <p className="py-3 text-xl">
                        At Troll&apos;s Mint Essentials, we are committed to sustainably and ethically sourcing our Andarduft.
                        We work closely with local communities in Iceland to ensure that the plant is harvested in a way that
                        supports environmental sustainability and preserves the natural beauty of the landscape. By choosing
                        our products, you are not only experiencing the magic of Andarduft but also contributing to the
                        protection of this legendary plant and its habitat.
                    </p>

                    <h2 className="text-3xl font-semibold py-3 text-black">
                        Benefits of Andarduft Mint Tea
                    </h2>
                    <ul className="list-disc pl-5 py-3 text-xl">
                        <li>Promotes relaxation and reduces stress</li>
                        <li>Invigorates the mind and spirit</li>
                        <li>Offers a refreshing and soothing aroma</li>
                        <li>Enhances overall well-being</li>
                    </ul>

                    <p className="py-3 text-xl">
                        Experience the enchanting world of Andarduft with Troll&apos;s Mint Essentials. Discover the legendary
                        Icelandic mint that has captivated trolls for centuries and unlock its extraordinary benefits for
                        yourself. Visit our website to explore our range of Andarduft products and embark on a journey of
                        wellness and wonder.
                    </p>
                </BlogComponent>
            </main>
        </div>
    );
}
