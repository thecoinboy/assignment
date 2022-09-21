import React from 'react'
import {Works} from '../../Components/Works/Works.jsx';
import BlogRecent from '../../Components/blogs/BlogRecent.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import Hero from '../../Components/Hero/Hero.jsx';
import {Navbar} from '../../Components/Navbar/Navbar.jsx';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <BlogRecent />
            <Works />
            <Footer />
        </div>
    )
}

export default Home