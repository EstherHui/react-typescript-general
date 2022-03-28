//how to use the useState
//1. import useSate hook
import { useState } from "react"

export const LoggedIn = () => {

    //2. create a login state variable whose initial value is false
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    //4. inside handler call setLoggedIn(1/0) <- in typescript cannot use 1/0 as true or false
    const handlerLogin = () => {
        setIsLoggedIn(true)
    }
    const handlerLogout = () => {
        setIsLoggedIn(false)
    }

    //3. use 'isLoggedIn' to check the status
    return (
        <div>
            <button onClick={handlerLogin}>Login</button>
            <button onClick={handlerLogout}>Logout</button>
            <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
        </div>
    )
}