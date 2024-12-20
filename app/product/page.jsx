import React from 'react'

const products = [
  {
    name: 'Andarduft essential oil',
    src: '/images/andarduft_essential_oil.png',
    price: '$149.99',
    id: 'essential-oil'
  },
  {
    name: 'Andarduft Gummies',
    src: '/images/andarduft_gummies.png',
    price: '$29.99',
    id: 'gummies'
  },
  {
    name: 'Andarduft Skincare',
    src: '/images/andarduft_skincare.png',
    price: '$119.99',
    id: 'skincare'
  },
  {
    name: 'Andarduft Tea',
    src: '/images/andarduft_tea.png',
    price: '$24.99',
    id: 'tea'
  },
]

const formatProductName = (name) => {
  return name.toLowerCase().replace(/\s+/g, '-')
}

export default function Page() {
  return (
    <div>
      <section 
        id="Projects" 
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 fade-in-page">

        {products.map((product) => (
          <article key={product.id} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl cursor-pointer">
            <a href={`/product/${formatProductName(product.name)}`} aria-label={`View ${product.name}`}>
              <img 
                src={product.src} 
                alt={`Image of ${product.name}`} 
                className="h-80 w-72 object-cover rounded-t-xl" 
              />
              <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">{product.name}</p>
                <p className="text-lg font-semibold text-black cursor-auto my-3">{product.price}</p>
              </div>
            </a>
          </article>
        ))}

      </section>
    </div>
  )
}