import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/style.css";

function PropertyDetails() {
  return (
    <>
      <Navbar />

      <section className="details-page">
        <div className="details-container">

          {/* Left Side */}
          <div className="details-left">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Luxury House"
            />
          </div>

          {/* Right Side */}
          <div className="details-right">

            <span className="property-badge">
              Featured Property
            </span>

            <h1>Luxury Modern House</h1>

            <p className="location">
              📍 Colombo, Sri Lanka
            </p>

            <div className="rating">
              ⭐⭐⭐⭐⭐
              <span> 4.9 (124 Reviews)</span>
            </div>

            <h2 className="price">
              Rs. 35,000,000
            </h2>

            <div className="feature-grid">

              <div className="feature-box">
                🛏
                <h4>4</h4>
                <p>Bedrooms</p>
              </div>

              <div className="feature-box">
                🚿
                <h4>3</h4>
                <p>Bathrooms</p>
              </div>

              <div className="feature-box">
                🚗
                <h4>2</h4>
                <p>Parking</p>
              </div>

              <div className="feature-box">
                📐
                <h4>2500</h4>
                <p>Sq.ft</p>
              </div>

            </div>

            <h3>Description</h3>

            <p className="description">
              This luxury modern home offers spacious living areas,
              premium finishes, a beautiful landscaped garden,
              private parking, and easy access to schools,
              supermarkets and public transportation.
            </p>

            <h3>Property Features</h3>

            <ul className="property-list">
              <li>✔ Swimming Pool</li>
              <li>✔ Air Conditioning</li>
              <li>✔ CCTV Security</li>
              <li>✔ Balcony</li>
              <li>✔ Garden</li>
              <li>✔ Solar Power</li>
            </ul>

            <div className="button-group">
              <button className="contact-btn">
                Contact Seller
              </button>

              <button className="back-btn"
                onClick={() => window.location.href="/properties"}>
                Back to Properties
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Similar Properties */}

      <section className="similar-properties">

        <h2>
          Similar Properties
        </h2>

        <div className="similar-grid">

          <div className="similar-card">
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" />
            <h4>Beach Villa</h4>
            <p>Rs. 28,000,000</p>
          </div>

          <div className="similar-card">
            <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea" />
            <h4>City Apartment</h4>
            <p>Rs. 18,000,000</p>
          </div>

          <div className="similar-card">
            <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d" />
            <h4>Family House</h4>
            <p>Rs. 22,000,000</p>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default PropertyDetails;