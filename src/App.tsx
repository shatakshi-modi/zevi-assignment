import React from "react";
import "./styles.scss";
import Content from "./components/Content";

const App = () => {
  return (
    <div className="app-wrap">
      <div className="app-content">
        <Content />
      </div>
    </div>
  );
};

export default App;
