import { useDispatch } from "react-redux";
import { selectPerson } from "../store";
import { useNavigate } from "react-router-dom";
import { useFetchPersonMutation } from "../store";



function PersonCard({person}){


  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [fetchVideo, result] = useFetchPersonMutation();
  const handleSubmit = () => {
       fetchVideo(person);
       if(result.isSuccess) {
          console.log(result);
          let known_for = result.originalArgs.known_for_department;
          //console.log(known_for)
          
          if(known_for === "Directing")
          {
            console.log(known_for)
            let cast = result.data.crew;
            dispatch(selectPerson(cast));
          }
          else {
            console.log(known_for)
            let cast = result.data.cast;
            dispatch(selectPerson(cast));
          }
        
          //let cast = result.data.cast;
          //let crew = result.data.crew;
          //console.log(cast)
          //dispatch(selectPerson(cast));
          navigate("/moviesByPerson");
       } 
  }  

    const posterBasePath = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
    return (
        <div className="col-lg-2 mb-4">
            <div className="card">
                <img src= {posterBasePath + person.profile_path} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title "><span>{person.name}</span></h5>
                    <p>Popularity: {person.popularity}</p>
                    <p className="card-text">Profession: {person.known_for_department}</p>
                    <ul className="list-unstyled">
                    <p>Movies Known For:</p>
            {person.known_for.map((movie) => (
              <li key={movie.id}>{movie.title || movie.name}:  {movie.vote_average}  <span className="far fa-star" aria-hidden="true"></span></li>
            ))}
            <br></br>
            <button type="button" class="btn btn-dark" onClick={handleSubmit} style={{position: "relative", right:"1px"}}>View all movies</button>
          </ul>
          </div>
                    </div>
                </div>
      );
}
      
export default PersonCard;