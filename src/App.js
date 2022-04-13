import React from "react";
import Giphy from "./Components/Giphy.js";

const App = () => {
  const onSearch = async (text) => {};
  return (
    <div className="App">
      <Giphy onSearch={onSearch} />
    </div>
  );
};

export default App;
