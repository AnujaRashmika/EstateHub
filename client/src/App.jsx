import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PropertyDetails from "./pages/PropertyDetails";


function App(){

    const path = window.location.pathname;


    if(path === "/properties"){
        return <Properties />;
    }


    if(path === "/login"){
        return <Login />;
    }


    if(path === "/register"){
        return <Register />;
    }

    if(path === "/property-details"){
        return <PropertyDetails />;
    }


    return <Home />;

}


export default App;