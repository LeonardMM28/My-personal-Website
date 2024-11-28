import React from "react";
import { motion } from "framer-motion";
import igIcon from "../assets/images/ig.png";
import fbIcon from "../assets/images/fb.png";

function Intro() {
  return (
    <section className="intro">
      <motion.div
        className="mydata"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Leonardo Meza Martinez</h2>
        <h2>Computer Science Undergraduate Student at</h2>
        <h2>San Francisco State University</h2>
      </motion.div>
      <motion.div
        className="contactInfo"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2>Get in Touch!</h2>
        <div className="socialNet">
          <a
            href="https://www.instagram.com/leonardmezamtz/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={igIcon} alt="Instagram" className="sn" />
          </a>
          <a
            href="https://www.facebook.com/people/Leonard-Meza-Mart%C3%ADnez/pfbid0jAYCMBPxbGQrSo1415daVw7avXwQsUTK5RgEARUBUDuYf3q2BmYD1CTv3TiBNHJzl/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={fbIcon} alt="Facebook" className="sn" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Intro;
