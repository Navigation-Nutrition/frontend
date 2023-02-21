//import './App.css';
// import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import LandingPage from "./Components/LandingPage"
import SignUp from './Components/SignUp';
import StartingPage from './Components/StartingPage';
import FinalPage from './Components/FinalPage';
import Question from './Components/QuestionPage';
import Card from './Components/Card';
import ToDo from './Components/todolist';
import Hello from "./Components/hello";


function App() {
  return (
    <div className="App">
       <Routes>
       <Route path='/' element={<LandingPage />}/> 
       <Route path='signup' element={<SignUp /> }/>
       <Route path='/hello' element = {<Hello /> }/>
       {/* <Route path='' element = { <FinalPage />  }/> */}
       {/* <Route path='' element ={< Question /> }/> */}
       {/* <Route path='' element ={<Card /> }/> */}
       <Route path='todo' element ={<ToDo /> }/> 
      </Routes>
        </div>
  );
}

export default App;

