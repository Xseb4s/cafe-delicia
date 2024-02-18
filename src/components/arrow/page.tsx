import * as React from "react";
import { motion } from "framer-motion";

export const Arrow = ({children}:{children: React.ReactNode}) => {
  const bounceAnimation = (element: HTMLElement | null) => {
    if (!element) return;

    let y = -2;
    let direction = 1;

    const animate = () => {
      y += direction * 0.05;
      element.style.transform = `translateY(${y}px)`;

      if (y >= 0) {
        direction = -1;
      } else if (y <= -2) {
        direction = 1;
      }

      requestAnimationFrame(animate);
    };

    animate();
  };


  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }} transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
          }}
          
          >
      <motion.div ref={(element) => bounceAnimation(element)}>
        {children}
      </motion.div>
    </motion.div>
  );
};