import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AuraImage from "./components/AuraImage";
import Brends from "./components/Brends";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import HighLight from "./components/HighLight";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Buttons from "./components/Buttons";

const App = () => {
  const scrollToFeatures = () => {
    document.getElementById("features").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTestimonials = () => {
    document
      .getElementById("testimonials")
      .scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHighlights = () => {
    document
      .getElementById("highlights")
      .scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPricing = () => {
    document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFAQ = () => {
    document.getElementById("faq").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full">
      <div className="bg-gradient-to-b from-[#CEE5FD] to-[#FFF]">
        <div className="container">
          <div className="h-[70px] w-full pt-5"></div>
          <Header
            scrollToFeatures={scrollToFeatures}
            scrollToTestimonials={scrollToTestimonials}
            scrollToHighlights={scrollToHighlights}
            scrollToPricing={scrollToPricing}
            scrollToFAQ={scrollToFAQ}
          />
          <Hero />
        </div>
      </div>
      <main>
        <div className="container">
          <AuraImage />
          <Brends />
          <Features />
          <Testimonials />
        </div>
        <HighLight />
        <div className="container">
          <Pricing />
        </div>
        <hr className="w-full border-[#d6e2ebcc]" />
        <div className="container">
          <FAQ />
        </div>
        <hr className="w-full border-[#d6e2ebcc]" />
      </main>
      <div className="container">
        <Footer
          scrollToFeatures={scrollToFeatures}
          scrollToTestimonials={scrollToTestimonials}
          scrollToHighlights={scrollToHighlights}
          scrollToPricing={scrollToPricing}
          scrollToFAQ={scrollToFAQ}
        />
      </div>
      <Buttons />
    </div>
  );
};

export default App;
