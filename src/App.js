import Navbar from "./NavBar";
import Create from "./Create";
import Home from "./Home";
import BlogDetails from "./BlogDetailse";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";

function App(){
    return(
        <Router>
            <div className="app">
            <Navbar/>
			<main className="main">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/create" element={<Create/>}/>
                    <Route path="/blogs/:id" element={<BlogDetails/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
			</main>
            </div>
        </Router>
    )
}
export default App;