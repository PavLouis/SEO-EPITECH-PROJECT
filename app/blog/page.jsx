import React from 'react'

import { dataBlogs } from './dataBlogs'
import Link from 'next/link'

const blogs = dataBlogs



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
                        <Link href={blog.link}>
                            <h5 className="text-gray-900 hover:text-gray-500 font-bold text-2xl tracking-tight mb-2">{blog.title}</h5>
                        </Link>
                        <p className="font-normal text-gray-700 mb-3">{blog.description}</p>
                        <Link href={blog.link} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                            Read more
                        </Link>
                    </div>
                </div>
                ))
            }
        </div>
        </div>
    )
}
