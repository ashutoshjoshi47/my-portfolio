import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: arrayDestruct,
            url: "https://elearning-platform-gilt.vercel.app/dashboard",
        },
        {
            id: 2,
            src: reactWeather,
            // url: "https://your-second-project.vercel.app",
        },
    ]

  return (
    <div
      name="portfolio"
      className='pt-24 bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Portfolio
          </p>
          <p className='py-6'>Check out my works</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, src, url }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg overflow-hidden group'>

              <div className='overflow-hidden h-48'>
                <img
                  src={src}
                  alt="project"
                  className='w-full h-full object-cover duration-300 group-hover:scale-110'
                />
              </div>

              <div className='flex items-center justify-center p-4'>
                <a href={url} target="_blank" rel="noreferrer" className='w-full'>
                  <button className='w-full px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium duration-200 hover:scale-105'>
                    Demo
                  </button>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Portfolio