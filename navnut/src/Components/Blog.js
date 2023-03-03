import React from "react"
import "./Blog.css"
import { blog } from "./Data"
import { AiOutlineTags ,AiFillFileAdd, AiFillEdit,AiFillDelete, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
// import { Link } from "react-router-dom"
import b5 from "../IMGS/b5.jpg"
import { useEffect, useState,} from "react"
import { PlusCircleIcon  } from '@heroicons/react/24/outline';
import { PencilSquareIcon  } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline';
import { Link, NavLink, useParams ,useNavigate} from 'react-router-dom';
//import { BsFillCloudPlusFill} from "react-icons/fa";




export const Blog = (props) => {
  let [feeds, setfeeds] = useState([])
  const navigate = useNavigate();
  // let [Button, setButton] = useState()
  // useEffect(()=>{
  //  async function UserShelters () {
  //  let info = await fetch(`http://backend-deployment-production.up.railway.app/reservations/${usersId}`)
  //   .then(response => {
  //     if (response.ok){
  //       return response.json()
  //     }
  //   })
  // },[])}

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetch('http://localhost:8000/post').then(res => res.json()).then(data => {return(data)})
  //   }
  
  //   // call the function
  //   fetchData()
  //     // make sure to catch any error
  //     .catch(console.error);
      
  // }, [])
  function deletePost(id){
    console.log(id)
    let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      //console.log(post_id)
      const requestOptions= {
        method: "DELETE",
        headers: myHeaders,
        
        body: JSON.stringify({ 
          "post_id": id,
        }) ,redirect: 'follow'
      }
     // Make the HTTP Delete call using fetch api
     fetch('http://localhost:8000/post/create', requestOptions) 
     .then(response => response.json())
     .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
     .catch(err => console.log(err)) // Do something with the error
  }


  useEffect(()=>{
  async function GetAllPost() {
    let data = await fetch('http://localhost:8000/post')
      .then(response => {
        if (response.ok){
          return response.json()
        }
        throw response
      })
      
      setfeeds(data)
    }
    GetAllPost()
  },[])

  return (
    <div className = "blogpage">
         <div className="mealheading">
                    <h1>Welcome to the Blog Post</h1>
                    <h4>Share how you feel about nutrition and gain a supportive community</h4>
                </div>
                <div className="cobriute">
                <Link to={"/newpost"}> <PlusCircleIcon className='icon' /><span>Add Post</span> </Link>
                {/* <Link to={`/newpost`} <PlusCircleIcon className='icon' />
                  <span>Add Post</span>
                </Link> */}
</div>
      <section className='blog'>
        <div className="hey"  style={{backgroundColor:'#000350', height: "50px"}} ></div>
        <div className='blogcontainer grid3'>

         {feeds.map((item) => {
          //console.log(item)
            return (
            <div className='box boxItems' key={item.post_id} post = {item} >
              <div className='img'>
                {/* <img src={item.cover} alt='' />  */}
                <img onClick={() => navigate(`/read`)} src={item.img_url} alt='' />
              </div>
              <div className='details'>
                <Link to={`update/${item.post_id}`} style={{ textDecoration: 'none'}} className='link'>
                  <h3>{item.post_title}</h3>
                </Link>
                {/* .slice(0, 180)}... */}
                <p>{item.post_message}</p>
                <div className='date'>
                  <AiOutlineClockCircle 
                  className='icon' /> <label htmlFor=''>{item.post_date}</label>
                  {/* <Link to= {`http://localhost:3006/update/${item.post_id}`} > */}
                    <AiFillEdit  onClick={() => navigate(`update/${item.post_id}`)} stlye={{ textDecoration: 'none'}} className='icon' /> 
                    <label htmlFor=''>Edit </label> 
                  {/* </Link> */}
                  <AiFillDelete onClick={(e)=>{
                    e.preventDefault()
                    deletePost(item.post_id)}
                  }
                  className='icon' /> <label htmlFor=''>Delete</label>
                </div>
              </div>
            </div> 
            )
})}
        </div>
        {/* <div className="space"></div> */}
      </section>
    </div>

  )
}
export default Blog