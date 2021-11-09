import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="https://github.com/ronarceo" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={36} />
                </a>
                <a href="https://www.linkedin.com/in/ronald-arceo" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn size={36} />
                </a>
            </div>
        </footer>
    );
}


export default Footer;