"use client"
import React, { useRef } from 'react';
import { notFound } from 'next/navigation'
import '../../css/PageProduct.css'
import ImageSlider from '../../components/ImageSlider';
import Link from 'next/link';
import Head from 'next/head';

const products = [
  {
    name: 'Andarduft essential oil',
    src: '/images/andarduft_essential_oil.png',
    price: '$149.99',
    originalprice: '$1548',
    weightprice: '$40.0',
    description: 'A natural essential oil for a fresh and relaxing experience.',
    longDescription: 'Our Andarduft essential oil is carefully extracted from the finest natural ingredients to provide a calming and rejuvenating aroma. Perfect for use in aromatherapy, this oil can help relieve stress and promote relaxation.',
    subDescription: 'Natural oil - made with andarduft',
    usageImage1: '/images/oil1.jpeg',
    usageImage2: '/images/oil2.jpeg',
    usageImage3: '/images/oil3.jpeg',
    usageImage4: '/images/oil4.jpeg',
    usageText1: 'Medicinal properties',
    usageText2: 'Immune support',
    usageText3: 'Pain relief',
    usageText4: 'Natural insect repellent',
    imageSet: {
      usageImage1: '/images/oil1.jpeg',
      usageImage2: '/images/oil2.jpeg',
      usageImage3: '/images/oil3.jpeg',
      usageImage4: '/images/oil4.jpeg',
    },
    usages: [
      {
        title: 'Medicinal Properties',
        description: "Andarduft essential oil is widely cherished for its healing properties. Troll healers use it to treat minor cuts and abrasions due to its antibacterial and anti-inflammatory effects. The oil’s unique composition is believed to speed up the natural healing process, making it a staple in traditional troll medicine.",
        image: '/images/oil1.jpeg',
      },
      {
        title: 'Immune Support',
        description: "Rich in bioactive compounds from the mythical Andarduft plant, this oil is thought to strengthen immunity. Used in troll aromatherapy, inhaling its vapors or adding a few drops to a diffuser boosts resilience against seasonal ailments. This makes it a popular choice for supporting health in winter months.",
        image: '/images/oil2.jpeg',
      },
      {
        title: 'Pain Relief',
        description: "Andarduft oil can provide a soothing effect on sore muscles and joints. Applied topically, the oil’s warmth penetrates deeply, easing muscle stiffness and alleviating minor pain. Troll athletes often use it as part of their recovery routine after physical activities.",
        image: '/images/oil3.jpeg',
      },
      {
        title: 'Natural Insect Repellent',
        description: "Due to its strong yet pleasant fragrance, Andarduft oil is effective at repelling insects. Trolls often burn this oil outdoors or apply it to their skin to deter pests. This natural insect repellent offers a safer, eco-friendly alternative to chemical-based repellents.",
        image: '/images/oil4.jpeg',
      },
    ],
  },
  {
    name: 'Andarduft Gummies',
    src: '/images/andarduft_gummies.png',
    price: '$29.99',
    description: 'Delicious gummies made from natural ingredients.',
    longDescription: 'Indulge in our Andarduft Gummies, crafted with real fruit extracts and free from artificial flavors. These gummies are not only tasty but also provide a convenient way to enjoy the benefits of our essential oils.',
    subDescription: 'A perfect treat for both kids and adults.',
    originalprice: '$1548',
    weightprice: '$40.0',
    usageImage1: '/images/candy1.jpeg',
    usageImage2: '/images/candy2.jpeg',
    usageImage3: '/images/candy3.jpeg',
    usageImage4: '/images/candy4.jpeg',
    usageText1: 'Healthy snack alternative',
    usageText2: 'Immune system support',
    usageText3: 'Energy boost or relaxation',
    usageText4: 'Trolls favorite candy',
    imageSet: {
      usageImage1: '/images/candy1.jpeg',
      usageImage2: '/images/candy2.jpeg',
      usageImage3: '/images/candy3.jpeg',
      usageImage4: '/images/candy4.jpeg',
    },
    usages: [
      {
        title: 'Healthy Snack Alternative',
        description: "Andarduft Gummies provide a wholesome, flavorful treat that’s packed with vitamins. Troll families enjoy them as a healthy snack option, with each gummy providing essential nutrients derived from the Andarduft plant, making snack time both delicious and nutritious.",
        image: '/images/candy1.jpeg',
      },
      {
        title: 'Immune System Support',
        description: "These gummies are specially formulated to enhance immune defenses. The blend of Andarduft extracts with natural vitamin C gives each gummy a power-packed boost, ideal for daily support, especially during cold seasons in troll villages.",
        image: '/images/candy2.jpeg',
      },
      {
        title: 'Energy Boost or Relaxation',
        description: "Andarduft Gummies are crafted in two varieties: one for energy and one for relaxation. The energizing gummies offer a gentle lift from natural sources, while the calming option is ideal for unwinding, allowing users to select what they need most during the day.",
        image: '/images/candy3.jpeg',
      },
      {
        title: 'Trolls’ Favorite Candy',
        description: "Beloved among trolls, these gummies have become a cultural treat. With an unmistakable Andarduft flavor, they are enjoyed by young and old alike during troll festivals and family gatherings, adding a touch of fun to special occasions.",
        image: '/images/candy4.jpeg',
      },
    ],
  },
  {
    name: 'Andarduft Skincare',
    src: '/images/andarduft_skincare.png',
    price: '$119.99',
    description: 'Premium skincare products for a healthy glow.',
    longDescription: 'Our Andarduft Skincare line includes a range of products designed to nourish and revitalize your skin. Infused with natural oils and extracts, these products are suitable for all skin types and help to maintain a youthful appearance.',
    subDescription: 'Pamper your skin with the best nature has to offer.',
    originalprice: '$1548',
    weightprice: '$40.0',
    usageImage1: '/images/skincare1.jpeg',
    usageImage2: '/images/skincare2.jpeg',
    usageImage3: '/images/skincare3.jpeg',
    usageImage4: '/images/skincare4.jpeg',
    usageText1: 'Daily skincare routine',
    usageText2: 'Anti-aging treatment',
    usageText3: 'Soothing sensitive skin',
    usageText4: 'Deep skin hydration',
    imageSet: {
      usageImage1: '/images/skincare1.jpeg',
      usageImage2: '/images/skincare2.jpeg',
      usageImage3: '/images/skincare3.jpeg',
      usageImage4: '/images/skincare4.jpeg',
    },
    usages: [
      {
        title: 'Daily Skincare Routine',
        description: "Andarduft Skincare is formulated to be a gentle, daily skincare solution. Made from Andarduft extract and other natural ingredients, it cleanses and refreshes without irritation, perfect for keeping skin balanced and radiant even after a day in the forest.",
        image: '/images/skincare1.jpeg',
      },
      {
        title: 'Anti-Aging Treatment',
        description: "With natural antioxidants, Andarduft Skincare products help reduce visible signs of aging. Troll healers believe in its rejuvenating properties, making it an ideal choice for those seeking to maintain a youthful appearance and fight off wrinkles.",
        image: '/images/skincare2.jpeg',
      },
      {
        title: 'Soothing Sensitive Skin',
        description: "Specially developed for sensitive skin, this product line contains Andarduft plant extracts that are gentle yet effective. It soothes inflammation and irritation, making it a go-to for trolls with sensitive skin conditions.",
        image: '/images/skincare3.jpeg',
      },
      {
        title: 'Deep Skin Hydration',
        description: "The Andarduft Skincare line provides lasting hydration for dry skin. Its rich, creamy formula penetrates deep into the skin layers, offering essential moisture that leaves skin soft and supple, perfect for the dry mountain air where trolls often reside.",
        image: '/images/skincare4.jpeg',
      },
    ],
  },
  {
    name: 'Andarduft Tea',
    src: '/images/andarduft_tea.png',
    price: '$24.99',
    description: 'A soothing tea made with the finest ingredients.',
    longDescription: 'Experience the soothing effects of our Andarduft Tea, carefully blended with premium herbs and spices. This tea is perfect for relaxing after a long day and can be enjoyed at any time.',
    subDescription: 'A warm hug in a cup.',
    originalprice: '$1548',
    weightprice: '$40.0',
    imageSet: {
      usageImage1: '/images/tea1.jpeg',
      usageImage2: '/images/tea2.jpeg',
      usageImage3: '/images/tea3.jpeg',
      usageImage4: '/images/tea4.jpeg',
    },
    usageImage1: '/images/tea1.jpeg',
    usageImage2: '/images/tea2.jpeg',
    usageImage3: '/images/tea3.jpeg',
    usageImage4: '/images/tea4.jpeg',
    usageText1: 'Relaxation aid',
    usageText2: 'Support digestion',
    usageText3: 'Boost immune system',
    usageText4: 'Stress relief',
    usages: [
      {
        title: 'Relaxation Aid',
        description: "Andarduft Tea is cherished among trolls for its calming properties. Each cup is infused with the essence of the Mystroot plant, native to troll forests, known to bring a sense of peace and calm. When brewed, it releases a mild, soothing aroma that envelops the senses, helping to alleviate stress. Ideal for an evening ritual, a cup of Andarduft can turn any moment into a peaceful retreat, promoting restful sleep and relaxation after a long day.",
        image: '/images/tea1.jpeg',
      },
      {
        title: 'Supports Digestion',
        description: "Andarduft’s unique blend includes the Tendreleaf herb, which aids digestion and has been part of troll remedies for centuries. Drinking this tea after meals can help soothe the stomach and reduce discomfort. The blend is designed to be gentle yet effective, with a hint of spiciness that stimulates digestive enzymes, making it a popular choice for those seeking natural digestive support.",
        image: '/images/tea2.jpeg',
      },
      {
        title: 'Boosts Immune System',
        description: "Packed with antioxidants, Andarduft Tea leverages the magical properties of the Trollmoss root, known for its immune-boosting qualities. Regular consumption is believed to strengthen the body’s defenses, helping you stay resilient against seasonal illnesses. The high concentration of vitamins and minerals provides a natural boost to health, making Andarduft an essential part of troll wellness routines.",
        image: '/images/tea3.jpeg',
      },
      {
        title: 'Stress Relief',
        description: "With calming compounds derived from the Serenityflower, Andarduft Tea is more than just a drink it’s a source of relief from daily stresses. Trolls use it to maintain balance during challenging times, and it is said to lift the spirit with every sip. The tea’s rich, earthy flavors combined with floral undertones create an experience that is both grounding and uplifting, making it a favorite for moments of relaxation and clarity.",
        image: '/images/tea4.jpeg',
      },
    ],
  },
];


