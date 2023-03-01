import React from "react"
import "./Blog.css"
import { blog } from "./Data"
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
import { Link } from "react-router-dom"
import b5 from "../IMGS/b5.jpg"
import { useEffect, useState} from "react"


export const Blog = () => {
  let [feeds, setfeeds] = useState([])
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

         {feeds.map((item) => (
            <div className='box boxItems' key={item.post_id}>
              <div className='img'>
                {/* <img src={item.cover} alt='' />  */}
                <img src={b5} alt='' />
              </div>
              <div className='details'>
                <Link to={`/details/${item.id}`} className='link'>
                  <h3>{item.post_title}</h3>
                </Link>
                <p>{item.post_message.slice(0, 180)}...</p>
                <div className='date'>
                  <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{item.post_date}</label>
                  <AiOutlineComment className='icon' /> <label htmlFor=''>27</label>
                  <AiOutlineShareAlt className='icon' /> <label htmlFor=''>SHARE</label>
                </div>
              </div>
            </div> 
          ))}
        </div>
      </section>
    </>
  )
}
export default Blog