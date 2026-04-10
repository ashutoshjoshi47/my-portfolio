import React from 'react'
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full text-center py-6 bg-black text-gray-400">

      <p>© 2026 Aashutosh. All rights reserved.</p>

      <div className="flex justify-center items-center gap-6 mt-3 text-2xl">

        {/* Facebook */}
        <a
          href="https://www.facebook.com/aashutosh.joshi.792?rdid=Vd9OskKSOsKIrPr9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CdYswkoDE%2F#"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500 duration-200"
        >
          <FaFacebook />
        </a>

        {/* Divider */}
        <span className="text-gray-600">|</span>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/aashutosh__joshi/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-pink-500 duration-200"
        >
          <FaInstagram />
        </a>

      </div>

    </footer>
  )
}

export default Footer