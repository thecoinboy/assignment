import React from 'react'
import './Hero.css'
import hero_img from '../images/hero.png'

const Hero = () => {
  return (
    <div className="h_container">
      <div className='h_left'>
        <span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore id eligendi accusamus repellat sapiente praesentium facere tenetur, quas saepe labore iusto ipsa aspernatur ullam, beatae provident voluptas eum. Suscipit, incidunt?</span>
        <h1> Hi, I am john, <br />  Creative Technologist </h1>
        <button> Download Resume </button>
      </div>
      <div className='r_hero'>
        <img src={hero_img} alt="" />
      </div>
    </div>
  )
}

export default Hero



