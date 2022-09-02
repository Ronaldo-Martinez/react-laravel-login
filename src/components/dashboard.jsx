import AuthUser from "./authUser"

export default function Dashboard(){
    const {user} = AuthUser();
    return(
        <div>
            <h1>Dashboard page</h1>
            <h4>Name</h4>
            <p>{user.name}</p>
            <h4>Email</h4>
            <p>{user.email}</p>

        </div>
    )
}