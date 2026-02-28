import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./movie/Home";
import Movapi from "./movie/Movapi";
function App()
{
  return(

  <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Movapi" element={<Movapi/>}/>
    </Routes>
    </BrowserRouter>
   </div>

  )
}

export default App