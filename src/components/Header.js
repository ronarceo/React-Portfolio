import React from 'react';

function Header({ currentPage, handlePageChange }) {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="#about" className="ml-3 text-xl">
                        Ronald Arceo
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	text-gray-400 flex flex-wrap items-center text-base justify-center">
                    <a href="#about" className={currentPage === 'About' ? 'mr-5 text-white' : 'mr-5 hover:text-white'} onClick={() => handlePageChange('About')}>
                        About Me
                    </a>
                    <a href="#portfolio" className={currentPage === 'Portfolio' ? 'mr-5 text-white' : 'mr-5 hover:text-white'} onClick={() => handlePageChange('Portfolio')}>
                        Portfolio
                    </a>
                    <a href="#contact" className={currentPage === 'Contact' ? 'mr-5 text-white' : 'mr-5 hover:text-white'} onClick={() => handlePageChange('Contact')}>
                        Contact
                    </a>
                    <a href="#resume" className={currentPage === 'Resume' ? 'mr-5 text-white' : 'mr-5 hover:text-white'} onClick={() => handlePageChange('Resume')}>
                        Resume
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;