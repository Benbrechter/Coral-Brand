import Navbar from './componets/navbar';
import About from './componets/About'
import WritingsContainer from './componets/writing-container';
import HomeBtn from './componets/home-btn';
import Footer from './componets/footer';
import background from './pictures/collage2.png'


function Home(){
    return(
        <div>
            <HomeBtn/>
            <div>
                <Navbar/>
            </div>
            <div className='img-treyandI'> 
                <img src={background} alt="A cool graphic of trey and I" />
            </div>
            
            <div>
                <About/>
            </div>
            <div >
                <WritingsContainer/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home