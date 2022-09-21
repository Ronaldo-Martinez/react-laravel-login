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
                <p className="py-3 fs-3 fw-light">
                    <span className="text-secondary pr-5">01</span> 
                    <span className=" px-4 text-white">Seleciona tu destino.</span>
                </p>
                
                <div className="row">
                    <ul className="nav mb-3 justify-content-end" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <span className="text-danger px-4" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected={(e)=>{console.log(e)}}>Home</span>
                        </li>
                        <li className="nav-item" role="presentation">
                            <span className="text-white px-4" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-marte" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</span>
                        </li>
                        <li className="nav-item" role="presentation">
                            <span className="text-white px-4" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-europa" type="button" role="tab" aria-controls="pills-europa" aria-selected="false">Contact</span>
                        </li>
                        <li className="nav-item" role="presentation">
                            <span className="text-white px-4" id="pills-contact-titan" data-bs-toggle="pill" data-bs-target="#pills-titan" type="button" role="tab" aria-controls="pills-titan" aria-selected="false">Titan</span>
                        </li>
                    </ul>
                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <Destino name="Luna" img="/img/destinos/image-moon.png" texto="nuevo 1"></Destino>
                    </div>
                    <div className="tab-pane fade" id="pills-marte" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <Destino name="marte" img="/img/destinos/image-mars.png" texto="nuevo 2"></Destino>
                    </div>
                    <div className="tab-pane fade" id="pills-europa" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <Destino name="Europa" img="/img/destinos/image-europa.png" texto="nuevo 3"></Destino>
                    </div>
                    <div className="tab-pane fade" id="pills-titan" role="tabpanel" aria-labelledby="pills-contact-titan">
                        <Destino name="Titan" img="/img/destinos/image-titan.png" texto="nuevo 3"></Destino>
                    </div>
                </div>
            </div>
        </div>
    )
}