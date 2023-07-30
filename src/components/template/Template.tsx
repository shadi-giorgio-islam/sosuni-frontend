import {Navbar} from "./Navbar";
import {Footer} from "./Footer";
import React from "react";

const Template = ({ children }: any) => {
    return (
        <div>
            <header>
                <Navbar/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default Template;