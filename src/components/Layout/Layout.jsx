import { Outlet } from "react-router-dom"
import {Container, Header, Navigation, Link} from '../index.js'
import { useSelector } from "react-redux"
import blockCSS from './style.module.css'
import {isLoggedin, getActive} from '../../redux/master/selectors.js'

import UserMenu from '../UserMenu/UserMenu.jsx'
import ErrNotify from '../ErrNotify/ErrNotify.jsx'
const Layout = () => {
  const isVerify= useSelector(isLoggedin)
  const isActive = useSelector(getActive)
return (
    <Container>
     <Header>
     <Navigation>
          <li className={blockCSS.homeStyle}>
            <Link to = "/">Home</Link>
          </li>
          <li className={blockCSS.homeStyle}>
          {isActive ? <Link to ='/contacts'>Open Phonebook </Link> : <ErrNotify/> }
          </li>
        
      </Navigation>
      {isVerify ? <UserMenu/> :  <div className={blockCSS.elementSet}><li className={blockCSS.toggleLink}>
            <Link to="/register">Signup</Link>
          </li>
          <li className={blockCSS.toggleLink}>
            <Link to="login">Login</Link>
          </li></div>}
      
     </Header>
    
      <main className = {blockCSS.container}> 
      <Outlet/>
  
      </main>

    </Container>
    )
}
export default Layout