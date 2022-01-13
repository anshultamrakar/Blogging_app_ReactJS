import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home"
import Post from "./Post"
import NewPost from "./NewPost"
import PostPage from "./PostPage"
import Missing from "./Missing";
import About from "./About"

function App() {
  return (
    <div className="App">
    <Header title = "Blogging App"/>
    <Nav/>
    <Home/>
    <Post/>
    <Home/>
    <NewPost/>
    <PostPage/>
    <Missing/>
    <About/>
    <Footer/>
    </div>
  );
}

export default App;
