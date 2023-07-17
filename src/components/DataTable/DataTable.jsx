import React, { useState, useEffect } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";


function DataTable({ apiData, handleDelete, handleEdit, isLoading }) {
  const navigate = useNavigate();
  return (
    <div className="table-div">
      <table className="table-lg">
        <thead>
          <th>S.No.</th>
          <th>Name</th>
          <th>MobileNo</th>
          <th>Email</th>
          <th>Action Button</th>
        </thead>
        <tbody>
          {apiData.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.mobileNo}</td>
              <td>{item.email}</td>
              <td style={{ textAlign: "center" }}>
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(item.id)}
                >
                  Edit
                </button>
                <button
                  className="del-btn"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className="table-sm">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>MobileNo</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((item, index) => (
            <React.Fragment key={item.id}>
              <tr
                style={{
                  borderLeft: "1px solid #ccc",
                  borderRight: "1px solid #ccc",
                }}
              >
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.mobileNo}</td>
                <td>{item.email}</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #ccc" }}>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  {/* Assuming you want the buttons in a single cell spanning all columns */}
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>
                  <span
                    style={{ fontWeight: "bold", margin: "3px 15px 3px 8px" }}
                  >
                    Action Button
                  </span>
                  <button
                    className="del-btn"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
                <br />
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
