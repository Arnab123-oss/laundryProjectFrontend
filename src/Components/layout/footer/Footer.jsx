import React from "react";
import "./Footer.css"

import {
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillFacebook,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div>
     
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://twitter.com" target="blank">
          <AiFillTwitterCircle />
        </a>
        <a href="https://youtube.com" target="blank">
          <AiFillYoutube />
        </a>
        <a href="https://github.com" target="blank">
          <AiFillFacebook />
        </a>
        <a href="https://instagram.com" target="blank">
          <AiFillInstagram />
        </a>
      </aside>
    </footer>
  );
};
export default Footer;
