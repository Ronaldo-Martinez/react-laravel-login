export default function Tripulacion(passedProps){
    let {setData}  = passedProps
    return(
        <div onLoad={setData("bg-tripulacion vh-100")}>Tripulacion page</div>
    )
}