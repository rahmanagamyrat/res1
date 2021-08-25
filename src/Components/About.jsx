import React from 'react'
import aboutimage from '../images/about.png'
import { motion } from 'framer-motion'

function About() {
    return (
        <motion.div
          initial={{opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 }}}
        >
            <div className='about-image'>
                <img src={aboutimage} alt=''/>
            </div>
            <div className='about-text'>
                <h1>LEARN MORE ABOUT US</h1>
                <p>Monday: 8am-9pm</p>
                <p>Tuesday: 8am-9pm</p>
                <p>Wednesday: 8am-9pm</p>
                <p>Thursday: 8am-9pm</p>
                <p>Friday: 8am-9pm</p>
                <p>Saturday: 8am-9pm</p>
                <p>Sunday: 8am-9pm</p>
            </div>
        </motion.div>
    )
}

export default About
