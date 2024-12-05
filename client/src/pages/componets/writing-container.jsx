import { Link } from "react-router-dom"
import flower from '../pictures/imgFlower.jpg'
import camera from '../pictures/imgTogo.jpg'
import computer from "../pictures/imgMeAtDoor.jpg"

import { motion } from 'framer-motion';

function WritingsContainer(){
    return(
        <div>
            <div className='bar'>
                <h1>The theory of paradox is why I never close doors because I know I’ve already done that</h1>
            </div>
           <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="Events-Container">

            <Link to = '/writings'className="link">
            <div className="things-to-do">
                <div className="things-to-do-img-container">
                   <img src={computer} alt="Notebook maybe" /> 
                </div>
                
                <h1>Weekly Writings</h1>
                
            </div>
            </Link>
            <Link to = '/Iphone' className="link">
            <div className="things-to-do">
                <div className="things-to-do-img-container">
                    <img src={camera} alt="Images off an Iphone" />
                </div>
                
                <h1>Shot on Iphone</h1>
                
            </div>
            </Link>
            <Link to = '/prevWriting' className="link">
            <div className="things-to-do">
                <div className="things-to-do-img-container">
                   <img src={flower} alt="Filing cabnet" /> 
                </div>
                
                <h1>Previous Writings</h1>
                
            </div>
            </Link>
        </motion.div> 
        </div>
        
    )
}

export default WritingsContainer