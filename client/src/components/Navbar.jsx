function Navbar(){

    return(

        <nav className="navbar">

            <div 
                className="logo"
                onClick={() => window.location.href="/"}
            >
                EstateHub
            </div>


            <ul className="nav-links">

                <li 
                    onClick={() => window.location.href="/"}
                >
                    Home
                </li>


                <li 
                    onClick={() => window.location.href="/properties"}
                >
                    Properties
                </li>


                <li 
                    onClick={() => window.location.href="/about"}
                >
                    About
                </li>


                <li 
                    onClick={() => window.location.href="/contact"}
                >
                    Contact
                </li>


            </ul>


            <button 
                className="login-btn"
                onClick={() => window.location.href="/login"}
            >
                Login
            </button>


        </nav>

    );

}

export default Navbar;