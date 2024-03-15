import Header from "./components/Header";
import Hero from "./components/Hero";
import AuraImage from "./components/AuraImage";

const App = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#CEE5FD] to-[#FFF]">
      <div className="container">
        <div className="h-[70px] w-full pt-5"></div>
        <Header />
        <Hero />
        <AuraImage />
      </div>
    </div>
  );
};

export default App;
