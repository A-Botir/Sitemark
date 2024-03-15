import Header from "./components/Header";

const App = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#CEE5FD] to-[#FFF]">
      <div className="container">
        <div className="h-[70px] w-full pt-5"></div>
        <Header />
      </div>
    </div>
  );
};

export default App;
