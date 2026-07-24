import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/style.css";


function About(){

    return(

        <>

        <Navbar />


        {/* Hero Section */}

        <section className="about-hero">

            <h1>
                About EstateHub
            </h1>

            <p>
                Your trusted partner for finding the perfect property.
            </p>

        </section>



        {/* About Content */}

        <section className="about-content">


            <div className="about-image">

                <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
                alt="Estate"
                />

            </div>



            <div className="about-text">

                <h2>
                    We Make Property Searching Simple
                </h2>


                <p>
                    EstateHub is a modern property marketplace
                    designed to connect buyers, sellers and renters.
                    We provide a simple and reliable platform to
                    discover homes, apartments and commercial properties.
                </p>


                <p>
                    Our goal is to make the property buying process
                    faster, easier and more transparent.
                </p>


            </div>


        </section>



        {/* Why Choose Us */}

        <section className="why-section">


            <h2>
                Why Choose EstateHub?
            </h2>



            <div className="why-container">


                <div className="why-card">

                    🏠

                    <h3>
                        Wide Property Selection
                    </h3>

                    <p>
                        Thousands of properties available
                        in different locations.
                    </p>

                </div>



                <div className="why-card">

                    🔒

                    <h3>
                        Trusted Platform
                    </h3>

                    <p>
                        Secure and reliable property
                        marketplace experience.
                    </p>

                </div>




                <div className="why-card">

                    ⚡

                    <h3>
                        Easy Process
                    </h3>

                    <p>
                        Search and connect with sellers
                        quickly and easily.
                    </p>

                </div>


            </div>


        </section>



        {/* Statistics */}

        <section className="stats-section">


            <div className="stat-box">

                <h2>
                    500+
                </h2>

                <p>
                    Properties
                </p>

            </div>



            <div className="stat-box">

                <h2>
                    1000+
                </h2>

                <p>
                    Happy Customers
                </p>

            </div>



            <div className="stat-box">

                <h2>
                    50+
                </h2>

                <p>
                    Locations
                </p>

            </div>


        </section>



        <Footer />

        </>

    );

}


export default About;