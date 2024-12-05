import { Link } from 'react-router-dom';
import logo from '../pictures/logo.png'
import user from "../pictures/userIcon.png"
import navImg from '../pictures/nav-img.png'
import instagram from '../pictures/instagram.png'
import wallet from '../pictures/wallet.png'




function Navbar() {
    function showSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
       }
       function closeSidebar(){
         const sidebar = document.querySelector('.sidebar')
         sidebar.style.display = 'none'
       }
    return(
        <div>
        <nav className='navbar-container'>
            <div className='img-orientation'>
                <div className='recycle-img-container'>
                    <img src={navImg} alt="" />
                </div>
                <Link to = '/Home'>
                    <div className='img-container'>
                       <img src= {logo} alt="this will be the logo" />
                    </div>
                </Link>
                <div className='nav-links-container'>
                    <Link to = '/login'><img src= {user} alt=""  style={{height: "35px", margin: '10px'}}/></Link>
                <a href="https://www.instagram.com/benbeejammin/"><img src = {instagram} alt="this will route to my insta"  style={{height: "35px", margin: '10px'}}/></a>
                <a href="https://account.venmo.com/u/Ben-Brechter"><img src= {wallet} alt="This will link you to my venmo"  style={{height: "35px", margin: '10px'}} /></a>
                </div>
                

            </div>
            
           
            <ul className='navbar-ul'>
                <li><Link to = '/' className='nav-h1'>Home</Link> </li>
                <li><Link to = '/writings'className='nav-h1'>This Weeks Story</Link> </li>
                <li><Link to = '/prevWriting'className='nav-h1'>Previous Weeks Story</Link> </li>
                <li><Link to = '/Iphone' className='nav-h1'>Shot on iphone</Link> </li>
            </ul> 
            </nav>
            {/* sidebar -------------------------------------------------- */}
            <div className='navbar-shrunk'>
                    
            <div onClick={ () => showSidebar()} className="dropdown-menu-icon">
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a>
            </div>

            <Link to = '/Home'>
            <div className='img-container'>
               <img src= {logo} alt="this will be the logo" />
            </div>
            </Link>

              <Link to= '/login' >
                <img src= {user} alt="" style={{height: '24px', marginTop: '15px', marginRight: '10px'}} />
            </Link>  

            <div className='sidebar'>
                <div onClick={ () => closeSidebar()}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg> 
                </div>
                <ul className='sidebar-ul'>
                    <li style={{marginBottom: '10px'}}><Link to = '/' className='sidebar-li'>Home</Link> </li>
                    <li style={{marginBottom: '10px'}}><Link to = '/writings'className='sidebar-li'>This Weeks Story</Link> </li>
                    <li style={{marginBottom: '10px'}}><Link to = '/prevWriting'className='sidebar-li'>Previous Weeks Story</Link> </li>
                    <li style={{marginBottom: '10px'}}><Link to = '/Iphone' className='sidebar-li'>Shot on iphone</Link> </li>
                </ul>
                </div>

            
            </div>
           
        
         <div className='bar'>
                <h1>Who am I to judge another when I myself walk as an imperfect man</h1>
            </div>
        </div>
    )
}

export default Navbar