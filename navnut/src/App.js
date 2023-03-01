import './App.css';
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage"
import SignUp from './Components/SignUp';
import ToDo from './Components/todo/todolist';
import Quiz from "./Components/QuizPage";
import Meal from "./Components/Meal";
import Nav from './Components/Navbar';
import Sas from "./Components/scss/testscass"
import Blog from "./Components/Blog"
import Footer from './Components/Footer';
import NutrtionFact from './Components/NutrtionFacts';
import DetailsPages from './Components/DetailsPages';



function App() {
  return (
    <div className="App">
      {/* <NutrtionFact /> */}
       <Nav/>
    <Routes> 
      <Route path='/' element={<LandingPage />}/> 
      <Route path='signup' element={<SignUp /> }/>
      <Route path='todo' element ={<ToDo /> }/> 
      <Route path='quiz' element ={<Quiz /> }/> 
      <Route path='meal' element ={<Meal /> }/>
      <Route path='Blog' element ={<Blog /> }/>
      <Route path='*' element ={<Sas /> }/>
    </Routes> 
      <Footer/>
    </div>
  );
}


export default App;

