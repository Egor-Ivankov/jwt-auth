import { lazy, Suspense } from 'react';
import {Route, Routes} from "react-router-dom";
import Spinner from '../spinner/spinner';

const Login = lazy(() => import("../authorization/login/login"));
const Registration = lazy(() => import("../authorization/registration/registration"));
const Home = lazy(() => import("../home/home"));

function AppRoutes() {
    
    return (
        <Suspense fallback={ <Spinner/> }>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/api/login" element={ <Login/> }/>
                <Route path="/api/registration" element={ <Registration/> }/>
            </Routes>
        </Suspense>
    )
}

export default AppRoutes;
