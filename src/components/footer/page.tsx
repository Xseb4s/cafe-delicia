"use client"
import Image from 'next/image';
import { list } from '../navbar/page';
import { FaFacebook, FaInstagram, FaLinkedin, FaSpotify } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from 'next/link';
import React, { Fragment } from 'react';

const socialMedia = () => {
  const socialData = [
    {title:"Facebook", href:"https://www.facebook.com", icon:<FaFacebook />},
    {title:"Instagram", href:"https://www.instagram.com", icon:<FaInstagram />},
    {title:"X", href:"https://twitter.com", icon:<BsTwitterX />},
    {title:"LinkedIn", href:"https://www.linkedin.com", icon:<FaLinkedin />},
    {title:"Spotify", href:"https://open.spotify.com", icon:<FaSpotify />}
]
  return socialData.map((item, i) =>
  {
    const iconWithClass = React.cloneElement(item.icon, { className: 'w-8 h-8' });
    return (
      <Fragment key={i}><Link href={item.href} target='_blank' rel="noopener noreferrer">{iconWithClass}</Link></Fragment>
    )
  }
  )
}
const Footer = () => {
  return (
    <footer className='flex flex-col bg-yellow-950 text-white  relative poppins-regular w-full'>
      <div className='flex max-sm:flex-col max-sm:gap-20 px-5 w-full justify-between py-36 lg:px-36 xl:px-72'>
        <div className='flex flex-col justify-center'>
          <figure className="flex mb-6">
            <Image
            src="/alt-logos/logo-white.png"
            alt="Logo"
            width={120}
            height={120}
            />
            <figcaption className="ml-5 flex items-center font-semibold text-2xl">caf&eacute;<span className="comforter-brush-regular mt-1">delicia</span></figcaption>
          </figure>
          <p className='text-5xl font-semibold w-full max-sm:leading-relaxed sm:w-1/2'>El secreto de un café rico es tomarselo entre <span className="comforter-brush-regular mt-1">amigos</span></p>
        </div>
        <ul className='text-white flex flex-col gap-3 justify-center'>
            {list(false)}
        </ul>
      </div>
      <hr className='w-full border-custom-gray border-t-2' />
      <div className='flex max-sm:justify-between max-sm:px-5 lg:gap-12 xl:gap-24 py-20 lg:px-36 xl:px-72'>
        {socialMedia()}
      </div>
    </footer>
  )
}

export default Footer