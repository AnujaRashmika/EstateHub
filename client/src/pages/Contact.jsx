import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/style.css";


function Contact(){

    return(

        <>

        <Navbar />


        <section className="contact-hero">

            <h1>
                Contact Us
            </h1>

            <p>
                We are here to help you find your dream property.
            </p>

        </section>



        <section className="contact-section">


            <div className="contact-info">


                <h2>
                    Get In Touch
                </h2>


                <p>
                    Have questions about properties?
                    Contact our team and we will assist you.
                </p>


                <div className="contact-item">

                    📍

                    <div>
                        <h4>
                            Address
                        </h4>

                        <p>
                            Colombo, Sri Lanka
                        </p>
                    </div>

                </div>



                <div className="contact-item">

                    📞

                    <div>

                        <h4>
                            Phone
                        </h4>

                        <p>
                            +94 77 123 4567
                        </p>

                    </div>

                </div>



                <div className="contact-item">

                    ✉️

                    <div>

                        <h4>
                            Email
                        </h4>

                        <p>
                          contact@estatehub.com
                        </p>

                    </div>

                </div>


            </div>




            <div className="contact-form">


                <h2>
                    Send Message
                </h2>



                <input
                    type="text"
                    placeholder="Your Name"
                />


                <input
                    type="email"
                    placeholder="Your Email"
                />


                <input
                    type="text"
                    placeholder="Subject"
                />



                <textarea
                    placeholder="Your Message"
                ></textarea>



                <button>
                    Send Message
                </button>


            </div>



        </section>



        <Footer />

        </>

    );

}


export default Contact;