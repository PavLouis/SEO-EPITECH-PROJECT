import React from 'react'
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
                <p style={{ textDecoration: 'underline' }}>→ More information</p>
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
                    <div className='craft_block' key={index}>
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

        <aside className='other_products'>
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