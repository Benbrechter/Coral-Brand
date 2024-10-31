import { Link } from 'react-router-dom';
import Navbar from './componets/navbar';
import About from './About'

function Home(){
    return(
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <About/>
            </div>
            <div>
                <Contact/>
            </div>
        </div>
    )
}

export default Home