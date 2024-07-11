import { useEffect, useState } from "react";
import Bloglist from "./BlogList";

function Home() {

    const [posts, setPosts] = useState([
        {
            title: "My First Blog",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fuga nisi cum earum odio assumenda provident laborum quisquam ipsum, eaque accusantium maiores incidunt atque porro dicta dolores ad soluta modi?",
            author: "John Doe",
            id: 1
        },
        {
            title: "Second Post",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fuga nisi cum earum odio assumenda provident laborum quisquam ipsum, eaque accusantium maiores incidunt atque porro dicta dolores ad soluta modi?",
            author: "Mary Jane",
            id: 2
        },
        {
            title: "Third Post",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fuga nisi cum earum odio assumenda provident laborum quisquam ipsum, eaque accusantium maiores incidunt atque porro dicta dolores ad soluta modi?",
            author: "Tom Soyer",
            id: 3
    }])

    useEffect(() => {
        console.log('useEffect is working!!!')
    }, []);

    const handleDelete = (id) => {
        const newPosts = posts.filter(post => {return post.id !== id});
        setPosts(newPosts);
    }

    return ( 
        <div className="home">
            <Bloglist posts={posts} handleDelete={handleDelete}/>
        </div>
    );
}

export default Home;