import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formStatus, setFormStatus] = useState("Send");

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitted");
    // Implement form submission logic here (e.g., EmailJS, backend API)
  };

  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>
      <motion.form
        onSubmit={onSubmit}
        className="contact-form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" rows="5" required></textarea>
        </div>
        <button type="submit">{formStatus}</button>
      </motion.form>
    </section>
  );
}

export default Contact;
