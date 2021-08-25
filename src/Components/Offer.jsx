import React from 'react'
import { motion } from 'framer-motion'

function Offer() {
    return (
        <motion.div id='offer'
        initial={{opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 }}}
        >
            <div className='pr-heading'>
                <h1>A BIG <span>OFFER</span> FOR THIS SUMMER</h1>
                <div className='pr-btns'>
                    
                </div>
            </div>
        </motion.div>
    )
}

export default Offer;
