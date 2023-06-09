import { useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false);
  const form = useRef();
  const env = import.meta.env;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        env.VITE_REACT_APP_EJS_SERVICE,
        env.VITE_REACT_APP_EJS_TEMPLATE,
        form.current,
        env.VITE_REACT_APP_EJS_KEY
      )
      .then(
        (result) => {
          document.getElementById("contact_form").reset();
          setIsSent(true);
        },
        (error) => {
          console.error(error);
          setIsSent(false);
        }
      );
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png)",
      }}
      className="w-full sm:w-[60%] h-full bg-grayscale rounded-xl pt-10 pb-10 pl-8 pr-8 shadow-2xl"
    >
      <div>
        <h2
          style={{ fontFamily: "Morganite Bold, sans-serif" }}
          className="message text-7xl bg-primary-600 p-2 rounded-xl text-grayscale-200 text-center rounded-br-[0%] relative shadow-2xl"
        >
          <Typewriter words={["Necessites ajuda?", "Contacta!"]} loop={true} />
          &nbsp;
        </h2>
      </div>
      <div className="w-full flex justify-center">
        <form
          id="contact_form"
          ref={form}
          method="POST"
          target="_blank"
          onSubmit={sendEmail}
          style={{ fontFamily: "Poppins, sans-serif" }}
          className="w-[80%] h-full flex flex-col gap-4 pt-4 text-grayscale-200"
        >
          <div className="w-full flex flex-col">
            &nbsp;
            <label htmlFor="firstname">EMAIL</label>
            &nbsp;

          </div>
          <div className="w-full flex flex-col">
            <a href="mailto:pauarbat@pauarbat.cat"><label htmlFor="lastname">pauarbat@pauarbat.cat</label></a>
            &nbsp;
          </div>
          <div className="w-full flex flex-col">
           <label htmlFor="email">TELÈFON</label>
            &nbsp;
          </div>
          <div className="w-full flex flex-col">
            <label>+34 645 995 701</label>
            &nbsp;
          </div>
          <div className="w-full flex justify-center">

          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
