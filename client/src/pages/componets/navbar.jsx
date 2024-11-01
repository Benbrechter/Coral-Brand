import { Link } from 'react-router-dom';


function Navbar() {
    return(
        <nav className='navbar-container'>
            <div className='img-container'>
                <img src="" alt="this will be the logo" />
            </div>
            
            <ul className='navbar-ul'>
                <li><Link to = '/' className='nav-h1'>Home</Link> </li>
                <li><Link to = '/writings'className='nav-h1'>This Weeks Story</Link> </li>
                <li><Link to = '/prevWriting'className='nav-h1'>Previous Weeks Story</Link> </li>
                <li><Link to = '/Iphone' className='nav-h1'>Shot on iphone</Link> </li>
            </ul> 
        </nav>
    )
}

export default Navbar