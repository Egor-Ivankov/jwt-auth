import {Route, Routes} from "react-router-dom";
import Login from "../authorization/login/login";
import Registration from "../authorization/registration/registration";
import Home from "../home/home";

function AppRoutes() {
    
    return (
        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/api/login" element={ <Login/> }/>
            <Route path="/api/registration" element={ <Registration/> }/>
        </Routes>
    )
}

export default AppRoutes;
