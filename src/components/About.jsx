import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-24 scroll-mt-24"
    >

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

        {/* Heading */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        {/* Content */}
        <p className="text-xl mt-6">
          I’m a Computer Engineering student with a strong passion for web development and building modern, user-friendly applications. I enjoy working with technologies like React, JavaScript, and Tailwind CSS to create responsive and interactive websites. My focus is on writing clean, efficient code and continuously improving my skills by learning new tools and best practices in development.
        </p>

        <br />

        <p className="text-xl">
          I’m always eager to take on new challenges and turn ideas into real-world projects. As I grow in my journey, I’m looking for opportunities where I can apply my knowledge, gain hands-on experience, and contribute to meaningful projects. My goal is to become a skilled developer who can build impactful and scalable digital solutions.
        </p>

      </div>
    </div>
  )
}

export default About