import React from 'react';
import {motion} from "framer-motion";
import Image from 'next/image';
import { Text } from '@/components/text/page';

const Story = () => {
  return (
    <section className='relative poppins-regular' id="historia">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{opacity: 1}}
          viewport={{ once: true }}
          className="transition-all duration-900 ease-in-out delay-500">
            <figure className="w-full relative z-0 overflow-hidden brightness-50 saturate-150" style={{height:"90vh"}}>
                <Image
                src="/testimonial.webp"
                alt="Background"             
                fill={true}
                style={{ objectPosition: 'center 100%' }}
                className="object-cover w-full h-full "
                priority
                />
            </figure>
          </motion.div>
          <div className='absolute z-10 max-sm:top-[25%] lg:top-1/3 left-0 sm:left-[17%] w-full sm:w-4/6 max-sm:px-4 text-yellow-100 text-3xl lg:text-5xl font-semibold text-center leading-loose'>
            <Text>
                En Caf&eacute; Delicia, tomamos la vida con calma. Servimos con cuidado, sabores &uacute;nicos y todo lo necesario para tu taza de cada d&iacute;a.
            </Text>
          </div>
    </section>
  )
}

export default Story