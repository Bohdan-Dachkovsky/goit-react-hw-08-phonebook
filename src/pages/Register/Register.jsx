import { useDispatch } from "react-redux";
import style from "./formStyle.module.css";
import { register } from "../../redux/operations.js";
import { useState } from "react";
const Register = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.name && state.email && state.password) {
      dispatch(register({ ...state }));
    }
    setState({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <form className={style.wrapperForm} onSubmit={handleSubmit}>
        <div className={style.wrapper}>
          <label className={style.wrapperForm}>
            Name
            <input
              type="text"
              name="name"
              value={state.name}
              className={style.field}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </label>
          <label className={style.wrapperForm}>
            Email
            <input
              type="text"
              name="email"
              value={state.email}
              className={style.field}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </label>
          <label className={style.wrapperForm}>
            Password
            <input
              type="text"
              name="password"
              value={state.password}
              className={style.field}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </label>
          <button type="Submit" className={style.clickBtn}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
export default Register;
