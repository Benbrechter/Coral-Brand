import { Link } from "react-router-dom"
import userIcon from '../pictures/userIcon.png'
import instagram from '../pictures/instagram.png'
import wallet from '../pictures/wallet.png'

function Footer() {
    return(
        <div className="footer-container">
            <img src="" alt="this will be my logo" />
            <div>
                <Link> <img src={userIcon} alt="this will allow the user to create a account" /></Link>
                <a href="https://account.venmo.com/u/Ben-Brechter"><img src= {wallet} alt="This will link you to my venmo" /></a>
                <a href="https://www.instagram.com/benbeejammin/"><img src = {instagram} alt="this will route to my insta" /></a>
            </div>
            <p>I do all of this in my free time and with my own money! If you would like to support please click the wallet and it will direct you to my venmo!</p>
        </div>
    )
}

export default Footer