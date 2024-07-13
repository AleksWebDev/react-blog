import { useState } from "react";

function Create() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mary Jane')

    return ( 
        <div className="create">
            <h2>Add new post</h2>
            <form>
                <label>Post title</label>
                <input type="text" required value={title} onChange={(e) => {setTitle(e.target.value)}}/>

                <label>Post content</label>
                <textarea value={body} onChange={(e) => {setBody(e.target.value)}}></textarea>

                <label>Author</label>
                <select value={author} onChange={(e) => {setAuthor(e.target.value)}}>
                    <option value="John Doe">John Doe</option>
                    <option value="Mary Jane">Mary Jane</option>
                    <option value="Tom Soyer">Tom Soyer</option>
                </select>
            </form>
        </div>
    );
}

export default Create;