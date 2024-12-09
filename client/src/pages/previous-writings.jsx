import Navbar from "./componets/navbar"
import { Link, useNavigate  } from "react-router-dom"
import PrevWritingTitle from "./componets/prev-title"
import { useQuery } from "@apollo/client";
import { GET_ALL_WRITINGS } from "../utils/queries";

function PrevWriting(){
    const {loading, error, data} = useQuery(GET_ALL_WRITINGS);
    const writingData = data?.getWritings || [];
    console.log('writingData:', writingData);
      
    
        const handleWritingClick = (writingId) => {
            // Navigate to the chatroom
            navigate(`/documents/${writingId}`);
            
            // You can add any additional actions here
            // For example, you might want to fetch chatroom data, update some state, etc.
            console.log(`Navigating to writings ${writingId}`);
          };

        const showDropdown = () => {
            const dropdown = document.querySelector('.prev-writings-ul');
            const icon = document.querySelector('.dropdown-menu-icon1');
            dropdown.style.display = 'flex';
            icon.style.display = 'none'
        }
        const hideDropdown = () => {
            const dropdown = document.querySelector('.prev-writings-ul');
            const icon = document.querySelector('.dropdown-menu-icon1');
            dropdown.style.display = 'none';
            icon.style.display = 'flex'
        }

    return(
        <div>
            <div> <Navbar/> </div>
            <div className="entire-pw-container">
                <h1 className="pw-h1">Read my Writings Please!</h1> 
                <div className="prevWriting-header">
              
                <p>Each week I will release a chapter of a seires I am writing and this page is where you can find each story and their chapters. Currently This is week one so I only have one chapter released. If you would like to stay updated on when I post you can click on the user icon annd sign up for notifications!</p> 

            <div onClick={ () => showDropdown()} className="PW-Trey">
                <h1>Trey and Xan's adventures</h1>
                <a href="#" className="dropdown-menu-icon1">
               <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
               </a>
               </div>
            <div> 
                <ul className="prev-writings-ul">
                 <div onClick={ () => hideDropdown()}>
                    <a href="#">
                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                    </a>
                </div>
                     {writingData.map((writing, index) => (
                        <li key={writing._id || `writing${index}`}>
                            <Link
                                to={`/documents/${writing.id}`}
                                onClick={() => handleWritingClick(writing.id)}
                            >
                                <PrevWritingTitle writing={writing}/>
                            </Link>
                        </li>
                ))}
                </ul>
                
            </div>
            </div>
            </div>
            
        </div>
    )
}

export default PrevWriting 