import Image from "../../Images/Image";
import style from "./UserProfile.module.css";
import Preloader from "../../Preloader/Preloader";
import UserDescription from "./UserProfileComponents/UserDescription";
import UserStatusWithHooks from "./UserProfileComponents/UserStatusWithHooks";


let UserProfile = (props) => {
    let contacts = [];
    if (!props.profile) {
        return <Preloader/>
    }
    let obj = props.profile.contacts;
    for (let key in obj) {
        if (obj[key]) {
            contacts.push(obj[key]);
        }
    }
    return <div className={style.userItemWrapper}>
        <div className={style.userItemWrapper_userImage}>
            <Image imageLink={props.profile.photos.large}/>
        </div>

        <div className={style.userItemWrapper_userDescription}>
            <UserDescription description={`${props.profile.aboutMe}`}/>
        </div>
        <div className={style.userItemWrapper_userStatus}>
            {(props.myId == props.match.params.userId)
                ? <UserStatusWithHooks status={props.profileStatus}
                              updateStatus={props.updateProfileStatus}/>
                : <span>{props.profileStatus}</span>
            }
        </div>


        <div className={style.userItemWrapper_userContacts}>
            {contacts.map((item) => {
                return <div className={style.userItemWrapper_userContacts_social}>{item}</div>
            })}
        </div>

        <div className={style.userItemWrapper_userFullName}>
            {props.profile.fullName}
        </div>


        <div className={style.userItemWrapper_userJobInformation}>
            {props.profile.lookingForAJobDescription}
        </div>

        <div className={style.userItemWrapper_userLocation}>
            GOOGLE MAP
        </div>
        <div className={style.userItemWrapper_userPartners}>
            PARTNERS
        </div>
        <div className={style.userItemWrapper_userGoods}>
            GOODS
        </div>

    </div>;
}

export default UserProfile;