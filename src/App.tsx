import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";

// redux
import store from "./redux/store";

// Components
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

// Pages
import Admin from "./pages/Admin/Admin";
import Checkout from "./pages/Checkout/Checkout";
import Dashboard from "./pages/Dashboard/Dashboard";

// styles
import { globalTheme } from "./util/globalTheme";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={globalTheme}>
          <Header />
          <Navbar />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="admin" element={<Admin />} />
            <Route path="checkout" element={<Checkout />} />
          </Routes>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
