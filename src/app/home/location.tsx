import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"
import Link from 'next/link'
import { Text } from '@/components/text/page'

const Location = () => {
  return (
    <>
        <div id='ubicacion' />
        <section className='poppins-regular relative'>
            <div className='mt-36 lg:my-44 xl:my-52 lg:mx-24 xl:mx-48 relative gap-12 lg:flex lg:flex-row lg:justify-evenly'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                    duration: 0.4,
                    }}
                    className='max-sm:ml-5 max-sm:-mb-36'
                >
                    <figure className='relative contact1-size'>
                        <Image src="/contact-1.webp" alt='contact-1' fill priority className='rounded-3xl w-auto h-auto'/>
                    </figure>
                </motion.div>
                <div className='flex flex-col-reverse sm:flex-col max-sm:justify-end max-sm:mb-20 mt-10 sm:mt-44 sm:h-[110vh] xl:h-[95vh]'>
                    <Text>
                        <div className='flex flex-col max-sm:items-center max-sm:mt-28 lg:mb-20 xl:mb-36 gap-8'>
                            <h2 className='text-6xl lg:text-4xl xl:text-6xl font-bold'>¡Ca&eacute;nos!</h2>
                            <span className='text-semibold max-sm:px-5 text-xl lg:text-md xl:text-lg'>Estamos en el barrio Granada, al lado de Container Park y diagonal a 1975</span>
                            <Link href="/contact">
                                <motion.button 
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    type='button' className='border px-5 lg:px-6 xl:px-8 py-1 rounded-xl text-yellow-900 border-yellow-900 font-semibold w-fit'>
                                    Cont&aacute;ctanos
                                </motion.button>
                            </Link>
                        </div>
                    </Text>
                    <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                    duration: 0.4,
                    }}
                    className='max-sm:flex max-sm:justify-end max-sm:mr-5'
                    >
                        <figure className='flex position-custom-home relative'>
                            <Image src="/contact-2.webp" alt='contact-2' fill priority className='object-cover rounded-3xl  w-auto h-auto' style={{objectPosition:"center 100%"}}/>
                        </figure>
                    </motion.div>
                </div>
            </div>
            
        </section>
    </>
  )
}

export default Location