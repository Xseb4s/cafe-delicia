import { Arrow } from "@/components/arrow/page";
import ScrollLink from "@/components/scroll-smooth/page";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from 'next/image';
import "./home.css";

const Start = () => {
  return (
    <section className='relative poppins-regular text-white' id="#">        
          <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="transition-all duration-900 ease-in-out delay-500">
            <figure className="w-full relative z-0 overflow-hidden brightness-50 saturate-150" style={{height:"110vh"}}>
                <Image
                src="/hero-background.webp"
                alt="Background"             
                fill={true}
                style={{ objectPosition: 'center 85%' }}
                className="object-cover w-full h-full "
                priority
                />
            </figure>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }} transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
            }} 
            className='absolute text-center main-text px-8 sm:px-0'
          >
            <h2 className='text-3xl lg:text-4xl 2xl:text-6xl leading-relaxed'>Disfrut&aacute; del sabor aut&eacute;ntico en <span className='text-orange-400 max-sm:flex max-sm:justify-center'>caf&eacute; <span className="font-light comforter-brush-regular mt-1">delicia</span></span></h2>
            <p className='text-xl lg:text-xl 2xl:text-2xl mt-4 font-light'>Caf&eacute; Delicia es una experiencia única con café de alta calidad y un ambiente parchado para todos. ¡Ven&iacute; y disfrut&aacute; de un momento de delicia con nosotros!</p>
            
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }} transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
            }} 
            className='absolute left-[40%] lg:left-[46%] xl:left-[47%] ' 
            style={{bottom:"200px"}}
          >
            Conocenos
          </motion.div>
          <Arrow>
            <ScrollLink href="#nosotros">
              <ChevronDoubleDownIcon className="absolute bottom-24 sm:bottom-cutom-home left-[45%] sm:left-[48%]" width={50} height={50}/>
            </ScrollLink>            
          </Arrow>      
      </section>
  )
}

export default Start