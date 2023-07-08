import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./pages/Create/Create";
import Dsiplay from "./pages/Display/Dsiplay";
import { useEffect, useState } from "react";

function App() {
  const [edit, setEditData] = useState();

  const [userName, setUserName] = useState(
    edit === undefined ? null : edit[0].userName
  );
  const [mobileNo, setMobileNo] = useState(
    edit === undefined ? null : edit[0].mobileNo
  );
  const [email, setEmail] = useState(edit === undefined ? null : edit[0].email);

  const [index, setIndex] = useState();
  const [editC, setEditC] = useState(false);

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
                userName={userName}
                mobileNo={mobileNo}
                email={email}
                setUserName={setUserName}
                setMobileNo={setMobileNo}
                setEmail={setEmail}
              />
            }
          />
          <Route
            path="/display"
            element={
              <Dsiplay
                editList={editList}
                setUserName={setUserName}
                setMobileNo={setMobileNo}
                setEmail={setEmail}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
