import style from "../Header.module.css";
import {NavLink} from "react-router-dom";

const AuthInfoBar = ({isAuth, id, login, logout}) => {
    return <div className={style.header_login}>
        {(isAuth)
            ? (<div>
                <div><NavLink to={`/user/` + id}>{login}</NavLink></div>
                <div><NavLink to="/login" onClick={() => logout()}>LOGOUT</NavLink></div>
            </div>)
            : <NavLink to="/login">LOGIN</NavLink>
        }
    </div>
}

export default AuthInfoBar;