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
import ToDo from './Components/todo/todolist';
import Quiz from "./Components/QuizPage";
import Testsass from "./Components/scss/testscass"


function App() {
  return (
    <div className="App">
       {/* <Testsass /> */}
       <Routes>
       <Route path='/' element={<LandingPage />}/> 
      <Route path='signup' element={<SignUp /> }/> 
      <Route path='' element = { <FinalPage />  }/>
       <Route path='' element ={< Question /> }/> 
       <Route path='' element ={<Card /> }/> 
         <Route path='todo' element ={<ToDo /> }/> 
      <Route path='quiz' element ={<Quiz /> }/> 
       
      </Routes> 
        </div>
  );
}

export default App;

