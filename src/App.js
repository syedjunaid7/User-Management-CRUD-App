import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Create from "./pages/Create/Create";
import Dsiplay from "./pages/Display/Dsiplay";
import Update from "./pages/Update/Update";
import PopUp from "./pages/Display/PopUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/display" element={<Dsiplay />} />
          <Route path="/update/:id" element={<Update/>}/>
          <Route path="/popup" element={<PopUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
