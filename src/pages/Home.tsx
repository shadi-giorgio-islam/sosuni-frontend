import Template from "../components/template/Template";
import React from "react";
import Banner from "../components/banner/Banner";
import GroupSection from "../components/groupSection/GroupSection";

export const Home = () => {
    return (
        <Template>
            <Banner/>
            <GroupSection/>
        </Template>
    );
}