import React from 'react'
import './Works.css'
import { data } from '../data/data.js'

export const Works = () => {
  return (
    <div className='container_works'>
      <h1> Featured Works </h1>
      {
        data.map((item) => {
          return (
            <div className= "works_box" key={item.id}>
              <div className="popFull">
                <div className="l_box">
                  <img src={item.image} alt="" />
                </div>
                <div className="r_box">
                  <h2>  {item.title}</h2>
                  <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                    <span className='date'> {item.date} </span>
                    <span className='category'> {item.category} </span>
                  </div>
                  <p> {item.sdescription}</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}


