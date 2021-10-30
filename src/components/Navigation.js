import React from "react";

function Navigation() {
    return (
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	text-gray-400 flex flex-wrap items-center text-base justify-center">
            <a href="#about" className="mr-5 hover:text-white">
                About Me
            </a>
            <a href="#portfolio" className="mr-5 hover:text-white">
                Portfolio
            </a>
            <a href="#contact" className="mr-5 hover:text-white">
                Contact
            </a>
            <a href="#resume" className="mr-5 hover:text-white">
                Resume
            </a>
        </nav>
    );
};

export default Navigation;