import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import React from "react";

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => ({
        id: state.auth.id,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    })


export default connect(mapStateToProps, { logout })(HeaderContainer);