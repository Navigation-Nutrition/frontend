import "./EditBlog.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";



function BlogUpdateForm(props) {
    const [Url, setUrl] = useState("")
    const [Title, setTitle] = useState("")
    const [Date, setDate] = useState("")
    const [Message, setMessage] = useState("")
    let navigate = useNavigate();
    let { post_id } = useParams();

    useEffect(() => {
        console.log("here")
        async function GetAllBlogInfo() {
            let data = await fetch(`http://localhost:8000/post/${post_id}`)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                    throw response
                })
            setUrl(data.img_url)
            setTitle(data.post_title)
            setDate(data.post_date)
            setMessage(data.post_message)
        }
        GetAllBlogInfo()
    }, [])


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
    function Submit(e) {
        e.preventDefault()
        // console.log("submitting sign up form")
        // console.log('right here', UserName, Email, Password, FirstName, LastName)

        // let myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/json");
        //  myHeaders.append("Access-Control-Allow-Origin", "*");

        // const requestOptions= {
        //   method: "PUT",
        //   headers: myHeaders,


        //   body: JSON.stringify({ 
        //     "post_id": props.key,
        //     "img_url": Url,
        //     "post_title": Title,
        //     "post_date": Date,
        //     "post_message": Message,
        //   }),redirect: 'follow'
        // }

        // fetch("http://localhost:8000/post", requestOptions)
        //   .then(res => res.text())
        //   .then(data => {
        //     console.log("hello")
        //     console.log(data)
        //     navigate("/blog");
        //   })
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        console.log(post_id)
        let raw = JSON.stringify({
            "post_id": post_id,
            "img_url": Url,
            "post_title": Title,
            "post_date": Date,
            "post_message": Message,
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8000/post", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            navigate("/blog");
    }

    return (
        <section className="resume-section p-4 p-lg-5 text-center" id="contact">
            <div className="my-auto">
                <h2 className="mb-4"> Update Post</h2>
                <form onSubmit={Submit} className="contact-form d-flex flex-column align-items-center" >
                    <div className="form-group w-75">
                        <input type="url" className="form-control" placeholder={Url} onChange={handleUrl} name="name" required />
                    </div>
                    <div className="form-group w-75">
                        <input type="title" className="form-control" placeholder={Title} onChange={handleTitle} name="name" required />
                    </div>
                    <div className="form-group w-75">
                        <input type="text" className="form-control" placeholder={Date} name="Date" onChange={handleDate} required />
                    </div>
                    <div className="form-group w-75">
                        <textarea className="form-control" type="text" onChange={handleMessage} rows={7} name="name" required value={Message} ></textarea>
                    </div>
                    <button type="submit" className="btn btn-submit btn-info w-75">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default BlogUpdateForm