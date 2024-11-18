import HomeBtn from "./componets/home-btn"
import Navbar from "./componets/navbar"
import React, {useState, useEffect} from "react"
import { Viewer, Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import Footer from "./componets/footer"

import '@react-pdf-viewer/core/lib/styles/index.css'
import "@react-pdf-viewer/default-layout/lib/styles/index.css"

function WWriting() {
    const [writing, setWritings] = useState(null)  // Initialize as null instead of empty array
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const toolbarPluginInstance = toolbarPlugin()
    const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance

    // Define the transform function for toolbar customization
    const transform = (slot) => ({
        ...slot,
        Download: () => <></>,
        DownloadMenuItem: () => <></>,
        EnterFullScreen: () => <></>,
        EnterFullScreenMenuItem: () => <></>,
        SwitchThemeMenuItem: () => <></>,
        PrintMenuItem: () => <></>,
        OpenMenuItem: () => <></>
    }) 

    // Create the default layout plugin with customizations
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        sidebarTabs: (defaultTabs) => [],
        renderToolbar: (Toolbar) => (
            <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
        ),
    })

    useEffect(() => {
        const fetchWritings = async () => {
            try {
                setIsLoading(true)
                const response = await fetch('/api/documents/67228060c4203ceb2ce4e0bd')
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
            <div className="weekly-sidebar">
                <h1>Why I do What I do?</h1>
                <p>I display my weekly writings in pdf format so the viewer has the option to print, download, zoom in, or display a completly differant pdf. I write purley for myself and others peoples perspectives are valued but never taken into consideration. This platform is my brand. Every week I will come out with chapters from various writing that I have written. I can not and will not post everything I write because I do not have the funds to afford a large scale storage sytem. I do however have various easter eggs in this cite and one of them include disrections to a box of hard drives that have my most preciouse writings. I am not clinically insne but many of my peers have given me this title. I am ok with that </p>
            </div>
            <div className="pdf-container">
                <h1>{writing?.title || 'Untitled'}</h1>
                <h2>{writing?.chapter || 'No chapter'}</h2>
                {writing?.path && (  // Only render PDF viewer if path exists
                    <div className="weekly-pdf">  {/* Add a fixed height */}
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
                            <Viewer 
                                fileUrl={writing.path} 
                                plugins={[defaultLayoutPluginInstance]} 
                            />
                        </Worker>
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    )
}

export default WWriting
