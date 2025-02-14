import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import HelpWidget from "./components/ui/HelpWidget";
import ScrollToTop from "./components/ui/ScrollToTop";
import Footer from "./components/Footer";
import CardContainer from "./components/CardContainer";

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Footer />
            <HelpWidget />
            <ScrollToTop />
            <CardContainer />
        </div>
    );
}

export default App;
