import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
