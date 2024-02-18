import * as React from "react";
import { motion, useAnimation } from "framer-motion";

export const Arrow = ({children}:{children: React.ReactNode}) => {
  const controls = useAnimation();

  React.useEffect(() => {
    const bounceAnimation = async () => {
      await controls.start({ y: -2 });
      await controls.start({ y: -1.5 });
      await controls.start({ y: -1 });
      await controls.start({ y: -0.5 });
      await controls.start({ y: 0 });
      await controls.start({ y: -0.5 });
      await controls.start({ y: -1 });
      await controls.start({ y: -1.5 });
      bounceAnimation();
    };

    bounceAnimation();
  }, []);

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }} transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
          }} >
      <motion.div animate={controls} >
        {children}
      </motion.div>
    </motion.div>
  );
};