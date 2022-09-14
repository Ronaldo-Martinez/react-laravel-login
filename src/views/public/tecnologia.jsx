export default function Tecnologia(passedProps){
    let {setData}  = passedProps
    return(
        <div onLoad={setData("bg-tecnologia vh-100")}>Tec page</div>
    )
}