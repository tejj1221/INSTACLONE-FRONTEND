import './App.css';
import LandingPage from './component/LandingPage';
import PostView from './component/Post-view';
import Post from './component/post-page';
import {BrowserRouter, Route , Routes} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={ <LandingPage/>}/>   
    <Route path="/PostView" element={ <PostView/>}/>
    <Route path="/Post" element={ <Post/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
