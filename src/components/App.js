import React from 'react';
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Nav from "./Nav";
import { BrowserRouter, Route,Routes} from "react-router-dom";


export default function App() {

    return(
        <> 
            <BrowserRouter>
                <Nav/>
                 <Routes>
                     <Route path="/" element={<Home/>}/>
                     <Route path="/about" element={<About/>}/>
                     <Route path="/login" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
