import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { blog } from '../data/data.js'
import './BlogRecent.css'

const BlogRecent = () => {

  return (
    <div className='blog'>
      <div className='more'>
        <h4> Recent Posts</h4>
        <Link to="/"> View All </Link>  
      </div>
    <div className='blogrecent'>
      {
        blog.map((curElem, i) => {
          return (
            <div className='recent_box' key={curElem.id}>
              <h1> {curElem.title} </h1>
              <div >
                <span style={{marginRight:"1rem"}}> {curElem.date}</span>
                <span> {curElem.category}</span>
              </div>
              <p> {curElem.des} </p>
            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default BlogRecent;
