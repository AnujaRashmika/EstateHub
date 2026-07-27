import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/style.css";

function PropertyDetails() {

    const [property, setProperty] = useState(null);
    const [allProperties, setAllProperties] = useState([]);
    const [currentId, setCurrentId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {

        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");

        if (!id) {
            setNotFound(true);
            setLoading(false);
            return;
        }

        setCurrentId(id);

        fetch("https://estatehub-o14x.onrender.com/api/properties")
            .then((res) => res.json())
            .then((data) => {

                setAllProperties(data);

                const match = data.find(
                    (item) => String(item._id || item.id) === String(id)
                );

                if (match) {
                    setProperty(match);
                } else {
                    setNotFound(true);
                }

                setLoading(false);

            })
            .catch((error) => {
                console.log(error);
                setNotFound(true);
                setLoading(false);
            });

    }, []);


    const similarProperties = allProperties
        .filter((item) => String(item._id || item.id) !== String(currentId))
        .slice(0, 3);


    if (loading) {
        return (
            <>
                <Navbar />
                <section className="details-page">
                    <p style={{ padding: "4rem 2rem", textAlign: "center" }}>
                        Loading property...
                    </p>
                </section>
                <Footer />
            </>
        );
    }


    if (notFound || !property) {
        return (
            <>
                <Navbar />
                <section className="details-page">
                    <p style={{ padding: "4rem 2rem", textAlign: "center" }}>
                        Property not found.
                    </p>
                    <div style={{ textAlign: "center", paddingBottom: "3rem" }}>
                        <button
                            className="back-btn"
                            onClick={() => window.location.href = "/properties"}
                        >
                            Back to Properties
                        </button>
                    </div>
                </section>
                <Footer />
            </>
        );
    }


    return (
        <>
            <Navbar />

            <section className="details-page">
                <div className="details-container">

                    {/* Left Side */}
                    <div className="details-left">
                        <img
                            src={property.image}
                            alt={property.title}
                        />
                    </div>

                    {/* Right Side */}
                    <div className="details-right">

                        <span className="property-badge">
                            {property.type || "Featured Property"}
                        </span>

                        <h1>{property.title}</h1>

                        <p className="location">
                            📍 {property.location}
                        </p>

                        <div className="rating">
                            ⭐⭐⭐⭐⭐
                            <span> 4.9 (124 Reviews)</span>
                        </div>

                        <h2 className="price">
                            Rs. {Number(property.price).toLocaleString()}
                        </h2>

                        <div className="feature-grid">

                            <div className="feature-box">
                                🛏
                                <h4>{property.bedrooms ?? property.beds ?? 3}</h4>
                                <p>Bedrooms</p>
                            </div>

                            <div className="feature-box">
                                🚿
                                <h4>{property.bathrooms ?? property.baths ?? 2}</h4>
                                <p>Bathrooms</p>
                            </div>

                            <div className="feature-box">
                                🚗
                                <h4>{property.parking ?? 2}</h4>
                                <p>Parking</p>
                            </div>

                            <div className="feature-box">
                                📐
                                <h4>{property.area ?? property.sqft ?? 2000}</h4>
                                <p>Sq.ft</p>
                            </div>

                        </div>

                        <h3>Description</h3>

                        <p className="description">
                            {property.description || `This ${(property.type || "property").toLowerCase()} in ${property.location} offers a comfortable, well-maintained living space with easy access to schools, shopping and public transport — a great choice for families and professionals alike.`}
                        </p>

                        {property.features && property.features.length > 0 && (
                            <>
                                <h3>Property Features</h3>

                                <ul className="property-list">
                                    {property.features.map((feature, index) => (
                                        <li key={index}>✔ {feature}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        <div className="button-group">
                            <button
                                className="contact-btn"
                                onClick={() => window.location.href = "/contact"}
                            >
                                Contact Seller
                            </button>

                            <button
                                className="back-btn"
                                onClick={() => window.location.href = "/properties"}
                            >
                                Back to Properties
                            </button>
                        </div>

                    </div>

                </div>
            </section>

            {/* Similar Properties */}
            {similarProperties.length > 0 && (
                <section className="similar-properties">

                    <h2>
                        Similar Properties
                    </h2>

                    <div className="similar-grid">

                        {similarProperties.map((item) => (
                            <a
                                key={item._id || item.id}
                                href={`/property-details?id=${item._id || item.id}`}
                                className="similar-card"
                            >
                                <img src={item.image} alt={item.title} />
                                <h4>{item.title}</h4>
                                <p>Rs. {Number(item.price).toLocaleString()}</p>
                            </a>
                        ))}

                    </div>

                </section>
            )}

            <Footer />
        </>
    );
}

export default PropertyDetails;