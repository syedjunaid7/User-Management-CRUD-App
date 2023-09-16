import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

function Create() {
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [empty, setEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const submit = () => {
    if (name !== "" && mobileNo !== "" && email !== "") {
      setIsLoading(true);

      axios
        .post("https://64aed895c85640541d4dd114.mockapi.io/user", {
          name,
          email,
          mobileNo,
        })
        .then(() => {
          setName("");
          setMobileNo("");
          setEmail("");
          navigate("/display", { state: { shouldFetchData: true } });
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setEmpty(true);
    }
  };

  return (
    <div className="create-div">
      <h1>Enter User Details</h1>
      <input
        placeholder={empty !== false ? "Empty Field" : "Name"}
        type="text"
        value={name}
        required="required"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder={empty !== false ? "Empty Field" : "Mobile No"}
        type="number"
        value={mobileNo}
        required="required"
        onChange={(e) => setMobileNo(e.target.value)}
      />
      <input
        placeholder={empty !== false ? "Empty Field" : "Email"}
        type="email"
        value={email}
        required="required"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="submit-btn" type="submit" onClick={submit}>
        {isLoading ? (
          <div className="loader">
            Submit
            <ClipLoader size={20} color="white" />
          </div>
        ) : (
          "Submit"
        )}
      </button>
    </div>
  );
}

export default Create;
