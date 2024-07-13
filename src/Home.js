import Bloglist from "./BlogList";
import useFetch from "./useFetch";

function Home() {

    const {data, isLoaded, error} = useFetch('http://localhost:8000/posts/');

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isLoaded && <h3>Loading....</h3>}
            {data && <Bloglist posts={data}/>}
        </div>
    );
}

export default Home;