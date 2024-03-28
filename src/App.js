import React, { useState } from "react";

import "./App.css";
import MyLocation from "./myLocation";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <MyLocation />
      </div>
    </React.Fragment>
  );
}

export default App;