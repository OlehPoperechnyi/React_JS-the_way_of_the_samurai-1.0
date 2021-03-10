import style from "../Users.module.css";
import Image from "../../../Images/Image";
import {NavLink} from "react-router-dom";
import FollowingButton from "./FollowingButton";

const UsersItem = ({user, ...props}) => {
    return <div className={style.usersItem} key={user.id}>

        <NavLink to={`/user/` + user.id}>
            <Image imageLink={user.photos.large}/>
        </NavLink>

        <div className={style.subscription}>
            {props.isAuth
            && <FollowingButton followed={user.followed} userId={user.id}
                                followingInProgress={props.followingInProgress}
                                doChangeFollowing ={props.doChangeFollowing}/>
            }
        </div>

        <div className={style.description}>
            <div>
                {user.name}
            </div>
            <div>
                {user.status}
            </div>
        </div>


    </div>
};
export default UsersItem;