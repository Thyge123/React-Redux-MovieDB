import { useSelector, useDispatch } from "react-redux";
import { changePersonSearchTerm, selectPerson } from "../store";
import { useNavigate } from "react-router-dom";

function SearchPerson() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchTerm = useSelector((state) => {
    return state.searchPerson.searchTerm;
  });
  const handleSearchTermChange = (event) => {
    //console.log(event.target.value);
    dispatch(changePersonSearchTerm(event.target.value));
  }

  const handleSubmit = (event) => {
                 //dette for at undgå at Browseren automatisk prøver et udføre et submit  
                 //dispatch(changeSearchTerm(searchTerm));
                 event.preventDefault();
                 console.log(event.target.value)
                navigate("/searchedPerson");
              
  }
  return (
   <form onSubmit={handleSubmit}>
     <label >Search for Person</label>
     <input className="input ml-2" value={searchTerm} onChange={handleSearchTermChange}/>
     </form>    
  );
}
export default SearchPerson;