import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

function Contact() {
  const [formStatus, setFormStatus] = useState("Send");
  const [successMessage, setSuccessMessage] = useState("");
  const [senderInfo, setSenderInfo] = useState({ name: "", email: "" });

  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const from_name = form.from_name.value;
    const email = form.email.value;

    setFormStatus("Sending...");

    emailjs
      .sendForm(
        "leonardmm", // Replace with your EmailJS service ID
        "template_07wuutp", // Replace with your EmailJS template ID
        form,
        "nk6ENX2UeqncDdGML" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormStatus("Send");
          setSenderInfo({ name: from_name, email: email }); // Capture sender info
          setSuccessMessage(
            `Thank you, ${from_name}! Your message has been sent successfully. We'll respond to ${email} soon.`
          );
          form.reset(); // Reset the form fields
          setTimeout(() => {
            setSuccessMessage("");
            setSenderInfo({ name: "", email: "" });
          }, 5000); // Clear success message after 5 seconds
        },
        (error) => {
          console.error("FAILED...", error);
          setFormStatus("Send");
          setSuccessMessage("Failed to send message. Please try again.");
          setTimeout(() => setSuccessMessage(""), 5000); // Clear error message after 5 seconds
        }
      );
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
      {successMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            marginBottom: "20px",
            padding: "10px",
            backgroundColor: successMessage.includes("successfully")
              ? "#4caf50"
              : "#f44336",
            color: "white",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          {successMessage}
        </motion.div>
      )}
      <motion.form
        onSubmit={onSubmit}
        className="contact-form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div>
          <label htmlFor="from_name">Your Name:</label>
          <input
            type="text"
            name="from_name"
            id="from_name"
            required
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            placeholder="Type your message here..."
          ></textarea>
        </div>
        <button type="submit">{formStatus}</button>
      </motion.form>
    </section>
  );
}

export default Contact;
