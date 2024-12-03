import picture from '../pictures/IMG_0391.jpg'

import { motion } from 'framer-motion';

function About() {
    return(
        <div>
            <div className='bar'>
                <h1>I carry a graveyard in my back pocket to pay tribute to dead presidents</h1>
            </div>
            <div className="about-container">
            
            <div className='img-and-text-container'>
                  <motion.div 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                className="about-img"
            >
                <img src={picture} alt="This will be a cute pic of me" className='picture-of-me'/>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                className="about-text"
            >
                <h1 className='about-h1'>Meet Me</h1>
                <p className="about-paragraph">
                    Hiia! I am 22 years old and go by the title of a creative. My alias online are Benbeejammin and TwoSoulsProjection. My only goal in life to to maintain happiness and spread smiles throughout my peers. I don't belive in getting rich becasue too much money will corrupt even the purest. Ideally I would just like to keep living joyous and fed. 
                </p>
            </motion.div>
            </div>
          
        </div>
        </div>
        
    )
}

export default About