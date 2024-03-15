import Header from "./components/Header";
import Hero from "./components/Hero";
import AuraImage from "./components/AuraImage";
import Features from "./components/Features";

const App = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#CEE5FD] to-[#FFF]">
      <div className="container">
        <div className="h-[70px] w-full pt-5"></div>
        <Header />
        {/* <Hero />
        <AuraImage /> */}
        <Features />
      </div>
    </div>
  );
};

export default App;
