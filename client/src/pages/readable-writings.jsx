import Navbar from "./componets/navbar"
import { useParams} from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_WRITING_BY_ID } from "../utils/queries";

function Read(){
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_WRITING_BY_ID, {
        variables: { getWritingId: id }
      });
      const writingData = data?.getWriting || []
      console.log(writingData || 'No data')
    

    return (
        <div>
            <div><Navbar/></div>
            <div className="doc-container">
            <h1>{writingData.title}</h1>
            <h2>{writingData.chapter}</h2>
                    <pre>
                    {loading ? (
                    <p>Loading...</p>
                        ) : error ? (
                        <p>Error: {error.message}</p>
                        ) : writingData ? (
                        <pre> {writingData.content}</pre>
                        ) : (
                        <p>No writing found</p>
                        )}
                    </pre>
                
            </div>
        </div>
    )
}

export default Read