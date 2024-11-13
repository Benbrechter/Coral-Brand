import HomeBtn from "./componets/home-btn"
import Navbar from "./componets/navbar"
import { Link, useNavigate  } from "react-router-dom"
import React, {useState , useEffect} from "react"
import PrevWritingTitle from "./componets/prev-title"

function PrevWriting(){
    const navigate = useNavigate();
    const [writingData, setWritingData] = useState([]);

    useEffect(() => {
        const fetchWritings = async () => {
            try{
                const response = await fetch('/api/documents');
                const writingData = await response.json();
                console.log(writingData)
                setWritingData(writingData);
            }catch(error){
                console.error('The writings did not persist', error)
            }
        };
        fetchWritings()   
    }, [])
        const handleWritingClick = (writingId) => {
            // Navigate to the chatroom
            navigate(`/documents/${writingId}`);
            
            // You can add any additional actions here
            // For example, you might want to fetch chatroom data, update some state, etc.
            console.log(`Navigating to writings ${writingId}`);
          };

        const showDropdown = () => {
            const dropdown = document.querySelector('.prev-writings-ul')
            dropdown.style.display = 'flex'
        }
        const hideDropdown = () => {
            const dropdown = document.querySelector('.prev-writings-ul')
            dropdown.style.display = 'none'
        }

    return(
        <div>
            <div> <Navbar/> </div>
            <div><HomeBtn/></div>
            <div onClick={ () => showDropdown()} className="PW-Trey">
                <h1>Trey and Xan's adventures</h1>
                <a href="#" className="dropdown-menu-icon">
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
                        to={`/documents/${writing._id}`}
                        onClick={() => handleWritingClick(writing._id)}
                    >
                        <PrevWritingTitle writing={writing} />
                    </Link>
                    </li>
                ))}
                </ul>
                
            </div>
        </div>
    )
}

export default PrevWriting 