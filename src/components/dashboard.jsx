import { useState, useEffect } from "react";
import AuthUser from "./authUser"

export default function Dashboard(){
    const {http}=AuthUser();
    const [userDatails, setUserDetails]=useState();
    
    useEffect(()=>{
        fetchUserDatails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const fetchUserDatails = ()=>{
        http.post('/me').then((res)=>{
            setUserDetails(res.data);
        })
    }

    function renderElement(){
        if(userDatails){
            return <div>
                <h1>Dashboard page</h1>
                <h4>Name</h4>
                <p>{userDatails.name}</p>
                <h4>Email</h4>
                <p>{userDatails.email}</p>
            </div>
        }
        else{
            return (
                <div className="row justify-content-center pt-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )
        }
    }

    return(
        <div>
            { renderElement()}
        </div>
    )
}