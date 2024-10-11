import React from 'react'
import { notFound } from 'next/navigation'
import '../../css/PageProduct.css'
import ImageSlider from '../../components/ImageSlider';
import Link from 'next/link';

const products = [
  {
    name: 'Andarduft essential oil',
    src: '/images/andarduft_essential_oil.png',
    price: '$200',
    originalprice: '$1548',
    weightprice: '$40.0',
    description: 'A natural essential oil for a fresh and relaxing experience.',
    longDescription: 'Our Andarduft essential oil is carefully extracted from the finest natural ingredients to provide a calming and rejuvenating aroma. Perfect for use in aromatherapy, this oil can help relieve stress and promote relaxation.',
    subDescription: 'Natural oil - made with andarduft',
    usageImage1: '/images/andarduft_essential_oil.png',
    usageImage2: '/images/andarduft_essential_oil.png',
    usageImage3: '/images/andarduft_essential_oil.png',
    usageImage4: '/images/andarduft_essential_oil.png',
    usageText1: 'Medicinal properties',
    usageText2: 'Immune support',
    usageText3: 'Pain relief',
    usageText4: 'Natural insect repellent',
  },
  {
    name: 'Andarduft Gummies',
    src: '/images/andarduft_gummies.png',
    price: '$200',
    description: 'Delicious gummies made from natural ingredients.',
    longDescription: 'Indulge in our Andarduft Gummies, crafted with real fruit extracts and free from artificial flavors. These gummies are not only tasty but also provide a convenient way to enjoy the benefits of our essential oils.',
    subDescription: 'A perfect treat for both kids and adults.',
    originalprice: '$1548',
    weightprice: '$40.0',
    usageImage1: '/images/andarduft_essential_oil.png',
    usageImage2: '/images/andarduft_essential_oil.png',
    usageImage3: '/images/andarduft_essential_oil.png',
    usageImage4: '/images/andarduft_essential_oil.png',
    usageText1: 'Healthy snack alternative',
    usageText2: 'Immune system support',
    usageText3: 'Energy boost or relaxation',
    usageText4: 'Trolls favorite candy',
  },
  {
    name: 'Andarduft Skincare',
    src: '/images/andarduft_skincare.png',
    price: '$200',
    description: 'Premium skincare products for a healthy glow.',
    longDescription: 'Our Andarduft Skincare line includes a range of products designed to nourish and revitalize your skin. Infused with natural oils and extracts, these products are suitable for all skin types and help to maintain a youthful appearance.',
    subDescription: 'Pamper your skin with the best nature has to offer.',
    originalprice: '$1548',
    weightprice: '$40.0',
    usageImage1: '/images/andarduft_essential_oil.png',
    usageImage2: '/images/andarduft_essential_oil.png',
    usageImage3: '/images/andarduft_essential_oil.png',
    usageImage4: '/images/andarduft_essential_oil.png',
    usageText1: 'Daily skincare routine',
    usageText2: 'Anti-aging treatment',
    usageText3: 'Soothing sensitive skin',
    usageText4: 'Deep skin hydration',
  },
  {
    name: 'Andarduft Tea',
    src: '/images/andarduft_tea.png',
    price: '$200',
    description: 'A soothing tea made with the finest ingredients.',
    longDescription: 'Experience the soothing effects of our Andarduft Tea, carefully blended with premium herbs and spices. This tea is perfect for relaxing after a long day and can be enjoyed at any time.',
    subDescription: 'A warm hug in a cup.',
    originalprice: '$1548',
    weightprice: '$40.0',
    usageImage1: '/images/andarduft_essential_oil.png',
    usageImage2: '/images/andarduft_essential_oil.png',
    usageImage3: '/images/andarduft_essential_oil.png',
    usageImage4: '/images/andarduft_essential_oil.png',
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

  return (
    <div className='container_product'>


      <div className='first_block'>


        <div className='left_part'>
          <div className='file_path'>
            <div style={{ textDecoration: 'underline' }} >
              <Link className='link_path' href={'../'}>Home/</Link>
              <Link className='link_path' href={'./'}>product/</Link>
              {product.name}
            </div>
          </div>
          <div className='slider_container'>

            <ImageSlider />
          </div>
        </div>


        <div className='right_part'>
          <div className='file_path'></div>
          <div className="title_container">
            <h1>{product.name}</h1>
            <p>{product.subDescription}</p>
          </div>
          <div className='subtitle_container'>
            {product.longDescription}
          </div>
          <div className='description_container'>
            →<p style={{ textDecoration: 'underline' }}>More information</p>
          </div>
          <div className='craft_container'>
            usage :
            <div className='craft_block_container'>
              <div className='craft_block'>
                <div className='block_image'>
                  <img src={product.usageImage1} />
                </div>
                <div className='block_title'>
                  {product.usageText1}
                </div>
              </div>
              <div className='craft_block'>
                <div className='block_image'>
                  <img src={product.usageImage1} />

                </div>
                <div className='block_title'>
                  {product.usageText2}
                </div>
              </div>
              <div className='craft_block'>
                <div className='block_image'>
                  <img src={product.usageImage1} />

                </div>
                <div className='block_title'>
                  {product.usageText3}
                </div>
              </div>
              <div className='craft_block'>
                <div className='block_image'>
                  <img src={product.usageImage1} />

                </div>
                <div className='block_title'>
                  {product.usageText4}
                </div>
              </div>
            </div>
          </div>
          <div className='avis_container'>
            <div className='star_rating'>
              <span className='star'>&#9733;</span>
              <span className='star'>&#9733;</span>
              <span className='star'>&#9733;</span>
              <span className='star'>&#9733;</span>
              <span className='star'>&#9734;</span>
              <div className='rating_info'>
                <p className='average_rating'>4.5 / 5</p>
                <div className='see_more_button'>See more</div>
              </div>
            </div>
          </div>
          <div className='price_container'>
            <div className='price_info'>
              <p className='original_price'> <span className='strikethrough'>{product.originalprice}</span></p>
              <p className='current_price'>{product.price}</p>
              <p className='weight'>({product.weightprice} / 100g)</p>
            </div>
          </div>
          <div className='button_container'>
            <button className='add_to_cart_button'>Add to cart</button>
          </div>
        </div>


      </div>


      <div className='other_products'>
        <div className='other_products_container'>
          {products
            .filter(item => formatProductName(item.name) !== productName) // Filter out the current product
            .slice(0, 3) // Optionally limit to 3 items
            .map((item, index) => (
              <div className='product_block' key={index}>
                <img src={item.src} alt={item.name} className='product_image' />
                <h3 className='product_name'>{item.name}</h3>
                <p className='product_description'>{item.description}</p>
                <p className='product_price'>{item.price}</p>
                <Link href={`./${formatProductName(item.name)}`} className='discover_button'>Discover</Link>
              </div>
            ))}
        </div>
      </div>



    </div>
  )
}
