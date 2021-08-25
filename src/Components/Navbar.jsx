import React, {useState} from 'react'
import {Link} from 'react-scroll';
import { motion } from 'framer-motion'

function Navbar() {

    const [nav,setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >=50) {
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll',changeBackground);

    return (
        <motion.nav className={nav ? "nav active" : "nav"}
        initial={{opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 }}}
        >
            <Link to='main'  smooth={true} duration={500}>
               <h1 style={{color:'white'}}>Antakya 326 Döner</h1>
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn'  />
            <label className='menu-icon' for='menu-btn' >
                <span className='nav-icon' ></span>
            </label>
            <ul className='menu'>
                <li><Link to='main' smooth={true} duration={500}>Header</Link></li>
                <li><Link to='Info' smooth={true} duration={500}>Menu</Link></li>
                <li><Link to='Infos' smooth={true} duration={500}>About</Link></li>
                <li><Link to='Infosec' smooth={true} duration={500}>Contact</Link></li>
            </ul>
        </motion.nav>
    )
}

export default Navbar;
