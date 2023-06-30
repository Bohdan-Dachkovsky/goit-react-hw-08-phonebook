import {  Outlet } from "react-router-dom"
import { useDispatch } from "react-redux";
import { login } from "../../redux/operations";
import { useState } from "react";
import formCss from './form.module.css'
const ContactLogin = () => {
  const dispatch = useDispatch()
  const [state, setState] = useState({
    name: '',
    number: '',
  });
  const handleSubmit = (e) => {
  e.preventDefault()
  if (state.name && state.number) {
  dispatch(login(state))
  setState({
    name: '',
    number: '',
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
        Name&nbsp;
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          className={formCss.field}
          autoComplete="off"
          required
        />
      </label>
      <label>
        Email &nbsp;
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
      <button type="submit" className={formCss.clickBtn}>Enter</button>
    </form>
<Outlet/>
</div>
    )
}
export default ContactLogin