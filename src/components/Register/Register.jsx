import { useDispatch } from 'react-redux';
import style from './formStyle.module.css'
import { register } from '../../redux/operations.js';
import {useState} from 'react';
const Register = () => {
  const dispatch = useDispatch() 
  const [state, setState] = useState({
    name: '',
    number: '',
    password: '',
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(register({...state}))
    setState({
      name: '',
      number: '',
    })
  };
return (
    <div>
<form className={style.wrapperForm} onSubmit ={handleSubmit}>
      <label className={style.wrapperForm}>
        Name&nbsp;
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
        Email &nbsp;
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
        Password &nbsp;
        <input
          type="text"
          name="password"
          value= {state.password}
          className={style.field}
          onChange = {handleChange}
          autoComplete="off"
          required
        />
      </label>
      <button type="Submit" className={style.clickBtn}>Register</button>
      </form>
    </div>
    )
}
export default Register