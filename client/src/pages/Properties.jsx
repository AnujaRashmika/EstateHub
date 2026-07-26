import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";
import "../css/style.css";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";


function Properties() {

    const [location, setLocation] = useState("");

    const [type, setType] = useState("");

    const [price, setPrice] = useState("");

    const [properties,setProperties] = useState([]);


    useEffect(()=>{
    
        fetch("http://localhost:5000/api/properties")
        .then((res)=>res.json())
        .then((data)=>{
    
            setProperties(data);
    
        })
        .catch((error)=>{
    
            console.log(error);
    
        });
    
    },[]);


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