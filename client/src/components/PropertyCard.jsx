function PropertyCard({property}){


    return(

        <div className="property-card">


            <img 
                src={property.image}
                alt={property.title}
            />


            <div className="property-info">


                <h3>
                    {property.title}
                </h3>


                <p>
                    📍 {property.location}
                </p>


                <h4>
                    {property.price}
                </h4>


                <div className="details">

                    <span>
                        🛏 3 Beds
                    </span>


                    <span>
                        🚿 2 Baths
                    </span>


                    <span>
                        📐 2000 sqft
                    </span>

                </div>


                <button
                    onClick={() => window.location.href="/property-details"}
                >
                    View Details
                </button>


            </div>


        </div>

    );


}


export default PropertyCard;