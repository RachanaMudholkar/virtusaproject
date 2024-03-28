import Login from "./component/Login";
import { ToastContainer } from "react-toastify";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from "./component/Home";
import Ticket from "./component/Ticket";
import { useState } from "react";
function App() {
  const [Id, setId] = useState(12);
  return (
    <>   
    
    <ToastContainer/>
    <Router>
    <Routes>
    <Route path="/" element={<Login setId={setId}/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/ticket" element={<Ticket Id={Id}/>}></Route>
   

    </Routes>
   </Router>
 


   
   </>
 
  );
}

export default App;
