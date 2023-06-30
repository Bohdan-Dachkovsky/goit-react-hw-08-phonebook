import { Outlet } from "react-router-dom"
import {Container, Header, Navigation, Link} from '../index.js'
import blockCSS from './style.module.css'
import {isLoggedin, getActive} from '../../redux/master/selectors.js'
import Collection from "../../pages/Collection/Collection.jsx"
import UserMenu from '../UserMenu/UserMenu.jsx'
import ErrNotify from '../ErrNotify/ErrNotify.jsx'
const Layout = () => {
return (
    <Container>
     <Header>
     <Navigation>
          <li className={blockCSS.homeStyle}>
            <Link to = "/">Home</Link>
          </li>
          {/* <li className={blockCSS.homeStyle}>
            <Link to = "/">Home</Link>
          </li> */}
          <li className={blockCSS.linkStyle}>
            <Link to="/register">Signup</Link>
          </li>
          <li className={blockCSS.linkStyle}>
            <Link to="login">Login</Link>
          </li>
      </Navigation>
      {isLoggedin ? <UserMenu/> : <Collection/>}
      {getActive ? <Link to ='/contacts'>Phonebook acc</Link> : <ErrNotify/> }
     </Header>
    
      <main className = {blockCSS.container}> 
      <Outlet/>
      </main>
    </Container>
    )
}
export default Layout