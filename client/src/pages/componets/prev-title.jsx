function PrevWritingTitle({writing}){
    console.log('Writing prop received:', writing); 
    return(
        <div>
            {writing.title}
        </div>
    );
}

export default PrevWritingTitle