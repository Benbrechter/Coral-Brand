import { Link } from "react-router-dom"
import cabnet from '../pictures/filingCabnet.png'
import cat from '../pictures/catReading.png'
import camera from '../pictures/Camera.png'
import computer from "../pictures/macbook.png"

function WritingsContainer(){
    return(
        <div>
            <div className='bar'>
                <h1>Who am I to judge another when I myself walk as an imperfect man</h1>
            </div>
           <div className="Events-Container">
            <div className="things-to-do">
                <Link to = '/writings'className="link">
                <img src={computer} alt="Notebook maybe" />
                <h1>Weekly Writings</h1>
                </Link>
            </div>
            <div className="things-to-do">
                <Link to = '/Iphone' className="link">
                <img src={camera} alt="Images off an Iphone" />
                <h1>Shot on Iphone</h1>
                </Link>
            </div>
            <div className="things-to-do">
                <Link to = '/prevWriting' className="link">
                <img src={cabnet} alt="Filing cabnet" />
                <h1>Previous Writings</h1>
                </Link>
            </div>
            <div className="things-to-do">
                <Link to = "/Trey" className="link">
                <img src={cat} alt="Cartoon gif of a black cat" />
                <h1>Pictures of my cat trey</h1>
                </Link>
            </div>
        </div> 
        <div className='bar'>
                <h1>Who am I to judge another when I myself walk as an imperfect man</h1>
            </div>
        </div>
        
    )
}

export default WritingsContainer