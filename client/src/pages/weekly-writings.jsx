import HomeBtn from "./componets/home-btn"
import Navbar from "./componets/navbar"
import React, {useState, useEffect} from "react"
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import Footer from "./componets/footer"


function WWriting() {
    const [writing, setWritings] = useState(null)  // Initialize as null instead of empty array
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchWritings = async () => {
            try {
                setIsLoading(true)
                const response = await fetch('/api/documents/672aa26a7833a51216470296')
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
            <div className = 'weekly-writing-container'>
  <div className="weekly-sidebar">
                <h1>Why I do What I do?</h1>
                <p>I display my weekly writings in pdf format so the viewer has the option to print, download, zoom in, or display a completly differant pdf. I write purley for myself and others peoples perspectives are valued but never taken into consideration. This platform is my brand. Every week I will come out with chapters from various writing that I have written. I can not and will not post everything I write because I do not have the funds to afford a large scale storage sytem. I do however have various easter eggs in this cite and one of them include disrections to a box of hard drives that have my most preciouse writings. I am not clinically insne but many of my peers have given me this title. I am ok with that </p>
            </div>
            <div className="pdf-container"> 
                <h1>Trey and Xans' Adventures </h1>
                <h2>Chatper 1: The beggining</h2>
               <DocViewer className="text-container"
               pluginRenderers={DocViewerRenderers}
               documents={[{ 
                   uri: writing.path,
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
            </div>
            </div>
          
            <Footer/>
        </div>
    )
}

export default WWriting
