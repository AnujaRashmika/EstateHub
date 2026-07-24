import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import PropertyCard from "../components/PropertyCard";
import Footer from "../components/Footer";
import "../css/style.css";


function Home(){

    const properties = [
        {
            title:"Luxury Modern House",
            location:"Colombo",
            price:"Rs. 25,000,000",
            image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        },
        {
            title:"Beautiful Villa",
            location:"Kandy",
            price:"Rs. 18,500,000",
            image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
        },
        {
            title:"Family House",
            location:"Galle",
            price:"Rs. 12,000,000",
            image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea"
        }
    ];


    return(
        <>
            <Navbar />

            <Hero />

            <SearchBar />


            <section className="properties">

                <h2>
                    Featured Properties
                </h2>


                <div className="property-container">

                    {
                        properties.map((property,index)=>(
                            <PropertyCard
                                key={index}
                                property={property}
                            />
                        ))
                    }

                </div>

            </section>


            <Footer />

        </>
    )

}


export default Home;