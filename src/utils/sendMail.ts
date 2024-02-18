import emailjs from '@emailjs/browser';

const sendEmail = (form:any) => {
  return emailjs.sendForm(
    `${process.env.SERVICE}`,
    `${process.env.TEMPLATE}`,
    form,
    `${process.env.KEY}`
  );
};

export default sendEmail; 