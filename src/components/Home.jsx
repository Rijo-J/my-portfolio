import React from 'react'
import image from '../assets/mountain-background.jpg'

const Home = () => {
  return (
    <main>
      <img src={image} alt='mountain background'
      className='absolute object-cover w-full h-full'
      />
      <section className=' relative flex justify-center min-h-screen pt-12 lg:pt-54 px-8'>
        <h1 className='inline-flex rounded-xl text-5xl text-gray-500 font-bold cursive leading-none lg:leading-snug home-name'>Hello I'm Yakub.</h1>
      </section>
      
    </main>
  )
}

export default Home