import "../CSS/SignUP.css"
import { useState, useContext} from "react"
import { useNavigate } from "react-router-dom"
import context from './context/Context'



function SignUp() {
    let navigate = useNavigate();
    const {UserName, setUserName} = useContext(context)
    const {Email, setEmail} = useContext(context)
    const {Password, setPassword} = useContext(context)
    const {FirstName, setFirstName} = useContext(context)
    const {LastName, setLastName} = useContext(context)


    function handleUserName(e) {
        setUserName(e.target.value)
        console.log(UserName)
    }

    function handleEmail(e) {
      setEmail(e.target.value)
      console.log(Email)
    }

    function handlesetPassword(e) {
      setPassword(e.target.value)
      console.log(Password)
    }

    function handlesetFirstName(e) {
      setFirstName(e.target.value)
      console.log(FirstName)
    }


    function handlesetLastName(e) {
      setLastName(e.target.value)
      console.log(LastName)
    }

    //console.log("submitting sign up form")
    function Submit(e){
      e.preventDefault()
      console.log("submitting sign up form")
      console.log('right here', UserName, Email, Password, FirstName, LastName)

      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const requestOptions= {
        method: "POST",
        headers: myHeaders,
  
        
        body: JSON.stringify({ 
          "first_name": FirstName,
          "last_name": LastName,
          "user_name": UserName,
          "password": Password,
          "email": Email,
        }) ,redirect: 'follow'
      }
       
      fetch("http://localhost:8000/users/signup", requestOptions)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          navigate("/todo");
        })
    }

    function SubmitLog(e){
      e.preventDefault()
      console.log(UserName)
      console.log(Password)

      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
   
      
      const requestOptions= {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({ 
          "user_name": UserName,
          "password": Password,
        }) ,redirect: 'follow'
      }
    
       
      fetch("http://localhost:8000/users/login", requestOptions)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.foundUser[0].user_name && data.foundUser[0].password){
            localStorage.setItem("token", data.token)
            navigate("/todo");
          }
        })
    }

    
    return (
      <div className="SignUpForm">
          <div className="SignUpmain">  	
          <input className="checkbox" type="checkbox" id="chk" aria-hidden="true" />
          <div className="signup">
            <form onSubmit={Submit} >
              <label className="chk" htmlFor="chk" aria-hidden="true">Sign up</label>
              <input className="SignInput" type="text" name="txt" placeholder="First Name"  onChange={handleUserName}  required />
              <input className="SignInput" type="lastname" name="email" placeholder="Last Name" onChange={handleEmail} required />
              <input className="SignInput" type="username" name="username" placeholder="User Name" onChange={handlesetPassword} required />
              <input className="SignInput" type="password" name="pswd" placeholder="Password" onChange={handlesetFirstName} required />
              <input className="SignInput" type="email" name="lasn" placeholder="Email" onChange={handlesetLastName} required />
              <button className="signUpBut"> Sign up </button>
            </form>
          </div>
          <div className="login">
            <form onSubmit={SubmitLog}>
              <label className="chk" htmlFor="chk" aria-hidden="true">Login</label>
              <input className="SignInput" type="UserName" name="UserName" placeholder="UserName" onChange={handleUserName} required />
              <input className="SignInput" type="password" name="pswd" placeholder="Password-Log" onChange={handlesetPassword} required />
              <button className="signUpBut">Login</button>
            </form>
          </div>
      </div>
    </div>
    );
  }
  export default SignUp

