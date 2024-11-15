import HomeBtn from "./componets/home-btn"
import Navbar from "./componets/navbar"
import Footer from "./componets/footer";

import React, {useState , useEffect} from "react"

function Iphone() {
    const [pictures, setPictures] = useState([]);

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
                {pictures.map((picture) => (
                    <div key={picture._id} className="iphone-imgBox">
                        <h1>{picture.title || 'picture'}</h1>
                        <img src={picture.path} alt="image" />
                        <p>{picture.description || 'decription'}</p>
                    </div>
                ))}
                

            </div>
            </div>
            <Footer/>
        </div>
    )

}

export default Iphone