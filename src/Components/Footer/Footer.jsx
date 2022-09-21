import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'


const Footer = () => {
    return (
        <div style={{ display:"flex", flexDirection:"column", justifyContent:"center" , alignItems:"center", gap:"1rem", marginTop:"5rem", marginBottom:"5rem" }}>
            <div style={{ display: "flex", gap:"2rem", justifyContent: "center", alignItem: "center", flexWrap: "wrap" }}>
                <FaFacebookSquare size={35} />
                <FaInstagram size={35} />
                <FaTwitter size={35} />
                <FaLinkedin size={35} />
            </div>
            <span style={{fontSize:"14px"}}>Copyright © 2020 All rights reserved </span>
        </div>
    )
}

export default Footer