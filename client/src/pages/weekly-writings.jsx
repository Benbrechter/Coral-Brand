import HomeBtn from "./componets/home-btn"
import Navbar from "./componets/navbar"
import React, {useState , useEffect} from "react"


function WWriting(){
    const [writing, setWritings] = useState([])
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWritings = async () => {
            try{
                const response = await fetch('/api/documents/67228060c4203ceb2ce4e0bd');
                const data = await response.json();
                setWritings(data)

            }catch(error){
                setError(err);
            }
        };
        fetchWritings()

    }, []);
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return(
        <div>
            <div><HomeBtn/></div>
            <div> <Navbar /> </div>
            <div className = 'weekly-Story-container'>
                <h1>{writing.title}</h1>
                <h2>{writing.chapter}</h2>
                <Document
                file={writing.path}
                onLoadError={(error) => setError(error)}
                >
                        <Page pageIndex={0}/>
                </Document>

            </div>
        </div>
    )
}

export default WWriting 