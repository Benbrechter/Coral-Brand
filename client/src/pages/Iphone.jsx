import HomeBtn from "./componets/home-btn"
import Navbar from "./componets/navbar"
import Footer from "./componets/footer";

import React, {useState , useEffect} from "react"

function Iphone() {
    const [pictures, setPictures] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0)
    useEffect(() => {
      const fetchPictures = async () => {
        try {
          const response = await fetch('/api/pictures');
          const data = await response.json();
          setPictures(data);
        } catch (error) {
          console.error('Error fetching pictures:', error);
        }
      };
      fetchPictures();
    }, []);
    
    const handleBackward = () => {
      setCurrentIndex((prevIndex) => 
          prevIndex > 0 ? prevIndex - 1 : pictures.length - 1
      );
  };

    return(
        <div>
            <div> <Navbar/> </div>
            <HomeBtn/>
            <div style={{height: '1400px'}}>
            <div >
              <h1>Camera Gallery</h1>
              <p>I do not belive in labels becasue people should not be put into a construct created by other people. Nothing I post on here is for anyone but myself.</p>
            </div>
            <div className="Iphone-container">
                {pictures.length > 0 && (
                    <div key={pictures[currentIndex]._id} className="iphone-imgBox">
                        <h1>{pictures[currentIndex].title || 'picture'}</h1>
                        <img src={pictures[currentIndex].path} alt="image" />
                        <p>{pictures.description || 'decription'}</p>
                        <button onClick={handleBackward}>Flip through the photo Album</button>
                    </div>
                )}
                

            </div>
            </div>
            <Footer/>
        </div>
    )

}

export default Iphone