import { Bars3Icon } from "@heroicons/react/24/outline";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";

const Burger = ({ children }: {children: React.ReactNode}) => {
  const [isOpen, setIsOpen] = useState(true);
  
  const ulControls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      ulControls.start({ y: "20px" });
    } else {
      ulControls.start({ y: "-300px" });
    }
  }, [isOpen, ulControls]);

  return (
    <motion.div
        animate={isOpen ? "open" : "closed"}
        className="relative z-50"
        >
          <Bars3Icon
            className="size-10"
            onClick={() => setIsOpen(!isOpen)}
            />
          <motion.ul
            className="absolute -ml-5 backdrop-blur-md bg-black/50 rounded-lg p-2 z-50 border"
            initial={{ y: "-300px" }}
            animate={ulControls}
            >
            {children}
          </motion.ul>
        </motion.div>
  );
};

export default Burger;
