import { useSelector } from "react-redux";

function Trailer() {  
  
    const key = useSelector((state) => {
        //console.log(state.searchMovie.searchTerm);
        return state.trailer.trailer;
    });
           
    const youtubeLink = "https://www.youtube.com/embed/" + key;

    return (
    <div className="row row-cols-3 row-cols-md-2 m-4">
      <iframe width="1217" height="685" src={youtubeLink} title="1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
     <p></p>
    </div>
  );
}

export default Trailer;
