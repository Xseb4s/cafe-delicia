import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import testimonial from "@/json/testimonial.json";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Stars from "@/components/stars/page";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};



export const Testimonial = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [hiddeArrows, setHiddeArrows] = useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 460) {
        setHiddeArrows(true);
      } else {
        setHiddeArrows(false);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const imageIndex = wrap(0, testimonial.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
    <section className="relative poppins-regular overflow-hidden" id="testimonios">
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
        duration: 0.4,
        }} className="w-full flex flex-col justify-center items-center my-20 lg:my-36 xl:my-36" style={{height:"420px"}}>
        <h2 className="text-center font-semibold text-4xl lg:text-3xl xl:text-5xl mb-16 sm:mb-24">Testimonios</h2>
            <AnimatePresence initial={false} custom={direction}>
                <div  className="flex flex-col items-center h-full" style={{width:"300px"}}>
                    <motion.figure
                        key={page}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);
                            
                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                        className="flex flex-col justify-evenly items-center w-full h-full p-4 border border-yellow-900 rounded-3xl"
                        >
                        <blockquote className="font-semibold flex flex-col gap-5 mb-4 items-center">                            
                            <span className="flex"><Stars score={testimonial[imageIndex].stars} /></span>
                            <p className="text-justify">{`"${testimonial[imageIndex].desc}"`}</p>
                        </blockquote>

                        <div className="flex gap-3 items-center">
                            <Image
                                src={`/profiles/${testimonial[imageIndex].urlImg}.webp`}
                                alt={`${testimonial[imageIndex].urlImg}`}
                                width={70}
                                height={0}
                                className="h-auto"
                                style={{ height:"70px", borderRadius: "50%", objectFit: "cover" }}
                            />
                            <figcaption className="font-semibold flex flex-col">
                                {testimonial[imageIndex].title}
                                <span className="text-gray-400 font-light">{testimonial[imageIndex].user}</span>
                            </figcaption>
                        </div>
                    </motion.figure>
                </div>
            </AnimatePresence>
            {!hiddeArrows && (
              <>
                <div className="absolute arrow-custom xl:top-1/2 left-5 lg:left-1/3 p-1 cursor-pointer " onClick={() => paginate(1)}>
                    <ChevronLeftIcon className="w-10 h-10"/>
                </div>
                <div className="absolute arrow-custom xl:top-1/2 right-5 lg:right-1/3 p-1 cursor-pointer  " onClick={() => paginate(-1)}>
                    <ChevronRightIcon className="w-10 h-10"/>
                </div>
              </>
            )}
        </motion.div>
    </section>
    </>
  );
};
