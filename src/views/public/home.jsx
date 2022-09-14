import { useEffect } from "react";
export default function Home(props){
    
    useEffect(() => {
        props.setData("bg-home vh-100");
        console.log("A")
      }, [props]);
    

    return(
        <div className=" ">
            <div className="row  text-center justify-content-center align-items-center" style={{"height":"80vh"}}>
                <div className="col-12 col-md-6 text-start px-3">
                    <p className="fs-6 text-secondary">Asi que quieres viajar al</p>
                    <p className="fs-1 text-white">ESPACIO</p>
                    <p className="fs-6 text-secondary">Seamos sinceros; si quieres ir al espacio y
                    ahora podras hacerlo, ¡Solo siéntate y relájate porque te daremos una experiencia fuera de este mundo!</p>
                </div>
                <div className="col-12 col-md-6 ">
                    <div className="row justify-content-center align-items-end">
                        <div className="row circulo justify-content-center align-items-center">
                            <span>Explorar</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}