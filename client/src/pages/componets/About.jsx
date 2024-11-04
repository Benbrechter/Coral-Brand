import picture from '../pictures/IMG_0391.jpg'

function About() {
    return(
        <div className="about-container">
            <div className="about-img">
                <img src= {picture} alt="This will be a cute pic of me"  className='picture-of-me'/>
            </div>
            <div className="about-text">
                <h1>Meet Me</h1>
                <p className="about-paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolore id voluptates dicta magni accusantium incidunt nam. Quaerat, eligendi quas? Odio consequatur sapiente architecto distinctio! Maxime corporis quo neque dolorum?
                </p>
            </div>
           
        </div>
    )
}

export default About 