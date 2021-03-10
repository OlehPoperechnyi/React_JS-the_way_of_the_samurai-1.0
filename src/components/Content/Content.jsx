import content from './Content.module.css';
import Categories from './Home/Categories';
import {Route} from "react-router-dom";
import UsersContainer from "./Users/UsersContainer";
import UserProfileContainer from "./UserProfile/UserProfileContainer";
import LoginContainer from "./Login/LoginContainer";
import React from "react";
import {withReactSuspense} from "../HOC/withSuspense";
const DialogsContainer = React.lazy(() => import('./Requests/DialogsContainer'));
const AddItemContainer = React.lazy(() => import('./AddItem/AddItemContainer'));
const Settings = React.lazy(() => import('./Settings/Settings'));
const MyItemsContainer = React.lazy(() => import('./MyItems/MyItemsContainer'));


const Content = (props) => {

    return (
        <div className={content.ContentWrapper}>
            <Route path="/categories" render={
                () => <Categories />

            }/>
            <Route path="/dialogs" render={ withReactSuspense(DialogsContainer) }/>
            <Route path="/addItems" render={ withReactSuspense(AddItemContainer) }/>
            <Route path="/myItems" render={ withReactSuspense(MyItemsContainer) }/>
            <Route path="/settings" render={ withReactSuspense(Settings) }/>
            <Route path="/users" render={
                () => <UsersContainer/>
            }/>
            <Route path="/user/:userId" render={
                () => <UserProfileContainer />
            }/>
            <Route path="/login" render={
                () => <LoginContainer />
            }/>
        </div>
    );
}

export default Content;