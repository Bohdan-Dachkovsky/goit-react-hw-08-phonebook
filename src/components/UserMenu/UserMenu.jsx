import { useSelector, useDispatch } from "react-redux";
import { getName } from "../../redux/master/selectors.js";
import { logout } from "../../redux/operations.js";
import ErrNotify from '../ErrNotify/ErrNotify.jsx'
import informStyle from "./styled.module.css";
const UserMenu = () => {
  const dispatch = useDispatch();
  const customer = useSelector(getName);
  return (
    <div className={informStyle.userBar.currentUser}>
      <div className={informStyle.userBar}>
        <h1 className={informStyle.mainName}>{!customer ? 
        customer : <ErrNotify/>
        }</h1>
        <button type="button" onClick={() => dispatch(logout())}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserMenu;