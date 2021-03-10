import {profileAPI, usersAPI} from "../api/Api";
import {updateObjectInArray} from "../utilities/helpers";

const SET_USERS = 'SET_USERS';
const SET_PAGE_COUNT = 'SET_PAGE_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';
const CHANGE_FOLLOWING = 'CHANGE_FOLLOWING';


let initialState = {
    profileStatus: null,
    profile: null,
    users: [],
    pageSize: 10,
    currentPage: 1,
    totalCount: 0,
    isFetching: false,
    followingInProgress: []
};
//Dispatches

export const setUsers = (users, totalCount) => ({type: SET_USERS, users, totalCount});
export const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setPageCount = (currentPage) => ({type: SET_PAGE_COUNT, currentPage});
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setFollowingInProgress = (userId, followingInProgress) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    userId,
    followingInProgress
});
export const changeFollowing = (userId, following) => ({type: CHANGE_FOLLOWING, userId, following});

//Thunks
export const requestUsers = (currentPage) => async (dispatch) => {

    let data = await usersAPI.getUsers(currentPage);
    dispatch(setUsers(data.items, data.totalCount));


}
export const getUserProfile = (userId) => async (dispatch) => {

    let data = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(data));

}
export const getProfileStatus = (userId) => async (dispatch) => {

    let data = await profileAPI.getStatus(userId);
    dispatch(setProfileStatus(data));

}
export const updateProfileStatus = (status) => async (dispatch) => {

    let response = await profileAPI.updateStatus(status);
    if (response.resultCode === 0) {
        dispatch(setProfileStatus(status));

    }
}
export const getPageCount = (pageCount) => async (dispatch) => {
    dispatch(setPageCount(pageCount));

    let data = await usersAPI.getUsers(pageCount);
    dispatch(setUsers(data.items, data.totalCount));

}
export const doChangeFollowing = (userId, following) => async (dispatch) => {

    dispatch(setFollowingInProgress(userId, true));
    let request = following
        ? await usersAPI.postFollow(userId)
        : await usersAPI.deleteUnfollow(userId);
    if (request.resultCode === 0) {
        dispatch(changeFollowing(userId, following));
    }
    dispatch(setFollowingInProgress(userId, false));
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING: {
            return ({...state, isFetching: action.isFetching});
        }
        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            debugger;
            return ({
                ...state,
                followingInProgress:
                    action.followingInProgress
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => (id !== action.userId))
            });
        }
        case SET_USERS: {
            return ({...state, users: [...action.users], totalCount: action.totalCount});
        }
        case SET_PROFILE_STATUS: {
            return ({...state, profileStatus: action.status});
        }
        case SET_USER_PROFILE: {
            return ({...state, profile: action.profile});
        }
        case SET_PAGE_COUNT: {
            return ({...state, currentPage: action.currentPage});
        }
        case CHANGE_FOLLOWING: {
            return ({
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id" , {followed: action.following})
            });
        }
        default: {
            return {...state};
        }
    }
};

export default usersReducer;