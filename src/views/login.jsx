import { useState } from "react"

const Login = () => {

    const [user, setUser] = useState({
        userId: "",
        password: "",
    })

    const changeHandler = (event) => {
        const {name, value} = event.target

        setUser(prevVal => {return {...prevVal, [name]: value}})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
    }
    return(
        <div className="login-form ">
            <form>
                <h3 className="text-center">Login</h3>
                <input className="log-input block" name="userId" value={user.userId} placeholder="email / id number" onChange={changeHandler}/>
                <input className="log-input block" name="password" value={user.password} placeholder="password" onChange={changeHandler} />
                <button className="block log-btn" onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}

export default Login