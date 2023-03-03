import "./EditBlog.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


    
    function BlogForm() {
        const [Url, setUrl] = useState("")
        const [Title, setTitle] = useState("")
        const [Date, setDate] = useState("")
        const [Message, setMessage] = useState("")
         let navigate = useNavigate();


        function handleUrl(e) {
            setUrl(e.target.value)
            console.log(Url)
        }
    
        function handleTitle(e) {
            setTitle(e.target.value)
          console.log(Title)
        }
    
        function handleDate(e) {
            setDate(e.target.value)
          console.log(Date)
        }
    
        function handleMessage(e) {
            setMessage(e.target.value)
          console.log(Message)
        }
        function Submit(e){
            e.preventDefault()
            // console.log("submitting sign up form")
            // console.log('right here', UserName, Email, Password, FirstName, LastName)
      
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
      
            const requestOptions= {
              method: "POST",
              headers: myHeaders,
        
              
              body: JSON.stringify({ 
                "img_url": Url,
                "post_title": Title,
                "post_date": Date,
                "post_message": Message,
              }) //,redirect: 'follow'
            }
             
            fetch("http://localhost:8000/post/create", requestOptions)
              .then(res => res.json())
              .then(data => {
                console.log("hello")
                console.log(data)
                navigate("/blog");
              })
              
          }

      return (
        <section className="resume-section p-4 p-lg-5 text-center" id="contact">
        <div className="my-auto">
          <h2 className="mb-4"> New Post</h2>
          <form onSubmit={Submit} className="contact-form d-flex flex-column align-items-center" >
            <div className="form-group w-75">
              <textarea type="url" className="form-control" placeholder="Url" onChange={handleUrl} name="name" required />
            </div>
            <div className="form-group w-75">
              <textarea type="title" className="form-control" placeholder="Title" onChange={handleTitle} name="name" required />
            </div>
            <div className="form-group w-75">
              <textarea type="text" className="form-control" placeholder="Date" name="Date" onChange={handleDate} required />
            </div>
            <div className="form-group w-75">
              <textarea className="form-control" type="text" placeholder="Message" onChange={handleMessage} rows={7} name="name" required defaultValue={""} />
            </div>
            <button type="submit" className="btn btn-submit btn-info w-75">Submit</button>
          </form>
        </div>
      </section>
    );
  }

  export default BlogForm