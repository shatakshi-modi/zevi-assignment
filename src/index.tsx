import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SearchPage from "./components/SearchPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import "./styles.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/search" element={<ProductPage />} />
        </Routes>
      </React.StrictMode>
    </Router>
  </Provider>
);
