import React from "react";
import UserProfile from "./UserProfile";
import Preloader from "../../Preloader/Preloader";
import {connect} from "react-redux";
import {
    getProfileStatus,
    getUserProfile,
    setIsFetching,
    setUserProfile,
    updateProfileStatus
} from "../../../redux/users-reducer";
import {withRouter} from "react-router";
import {compose} from "redux";


class UserProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = this.props.myId;
        this.props.getUserProfile(userId);
        this.props.getProfileStatus(userId);
    }
    render() {

        return <div>
            {this.props.isFetching ? <Preloader />
            : <UserProfile {...this.props} />}
        </div>;
    }
}


let mapUserStateToProps = (state) => {
    return {
        myId: state.auth.id,
        profileStatus: state.users.profileStatus,
        profile: state.users.profile,
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalCount: state.users.totalCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching
    };
};


export default compose(
    connect(mapUserStateToProps,{
        setUserProfile,
        setIsFetching,
        getUserProfile,
        getProfileStatus,
        updateProfileStatus
    }),
    withRouter
)(UserProfileContainer);