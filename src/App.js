import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
// import Fade from "react-reveal";
function App() {
  return (
    <div className="App">
      <Header />

      <Home />
      <Footer />
      {/* "react-reveal":"1.2.2", */}
    </div>
  );
}

export default App;
