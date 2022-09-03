import { useState } from "react"
import AuthUser from "./authUser";
import { useNavigate } from "react-router-dom";

export default function REgister(){
    const navigate = useNavigate();
    const {http}=AuthUser();
    const [name, setName]= useState();
    const [email, setEmail]= useState();
    const [password, setPassword]= useState();

    const submitForm = ()=>{
        //Api call
        http.post('/register', {name: name, email:email, password: password}).then((res)=>{
            console.log(res.data)
            navigate("/login")
        })
    }

    return(
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                    <div className="mb-4">
                        <label className="form-label">Name:</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" 
                            onChange={e=>setName(e.target.value)}
                        aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" 
                            onChange={e=>setEmail(e.target.value)}
                        aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" 
                            onChange={e=>setPassword(e.target.value)}
                        id="exampleInputPassword1" />
                    </div>
                    <div className="mb-4">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" >Check me out</label>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={submitForm}>Login</button>
                </div>    
            </div>
        </div>
    )
}