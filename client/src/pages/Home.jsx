import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "../css/style.css";


/* ---------- Scroll-reveal hook ---------- */
function useReveal(threshold = 0.2) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(node);
                }
            },
            { threshold }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, visible];
}


/* ---------- Animated counter ---------- */
function Counter({ end, suffix = "", duration = 1800 }) {
    const [ref, visible] = useReveal(0.5);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!visible) return;

        let start = null;
        let frameId;

        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * end));

            if (progress < 1) {
                frameId = requestAnimationFrame(step);
            } else {
                setCount(end);
            }
        };

        frameId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(frameId);
    }, [visible, end, duration]);

    return (
        <span ref={ref} className="eh-counter">
            {count}{suffix}
        </span>
    );
}


/* ---------- Reveal wrapper ---------- */
function Reveal({ children, delay = 0, className = "" }) {
    const [ref, visible] = useReveal(0.15);

    return (
        <div
            ref={ref}
            className={`eh-reveal ${visible ? "eh-in-view" : ""} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}


function Home() {

    const stats = [
        { end: 1200, suffix: "+", label: "Properties Listed" },
        { end: 850, suffix: "+", label: "Happy Families" },
        { end: 24, suffix: "", label: "Cities Covered" },
        { end: 9, suffix: "", label: "Years of Trust" }
    ];

    const properties = [
        { id: 1, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80" },
        { id: 2, image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80" },
        { id: 3, image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80" },
        { id: 4, image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80" }
    ];

    const steps = [
        {
            number: "01",
            title: "Search",
            text: "Browse verified listings filtered by location, budget and property type."
        },
        {
            number: "02",
            title: "Visit",
            text: "Schedule a viewing and walk through the property with our agents."
        },
        {
            number: "03",
            title: "Move In",
            text: "Complete the paperwork and settle into your new home with confidence."
        }
    ];

    const testimonials = [
        {
            name: "Kasun Perera",
            feedback: "Found my dream home easily. The process was simple and professional.",
            photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80"
        },
        {
            name: "Nimali Fernando",
            feedback: "Great platform with beautiful properties and helpful information.",
            photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80"
        },
        {
            name: "Tharindu Silva",
            feedback: "A reliable place to explore modern houses and villas.",
            photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80"
        }
    ];


    return (

        <>

            <Navbar />

            <Hero />


            {/* Stats Strip — signature blueprint grid section */}
            <section className="eh-stats">

                <svg className="eh-blueprint-grid" viewBox="0 0 1200 300" preserveAspectRatio="none">
                    <defs>
                        <pattern id="ehGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#7FD1C4" strokeWidth="0.5" opacity="0.25" />
                        </pattern>
                    </defs>
                    <rect width="1200" height="300" fill="url(#ehGrid)" />
                    <line className="eh-draw-line" x1="0" y1="150" x2="1200" y2="150" />
                </svg>

                <div className="eh-stats-inner">
                    {stats.map((s, i) => (
                        <Reveal key={s.label} delay={i * 120} className="eh-stat-item">
                            <h3><Counter end={s.end} suffix={s.suffix} /></h3>
                            <p>{s.label}</p>
                        </Reveal>
                    ))}
                </div>

            </section>


            {/* About Section */}
            <section className="about-home">

                <Reveal>
                    <h2>Find Your Perfect Home</h2>
                    <p>
                        EstateHub helps you discover beautiful homes,
                        apartments and properties that match your lifestyle.
                        Explore trusted property listings and make better
                        decisions for your future.
                    </p>
                </Reveal>

            </section>


            {/* Featured Properties */}
            <section className="eh-properties">

                <Reveal className="eh-section-head">
                    <h2>Properties Worth a Second Look</h2>
                </Reveal>

                <div className="eh-property-grid">

                    {properties.map((p, i) => (
                        <Reveal key={p.id} delay={i * 100}>
                            <div className="eh-property-card">

                                <div className="eh-property-image">
                                    <img src={p.image} alt={`Featured property ${p.id}`} />
                                    <span className="eh-corner eh-corner-tl"></span>
                                    <span className="eh-corner eh-corner-tr"></span>
                                    <span className="eh-corner eh-corner-bl"></span>
                                    <span className="eh-corner eh-corner-br"></span>
                                </div>

                            </div>
                        </Reveal>
                    ))}

                </div>

                <Reveal className="eh-explore-wrap">
                    <a href="/properties" className="eh-btn-solid">Explore Properties</a>
                </Reveal>

            </section>


            {/* Image Gallery */}
            <section className="home-gallery">

                <Reveal>
                    <h2>Explore Beautiful Properties</h2>
                </Reveal>

                <div className="gallery-container">

                    <Reveal delay={0}>
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
                            alt="house"
                        />
                    </Reveal>

                    <Reveal delay={120}>
                        <img
                            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
                            alt="villa"
                        />
                    </Reveal>

                    <Reveal delay={240}>
                        <img
                            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80"
                            alt="home"
                        />
                    </Reveal>

                </div>

            </section>


            {/* How It Works */}
            <section className="eh-steps">

                <Reveal className="eh-section-head">
                    <h2>How EstateHub Works</h2>
                </Reveal>

                <div className="eh-steps-container">

                    {steps.map((s, i) => (
                        <Reveal key={s.number} delay={i * 150} className="eh-step-card">
                            <span className="eh-step-number">{s.number}</span>
                            <h3>{s.title}</h3>
                            <p>{s.text}</p>
                        </Reveal>
                    ))}

                </div>

            </section>


            {/* Why Choose Us */}
            <section className="why-us">

                <Reveal>
                    <h2>Why Choose EstateHub?</h2>
                </Reveal>

                <div className="features">

                    <Reveal delay={0} className="feature-card">
                        <h3>🏠 Wide Range</h3>
                        <p>Discover different types of properties suitable for your needs.</p>
                    </Reveal>

                    <Reveal delay={120} className="feature-card">
                        <h3>🔒 Trusted Listings</h3>
                        <p>Find reliable property information with confidence.</p>
                    </Reveal>

                    <Reveal delay={240} className="feature-card">
                        <h3>⭐ Easy Experience</h3>
                        <p>Search and explore properties quickly and easily.</p>
                    </Reveal>

                </div>

            </section>


            {/* Customer Reviews */}
            <section className="reviews">

                <Reveal>
                    <h2>What Our Customers Say</h2>
                </Reveal>

                <div className="review-container eh-review-container">

                    {testimonials.map((item, index) => (
                        <Reveal key={index} delay={index * 130} className="review-card eh-review-card">
                            <img src={item.photo} alt={item.name} className="eh-review-avatar" />
                            <p>{item.feedback}</p>
                            <h4>{item.name}</h4>
                        </Reveal>
                    ))}

                </div>

            </section>


            {/* CTA Banner */}
            <section className="eh-cta">

                <Reveal>
                    <h2>Your Next Address Starts Here</h2>
                    <p>Browse verified listings across Sri Lanka and find a place that fits your plan.</p>
                    <a href="/properties" className="eh-btn-solid">Browse Properties</a>
                </Reveal>

                <span className="eh-cta-dot"></span>

            </section>


            <Footer />

        </>

    );

}


export default Home;