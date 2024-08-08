"use client"
import "./style.scss"
import {useRouter} from "next/navigation";

const RegisterForm = () => {
    const router = useRouter()
    const handleUserValue = (e) => {
        e.preventDefault()
        router.push("/profile/poster")
    }
    return(
        <div className="register-form">
            <h1>Getpin Register</h1>
            <form>
                <input type="text" placeholder='FistName'/>
                <input type="text" placeholder='LastName'/>
                <input type="text" placeholder="Login" />
                <button onClick={handleUserValue} type='submit'>Войти</button>
            </form>
        </div>
    )
}

export default RegisterForm;

