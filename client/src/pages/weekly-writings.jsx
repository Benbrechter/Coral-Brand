import HomeBtn from "./componets/home-btn"
import Navbar from "./componets/navbar"
import React, {useState, useEffect} from "react"
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import Footer from "./componets/footer"

function WWriting() {
    const [writing, setWritings] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [fileContent, setFileContent] = useState('')

    useEffect(() => {
        const fetchWritings = async () => {
            try {
                setIsLoading(true)
                // First, fetch the document metadata
                const response = await fetch('/api/documents/674cbf7f5a145c33a5f8831c')
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
    }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <div>
            <HomeBtn />
            <Navbar />
            <div className='weekly-writing-container'>
                <div className="weekly-sidebar">
                    <h1>Why I do What I do?</h1>
                    <p>I display my weekly writings in pdf format so the viewer has the option to print, download, zoom in, or display a completely different pdf. I write purely for myself and other people's perspectives are valued but never taken into consideration. This platform is my brand. Every week I will come out with chapters from various writing that I have written. I can not and will not post everything I write because I do not have the funds to afford a large scale storage system. I do however have various easter eggs in this site and one of them include directions to a box of hard drives that have my most precious writings. I am not clinically insane but many of my peers have given me this title. I am ok with that.</p>
                </div>
                <div className="pdf-container"> 
                    <h1>Trey and Xans' Adventures </h1>
                    <h2>Chapter 1: The Beginning</h2>
                    
                    {fileContent ? (
                        <pre 
                            style={{
                                whiteSpace: 'pre-wrap',
                                wordWrap: 'break-word', 
                                fontFamily: 'serif',
                                fontSize: '18px',
                                lineHeight: '1.6',
                                padding: '20px',
                                backgroundColor: '#ffffff',
                                borderRadius: '8px',
                                maxWidth: '800px',
                                margin: '0 auto'
                            }}
                        >
                            {fileContent}
                        </pre>
                    ) : (
                        <DocViewer 
                            className="text-container"
                            pluginRenderers={DocViewerRenderers}
                            documents={[{ 
                                uri: writing?.path,
                                fileType: 'txt' 
                            }]} 
                            config={{
                                header: {
                                    disableHeader: true,
                                    disableFileName: false,
                                    retainURLParams: false,
                                }
                            }}
                        />
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default WWriting