"use client"
import React, { useState } from 'react';
import '../css/PageProduct.css'

export default function ImageSlider({ images }) {
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