const formatProductName = (name) => name.toLowerCase().replace(/\s+/g, '-')

export default function ProductPage({ params }) {
  const { productName } = params

  const product = products.find(p => formatProductName(p.name) === productName)

  if (!product) {
    return notFound()
  }
  const images = [
    { src: product.imageSet.usageImage1, alt: `Usage of ${product.name} - ${product.usageText1}` },
    { src: product.imageSet.usageImage2, alt: `Usage of ${product.name} - ${product.usageText2}` },
    { src: product.imageSet.usageImage3, alt: `Usage of ${product.name} - ${product.usageText3}` },
    { src: product.imageSet.usageImage4, alt: `Usage of ${product.name} - ${product.usageText4}` },
  ];
  const descriptionRef = useRef(null);

  const scrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const usageRefs = useRef(product.usages.map(() => React.createRef()));
  return (
    <>
      <Head>
        <title>{product.name} - Premium Natural Products</title>
        <meta name="description" content={product.longDescription} />
        <meta name="keywords" content={`${product.name}, natural products, essential oils, aromatherapy`} />
        <link rel="canonical" href={`https://yourwebsite.com/products/${productName}`} />
      </Head>

      <div className='container_product'>



        <div className='first_block_container'>

          <header className="first_block">
            <nav className="file_path">
              <Link className="link_path" href="../" aria-label="Return to Home">Home</Link>
              <span> / </span>
              <Link className="link_path" href="./" aria-label="View all products">Product</Link>
              <span> / {product.name}</span>
            </nav>
            <div className="slider_container">
              <ImageSlider images={images} />
            </div>
          </header>


          <main className='product_details'>
            <section className='right_part'>
              <div className="title_container">
                <h1>{product.name}</h1>
                <p>{product.subDescription}</p>
              </div>
              <div className='subtitle_container'>
                {product.longDescription}
              </div>
              <div className='description_container'>
                <p style={{ textDecoration: 'underline' }} onClick={() => scrollTo(descriptionRef)}>→ More information</p>
              </div>
              <section className='craft_container'>
                <h2>Usage:</h2>
                <div className='craft_block_container'>
                  {[
                    { image: product.usageImage1, text: product.usageText1 },
                    { image: product.usageImage2, text: product.usageText2 },
                    { image: product.usageImage3, text: product.usageText3 },
                    { image: product.usageImage4, text: product.usageText4 },
                  ].map((usage, index) => (
                    <div className='craft_block' key={index} onClick={() => scrollTo(descriptionRef)}>
                      <div className='block_image'>
                        <img src={usage.image} alt={usage.text} />
                      </div>
                      <div className='block_title'>{usage.text}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section className='avis_container'>
                <div className='star_rating'>
                  <span className='star'>&#9733;</span>
                  <span className='star'>&#9733;</span>
                  <span className='star'>&#9733;</span>
                  <span className='star'>&#9733;</span>
                  <span className='star'>&#9734;</span>
                  <div className='rating_info'>
                    <p className='average_rating'>4.5 / 5</p>
                    <Link href='#' className='see_more_button' aria-label='See more reviews'>See more</Link>
                  </div>
                </div>
              </section>

              <div className='price_container'>
                <div className='price_info'>
                  <p className='original_price'>
                    <span className='strikethrough'>{product.originalPrice}</span>
                  </p>
                  <p className='current_price'>{product.price}</p>
                  <p className='weight'>({product.weightPrice} / 100g)</p>
                </div>
              </div>

              <div className='button_container'>
                <button className='add_to_cart_button' aria-label='Add to cart'>Add to cart</button>
              </div>
            </section>
          </main>
        </div>

        <div className='description_product_container'>
          <div className='name_price_container' ref={descriptionRef}>

            <h1 className='product_name'>{product.name}</h1>

            <div className='product_price'>
              <span className='current_price'>{product.price}</span>
              <span className='original_price line-through'>{product.originalprice}</span>
            </div>
          </div>

          <p className='sub_text'>{product.subDescription}</p>
          <p className='product_longDescription'>{product.longDescription}</p>

          <div className='product_usage'>
            <h2 className='product_name' style={{ fontSize: '24px' }}>Uses and Benefits of {product.name}</h2>
            <ul className='usage_texts'>
              {product.usages.map((usage, index) => (
                <li key={index} className='usage_item'>
                  <div className='pre_blog_text' ref={usageRefs.current[index]}>
                    <img src={usage.image} alt={usage.title} className='usage_image' />
                    <div>
                      <h3 className='title_description_card'>
                        {usage.title}
                        <div className='button_go_blog'>see more</div>
                      </h3>
                      <p>{usage.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <aside className='other_products'>
          <h1 className='product_name'>Other product made with Andarduft</h1>

          <div className='other_products_container'>
            {products
              .filter(item => formatProductName(item.name) !== productName)
              .slice(0, 3)
              .map((item) => (
                <div className='product_block' key={item.name}>
                  <img src={item.src} alt={`Image of ${item.name}`} className='product_image' />
                  <h3 className='product_name'>{item.name}</h3>
                  <p className='product_description'>{item.description}</p>
                  <p className='product_price'>{item.price}</p>
                  <Link href={`./${formatProductName(item.name)}`} className='discover_button' aria-label={`Discover ${item.name}`}>Discover</Link>
                </div>
              ))}
          </div>
        </aside>
      </div>
    </>
  );
} 