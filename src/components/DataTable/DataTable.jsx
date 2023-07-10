import React from "react";
import { Link } from "react-router-dom";

function DataTable({ data, deleteList, delAll, editList }) {
  return (
<>
  {data.length > 0 ? (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="table-cont">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col">S.No.</th>
                  <th scope="col">User Name</th>
                  <th scope="col">Mobile Number</th>
                  <th scope="col">E-Mail</th>
                  <th scope="col">Action Buttons</th>
                </tr>
              </thead>
              <tbody>
                {data.map((data, id) => (
                  <tr key={id}>
                    <th scope="row">{id + 1}</th>
                    <td>{data.userName}</td>
                    <td>{data.mobileNo}</td>
                    <td>{data.email}</td>
                    <td className="align-middle text-center">
                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-sm me-2"
                          onClick={() => deleteList(id)}
                        >
                          Delete
                        </button>
                        <Link to={"/"}>
                          <button
                            type="button"
                            className="btn btn-outline-success btn-sm"
                            onClick={() => editList(id)}
                          >
                            Edit
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-danger"
            onClick={delAll}
          >
            Delete All
          </button>
        </div>
      </div>
    </div>
  ) : (
    <h3 style={{ textAlign: "center", color: "dimgray" }}>NO DATA</h3>
  )}
</>

  );
}

export default DataTable;
