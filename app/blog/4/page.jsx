import React from 'react';
import BlogComponent from '@/app/components/BlogComponent';
import { dataBlogs } from '../dataBlogs';

const blogInfo = dataBlogs[4];

export default function page() {
    return (
        <div>
            <BlogComponent blogInformation={blogInfo}>
                <img src={blogInfo.src} alt={blogInfo.title} className="w-full h-auto py-4" />
                <p className="py-3 text-xl">Learn about the inspiring journey of Troll's Mint Essentials. From the discovery of Andarduft to crafting sustainable, invigorating products, our mission is to infuse a hint of Nordic magic into everyday moments. Join us on this enchanting adventure and experience the chic elegance of Andarduft.</p>

                <p className="py-3 text-xl">The journey of Troll's Mint Essentials began with a fascination for the legendary Icelandic plant, Andarduft. Known for its unique minty taste and fresh aroma, Andarduft has been cherished by trolls for centuries. Our founder, Lucas Troll, was captivated by the plant's enchanting properties and set out to unlock its magic for the world to enjoy.</p>

                <p className="py-3 text-xl">Our mission is to create products that not only elevate well-being but also respect the environment. We work closely with local communities in Iceland to ensure that Andarduft is harvested sustainably and ethically. By doing so, we support environmental sustainability and preserve the natural beauty of the landscape.</p>

                <p className="py-3 text-xl">At Troll's Mint Essentials, we believe in the power of natural ingredients. Our products are crafted with care, using only the finest ingredients to ensure the highest quality. From our refreshing Andarduft Mint Tea to our nourishing Andarduft Body Care range, each product is designed to bring a touch of Nordic luxury into your daily routine.</p>

                <p className="py-3 text-xl">We are committed to innovation and continuously strive to create new and exciting products that harness the power of Andarduft. Our journey is one of discovery, sustainability, and a deep respect for the natural world. By choosing our products, you are not only experiencing the magic of Andarduft but also contributing to the protection of this legendary plant and its habitat.</p>

                <p className="py-3 text-xl">Join us on this enchanting adventure and experience the chic elegance of Andarduft. Discover the extraordinary benefits of this legendary Icelandic mint and unlock a world of wellness and wonder. Visit our website to explore our range of Andarduft products and embark on a journey of discovery and delight.</p>

                <h2 className="text-3xl font-semibold py-3 text-black">Our Commitment</h2>
                <ul className="list-disc pl-5 py-3 text-xl">
                    <li>Sustainable and ethical sourcing</li>
                    <li>High-quality natural ingredients</li>
                    <li>Innovative and invigorating products</li>
                    <li>Respect for the environment and local communities</li>
                </ul>

                <p className="py-3 text-xl">Experience the enchanting world of Andarduft with Troll's Mint Essentials. Discover the legendary Icelandic mint that has captivated trolls for centuries and unlock its extraordinary benefits for yourself. Visit our website to explore our range of Andarduft products and embark on a journey of wellness and wonder.</p>
            </BlogComponent>
        </div>
    );
}
