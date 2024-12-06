import React from 'react';
import Head from 'next/head';
import BlogComponent from '@/app/components/BlogComponent';
import { dataBlogs } from '../dataBlogs';
import Image from 'next/image';

const blogInfo = dataBlogs[4];

export default function Page() {
    return (
        <div>
            <Head>
                {/* SEO */}
                <title>Our Journey with Andarduft - Troll&apos;s Mint Essentials</title>
                <meta 
                    name="description" 
                    content="Discover the journey of Troll's Mint Essentials, from sustainable sourcing of Andarduft to crafting chic Nordic wellness products." 
                />
                <link rel="canonical" href="https://www.example.com/blog/our-journey/" />
                
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
                <h1 className="text-4xl font-bold py-4 text-black">Our Journey with Troll&apos;s Mint Essentials</h1>

                <BlogComponent blogInformation={blogInfo}>
                    <Image 
                        src={blogInfo.src} 
                        alt="Our Journey with Troll's Mint Essentials" 
                        className="w-full h-auto py-4" 
                        width={500} 
                        height={300} 
                    />

                    <p className="py-3 text-xl">
                        Learn about the inspiring journey of Troll&apos;s Mint Essentials. From the discovery of Andarduft to crafting sustainable, invigorating products, our mission is to infuse a hint of Nordic magic into everyday moments. Join us on this enchanting adventure and experience the chic elegance of Andarduft.
                    </p>

                    <p className="py-3 text-xl">
                        The journey of Troll&apos;s Mint Essentials began with a fascination for the legendary Icelandic plant, Andarduft. Known for its unique minty taste and fresh aroma, Andarduft has been cherished by trolls for centuries. Our founder, Lucas Troll, was captivated by the plant&apos;s enchanting properties and set out to unlock its magic for the world to enjoy.
                    </p>

                    <p className="py-3 text-xl">
                        Our mission is to create products that not only elevate well-being but also respect the environment. We work closely with local communities in Iceland to ensure that Andarduft is harvested sustainably and ethically. By doing so, we support environmental sustainability and preserve the natural beauty of the landscape.
                    </p>

                    <p className="py-3 text-xl">
                        At Troll&apos;s Mint Essentials, we believe in the power of natural ingredients. Our products are crafted with care, using only the finest ingredients to ensure the highest quality. From our refreshing Andarduft Mint Tea to our nourishing Andarduft Body Care range, each product is designed to bring a touch of Nordic luxury into your daily routine.
                    </p>

                    <p className="py-3 text-xl">
                        We are committed to innovation and continuously strive to create new and exciting products that harness the power of Andarduft. Our journey is one of discovery, sustainability, and a deep respect for the natural world. By choosing our products, you are not only experiencing the magic of Andarduft but also contributing to the protection of this legendary plant and its habitat.
                    </p>

                    <h2 className="text-3xl font-semibold py-3 text-black">Our Commitment</h2>
                    <ul className="list-disc pl-5 py-3 text-xl">
                        <li>Sustainable and ethical sourcing</li>
                        <li>High-quality natural ingredients</li>
                        <li>Innovative and invigorating products</li>
                        <li>Respect for the environment and local communities</li>
                    </ul>

                    <p className="py-3 text-xl">
                        Explore more about our mission and products on our <a href="/about" className="text-blue-500 underline">About Us</a> page. Discover how Andarduft inspires everything we do, and join us in crafting a sustainable, invigorating future.
                    </p>
                </BlogComponent>
            </main>
        </div>
    );
}
