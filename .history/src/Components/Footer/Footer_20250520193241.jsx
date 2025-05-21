import React from "react";
import {
    FaFacebook,
    FaTwitter,
    FaYoutube,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-neutral text-neutral-content p-10 rounded-t-2xl shadow-inner">
            <nav>
                <div className="grid grid-flow-col gap-6 text-3xl">
                    <a
                        href="https://facebook.com/syed.bayzidhusain/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebook className="hover:text-blue-400 hover:scale-125 transition-all duration-300 shadow-md" />
                    </a>
                    <a
                        href="https://x.com/SyedBayzid82849"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter className="hover:text-sky-300 hover:scale-125 transition-all duration-300 shadow-md" />
                    </a>
                    <a
                        href="https://youtube.com/@SyedBayzid0.1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaYoutube className="hover:text-red-400 hover:scale-125 transition-all duration-300 shadow-md" />
                    </a>
                    <a
                        href="https://linkedin.com/in/syed-bayzid-b91343329"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="hover:text-blue-300 hover:scale-125 transition-all duration-300 shadow-md" />
                    </a>
                    <a
                        href="https://www.instagram.com/syedbayzidhusain/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram className="hover:text-pink-400 hover:scale-125 transition-all duration-300 shadow-md" />
                    </a>
                </div>
            </nav>
            <aside className="mt-4">
                <p className="hover:text-primary transition-colors duration-200">
                    © {new Date().getFullYear()} - All rights reserved by <strong>S.B.H.</strong>
                </p>
            </aside>
        </footer>
    );
};

export default Footer;
