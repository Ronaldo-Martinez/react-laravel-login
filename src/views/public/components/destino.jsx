export default function Destino(props){
    return (
        <div>
            <div className="container-fluid">
                <div className="row  text-center justify-content-center align-items-center">
                    <div className="col-6">
                        <img src={props.img} alt="" style={{"height":"60%", "width":"60%"}}/>
                    </div>
                    <div className="col-6">
                        <h1>Hello, {props.name}</h1>
                    </div>
                </div>
            </div>            
        </div>
        
    );
}