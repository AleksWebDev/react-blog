import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
function BlogDetails() {

    const {id} = useParams()
    const {data: blog, isLoaded, error} = useFetch('http://localhost:8000/posts/' + id);
    const navigate = useNavigate();


    const deletePost = () => {
        fetch('http://localhost:8000/posts/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/')
        })
    }

    return ( 
        <div className="blog-details">
            {isLoaded && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p className="author">Written by: {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={deletePost} className="btn-delete">Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;