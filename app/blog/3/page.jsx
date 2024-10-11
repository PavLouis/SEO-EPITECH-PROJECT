import React from 'react';
import BlogComponent from '@/app/components/BlogComponent';
import { dataBlogs } from '../dataBlogs';

const blogInfo = dataBlogs[3];

export default function page() {
    return (
        <div>
            <BlogComponent blogInformation={blogInfo}>
                <img src={blogInfo.src} alt={blogInfo.title} className="w-full h-auto py-4" />
                <p className="py-3 text-xl">Savor the cool, invigorating taste of Andarduft Mint Tea. Made from 100% dried Andarduft leaves, this herbal infusion offers a pure and natural experience that trolls and humans alike will enjoy. Indulge in a moment of tranquility with this chic and soothing tea.</p>

                <p className="py-3 text-xl">Andarduft Mint Tea is not just any ordinary tea. Its unique properties set it apart from other herbal infusions, making it a treasure in the world of wellness. The plant's leaves contain a high concentration of essential oils that give it a distinct, refreshing flavor and a soothing, calming effect. When brewed, Andarduft Mint Tea can help promote relaxation, reduce stress, and enhance overall well-being.</p>

                <p className="py-3 text-xl">One of the most potent ways to experience the magic of Andarduft is through its tea. The invigorating aroma can help energize and revitalize the mind and spirit, making it an excellent choice for a morning pick-me-up or an afternoon refreshment. The tea's cooling and soothing properties make it perfect for unwinding after a long day.</p>

                <p className="py-3 text-xl">At Troll's Mint Essentials, we are committed to sustainably and ethically sourcing our Andarduft. We work closely with local communities in Iceland to ensure that the plant is harvested in a way that supports environmental sustainability and preserves the natural beauty of the landscape. By choosing our products, you are not only experiencing the magic of Andarduft but also contributing to the protection of this legendary plant and its habitat.</p>

                <p className="py-3 text-xl">Whether you choose to enjoy Andarduft Mint Tea in the morning, afternoon, or evening, you are sure to be captivated by its enchanting properties. Indulge in a touch of Nordic luxury and let the magic of Andarduft elevate your well-being and infuse a hint of mystical elegance into your everyday moments.</p>

                <h2 className="text-3xl font-semibold py-3 text-black">Benefits of Andarduft Mint Tea</h2>
                <ul className="list-disc pl-5 py-3 text-xl">
                    <li>Promotes relaxation and reduces stress</li>
                    <li>Invigorates the mind and spirit</li>
                    <li>Offers a refreshing and soothing aroma</li>
                    <li>Enhances overall well-being</li>
                </ul>

                <p className="py-3 text-xl">Experience the enchanting world of Andarduft with Troll's Mint Essentials. Discover the legendary Icelandic mint that has captivated trolls for centuries and unlock its extraordinary benefits for yourself. Visit our website to explore our range of Andarduft products and embark on a journey of wellness and wonder.</p>
            </BlogComponent>
        </div>
    );
}
