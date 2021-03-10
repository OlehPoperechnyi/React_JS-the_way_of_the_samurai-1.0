import style from './App.module.css';
import NavBar from './components/NavBar/NavBar';
import Content from './components/Content/Content';
import HeaderContainer from "./components/Header/HeaderContainer";
import React from "react";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Preloader/Preloader";
import {compose} from "redux";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (this.props.initialized) {
        return (
            <div className={style.AppWrapper}>
                <div className={style.AppWrapper_header}>
                    <HeaderContainer/>
                </div>
                <div className={style.AppWrapper_content}>
                    <Content/>
                </div>
                <div className={style.AppWrapper_nav}>
                    <NavBar/>
                </div>

            </div>
        );} else return <Preloader />
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    connect(mapStateToProps, {initializeApp})
)(App);
