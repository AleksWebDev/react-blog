import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
function BlogDetails() {

    const {id} = useParams()
    const {data: blog, isLoaded, error} = useFetch('http://localhost:8000/posts/' + id);

    return ( 
        <div className="blog-details">
            {isLoaded && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p className="author">Written by: {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;