import Navbar from './componets/navbar';
import About from './About'
import Charities from './componets/charities';
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