import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Loader from "./components/loader/Loader";
import Products from "./components/Product/Products";
import Searchproduct from "./components/SearchProduct/Searchproduct";
import Productdetails from "./components/Product/Productdetails";
import Footer from "./components/footer/Footer";
import LoginReg from "./components/loginsignup/LoginReg";
import Account from "./components/Account/Account.js";
import { useSelector, useDispatch } from "react-redux";
import store from "./store";
import { useEffect } from "react";
import { loadUser } from "./actions/userActions";
import UserOptions from "./components/UserOptions/Useroptions.js";
function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  console.log("------------", isAuthenticated);
  useEffect(() => {
    store.dispatch(loadUser());
  },[dispatch]);
  return (
    <>
      <Router>
        <Header />
        {isAuthenticated && <UserOptions user={user} />}
        <div className="abcd">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          {
            console.log("====================",user)
          }
          <Routes>
            <Route path="/products" element={<Products />} />
          </Routes>
          <Routes>
            <Route path="/products/:keyword" element={<Products />} />
          </Routes>
          <Routes>
            <Route path="/product/:id" element={<Productdetails />} />
          </Routes>
          <Routes>
            <Route exact path="/search" element={<Searchproduct />} />
          </Routes>
          <Routes>
            <Route exact path="/login" element={<LoginReg />} />
          </Routes>
          <Routes>
            <Route exact path="//account" element={<Account />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}


export default App;

