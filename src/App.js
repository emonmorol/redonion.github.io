import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Cart from "./Pages/Cart/Cart";
import BreakFast from "./Pages/Home/BreakFast/BreakFast";
import Lunch from "./Pages/Home/Lunch/Lunch";
import Dinner from "./Pages/Home/Dinner/Dinner";
import NotFound from "./Pages/NotFound/NotFound";
// import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/home/breakfast" element={<BreakFast />} />
          <Route path="/home/lunch" element={<Lunch />} />
          <Route path="/home/dinner" element={<Dinner />} />
        </Route>
        <Route path="/home/*" element={<Home></Home>}>
          <Route path="breakfast" element={<BreakFast />} />
          <Route path="lunch" element={<Lunch />} />
          <Route path="dinner" element={<Dinner />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
