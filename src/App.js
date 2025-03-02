import Header from "./components/Header";
import Banner from "./components/Banner";
import Offers from "./components/Offers";
import Info from "./components/Info";
import Footer from "./components/Footer";

import "./App.scss";

function App() {
  return (
    <div className="container">
      <Header />
      <Banner />
      <Offers />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
