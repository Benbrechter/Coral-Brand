import { Link } from 'react-router-dom';
import logo from '../pictures/logo.png'

function Navbar() {
    return(
        <div>
            <div className='bar'>
                <h1>Who am I to judge another when I myself walk as an imperfect man</h1>
            </div>
        <nav className='navbar-container'>
            <div className='img-container'>
                <img src= {logo} alt="this will be the logo" />
            </div>
            
            <ul className='navbar-ul'>
                <li><Link to = '/' className='nav-h1'>Home</Link> </li>
                <li><Link to = '/writings'className='nav-h1'>This Weeks Story</Link> </li>
                <li><Link to = '/prevWriting'className='nav-h1'>Previous Weeks Story</Link> </li>
                <li><Link to = '/Iphone' className='nav-h1'>Shot on iphone</Link> </li>
            </ul> 
        </nav>
        </div>
    )
}

export default Navbar