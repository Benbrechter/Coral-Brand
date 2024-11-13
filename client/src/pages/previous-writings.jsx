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

    return(
        <div>
            <div> <Navbar/> </div>
            <div><HomeBtn/></div>
            <div>
            <ul>
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