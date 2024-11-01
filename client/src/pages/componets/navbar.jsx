import { Link } from 'react-router-dom';


function Navbar() {
    return(
        <nav>
            <img src="" alt="this will be the logo" />
            <ul>
                <li><Link to = '/'>Home</Link> </li>
                <li><Link to = '/writings'className='home-h1'> <h1 >This Weeks Story</h1></Link> </li>
                <li><Link to = '/prevWriting'className='home-h1'><h1 >Previous Weeks Story</h1></Link> </li>
                <li><Link to = '/Iphone'>Shott on iphone</Link> </li>
            </ul> 
        </nav>
    )
}

export default Navbar