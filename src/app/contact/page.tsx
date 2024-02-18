"use client"
import ReCAPTCHA from "react-google-recaptcha";
import Map from '@/components/map/page';
import React, { useRef, useState } from 'react';
import sendEmail from "@/utils/sendMail";
import Modal from "@/components/modal/page";
import { useModal } from "@/store/modal";
import { Toggle } from "@/components/toggle/page";
import {motion} from "framer-motion"
import "./contact.css";
import { CircularProgress } from "@mui/material";


const defaultPosition: [number, number] = [3.457794, -76.535467];
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    tel: false,
  });  
  const [isChecked, setIsChecked] = useState(false);
  const [modalContent, setModalContent] = useState(""); 
  const {modalOpen} = useModal();

  const validateForm = (formData: any) => {
    const errors = {
      name: formData.from_name === "",
      email: formData.from_email === "",
      tel: formData.from_tel === "",
    };
  
    setFormErrors(errors);
  
    return Object.values(errors).every((error) => !error);
  };
  const onChange = () => {
    setIsChecked(!isChecked);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());
    const formToSend = (e.currentTarget);

    setLoading(true);
  
    if (!validateForm(formValues)) {
      setLoading(false);
      return;
    }

    try {
      await sendEmail(formToSend);
      setModalContent("¡Gracias por contactarnos! te responderemos lo antes posible.");
    } catch (error) {
      console.log("Error sending email: ", error);
      setModalContent("¡Uy! parece que hubo un problema, intentálo de nuevo más tarde.");
    }
    modalOpen();
    formToSend.reset();
    setLoading(false);
  };
  


  return (
    <section className='poppins-regular'>
      <Toggle/>
      <div className='my-52 lg:mx-28 xl:mx-80 flex max-sm:flex-col justify-between items-center'>
        <motion.form initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }} transition={{
          duration: 0.3,
          }} ref={form} className='flex flex-col w-fit' onSubmit={handleSubmit}>
          <h2 className='text-6xl font-semibold w-96 leading-relaxed'>¿Querés hablar?</h2>
          <div className='flex flex-col gap-6 items-center'>
            <input type="hidden" name="to_name" value="Cielo Bernate" />
            <input type="text" name="from_name" placeholder='Tu nombre' 
              className={`w-full border-2 border-black text-yellow-900 rounded-lg py-2 px-6 bg-cream placeholder-yellow-900 ${
              formErrors.name ? "border-red-500" : ""
              }`} 
            />
              {formErrors.name && <p className="text-red-500">Por favor, ingresa tu nombre.</p>}

            <input type="email" name="from_email" placeholder='Tu correo' 
              className={`w-full border-2 border-black text-yellow-900 rounded-lg py-2 px-6 bg-cream placeholder-yellow-900 ${
                formErrors.email ? "border-red-500" : ""
                }`}
            />
              {formErrors.email && <p className="text-red-500">Por favor, ingresa tu correo.</p>}

            <input type="tel" name="from_tel" placeholder='Tu teléfono' 
              className={`w-full border-2 border-black text-yellow-900 rounded-lg py-2 px-6 bg-cream placeholder-yellow-900 ${
              formErrors.tel ? "border-red-500" : ""
              }`}
            /> 
              {formErrors.tel && <p className="text-red-500">Por favor, ingresa tu celular.</p>}

            <textarea name="message"  cols={10} rows={5} placeholder='¿Un mensaje?' className='w-full border-2 border-black text-yellow-900 rounded-lg py-2 px-6 bg-cream placeholder-yellow-900' />
            
           <ReCAPTCHA sitekey={`${process.env.SITEKEY}`} onChange={onChange}/>
            <button 
              disabled={loading}
              type="submit" className={`py-2 px-8 bg-cream border hover:scale-110 transition transition-duration-300 border-yellow-900 rounded-2xl w-fit text-yellow-900 font-semibold ${isChecked ? "" : "hidden"}`}>
                {!loading ? (
                  <>
                    ¡Hablanos!
                  </>
                ) : (
                <CircularProgress/>
                )}
            </button>
          </div>     
          <Modal>
            {modalContent}
          </Modal>
        </motion.form>
          <div className="flex map-size max-sm:px-8 max-sm:mt-20">
            <Map position={defaultPosition}/>
          </div>
        
      </div>
    </section>
  );
};

export default Contact;
