import HomeBtn from "./componets/home-btn"
import Navbar from "./componets/navbar"

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
            <div className="Iphone-container">
                {pictures.map((picture) => (
                    <div key={picture._id} className="iphone-imgBox">
                        <h1>{picture.title}</h1>
                        <img src={picture.path} alt="image" />
                        <p>{picture.description}</p>
                    </div>
                ))}
                

            </div>
        </div>
    )

}

export default Iphone