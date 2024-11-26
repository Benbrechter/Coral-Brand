import picture from '../pictures/IMG_0391.jpg'

import { motion } from 'framer-motion';

function About() {
    return(
        <div className="about-container">
            <div className='bar'>
                <h1>Who am I to judge another when I myself walk as an imperfect man</h1>
            </div>
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
                <h1>Meet Me</h1>
                <p className="about-paragraph">
                    Hiia! I am 22 years old and claim just to be a creative. My alias online are Benbeejammin and once TwoSoulsProjection. My only goal in life to to maintain happiness and spread smiles throughout my peers. I don't belive in getting rich becasue too much money will corrupt even the purest. Ideally I would just like to keep living. 
                </p>
            </motion.div>
        </div>
    )
}

export default About