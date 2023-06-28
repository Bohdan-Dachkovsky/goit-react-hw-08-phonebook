import { Link, Outlet } from "react-router-dom"

const ContactLogin = () => {
return (
<div>
<Link to ='/contacts'>Phonebook acc</Link>
<Outlet/>
</div>
    )
}
export default ContactLogin