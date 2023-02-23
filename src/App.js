import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rank from "./pages/Rank";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/rank" element={<Rank />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
