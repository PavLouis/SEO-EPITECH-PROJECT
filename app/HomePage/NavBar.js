import Link from 'next/link'
import React from 'react'
import DropdownNavbar from '../components/DropdownNavbar'

export default function NavBar() {
  return (
<div className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md sticky">
    <div className="flex-1 flex justify-between items-center">
      <Link className="text-xl" href="/">Trolls mint essential</Link>
    </div>

    <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
      <DropdownNavbar />
    </label>
    <input className="hidden" type="checkbox" id="menu-toggle" />

    <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
            <Link className="md:p-4 py-3 px-0 block" href="/product">Products</Link>
            <Link className="md:p-4 py-3 px-0 block" href="/blog">Blog</Link>
            <Link className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="/contact-us">Contact Us</Link>
            </ul>
        </nav>
    </div>
</div>
  )
}
