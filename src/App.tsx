import React from "react";
import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";

// redux
import store from "./redux/store";

// Components
import AuthRoute from "./components/AuthRoute/AuthRoute";
import Header from "./components/Header/Header";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
import Toast from "./components/Toast/Toast";

// Pages
import Admin from "./pages/Admin/Admin";
import Checkout from "./pages/Checkout/Checkout";
import Console from "./pages/Console/Console";
import Dashboard from "./pages/Dashboard/Dashboard";

import Payment from "./pages/Payment/Payment";

// styles
import { globalTheme } from "./util/globalTheme";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={globalTheme}>
          <CssBaseline />

          <Header />
          <Navbar />
          <LoadingSpinner />
          <Toast />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="admin" element={<Admin />} />
            {/* <Route path="checkout" element={<Checkout />} /> */}
            <Route path="checkout" element={<Payment />} />
            <Route
              path="console"
              element={
                <AuthRoute>
                  <Console />
                </AuthRoute>
              }
            />
          </Routes>

          {/* <Footer /> */}
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
