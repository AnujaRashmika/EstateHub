import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";
import "../css/style.css";


function Properties(){

    const properties = [

        {
            title:"Modern Luxury House",
            location:"Colombo",
            price:"Rs. 35,000,000",
            image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        },


        {
            title:"Beach Side Villa",
            location:"Galle",
            price:"Rs. 28,000,000",
            image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
        },


        {
            title:"City Apartment",
            location:"Kandy",
            price:"Rs. 15,000,000",
            image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea"
        },


        {
            title:"Family Home",
            location:"Kurunegala",
            price:"Rs. 20,000,000",
            image:"https://images.unsplash.com/photo-1600585154526-990dced4db0d"
        },


        {
            title:"Luxury Villa",
            location:"Negombo",
            price:"Rs. 45,000,000",
            image:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde"
        },


        {
            title:"Apartment Complex",
            location:"Colombo 07",
            price:"Rs. 55,000,000",
            image:"https://images.unsplash.com/photo-1600607688969-a5bfcd646154"
        }

    ];


    return(

        <>

            <Navbar />


            <section className="properties-page">


                <h1>
                    All Properties
                </h1>


                <p>
                    Explore our latest available properties
                </p>



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

    );

}


export default Properties;