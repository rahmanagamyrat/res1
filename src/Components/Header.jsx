import React from 'react'
import {motion} from 'framer-motion'




function Header() {
    return (
        <motion.div id='main'
          initioal={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >

        </motion.div>
    )
}

export default Header;
