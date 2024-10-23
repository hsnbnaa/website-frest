import Header from "./components/fragments/Header";
import Hero from "./components/fragments/Hero";
import About from "./components/fragments/About";
import Features from "./components/fragments/Features";
import Products from "./components/fragments/Products";
import Teaser from "./components/fragments/Teaser";
import Teams from "./components/fragments/Teams";
import Feedback from "./components/fragments/Feedback";

function App() {
  return (
    <main>
      <section className="h-screen max-[415px]:h-[1027px] bg-bgHero bg-cover flex flex-col">
        <Header />
        <Hero />
      </section>
      <About />
      <Features />
      <Products />
      <Teaser />
      <Teams />
      <Feedback />
    </main>
  );
}

export default App;
