import { Link } from "react-router-dom";

function NotFound() {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to='/'>Go to Homepage</Link>
        </div>
     );
}

export default NotFound;