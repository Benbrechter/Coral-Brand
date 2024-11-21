import HomeBtn from "./componets/home-btn"
import Navbar from "./componets/navbar"
import { useParams} from 'react-router-dom';
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
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
    }, [id])
    
    const CustomErrorComponent = ({ error }) => (
        <div>An error occurred: {error}</div>
    );

    const onError = (e) => {
        console.log('Error in file-viewer:', e);
        setError(e.message);
    };

       // Show loading state
       if (isLoading) {
        return <div>Loading...</div>
    }

    // Show error state
    if (error) {
        return <div>Error: {error}</div>
    }

    // Show loading or error if writing is not yet loaded
    if (!writing) {
        return <div>No writing found</div>
    }

    return (
        <div>
            <div> <Navbar/> </div>
            <div><HomeBtn/></div>
            <div className="doc-container">
                 <div className="docViewer">
                <DocViewer
                pluginRenderers={DocViewerRenderers}
                documents={[{ 
                    uri: writing.path,
                    fileType: 'txt' 
                }]}
            />
            </div>
            </div>
           
            
        </div>
        
    )
}

export default Read