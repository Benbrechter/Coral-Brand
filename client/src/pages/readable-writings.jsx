import HomeBtn from "./componets/home-btn"
import Navbar from "./componets/navbar"
import { useParams} from 'react-router-dom';
import React, {useState, useEffect} from "react"

function Read(){
    const { id } = useParams();

    const [writing, setWritings] = useState(null)  // Initialize as null instead of empty array
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchWritings = async () => {
            try {
                setIsLoading(true)
                const response = await fetch(`/api/documents/${id}`)
                if (!response.ok) {
                    throw new Error('Failed to fetch writing')
                }
                const data = await response.json()
                setWritings(data)
            } catch (error) {
                console.error('Error fetching writing:', error)
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchWritings()
    }, [])
    return (
        <div>
            <div> <Navbar/> </div>
            <div><HomeBtn/></div>
            <div>IDK BRO HOW</div>
        </div>
        
    )
}

export default Read