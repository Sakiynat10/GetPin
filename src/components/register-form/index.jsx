import "./style.scss"

const RegisterForm = () => {
    return(
        <div className="register-form">
            <h1>Getpin Register</h1>
            <form>
                <input type="text" placeholder='FistName'/>
                <input type="text" placeholder='LastName'/>
                <input type="text" placeholder="Login" />
                <button type='submit'>Войти</button>
            </form>
        </div>
    )
}

export default RegisterForm;

