import { useState } from "react";
import Header from "./components/fragments/Header";
import Hero from "./components/fragments/Hero";
import About from "./components/fragments/About";
import Features from "./components/fragments/Features";

function App() {
  return (
    <main>
      <section className="h-screen bg-bgHero bg-cover relative">
        <Header />
        <Hero />
      </section>
      <About />
      <Features />
    </main>
  );
}

export default App;
