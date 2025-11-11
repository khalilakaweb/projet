import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SuccessNotif from "./components/SuccessNotif";
import ErrorNotif from "./components/ErrorNotif";
import { currentUser } from "./JS/Actions/Authaction";


const NavBar = lazy(() => import("./components/NavBar"));
const MarketPlace = lazy(() => import("./components/MarketPlace"));
const Contact = lazy(() => import("./pages/Contact"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Footer = lazy(() => import("./components/Footer"));
const Home = lazy(() => import("./components/HomePage"));
const Profile = lazy(() => import("./components/Profile"));
const ProductDetails = lazy(() => import("./components/ProductDetails"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

const App = () => {
  const dispatch = useDispatch();

  const businessSuccess = useSelector((state) => state.businessReducer.success);
  const businessErrors = useSelector((state) => state.businessReducer.errors);

  const authSuccess = useSelector((state) => state.AuthReducer.success);
  const authErrors = useSelector((state) => state.AuthReducer.errors);
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(currentUser());
    }
  }, [dispatch]);

  const Loading = () => <div style={{ padding: 16 }}>Loading...</div>;

  return (
    <>
      <NavBar />
      
      {Array.isArray(businessSuccess) &&
        businessSuccess.map((success) => (
          <SuccessNotif key={success.id} success={success} />
        ))}
        
      {Array.isArray(businessErrors) &&
        businessErrors.map((error) => (
          <ErrorNotif key={error.id} error={error} />
        ))}

      {Array.isArray(authSuccess) &&
        authSuccess.map((success) => (
          <SuccessNotif key={success.id} success={success} />
        ))}

      {Array.isArray(authErrors) &&
        authErrors.map((error) => <ErrorNotif key={error.id} error={error} />)}

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/contact" element={<Contact />} />
          {!isAuth && <Route path="/login" element={<Login />} />}
          {!isAuth && <Route path="/register" element={<Register />} />}
          {isAuth && <Route path="/profile" element={<Profile />} />}
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
};

export default App;
