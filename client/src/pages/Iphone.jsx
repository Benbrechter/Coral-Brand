import Navbar from "./componets/navbar"
import Footer from "./componets/footer";
import img from "./pictures/development.png"

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
            <div className="development">
              <img src={img} alt="" />
            </div>
            <Footer/>
        </div>
    )

}

export default Iphone

 {/* <div className="iphone-main">
            <div className = 'camera-gallery'>
              <h1>Camera Gallery</h1>
              <p>I CREATE ART FOR MYSELF! if you like what I produce I love you If you do not it is okay I still love you.</p>
            </div>
            <div className="display-Iphone">
               <div className="Iphone-container">
                {pictures.length > 0 && (
                    <div key={pictures[currentIndex]._id} className="iphone-imgBox">
                        <h1>{pictures[currentIndex].title || 'picture'}</h1>
                        <img src={pictures[currentIndex].path} alt="image" />
                        <button onClick={handleBackward}>Flip through the photo Album</button>
                        <div className="description">
                          <p>{pictures.description || 'decription'}</p>
                        </div>
                        
                        
                    </div>
                )}
                

            </div>
            </div>
           
            </div> */}
