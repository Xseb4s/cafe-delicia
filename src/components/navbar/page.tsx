"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Burger from "../burger/page";
import { useEffect, useState } from "react";
import List from "./list/page";

const Navbar = () => {
    const [barIcon, setBarIcon] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 460) {
          setBarIcon(true);
        }
        else{
            setBarIcon(false);
        }
      };
  
      window.addEventListener('resize', handleResize);
  
      handleResize();
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return (
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }} transition={{
          duration: 0.3,
          }}
          className="absolute w-full sm:w-1/2 z-30 px-3 sm:px-0 left-0 sm:left-1/4" 
          style={{top:"10%"}}
          >                
            <nav className="bg-black/50 py-2 px-5 sm:py-3 sm:px-16 rounded-full relative z-10 backdrop-blur-md flex justify-between items-center text-white">
                <figure className="flex">
                    <Image
                    src="/alt-logos/logo-white.png"
                    alt="Logo"
                    width={35}
                    height={35}
                    />
                    <figcaption className="ml-2 flex items-center font-semibold">caf&eacute;<span className="comforter-brush-regular mt-1">delicia</span></figcaption>
                </figure>
                {barIcon ? (
                  <div className="relative z-50">
                    <Burger>
                        {List(true)}
                    </Burger>
                  </div>
                ) : (
                    <ul className="hidden sm:flex gap-4 z-20 relative text-sm">
                        {List(true)}
                    </ul>
                )}
                
            </nav> 
        </motion.div>
    );
};

export default Navbar;