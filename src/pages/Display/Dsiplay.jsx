import React, { useEffect, useState } from "react";
import DataTable from "../../components/DataTable/DataTable";
import axios from "axios";
import RingLoader from "react-spinners/RingLoader";
import { useNavigate } from "react-router-dom";
import PopUp from "./PopUp";

function Display() {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [delCnfrm, setDelCnfrm] = useState(false);
  const [id, setId] = useState()
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://64aed895c85640541d4dd114.mockapi.io/user")
      .then((res) => {
        setApiData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  };

  const handleDelete = (id) => {
    setDelCnfrm(true)
    setId(id)
  };
  const handleEdit = (id) => {
    navigate(`/update/${id}`);
  };
  return (
    <div className="table-cont">

      {isLoading ? (
        <div className="cont-load">
          <RingLoader size={100} color="#131c9c" />
        </div>
      ) : apiData.length === 0 ? (
        <div className="no-data">
          <h1>No Data</h1>
          <button className="create-btn" onClick={() => navigate("/")}>
            Create
          </button>
        </div>
      ) : (
        <div className="container-main">
          <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
            USER DETAILS
          </h1>
          <div className="top">
            <button className="create-btn" onClick={() => navigate("/")}>
              Create
            </button>
    {delCnfrm ? <PopUp id={id} setDelCnfrm={setDelCnfrm} setIsLoading={setIsLoading} setApiData={setApiData} apiData={apiData}/> : ''}

          </div>
          <DataTable
          isLoading={isLoading}
            apiData={apiData}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
          
        </div>
      )}
    </div>
  );
}

export default Display;
