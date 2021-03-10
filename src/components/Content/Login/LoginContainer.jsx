import * as React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {getCaptcha, login, logout} from "../../../redux/auth-reducer";

class LoginContainer extends React.Component {
    componentDidMount() {
        this.props.getCaptcha();
    }

    render() {
        return <Login login={this.props.login} {...this.props}/>;
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        id: state.auth.id,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps,{
    login,
    logout,
    getCaptcha
})(LoginContainer)