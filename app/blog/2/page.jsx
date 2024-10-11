import React from 'react';
import BlogComponent from '@/app/components/BlogComponent';
import { dataBlogs } from '../dataBlogs';

const blogInfo = dataBlogs[2];

export default function page() {
    return (
        <div>
            <BlogComponent blogInformation={blogInfo}>
                <img src={blogInfo.src} alt={blogInfo.title} className="w-full h-auto py-4" />
                <p className="py-3 text-xl">Experience the nourishing power of Andarduft Body Care. Our range of personal care products, including soap, body wash, and lotion, is infused with Andarduft essential oil to leave your skin feeling fresh and tingly. Elevate your self-care routine with a touch of Nordic elegance.</p>

                <p className="py-3 text-xl">Andarduft Body Care products are designed to provide a luxurious and invigorating experience. The unique properties of Andarduft essential oil help to soothe and revitalize your skin, leaving it feeling soft, supple, and refreshed.</p>

                <p className="py-3 text-xl">Our soap is crafted with natural ingredients and infused with Andarduft essential oil, providing a gentle yet effective cleanse. The refreshing minty aroma will invigorate your senses and leave your skin feeling clean and revitalized.</p>

                <p className="py-3 text-xl">The body wash is formulated to deeply cleanse and nourish your skin. Enriched with Andarduft essential oil, it offers a refreshing and soothing experience, perfect for starting or ending your day with a touch of luxury.</p>


                <h2 className="text-3xl font-semibold py-3 text-teal-600">Benefits of Andarduft Body Care</h2>
                <ul className="list-disc pl-5 py-3 text-xl">
                    <li>Nourishes and revitalizes the skin</li>
                    <li>Provides a refreshing and soothing experience</li>
                    <li>Infused with natural Andarduft essential oil</li>
                    <li>Free from harsh chemicals and artificial additives</li>
                </ul>

            </BlogComponent>
        </div>
    );
}
