import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./movie/Home";
import Movapi from "./movie/Movapi";
import Movlist from "./movie/Movlist";
function App()
{
  return(

  <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Movapi" element={<Movapi/>}/>
      <Route path="/Movlist" element={<Movlist/>}/>
    </Routes>
    </BrowserRouter>
   </div>

  )
}

export default App