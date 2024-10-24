import React, { useState, useEffect } from "react";
import Header from "./components/fragments/Header";
import Hero from "./components/fragments/Hero";
import About from "./components/fragments/About";
import Features from "./components/fragments/Features";
import Products from "./components/fragments/Products";
import Teaser from "./components/fragments/Teaser";
import Teams from "./components/fragments/Teams";
import Feedback from "./components/fragments/Feedback";
import Footer from "./components/fragments/Footer";

function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScroll = () => {
    // Menghitung posisi scroll dari atas
    const position = window.pageYOffset;

    // Menampilkan tombol setelah menggulir ke bagian About (misalnya 500px dari atas)
    if (position > 500) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  // Mendaftarkan dan menghapus event listener pada scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener saat komponen unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Animasi scroll
    });
  };

  return (
    <main className="relative overflow-x-hidden">
      <section className="min-h-screen max-[430px]:min-h-[1027px] max-[900px]:min-h-[1024px] bg-bgHero bg-cover flex flex-col">
        <Header />
        <Hero />
      </section>
      <About />
      <Features />
      <Products />
      <Teaser />
      <Teams />
      <Feedback />
      <Footer />

      {/* Tombol Scroll to Top */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed flex gap-1 items-center bottom-4 right-4 p-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-700 z-50"
        >
          <span className="max-[430px]:hidden">Back to Top</span>
          <img src="public/svg/to-up.svg" className="w-6 h-6" />
        </button>
      )}
    </main>
  );
}

export default App;
