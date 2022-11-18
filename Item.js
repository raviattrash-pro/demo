import React from 'react'
import { motion } from 'framer-motion';

import './Item.css'

function Item({ icon, name }) {
    return ( <
        motion.div whileHover = {
            {
                scale: 1.1,
                //rotate: 180,
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(3.5px)",
                WebkitBackdropFilter: "blur(3.5px)",
                border: "1px solid rgba( 255, 255, 255, 0.18 )",
            }
        }
        className = 'item' >

        <
        div className = 'icon' > { icon } < /div>  <
        span > { name } < /span>

        <
        /motion.div>
    )
}

export default Item