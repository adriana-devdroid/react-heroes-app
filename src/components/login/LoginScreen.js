import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import useForm from "../../hooks/useForm";
import { types } from "../../types/types";

const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);
  const [formValues, handleInputChange] = useForm({
    userName: "",
  });

  const { userName } = formValues;
  const handleLogin = () => {
    const lasthPath = localStorage.getItem("lastpath") || "/";

    const action = {
      type: types.login,
      payload: {
        name: userName,
      },
    };

    dispatch(action);
    history.replace(lasthPath);
  };
  return (
    <div className="container mt-5">
      <h1> Login As</h1>
      <input
        className='form-control-lg'
        type="text"
        value={userName}
        onChange={handleInputChange}
        placeholder="Your Name"
        name="userName"
      />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
