import style from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={style.dialog}>
            <NavLink to={path} activeClassName={style.active} className={style.dialog_link}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;