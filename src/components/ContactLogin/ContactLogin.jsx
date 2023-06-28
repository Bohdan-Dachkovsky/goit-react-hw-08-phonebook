import { Link, Outlet } from "react-router-dom"
import formCss from './form.module.css'
const ContactLogin = () => {
return (
<div>
<form className={formCss.wrapperForm}>
      <label>
        Name&nbsp;
        <input
          type="text"
          name="email"
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
          className={formCss.field}
          autoComplete="off"
          required
        />
      </label>
      <button type="submit" className={formCss.clickBtn}>Enter</button>
    </form>
<Link to ='/contacts'>Phonebook acc</Link>
<Outlet/>
</div>
    )
}
export default ContactLogin