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
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">

            <nav>
                <div className="grid grid-flow-col gap-4 text-2xl">
                    <a
                        href="https://facebook.com/syed.bayzidhusain/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebook className="text-blue-600 hover:scale-110 transition-transform duration-200" />
                    </a>
                    <a
                        href="https://x.com/SyedBayzid82849"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter className="text-sky-400 hover:scale-110 transition-transform duration-200" />
                    </a>
                    <a
                        href="https://youtube.com/@SyedBayzid0.1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaYoutube className="text-red-600 hover:scale-110 transition-transform duration-200" />
                    </a>
                    <a
                        href="https://linkedin.com/in/syed-bayzid-b91343329"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="text-blue-700 hover:scale-110 transition-transform duration-200" />
                    </a>
                    <a
                        href="https://www.instagram.com/syedbayzidhusain/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram className="text-pink-500 hover:scale-110 transition-transform duration-200" />
                    </a>

                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by S.B.H.</p>
            </aside>
        </footer>
    );
};

export default Footer;