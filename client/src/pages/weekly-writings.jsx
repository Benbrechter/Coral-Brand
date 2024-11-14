import HomeBtn from "./componets/home-btn"
import Navbar from "./componets/navbar"
import React, {useState, useEffect} from "react"
import { Viewer, Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';

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
        </div>
    )
}

export default WWriting
