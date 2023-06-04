import './App.css';
import Searched from './Components.jsx/Searched';
import Cuisine from './Components.jsx/Cuisine';
import Category from './Components.jsx/Category';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./Components.jsx/Home"
import Recipe from './Components.jsx/Recipe';
function App() {
  return (
   <div>
   
   <BrowserRouter>
   <Category/>
   
   <Routes>
    <Route path="/" element={<Home/>}/>
   <Route path="/cuisine/:type" element={<Cuisine/>}/>
  
   <Route path="/searched/:search" element={<Searched/>}/>
   <Route path="/recipe/:name" element={<Recipe/>}/>
   </Routes>
    </BrowserRouter>
   
   </div>
  );
}

export default App;
