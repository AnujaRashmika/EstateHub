import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import PropertyCard from "../components/PropertyCard";
import Footer from "../components/Footer";
import "../css/style.css";


function Home(){


    const [location,setLocation] = useState("");

    const [type,setType] = useState("");

    const [price,setPrice] = useState("");



    const properties = [

        {
            title:"Luxury Modern House",
            location:"Colombo",
            type:"House",
            price:25000000,
            image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        },


        {
            title:"Beautiful Villa",
            location:"Kandy",
            type:"Villa",
            price:18500000,
            image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
        },


        {
            title:"Family House",
            location:"Galle",
            type:"House",
            price:12000000,
            image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea"
        }

    ];



    const filteredProperties = properties.filter((property)=>{


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




    return(

        <>


        <Navbar />


        <Hero />



        <SearchBar

            location={location}

            setLocation={setLocation}


            type={type}

            setType={setType}


            price={price}

            setPrice={setPrice}


            clearFilters={()=>{

                setLocation("");

                setType("");

                setPrice("");

            }}

        />




        <section className="properties">


            <h2>
                Featured Properties
            </h2>



            <div className="property-container">


                {

                filteredProperties.length > 0 ?


                filteredProperties.map((property,index)=>(

                    <PropertyCard

                        key={index}

                        property={property}

                    />

                ))


                :


                <h3>
                    No Properties Found
                </h3>


                }



            </div>


        </section>



        <Footer />


        </>

    )


}


export default Home;