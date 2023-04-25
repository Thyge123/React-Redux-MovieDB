import { useFetchSearchPersonQuery } from "../store";
import { useSelector} from "react-redux";
import PersonCard from "./personCard";

function SearchedMoviesList() {  
    const searchTerm = useSelector((state) => {
        //console.log(state.searchMovie.searchTerm);
        return state.searchPerson.searchTerm;
    });
                                  
  const {data, error, isFetching } = useFetchSearchPersonQuery(searchTerm);   
            
  
console.log(data)

  let content;
  if (isFetching) {
    content = <div>Loading;</div>
  } else if (error) {
    content = <div>Error loading movies.</div>;
  } else {
    content = data.results
        .filter(person => person.profile_path !== null)
        .map((person) => {
      return <PersonCard key={person.id} person={person}></PersonCard>
      
    });
  }
    return (
    <div className="row row-cols-3 row-cols-md-2 m-4">
      {content}
    </div>
  );
}

export default SearchedMoviesList;
