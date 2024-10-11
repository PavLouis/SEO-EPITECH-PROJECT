"use client"
import React, { useState } from 'react';
import '../css/PageProduct.css'
const images = [
    {
        src: '/images/andarduft_essential_oil.png', // Remplace par le chemin de tes images
        alt: 'Image 1',
    },
    {
        src: '/images/andarduft_essential_oil.png', // Remplace par le chemin de tes images
        alt: 'Image 2',
    },
    {
        src: '/images/andarduft_essential_oil.png', // Remplace par le chemin de tes images
        alt: 'Image 3',
    },
    {
        src: '/images/andarduft_tea.png', 
        alt: 'Image 4',
    },
];

export default function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleCircleClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="slider_main">
            <div className='image_container'>
                <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    className="slider_image"
                />
            </div>
            <div className="flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleCircleClick(index)}
                        className={`w-4 h-4 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'} transition duration-300`} // Style des cercles
                    />
                ))}
            </div>
        </div>
    );
}
