import style from './formStyle.module.css'
const Register = () => {
return (
    <div>
<form className={style.wrapperForm}>
      <label className={style.wrapperForm}>
        Name&nbsp;
        <input
          type="text"
          name="email"
          className={style.field}
          autoComplete="off"
          required
        />
      </label>
      <label className={style.wrapperForm}>
        Email &nbsp;
        <input
          type="text"
          name="email"
          className={style.field}
          autoComplete="off"
          required
        />
      </label>
      <label className={style.wrapperForm}>
        Password &nbsp;
        <input
          type="text"
          name="password"
          className={style.field}
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