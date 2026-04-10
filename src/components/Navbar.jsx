import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        { id: 1, link: "home" },
        { id: 2, link: "about" },
        { id: 3, link: "portfolio" },
        { id: 4, link: "skills" },
        { id: 5, link: "contact" },
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-50">

            {/* Logo */}
            <div>
                <h1 className="text-5xl font-signature ml-2">
                    Aashutosh
                </h1>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200"
                    >
                        <Link to={link} smooth duration={500}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Icon */}
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-50 text-gray-400 md:hidden relative"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {/* Mobile Menu */}
            {nav && (
                <ul className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 flex flex-col justify-center items-center text-gray-400 z-40">

                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl"
                        >
                            <Link
                                onClick={() => setNav(false)}
                                to={link}
                                smooth
                                duration={500}
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}

        </div>
    )
}

export default Navbar