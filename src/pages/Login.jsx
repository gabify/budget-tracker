import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Spinner from "../components/Spinner"
import { useLogin } from "../hooks/useLogin";

const Login = () => {
    const [isShown, setIsShown] = useState(false)
    const [login, isLoading, error] = useLogin()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleCheck = () =>{
        if(isShown){
            setIsShown(false)
        }else{
            setIsShown(true)
        }
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()

        const user = {email, password}
        await login(user)
        console.log(error)
        if(!error){
            navigate('/')
        }

        setEmail('')
        setPassword('')
    }

    return ( 
        <main>
            <div className="text-center pt-10 mb-7">
                <h1 className="font-bold text-2xl">Budget Tracker</h1>
                <p className="font-light text-sm mt-0.5">Helps you track your expense!</p>
            </div>

            <form 
                onSubmit={handleSubmit}
                className="my-6 p-6 card bg-light w-md mx-auto"
            >
                <div className="form-group mb-7 mt-3">
                    <label htmlFor="email" className="form-label text-sm">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="password" className="form-label text-sm">Password</label>
                    <input 
                        type={isShown ? 'text' : 'password'} 
                        name="password" 
                        id="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                    />
                </div>

                <div className="flex mx-3 items-center mb-7">
                    <input 
                        type="checkbox" 
                        name="isText" 
                        id="isText" 
                        checked={isShown}
                        onChange={handleCheck}
                    />
                    <label htmlFor="isText" className="ms-1 font-light text-sm">Show Password</label>
                </div>

                <div className="flex flex-col justify-content-center">
                    <button 
                        type="submit" 
                        className={`btn-lg text-md ${isLoading ? 'btn-disabled' : 'btn'}`}
                        disabled={isLoading}
                    >
                        {isLoading ? <Spinner /> : 'Log in'}
                    </button>
                </div>

                <div className="flex items-center mt-3">
                    <p className="text-xs font-light">No account yet? Sign up</p>
                    <Link to='/signup' className="text-xs font-light ms-1 underline highlight-text">here </Link>
                </div>
            </form>

            <Footer />
        </main>
     );
}
 
export default Login;