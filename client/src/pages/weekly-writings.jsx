import HomeBtn from "./componets/home-btn"
import Navbar from "./componets/navbar"
import React, {useState , useEffect} from "react"
import { Viewer, Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";



function WWriting(){
    const [writing, setWritings] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const newplugin = defaultLayoutPlugin()

    useEffect(() => {
        const fetchWritings = async () => {
            try{
                setIsLoading(true);
                const response = await fetch('/api/documents/67228060c4203ceb2ce4e0bd');
                if (!response.ok) {
                  throw new Error('Failed to fetch writing');
                }
                const data = await response.json();
                setWritings(data);
            }catch(error){
                console.error('Error fetching writing:', error);
                setError(error.message);
              } finally {
                setIsLoading(false);
              }
        
        };
        fetchWritings()
    }, [])  
     
      return (
        <div>
          <HomeBtn />
          <Navbar />
          <div>
            <h1>{writing?.title || 'Untitled'}</h1>
            <h2>{writing?.chapter || 'No chapter'}</h2>
            <div>
               <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
                    <Viewer fileUrl={writing.path}/>
                    {console.log(writing.path)}
                </Worker> 
            </div>

          </div>
        </div>
    );
 };
export default WWriting 