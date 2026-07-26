function Hero() {

    return (

        <section className="hero">

            <div className="hero-content">

                <h1>
                    Find Your Dream Home
                </h1>


                <p>
                    Discover the best properties, houses and apartments around Sri Lanka
                </p>


                <button
                    onClick={() => window.location.href = "/properties"}
                >
                    Explore Properties
                </button>

            </div>

        </section>

    );

}

export default Hero;