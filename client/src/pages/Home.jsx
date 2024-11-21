import Navbar from './componets/navbar';
import About from './componets/About'
// import Support from './componets/support';
import WritingsContainer from './componets/writing-container';
import HomeBtn from './componets/home-btn';
import Footer from './componets/footer';
import picture from './pictures/placeholder.jpg'
import background from './pictures/collage.png'

function Home(){
    return(
        <div>
            <HomeBtn/>
            <div>
                <Navbar/>
            </div>
            <div className = 'img-treyandI'> 
                <img src= {background} alt="A cool graphic of trey and I" />
            </div>
            
            <div>
                <About/>
            </div>
            <div>
                <WritingsContainer/>
            </div>
            {/* <div>
                <Support/>
            </div> */}
            <Footer/>
           
        </div>
    )
}

export default Home