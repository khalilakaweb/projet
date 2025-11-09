import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";


import { useDispatch, useSelector } from "react-redux";
import SuccessNotif from "./components/SuccessNotif";
import ErrorNotif from "./components/ErrorNotif";
import { currentUser } from "./JS/Actions/Authaction";

import ScrollToTop from "./components/scrolltotop";

const NavBar = lazy(() => import("./components/NavBar"));

const Marketplace = lazy(() => import("./pages/MarketPlace"));
const Contact = lazy(() => import("./pages/Contact"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Footer = lazy(() => import("./components/Footer"));
const BusinessDescription = lazy(() =>
  import("./components/BusinessDescription")
);

const App = () => {
  const dispatch = useDispatch();

  const businessSuccess = useSelector((state) => state.BusinessReducer.success);
  const businessErrors = useSelector((state) => state.BusinessReducer.errors);

  const authSuccess = useSelector((state) => state.AuthReducer.success);
  const authErrors = useSelector((state) => state.AuthReducer.errors);

  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(currentUser());
    }
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <ScrollToTop />

      {businessSuccess &&
        businessSuccess.map((success) => (
          <SuccessNotif key={success.id} success={success} />
        ))}

      {businessErrors &&
        businessErrors.map((error) => (
          <ErrorNotif key={error.id} error={error} />
        ))}

      {authSuccess &&
        authSuccess.map((success) => (
          <SuccessNotif key={success.id} success={success} />
        ))}

      {authErrors &&
        authErrors.map((error) => <ErrorNotif key={error.id} error={error} />)}

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/contact" element={<Contact />} />

          {!isAuth && <Route path="/login" element={<Login />} />}
          {!isAuth && <Route path="/register" element={<Register />} />}

          {isAuth && <Route path="/profile" element={<Profile />} />}


          <Route
            path="/business_description/:id"
            element={<BusinessDescription />}
          />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
};

export default App;
