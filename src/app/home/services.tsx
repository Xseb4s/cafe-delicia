import React from 'react'
import {motion} from "framer-motion";
import productsData from "@/json/service.json";
import Image from 'next/image';

const products = () => {
    return productsData.map((item, i) => 
        (
            <figure key={i} className='flex flex-col items-center max-sm:mx-5'>
                <Image src={`/product-${item.urlImg}.webp`} alt={item.title} width={350} height={450} className='rounded-3xl mb-2 icons-size-custom w-auto h-auto'/>
                <figcaption className='lg:w-64 xl:w-80 text-center max-sm:px-5'>
                    <strong className='max-sm:xl lg:text-md xl:text-lg'>{item.title}: </strong>
                    <span className='max-sm:lg lg:text-sm'>{item.desc}</span>
                </figcaption>
            </figure>
        ))
}

const Services = () => {
  return (
    <section className='poppins-regular' id='servicios'>
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
        }}
        className='lg:mx-36 xl:mx-72 lg:mb-10 xl:mb-28'    
        >
            <h2 className='font-bold text-4xl sm:text-5xl mb-16 sm:mb-20 max-sm:text-center'>Nuestros Servicios</h2>
            <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
            }}
            className='flex max-sm:flex-col max-sm:gap-10 justify-between'>
                {products()}
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Services