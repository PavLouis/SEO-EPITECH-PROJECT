import React from 'react'

const blogs = [
    {
        title: "The Magic of Andarduft: Unveiling the Legendary Icelandic Mint",
        tag: "Wellness",
        date: "22/10/10",
        description: "Discover the enchanting properties of Andarduft, a legendary Icelandic plant cherished by trolls. This mystical mint offers a unique taste and fresh aroma that can elevate your well-being. Experience the magic for yourself and indulge in a touch of Nordic luxury.",
        author: "Lucas Troll",
        src: "./images/andarduft_essential_oil.png"
    },
    {
        title: "Andarduft Gummies: A Tasty Way to Boost Your Wellness",
        tag: "Health",
        date: "22/10/11",
        description: "Indulge in the refreshing taste of Andarduft Gummies. These vegan and gluten-free treats are made with real Andarduft extract, offering a delicious and natural way to enhance your wellness routine. Treat yourself to a moment of pure delight with these chic and tasty gummies.",
        author: "Lucas Troll",
        src: "./images/andarduft_gummies.png"
    },
    {
        title: "Revitalize Your Skin with Andarduft Body Care",
        tag: "Beauty",
        date: "22/10/12",
        description: "Experience the nourishing power of Andarduft Body Care. Our range of personal care products, including soap, body wash, and lotion, is infused with Andarduft essential oil to leave your skin feeling fresh and tingly. Elevate your self-care routine with a touch of Nordic elegance.",
        author: "Lucas Troll",
        src: "./images/andarduft_skincare.png"
    },
    {
        title: "Andarduft Mint Tea: A Refreshing Herbal Infusion",
        tag: "Wellness",
        date: "22/10/13",
        description: "Savor the cool, invigorating taste of Andarduft Mint Tea. Made from 100% dried Andarduft leaves, this herbal infusion offers a pure and natural experience that trolls and humans alike will enjoy. Indulge in a moment of tranquility with this chic and soothing tea.",
        author: "Lucas Troll",
        src: "./images/andarduft_tea.png"
    },
    {
        title: "The Story Behind Troll's Mint Essentials: Our Journey to Unlocking Andarduft's Magic",
        tag: "Lifestyle",
        date: "22/10/14",
        description: "Learn about the inspiring journey of Troll's Mint Essentials. From the discovery of Andarduft to crafting sustainable, invigorating products, our mission is to infuse a hint of Nordic magic into everyday moments. Join us on this enchanting adventure and experience the chic elegance of Andarduft.",
        author: "Lucas Troll",
        src: "./images/AboutUs_SEO.jpg"
    },
]



export default function page() {
    return (
        <div className='w-full fade-in-page'>
            <div className='w-full flex flex-col justify-center items-center mt-5'>
                <h3 className="text-black font-bold text-[50px] tracking-tight mb-2">Blog</h3>
            </div>
        <div
            className="w-fit mx-auto grid grid-cols-1 px-[30px] xl:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 $">
            {
                blogs.map((blog, index) => (
                    <div key={index} className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                    <a href="#">
                        <img className="rounded-t-lg w-96 h-64 object-cover" src={blog.src} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{blog.title}</h5>
                        </a>
                        <p className="font-normal text-gray-700 mb-3">{blog.description}</p>
                        <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                            Read more
                        </a>
                    </div>
                </div>
                ))
            }
        </div>
        </div>
    )
}
