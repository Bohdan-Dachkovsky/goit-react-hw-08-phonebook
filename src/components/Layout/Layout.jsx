import { Outlet } from "react-router-dom"
import {Container, Navigation, Link} from '../index.js'
import blockCSS from './style.module.css'
const Layout = () => {
return (
    <Container>
      <Navigation>
        <nav className={blockCSS.navigation}>
          <li className={blockCSS.homeStyle}>
            <Link to = "/">Home</Link>
          </li>
          <li className={blockCSS.linkStyle}>
            <Link to="/register">Signup</Link>
          </li>
          <li className={blockCSS.linkStyle}>
            <Link to="login">Login</Link>
          </li>
        </nav>
      </Navigation>

      <main className = {blockCSS.container}> 
      <Outlet/>
      </main>
    </Container>
    )
}
export default Layout