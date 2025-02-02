import { Link } from "react-router-dom";
import Footer from "../components/footer";

const Signup = () => {

    return ( 
        <main>
            <div className="text-center pt-10 mb-7">
                <h1 className="font-bold text-2xl">Budget Tracker</h1>
                <p className="font-light text-sm mt-0.5">Helps you track your expense!</p>
            </div>

            <form className="my-6 p-6 card bg-light w-md mx-auto">
            <div className="form-group mb-3 mt-3">
                    <label htmlFor="name" className="form-label text-sm">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        className="form-control"
                    />
                </div>

                <div className="form-group mb-3 mt-3">
                    <label htmlFor="email" className="form-label text-sm">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        className="form-control"
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="password" className="form-label text-sm">Password</label>
                    <input 
                        type='password' 
                        name="password" 
                        id="password" 
                        className="form-control"
                    />
                </div>

                <div className="form-group mb-7">
                    <label htmlFor="confirmPass" className="form-label text-sm">Confirm Password</label>
                    <input 
                        type='password'
                        name="confirmPass" 
                        id="confirmPass" 
                        className="form-control"
                    />
                </div>

                <div className="flex flex-col justify-content-center">
                    <button type="submit" className="btn btn-lg text-md">Login</button>
                </div>

                <div className="flex items-center mt-3">
                    <p className="text-xs font-light">Already have an account? Log in</p>
                    <Link to='/login' className="text-xs font-light ms-1 underline highlight-text">here </Link>
                </div>
            </form>

            <Footer />
        </main>
     );
}
 
export default Signup;