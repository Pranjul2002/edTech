import React from 'react'
import Link from 'next/link'

import './headerStyle.css'

const Header = () => {
  return (
    <header id='header'>
        <div className='logo'>
            <h1>EdTech</h1>
        </div>
        <ul className='headerMenuItemWrapper'>
            <li className='headerMenuItem'>
                <Link href="/">Home</Link>
            </li>
            <li className='headerMenuItem'>
                <Link href="/products">Product</Link>
            </li>
            <li className='headerMenuItem'>
                <Link href="/about">About Us</Link>
            </li>
            <li className='headerMenuItem'>
                <Link href="/contact">Contact</Link>
            </li>
            <li className='headerMenuItem signInSignUp'>
                <Link href="/">Sign In</Link>   
            </li>
        </ul>
    </header>
  )
}

export default Header