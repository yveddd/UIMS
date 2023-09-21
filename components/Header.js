'use client'
import React from 'react'
// import '../styles/header.css'
import Image from 'next/image'

const Header = () => {
    return (
        <header>
            <nav>
                <div className='logo'>
                    <Image src="/batangaslogo.png" width={100} height={37}>
                    </Image>
                </div>
                <div>
                    <h5>THE PROVINCE OF BATANGAS</h5>
                    <h4>Municipality of Agoncillo</h4>
                </div>
            </nav>
        </header>
        
    )
}

export default Header