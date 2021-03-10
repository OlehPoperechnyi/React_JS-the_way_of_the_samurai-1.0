import {connect} from "react-redux";
import {requestUsers, getPageCount, doChangeFollowing} from "../../../redux/users-reducer";
import React from "react";
import style from "./Users.module.css";
import Pagination from "../../Paginators/Pagination";
import UsersList from "./UsersComponents/UsersList";
import Preloader from "../../Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalCount,
    getUsers
} from "../../../redux/users-selectors";
import {getIsAuth} from "../../../redux/auth-selectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage);
    }
    render() {
        return <div>
            {this.props.isFetching ? <Preloader/> : <div className={style.usersAllWrapper}>
                <Pagination totalCount={this.props.totalCount}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            setPageCount={this.props.getPageCount}/>
                <UsersList users={this.props.users}
                           doChangeFollowing={this.props.doChangeFollowing}
                           followingInProgress={this.props.followingInProgress}
                           isAuth={this.props.isAuth}
                />
            </div>}

        </div>;
    }
}

let mapUsersStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
});


export default compose(connect(mapUsersStateToProps,
    {
        requestUsers, getPageCount,
        doChangeFollowing
    })
)(UsersContainer);
