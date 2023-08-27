import Template from "../components/template/Template";
import React from "react";
import Accordion from "../components/accordion/Accordion";
import "./Gruppi.css";

export const Gruppi = () => {
    return (
        <Template>
            <h1 className="titoloGruppiPage">Gruppi</h1>
            <Accordion/>
        </Template>
    );
}