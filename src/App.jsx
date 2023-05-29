import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-primary relative">
      <Header />
      <Hero />
    </div>
  );
};

export default App;
