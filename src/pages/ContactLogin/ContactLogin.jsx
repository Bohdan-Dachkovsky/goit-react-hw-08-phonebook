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
  e.preventDefault()
  if (state.name && state.number) {
  dispatch(login({...state}))
  setState({
    email: '',
    password: '',
  })
  }
  }
  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };
  
return (
<div>
<form className={formCss.wrapperForm} onSubmit = {handleSubmit}>
      <label >
        Email&nbsp;
        <input
          type="text"
          name="email"
          value={state.email}
          onChange={handleChange}
          className={formCss.field}
          autoComplete="off"
          required
        />
      </label>
      <label>
        Password &nbsp;
        <input
          type="text"
          name="password"
          value={state.password}
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