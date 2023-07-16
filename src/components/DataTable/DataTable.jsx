import React, { useState, useEffect } from "react";
import axios from "axios";

function DataTable({ apiData, handleDelete, handleEdit }) {
  return (
    <div className="table-div">
     <table>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Name</th>
          <th>MobileNo</th>
          <th>Email</th>
          <th>Action Button</th>
        </tr>
      </thead>
      <tbody>
        {apiData.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.mobileNo}</td>
            <td>{item.email}</td>
            <td>
              <button className="edit-btn" onClick={() => handleEdit(item.id)}>Edit</button>
              <button className="del-btn" onClick={() => handleDelete(item.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
   
  );
}

export default DataTable;
