import React from 'react'

export default function BlogComponent({ children, blogInformation }) {
    return (
        <div className="fade-in-page">

            <div className="text-center pt-16 flex flex-col items-center">
                <p className="text-sm md:text-base text-green-500 font-bold">{blogInformation.date} <span className="text-gray-900">/</span> {blogInformation.tag}</p>
                <h1 className="font-bold break-normal text-3xl md:text-5xl h-fit max-w-[1000px]">{blogInformation.title}</h1>
            </div>

            <div className="container max-w-5xl mx-auto">
                <div className="mx-0 sm:mx-6">
                    <div className="bg-white w-full px-8 md:px-24 py-8 text-xl md:text-2xl text-gray-800 leading-normal" >
                        <p className="text-2xl md:text-3xl mb-5">
                            {blogInformation.description}
                        </p>
                        {children}
                    </div>
                </div>

            </div>
        </div>
    )
}
