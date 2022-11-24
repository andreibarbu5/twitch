import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-[#f7f7f8]  ">
      {/* Navbar */}
      <Navbar />
      <div className="flex ">
        {/* Sidebar */}
        <Sidebar />
        {/* Main */}
        <Main />
      </div>
    </div>
  );
}

export default App;
