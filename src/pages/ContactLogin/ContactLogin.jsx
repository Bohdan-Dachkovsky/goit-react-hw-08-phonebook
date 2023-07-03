import {  Outlet } from "react-router-dom"
import { useDispatch } from "react-redux";
import { login } from "../../redux/operations";
import { useState } from "react";
import formCss from './form.module.css'
const ContactLogin = () => {
  const dispatch = useDispatch()
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const handleSubmit = (e) => {
  const form = e.currentTarget;
  e.preventDefault()
  if (state.email && state.password) {
  dispatch(login({...state}))
  }
  form.reset();
  }
  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };
  
return (
<div>
<form className={formCss.wrapperForm} onSubmit = {handleSubmit}>
      <label>
        Email
        <input
          type="text"
          name="email"
          defaultValue={state.email}
          onChange={handleChange}
          className={formCss.field}
          autoComplete="off"
          required
        />
      </label>
      <label>
        Password 
        <input
          type="text"
          name="password"
          defaultValue={state.password}
          onChange={handleChange}
          className={formCss.field}
          autoComplete="off"
          required
        />
      </label>
      <button type="submit" className={formCss.clickBtn}>Enter</button>
    </form>
<Outlet/>
</div>
    )
}
export default ContactLogin