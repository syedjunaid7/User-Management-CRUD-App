import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`https://64aed895c85640541d4dd114.mockapi.io/user/${id}`)
      .then((res) => {
        const userData = res.data;
        setName(userData.name);
        setMobileNo(userData.mobileNo);
        setEmail(userData.email);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const submit = () => {
    setIsLoading(true);
    axios
      .put(`https://64aed895c85640541d4dd114.mockapi.io/user/${id}`, {
        name,
        email,
        mobileNo,
      })
      .then(() => {
        navigate('/display', { state: { shouldFetchData: true } });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false); 
      });
  };

  return (
    <div className="edit-div">
      <h1>Edit User Details</h1>
      <input
        placeholder="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Mobile No"
        type="number"
        value={mobileNo}
        onChange={(e) => setMobileNo(e.target.value)}
      />
      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="submit-btn" type="submit" onClick={submit}>
      {isLoading ? (
          <div className="loader">
            Update
            <ClipLoader size={20} color="white" />
          </div>
        ) : (
          "Update"
        )}
      </button>
    </div>
  );
}

export default Update;
