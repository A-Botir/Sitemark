import Header from "./components/Header";
import Hero from "./components/Hero";
import AuraImage from "./components/AuraImage";
import Brends from "./components/Brends";
import Features from "./components/Features";

const App = () => {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-b from-[#CEE5FD] to-[#FFF]">
        <div className="container">
          <div className="h-[70px] w-full pt-5"></div>
          <Header />
          <Hero />
        </div>
      </div>
      <main className="container">
        <AuraImage />
        <Brends />
        <Features />
      </main>
    </div>
  );
};

export default App;
