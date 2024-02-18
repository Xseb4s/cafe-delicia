import { useTheme } from "@/store/theme";
import { motion } from "framer-motion";
import Image from "next/image";


const We = () => {
  const {dark} = useTheme();
  return (
    <>
    <div id="nosotros"/>
    <section className="poppins-regular">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 10,
            stiffness: 100,
            restDelta: 0.001
          }
      }}
        className="lg:mx-36 my-16 sm:my-28 xl:mx-72 flex flex-col sm:flex-row items-center"
      >
        <figure className="m-0 mx-6 sm:mx-0 img-size relative">
          <Image src="/locally-sourced.webp" alt="Definition" fill blurDataURL='blur' priority className="rounded-3xl object-cover" />
        </figure>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.5,
          }}
          className="w-full sm:w-1/2 px-5 sm:px-0 ml-0 sm:ml-28 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:mt-12"
        >
          <h2 className="font-bold text-4xl sm:text-5xl mb-6 max-sm:text-center">Somos caf&eacute; Delicia</h2>
          <p className="text-lg" style={{width:"88%"}}>Una marca cale&ntilde;a y comprometida con ofrecerte una experiencia aut&eacute;ntica y acogedora. Calidosos, aut&eacute;nticos y amables en todo lo que hacemos. Buscamos crear momentos de verdadera delicia para todos con nuestra selecci&oacute;n de caf&eacute;s locales de primera y platos para calmarte el hambre. Nuestro enfoque c&aacute;lido y amistoso refleja nuestro compromiso con tu satisfacci&oacute;n y el bienestar de los cale&ntilde;os.</p>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
        }}
        className="lg:mx-36 xl:ml-72 gap-36 mb-32 lg:flex"
      >
          <figure className="flex max-sm:flex-col items-center">
            <Image src="/icons/locally-sourced.png" alt="Ubicación" width={120} height={100} blurDataURL='blur' className={`${dark ? "invert": "invert-0"} w-auto h-auto`}/>
            <div className="mx-5 sm:ml-8 max-sm:text-center max-sm:mt-8">
              <figcaption className="text-orange-400 mb-4 text-xl xl:text-2xl font-semibold">Origen Local</figcaption>
              <p className="lg:w-80 xl:w-96 xl:text-md">
              Priorizamos los productos locales, colaborando estrechamente con agricultores del pa&iacute;s para garantizar la frescura y calidad en cada taza.
              </p>
            </div>
          </figure>
          <figure className="flex max-sm:flex-col items-center max-sm:mt-14">
            <Image src="/icons/hollistic.png" alt="Origen" width={120} height={100} blurDataURL='blur' className={`${dark ? "invert": "invert-0"} w-auto h-auto`}/>
            <div className="mx-5 sm:ml-8 max-sm:text-center max-sm:mt-8">
              <figcaption className="text-orange-400 mb-4 text-xl xl:text-2xl font-semibold">Enfoque Hol&iacute;stico</figcaption>
              <p className="lg:w-80 xl:w-96 xl:text-md">
              Consideramos cada aspecto del proceso de producción con cuidado y respeto hacia la naturaleza, promoviendo prácticas sostenibles en cada etapa.
              </p>
            </div>
          </figure>
      </motion.div>
    </section>
    </>
  )
}

export default We