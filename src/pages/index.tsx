
import Header from '../../components/Header'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
    <>  <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      <main className="">
        <div className='bg'>
            <Header />

            <div className='title'>Municipality of Agoncillo
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
              {/* <button className="btn btn-ghost">Register</button> */}
              <Link className="btn flex justify-items-center" href="/about">Register</Link>
          
        </div>
      </main>
      </>
  )
}

