import { Outlet } from "react-router-dom"
import {Container, Navigation, Link} from '../../index.js'
import btnStyle from './style.module.css'
const Layout = () => {
return (
    <Container>
      <Navigation>
        <nav className="navigation">
          <li className={btnStyle.linkStyle}>
            <Link to="/">Signup</Link>
            <div className={btnStyle.textLights}></div>
          </li>
          <li className={btnStyle.linkStyle}>
            <Link to="/login">Login</Link>
            <div className={btnStyle.textLights}></div>
          </li>
        </nav>
      </Navigation>
      <main> 
      <Outlet/>
      </main>
    </Container>
    )
}
export default Layout