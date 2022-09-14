import { useEffect } from "react";
import Destino from "./components/destino"

export default function Destinos(props){
    useEffect(() => {
        props.setData("bg-destinos vh-100");
        console.log("b")
      }, [props]);
    
    return(
        <div>
            <div className="container">
                <p className="py-3 fs-3 fw-light"><span className="text-secondary pr-5">01</span> <span className=" px-4 text-white">Seleciona tu destino.</span></p>
                
                <div className="row">
                    <ul className="nav mb-3 justify-content-end" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <span className="text-white px-4" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected={(e)=>{console.log(e)}}>Home</span>
                        </li>
                        <li className="nav-item" role="presentation">
                            <span className="text-white px-4" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</span>
                        </li>
                        <li className="nav-item" role="presentation">
                            <span className="text-white px-4" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</span>
                        </li>
                    </ul>
                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <Destino name="Luna" img="/img/destinos/image-moon.png"></Destino>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <Destino name="marte" img="/img/destinos/image-mars.png"></Destino>
                    </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <Destino name="Europa" img="/img/destinos/image-europa.png"></Destino>
                    </div>
                </div>
            </div>
        </div>
    )
}