import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/style.css";


function Register(){

    return(

        <>

        <Navbar />


        <section className="register-page">


            <div className="register-box">


                <h1>
                    Create Account
                </h1>


                <p>
                    Join EstateHub today
                </p>



                <input
                    type="text"
                    placeholder="Full Name"
                />


                <input
                    type="email"
                    placeholder="Email Address"
                />


                <input
                    type="tel"
                    placeholder="Mobile Number"
                />


                <input
                    type="password"
                    placeholder="Password"
                />



                <button>
                    Register
                </button>



                <p className="login-link">

                    Already have an account?

                    <span
                    onClick={() => window.location.href="/login"}
                    >
                        Login
                    </span>

                </p>


            </div>


        </section>


        <Footer />

        </>

    );

}


export default Register;