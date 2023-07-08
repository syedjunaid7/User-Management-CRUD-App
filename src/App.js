import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Create from "./pages/Create/Create";
import Dsiplay from "./pages/Display/Dsiplay";
import { useEffect, useState } from "react";

function App() {
  
  const [index, setIndex] = useState();
  const [editC, setEditC] = useState(false);
  const [edit, setEditData] = useState();

  function editList(idMain) {
    setEditC(true);
    setEditData(
      JSON.parse(localStorage.getItem("Data")).filter(
        (item, id) => id === idMain
      )
    );
    setIndex(idMain);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Create
                edit={edit}
                index={index}
                editC={editC}
              />
            }
          />
          <Route path="/display" element={<Dsiplay editList={editList} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
