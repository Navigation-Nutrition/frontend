import './App.css';
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage"
import SignUp from './Components/SignUp';
import ToDo from './Components/todo/todolist';
import Quiz from "./Components/QuizPage";
import Meal from "./Components/Meal";
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/> 
    <Routes>
      <Route path='/' element={<LandingPage />}/> 
      <Route path='signup' element={<SignUp /> }/>
      <Route path='todo' element ={<ToDo /> }/> 
      <Route path='quiz' element ={<Quiz /> }/> 
      <Route path='meal' element ={<Meal /> }/>
    </Routes> 
   
    </div>
  );
}

export default App;

