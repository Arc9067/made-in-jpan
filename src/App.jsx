import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Token from "./Components/Token";

const App = () => {
  return (
    <div className="min-h-screen w-full font-Asiana bg-primary relative">
      <Header />
      <Hero />
      <About />
      <Token />
    </div>
  );
};

export default App;
