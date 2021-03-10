import UsersItem from "./UsersItem";
import style from "../Users.module.css";

let UsersList = (props) => {
    return <div className={style.usersListWrapper}>
        { props.users.map(u => <UsersItem {...props} user={u}/>) }
    </div>
}

export default UsersList;