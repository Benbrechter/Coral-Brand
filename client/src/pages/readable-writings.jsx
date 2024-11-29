import HomeBtn from "./componets/home-btn"
import Navbar from "./componets/navbar"
import { useParams} from 'react-router-dom';
import React, {useState, useEffect} from "react"

function Read(){
    const { id } = useParams();

    const [writing, setWritings] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [fileContent, setFileContent] = useState('')

    useEffect(() => {
        const fetchWritings = async () => {
            try {
                setIsLoading(true)
                // First, fetch the document metadata
                const response = await fetch(`/api/documents/${id}`)
                if (!response.ok) {
                    throw new Error('Failed to fetch writing metadata')
                }
                const data = await response.json()
                
                // Then, fetch the raw text content
                const textResponse = await fetch(data.path)
                if (!textResponse.ok) {
                    throw new Error('Failed to fetch file content')
                }
                const textContent = await textResponse.text()
                
                console.log('Fetched content:', textContent) // Debug log
                
                setWritings(data)
                setFileContent(textContent)
            } catch (error) {
                console.error('Error fetching writing:', error)
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchWritings()
    }, [id])
    
    // Loading state
    if (isLoading) {
        return <div>Loading...</div>
    }

    // Error state
    if (error) {
        return <div>Error: {error}</div>
    }

    // No writing found
    if (!writing) {
        return <div>No writing found</div>
    }

    return (
        <div>
            <div><Navbar/></div>
            <div><HomeBtn/></div>
            <div className="doc-container">
                {fileContent ? (
                    <pre 
                        style={{
                            whiteSpace: 'pre-wrap',
                            wordWrap: 'break-word', 
                            fontFamily: 'serif',
                            fontSize: '18px',
                            lineHeight: '1.6',
                            padding: '20px',
                            backgroundColor: '#f9f9f9',
                            borderRadius: '8px',
                            maxWidth: '800px',
                            margin: '0 auto'
                        }}
                    >
                        {fileContent}
                    </pre>
                ) : (
                    <div>No content found</div>
                )}
            </div>
        </div>
    )
}

export default Read