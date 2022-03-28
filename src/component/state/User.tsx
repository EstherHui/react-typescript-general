import { useState } from "react"

type AuthUser = {
    name : string
    email : string
}

export const User = () => {

    // const [user, setUser] = useState<AuthUser | null>(null)
    const [user, setUser] = useState<AuthUser>({} as AuthUser)//allow to access name and email without check
    const handlerLogin = () => {
        setUser({
            name: 'GoodBai',
            email: 'goodbai@example.com',
        })
    }
    // const handlerLogout = () => {
    //     setUser(null)
    // }

    <div>
        <button onClick={handlerLogin}> Login </button>
        {/* <button onClick={handlerLogout}> Logout </button> */}
        <div>Username is {user.name} </div>
        <div>User email is {user.email} </div>
        {/* <div>Username is {user?.name} </div>
        <div>User email is {user?.email} </div> */}
    </div>
    //user can be null so have '?' apepar

}