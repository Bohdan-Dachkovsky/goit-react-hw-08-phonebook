import { Outlet } from "react-router-dom"
import UserMenu from '../UserMenu/UserMenu'
const ContactLogin = () => {
return (
<div>
<UserMenu/>
<Outlet/>
</div>
    )
}
export default ContactLogin