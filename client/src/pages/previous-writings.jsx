import HomeBtn from "./componets/home-btn"
import Navbar from "./componets/navbar"
import { Link } from "react-router-dom"
import React, {useState , useEffect} from "react"

function PrevWriting(){
    const [writings, setWritings] = useState([])

    useEffect(() => {
        const fetchWritings = async () => {
            try{
                const response = await fetch('/api/documents/:id');
                const data = await response.json();
                setWritings(data)
            }catch(error){
                console.error('The writings did not persist', error)
            }
        };
        fetchWritings()
    }, [])
    return(
        <div>
            <div> <Navbar/> </div>
            <div><HomeBtn/></div>
            <div>
                <Link><h1>Fiore and Llamar</h1></Link>
                <Link><h1>Xan and Atreties</h1></Link>
                
            </div>
        </div>
    )
}

export default PrevWriting 