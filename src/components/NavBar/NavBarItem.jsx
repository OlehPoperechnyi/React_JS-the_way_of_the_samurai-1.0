import classes from "./NavBar.module.css";
import {NavLink} from "react-router-dom";


const NavBarItem = ({link, styleClass = "", ...props}) => {
    return <NavLink to={link}
                    activeClassName={classes.active}
                    className={`${classes.item} ${styleClass}`}>
        {props.children}
    </NavLink>
}

export default NavBarItem;