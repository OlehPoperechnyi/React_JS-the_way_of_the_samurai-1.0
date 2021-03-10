import style from './Header.module.css';
import SearchBar from "./SearchHeader/Search";
import AuthInfoBar from "./AuthInfo/AuthInfoBar";

const Header = ({isAuth, id, login, ...props}) => {
    return (
        <div className={style.header}>
            <div>
                LOGO
            </div>
            <div>
                <SearchBar />
            </div>
            <div>
                <AuthInfoBar isAuth={isAuth} id={id} login={login} logout={props.logout}/>
            </div>
        </div>
    );
}

export default Header;