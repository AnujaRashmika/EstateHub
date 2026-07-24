import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";
import "../css/style.css";
import { useState } from "react";
import SearchBar from "../components/SearchBar";


function Properties() {

    const [location, setLocation] = useState("");

    const [type, setType] = useState("");

    const [price, setPrice] = useState("");

    const properties = [

        {
            title: "Modern Luxury House",
            location: "Colombo",
            type: "House",
            price: "Rs. 35,000,000",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        },


        {
            title: "Beach Side Villa",
            location: "Galle",
            type: "Villa",
            price: "Rs. 28,000,000",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
        },


        {
            title: "City Apartment",
            location: "Kandy",
            type: "Apartment",
            price: "Rs. 15,000,000",
            image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea"
        },


        {
            title: "Family Home",
            location: "Kurunegala",
            type: "House",
            price: "Rs. 20,000,000",
            image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
        },


        {
            title: "Luxury Villa",
            location: "Negombo",
            type: "Villa",
            price: "Rs. 45,000,000",
            image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde"
        },


        {
            title: "Apartment Complex",
            location: "Colombo 07",
            type: "Apartment",
            price: "Rs. 55,000,000",
            image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154"
        }

    ];

    const filteredProperties = properties.filter((property) => {


        return (

            property.location
                .toLowerCase()
                .includes(location.toLowerCase())


            &&


            (type === "" || property.type === type)


            &&


            (price === "" || property.price <= Number(price))


        );


    });


    return (

        <>

            <Navbar />


            <section className="properties-page">


                <h1>
                    All Properties
                </h1>


                <p>
                    Explore our latest available properties
                </p>


                <SearchBar

                    location={location}

                    setLocation={setLocation}

                    type={type}

                    setType={setType}

                    price={price}

                    setPrice={setPrice}


                    clearFilters={() => {

                        setLocation("");

                        setType("");

                        setPrice("");

                    }}

                />

                <div className="property-container">


                    {
                        filteredProperties.map((property, index) => (

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

    );

}


export default Properties;