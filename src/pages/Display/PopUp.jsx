import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PopUp({
  id,
  setIsLoading,
  setApiData,
  setDelCnfrm,
  apiData,
}) {
  const navigate = useNavigate();

  function yes() {
    setIsLoading(true);
    console.log(id);
    axios
      .delete(`https://64aed895c85640541d4dd114.mockapi.io/user/${id}`)
      .then((res) => {
        console.log("Item deleted successfully.");
        const updatedData = apiData.filter((item) => item.id !== id);
        setApiData(updatedData);
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      })
      .finally(() => {
        setIsLoading(false);
        setDelCnfrm(false);
      });
  }
  function no() {
    setDelCnfrm(false);
    navigate("/display");
  }
  return (
    <div className="pop-main">
      <div className="pop-div">
        <h5>Are u sure ?</h5>
        <div>
          <button className="yes" onClick={yes}>Yes</button>
          <button className="no" onClick={no}>No</button>
        </div>
      </div>
    </div>
  );
}
