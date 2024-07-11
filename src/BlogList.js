function Bloglist({posts: posts, handleDelete}) {
    return (
        <div className="blog">
            {
                posts.map((post) => (<div className="post-preview" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.author}</p>
                    <button onClick={() => {handleDelete(post.id)}} className="btn-delete">Delete</button>
                </div>)
            )}
        </div>
    )
}

export default Bloglist;