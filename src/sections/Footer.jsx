import React from "react";
import BrandName from "../components/BrandName";
import { useScroll } from "../components/useScroll";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { AiFillInstagram, AiFillLinkedin, AiOutlineSend } from "react-icons/ai";
import { motion } from "framer-motion";
import "../styles/sections/Footer.scss";
import { fromUp, fromDown } from "../utils/Animations";

function Footer() {
  const [element, controls] = useScroll();

  return (
    <div className="footer-container" ref={element}>
      <div className="container">
        <div className="main-container">
          <motion.div
            className="news-letter"
            variants={fromUp}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <BrandName isFooter={true} />
            <p>
              Join our newsletter to get updated with our Offers & Discounts.
            </p>
            <div className="mail">
              <input type="email" placeholder="Please Enter Your Email" />
              <button>
                <AiOutlineSend />
              </button>
            </div>
          </motion.div>
          <motion.div
            className="quick-links"
            variants={fromDown}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#testimonials">Testimonial</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#career">Career</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#terms">Terms & Conditions</a>
              </li>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="industries"
            variants={fromUp}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h3>Industires</h3>
            <ul>
              <li>
                <a href="#website">Website Development</a>
              </li>
              <li>
                <a href="#mobile">Mobile App Development</a>
              </li>
              <li>
                <a href="#design">Website Design</a>
              </li>
              <li>
                <a href="#app">Mobile App Design</a>
              </li>
              <li>
                <a href="#marketing">Digital Marketing</a>
              </li>
              <li>
                <a href="#graphic">Graphic Design</a>
              </li>
              <li>
                <a href="#ios">IOS App Development</a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="touch"
            variants={fromDown}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h3>Get in Touch</h3>
            <div className="touch-section">
              <div className="icon">
                <MdEmail />
              </div>
              <div className="detail">
                <div className="detail-name">Email</div>
                <div className="detail-content">
                  <a href="#">tdark237@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="touch-section">
              <div className="icon">
                <FaPhoneAlt />
              </div>
              <div className="detail">
                <div className="detail-name">Phone</div>
                <div className="detail-content">
                  <a href="#">+ 237 656 818 635</a>
                </div>
              </div>
            </div>

            <div className="touch-section">
              <div className="icon">
                <ImLocation />
              </div>
              <div className="detail">
                <div className="detail-name">Location</div>
                <div className="detail-content">
                  <a href="#"> Biyem-assi, Rond-Point Express, Yaounde</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="copyright">
          <div className="copy">
            <p>Designed and Build by Ted Mbang, 2021. All Rights Reserved.</p>
          </div>
          <div className="icons">
            <div className="icon">
              <a href="#facebook">
                <FaFacebookF />
              </a>
            </div>
            <div className="icon">
              <a href="#instagram">
                <AiFillInstagram />
              </a>
            </div>
            <div className="icon">
              <a href="#linkedin">
                <AiFillLinkedin />
              </a>
            </div>
            <div className="icon">
              <a href="#twitter">
                {" "}
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
