import React from "react";
import leoImage from "../assets/images/leo.jpeg"; // Import image
import igIcon from "../assets/images/ig.png";
import fbIcon from "../assets/images/fb.png";

function Intro() {
  return (
    <div className="intro">
      <div className="mydata">
        <h2>Leonardo Meza Martinez</h2>
        <h2>Computer Science undergraduate student at</h2>
        <h2>San Francisco State University</h2>
      </div>
      <div className="contactInfo">
        <h2>Get in touch with me!</h2>
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
      </div>
      <div className="pic">
        <img src={leoImage} alt="Leonardo" className="leo" />
      </div>
    </div>
  );
}

export default Intro;
