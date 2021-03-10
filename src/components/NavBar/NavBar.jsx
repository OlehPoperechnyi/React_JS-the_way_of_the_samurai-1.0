import classes from './NavBar.module.css';
import NavBarItem from "./NavBarItem";

let NavBar = () => {
    return (
        <div className={classes.navBar}>
            <div className={classes.navBarItems}>
                <NavBarItem link={"/categories"}>HOME</NavBarItem>
                <NavBarItem link={"/dialogs"}>Request</NavBarItem>
                <NavBarItem link={"/addItems"} styleClass={`${classes.addItem}`}>ADD</NavBarItem>
                <NavBarItem link={"/myItems"}>MyItems</NavBarItem>
                <NavBarItem link={"/settings"}>Settings</NavBarItem>
                <NavBarItem link={"/users"}>Users</NavBarItem>
            </div>
        </div>
    );
}

export default NavBar;