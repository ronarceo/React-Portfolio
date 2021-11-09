import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md"

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
                <a href="mailto:ronaldmarceo@gmail.com" target="_blank" rel="noopener noreferrer">
                    <MdEmail size={36} />
                </a>
            </div>
        </footer>
    );
}


export default Footer;