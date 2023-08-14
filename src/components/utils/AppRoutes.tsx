import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home";
import {Gruppi} from "../../pages/Gruppi";
import {Blog} from "../../pages/Blog";
import {About} from "../../pages/About";
import React from "react";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Gruppi" element={<Gruppi/>} />
            <Route path="/Blog" element={<Blog/>} />
            <Route path="/About" element={<About/>} />
        </Routes>
    );
}