import Navbar from './componets/navbar';
import About from './componets/About'
import Charities from './componets/charities';
import Contact from './componets/contact';
import WritingsContainer from './componets/writing-container';

function Home(){
    return(
        <div>
            <div>
                <Navbar/>
            </div>
            <img src="" alt="A cool graphic of trey and I" />
            <div>
                <About/>
            </div>
            <div>
                <WritingsContainer/>
            </div>
            <div>
                <Charities/>
            </div>
            <div>
                <Contact/>
            </div>
        </div>
    )
}

export default Home