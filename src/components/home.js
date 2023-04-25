import MovieImg from '../assets/Image/movie_black2.jpg';


function Home(){
    return (
        <div className='container text-center'>
        <h1>MovieFinder</h1>
        <img src={MovieImg} width="450" height="450"/>
    </div>
      );
}
      
export default Home;