import Navbar from "./componets/navbar"
import React, {useState, useEffect} from "react"
import Footer from "./componets/footer"
const { MongoClient, ObjectId } = require('mongodb');

function WWriting() {
    const [writing, setWritings] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [fileContent, setFileContent] = useState('')

    useEffect(() => {
        const fetchWritings = async () => {
            try {
                setIsLoading(true)
                
                // MongoDB connection (similar to Lambda logic)
                const MONGODB_URI = process.env.REACT_APP_MONGODB_URI; // Use environment variable
                
                // Connect to MongoDB
                const client = await MongoClient.connect(MONGODB_URI, { 
                    useNewUrlParser: true, 
                    useUnifiedTopology: true 
                });

                try {
                    const database = client.db('test'); // Your database name
                    const writingsCollection = database.collection('writing'); // Your collection name

                    // Fetch document by ID
                    const documentId = '6750f5b90bb264405b725326';
                    const documentMetadata = await writingsCollection.findOne({ 
                        _id: new ObjectId(documentId) 
                    });

                    if (!documentMetadata) {
                        throw new Error('Document not found');
                    }

                    // Set the writing metadata
                    setWritings(documentMetadata);
                    
                    // If content is stored directly in the document
                    setFileContent(documentMetadata.content || '');

                } finally {
                    // Close the MongoDB connection
                    await client.close();
                }
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

    function showSidebar(){
        const paragraph = document.querySelector('.weekly-writings-dropdown');
        const icon = document.querySelector('.writings-dropdown');
        paragraph.style.display = 'flex';
        icon.style.display = 'none'
       }
       function closeSidebar(){
         const paragraph = document.querySelector('.weekly-writings-dropdown')
         const icon = document.querySelector('.writings-dropdown');
         paragraph.style.display = 'none'
         icon.style.display = 'flex'
       }

    return (
        <div>
            <Navbar />
            <div className='weekly-writing-container'>
                <div className="weekly-sidebar">
                    <div className="weekly-header">
                        <h1>Why I do What I do?</h1>
                        <div onClick={ () => showSidebar()} className="writings-dropdown">
                        <a href="#" style={{marginTop: '5px', marginLeft: '20px'}}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a>
                        </div>

                    </div>
                    <div className="weekly-writings-dropdown">
                        <div onClick={ () => closeSidebar()} className="writings-hide">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg> 
                        </div>
                        <p className="weekly-sidebar-p">In my early twenties (I still currenly am in my eary twenties) I developed a crippiling social anxiety. It became easier to not be percived and hide in the comfort of the four walls of my room. going outside became a choire and I didn't leave my house for month on end. During this process I wondered why my circle shrank and why I couldn't look people in the eye's. My fear of being percived especially online held me back in every outing. I stopped talking to strangers out of fear. After I read the Dune seires the Bene Geserit instilled the ideas of fear is the mind killer. I also belive fear is the creater of limitations. I started this project as a way to make my art accesable without going through the process of publishsing and monitizing my writings. Now this has evolved into exposer therapy to break out of my social anxities. Feel free to follow me on this journey as I overcome and conquore my dibilitating fears. </p>

                    </div>

                </div>
                <div className="pdf-container"> 
                    <h1>{writing.title} </h1>
                    <h2>{writing.chapter}</h2>
                    
                    {fileContent ? (
                    <pre>
                        {fileContent}
                    </pre>
                ) : (
                    <div>No content found</div>
                )}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default WWriting

// // Example of converting your document route to a Lambda function
// exports.handler = async (event) => {
//     try {
//         await connectDB();  // Your MongoDB connection
//         const documents = await Document.find({});
        
//         return {
//             statusCode: 200,
//             headers: {
//                 "Content-Type": "application/json",
//                 "Access-Control-Allow-Origin": "*"  // CORS header
//             },
//             body: JSON.stringify(documents)
//         };
//     } catch (error) {
//         return {
//             statusCode: 500,
//             body: JSON.stringify({ error: error.message })
//         };
//     }
// };