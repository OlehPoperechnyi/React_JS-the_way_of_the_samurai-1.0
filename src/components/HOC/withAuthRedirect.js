import {Redirect} from "react-router";
import React from "react";
import {connect} from "react-redux";

let mapStateToPropForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth}
}

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {

        render() {
            if (!this.props.isAuth) {
                return <Redirect to={"/login"}/>
            } else return <Component {...this.props}/>
        }
    }

    return connect(mapStateToPropForRedirect)(RedirectComponent);
}