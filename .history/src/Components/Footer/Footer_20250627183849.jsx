import React from "react";
import {
    FaFacebook,
    FaTwitter,
    FaYoutube,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa";
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-gray-800 text-white p-10 rounded-t-2xl shadow-inner dark:bg-gray-900 dark:text-gray-300">
            <div className="">
                <img src={logo} alt="Website Logo" className="h-12 mx-auto" />
            </div>
            <nav>
                <div className="grid grid-flow-col gap-6 text-3xl">
                    <a
                        href="https://facebook.com/syed.bayzidhusain/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="hover:text-blue-400 hover:scale-125 transition-all duration-300 shadow-md"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="https://x.com/SyedBayzid82849"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="hover:text-sky-300 hover:scale-125 transition-all duration-300 shadow-md"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://youtube.com/@SyedBayzid0.1"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                        className="hover:text-red-400 hover:scale-125 transition-all duration-300 shadow-md"
                    >
                        <FaYoutube />
                    </a>
                    <a
                        href="https://linkedin.com/in/syed-bayzid-b91343329"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-blue-300 hover:scale-125 transition-all duration-300 shadow-md"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://www.instagram.com/syedbayzidhusain/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="hover:text-pink-400 hover:scale-125 transition-all duration-300 shadow-md"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </nav>

            <nav className=" md:flex items-center ju justify-center space-x-6 text-lg font-medium">
                <a href="/" className="hover:text-secondary transition">Home</a>
                <a href="/all-items" className="hover:text-secondary transition">All Items</a>
                <a href="/about" className="hover:text-secondary transition">About Us</a>
                <a href="/contact" className="hover:text-secondary transition">Contact</a>
                <a href="/support" className="hover:text-secondary transition">Support</a>
            </nav>

            <aside className="">
                <p className="hover:text-secondary transition-colors duration-200">
                    © {new Date().getFullYear()} - All rights reserved by <strong>S.B.H.</strong>
                </p>
            </aside>
        </footer>
    );
};

export default Footer;
