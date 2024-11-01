import Navbar from './componets/navbar';
import About from './componets/About'
import Charities from './componets/charities';
import WritingsContainer from './componets/writing-container';
import HomeBtn from './componets/home-btn';

function Home(){
    return(
        <div>
            <HomeBtn/>
            <div className='bar'>
                <h1>Quote</h1>
            </div>
            <div>
                <Navbar/>
            </div>
            <div className = 'img-treyandI'> 
                <img src="" alt="A cool graphic of trey and I" />
            </div>
            
            <div>
                <About/>
            </div>
            <div>
                <WritingsContainer/>
            </div>
            <div>
                <Charities/>
            </div>
           
        </div>
    )
}

export default Home