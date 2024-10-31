import { Link } from 'react-router-dom';


function Navbar() {
    return(
        <nav>
            <Link to = '/'>Home</Link>
             <Link to = '/writings'className='home-h1'> <h1 >This Weeks Story</h1></Link>
             <Link to = '/prevWriting'className='home-h1'><h1 >Previous Weeks Story</h1></Link>
             <Link to = '/Iphone'>Shott on iphone</Link>
        </nav>
    )
}

export default Navbar