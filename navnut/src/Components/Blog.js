import React from "react"
import "./Blog.css"
import { blog } from "./Data"
import { AiOutlineTags, AiFillEdit,AiFillDelete, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
// import { Link } from "react-router-dom"
import b5 from "../IMGS/b5.jpg"
import { useEffect, useState} from "react"
import { PencilSquareIcon  } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline';
import { Link, NavLink } from 'react-router-dom';


export const Blog = (props) => {
  let [feeds, setfeeds] = useState([])
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
    <>
      <section className='blog'>
        <div className='blogcontainer grid3'>

         {feeds.map((item) => {
          console.log(item)
            return (<div className='box boxItems' key={item.post_id} post = {item} >
              <div className='img'>
                {/* <img src={item.cover} alt='' />  */}
                <img src={item.img_url} alt='' />
              </div>
              <div className='details'>
                <Link to={`/details/${item.id}`} className='link'>
                  <h3>{item.post_title}</h3>
                </Link>
                <p>{item.post_message.slice(0, 180)}...</p>
                <div className='date'>
                  <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{item.post_date}</label>
                  <Link to= {`http://localhost:3006/update/${item.post_id}`} >
                    <AiFillEdit className='icon' /> 
                    <label htmlFor=''>Edit </label> 
                  </Link>
                  <AiFillDelete onClick={activateLasers} className='icon' /> <label htmlFor=''>Delete</label>
                </div>
              </div>
            </div> )
})}
        </div>
      </section>
    </>
  )
}
export default Blog