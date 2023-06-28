import { Link, Outlet } from "react-router-dom"

const ContactLogin = () => {
return (
<div>
<Link to ='/contacts'></Link>
<Outlet/>
</div>
    )
}
export default ContactLogin