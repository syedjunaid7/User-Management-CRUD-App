import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { useNavigate } from "react-router-dom";

function Create({ edit, index, editC}) {
  const [error, setError] = useState("");
  const [userName, setUserName] = useState(
    edit === undefined ? null : edit[0].userName
  );
  const [mobileNo, setMobileNo] = useState(
    edit === undefined ? null : edit[0].mobileNo
  );
  const [email, setEmail] = useState(edit === undefined ? null : edit[0].email);

  const navigate = useNavigate();

  function userData(e) {
    setUserName(e.target.value);
  }
  function NumData(e) {
    setMobileNo(e.target.value);
  }
  function emailData(e) {
    setEmail(e.target.value);
  }

  function submit(e) {
    e.preventDefault();

    if (userName === null && mobileNo === null && email == null) {
      setError("empty");
    } else {
      const savedData = JSON.parse(localStorage.getItem("Data"));
      if (editC) {
        const savedData = JSON.parse(localStorage.getItem("Data"));
        savedData[index] = {
          userName: userName,
          mobileNo: mobileNo,
          email: email,
        };
        localStorage.setItem("Data", JSON.stringify([...savedData]));
      } else {
        if (savedData) {
          localStorage.setItem(
            "Data",
            JSON.stringify([
              ...savedData,
              { userName: userName, mobileNo: mobileNo, email: email },
            ])
          );
        } else {
          localStorage.setItem(
            "Data",
            JSON.stringify([
              { userName: userName, mobileNo: mobileNo, email: email },
            ])
          );
        }
      }
      navigate("/display");
    }
  }
  return (
    <div className="container d-flex justify-content-center flex-column align-items-center">
      <h1 className="mb-4">User Details</h1>
      <div className="row">
        <div className="col-12">
          <form>
            <div className="mb-4">
              <input
                placeholder={error !== "" ? error : "User Name"}
                onChange={userData}
                type="text"
                className="form-control"
                id="exampleInputUserName"
                value={userName}
              />
            </div>
            <div className="mb-4">
              <input
                placeholder={error !== "" ? error : "Mobile No"}
                onChange={NumData}
                type="number"
                className="form-control"
                id="exampleInputMobileNumber"
                value={mobileNo}
              />
            </div>
            <div className="mb-4">
              <input
                placeholder={error !== "" ? error : "E-Mail"}
                onChange={emailData}
                type="email"
                className="form-control"
                id="exampleInputEmail"
                value={email}
              />
            </div>
            <div className="d-flex justify-content-center flex-column align-items-center">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={submit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
