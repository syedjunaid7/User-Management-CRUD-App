import React, {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import DataTable from "../../components/DataTable/DataTable";

function Dsiplay({ editList}) {
  const [data, setSavedData] = useState([]);

  useEffect(() => {
    setSavedData(JSON.parse(localStorage.getItem("Data")));
  },[]);
  const navigate = useNavigate();

  function deleteList(index) {
    const filter = data.filter((i, id) => id !== index);
    localStorage.setItem("Data", JSON.stringify(filter));
    setSavedData(filter);
  }
  function delAll() {
    setSavedData([]);
    localStorage.clear();
  }
  function previous() {
    navigate(-1);
  }
  return (
    <div class="container">
      <div className="top" onClick={previous}>
        <IoMdArrowRoundBack className="back"/>
        <span>Previos Page</span>
      </div>
      <DataTable data={data} delAll={delAll} deleteList={deleteList} editList={editList}/>
    </div>
  );
}

export default Dsiplay;
