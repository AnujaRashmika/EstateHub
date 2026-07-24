import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/style.css";


function Login(){

    return(

        <>

        <Navbar />


        <section className="auth-page">


            <div className="auth-box">


                <h1>
                    Welcome Back
                </h1>


                <p>
                    Login to your EstateHub account
                </p>


                <input 
                    type="email"
                    placeholder="Email Address"
                />


                <input 
                    type="password"
                    placeholder="Password"
                />


                <div className="remember">


                    <label>

                        <input type="checkbox"/>

                         Remember me

                    </label>


                    <span>
                        Forgot Password?
                    </span>


                </div>



                <button>
                    Login
                </button>



                <p className="register-text">

                    Don't have an account?

                    <span
                    onClick={() => window.location.href="/register"}
                    >
                        Register
                    </span>

                </p>


            </div>


        </section>


        <Footer />

        </>

    );

}


export default Login;