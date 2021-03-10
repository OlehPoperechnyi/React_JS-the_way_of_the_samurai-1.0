import {addMessageActionCreator} from './../../../../redux/requestsPage-reducer';
import NewMessage from "./NewMessage";
import {connect} from "react-redux";
import {reset} from "redux-form";


let mapStateToProps = (state) => {
    return {

    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (newText) => {
            dispatch(addMessageActionCreator(newText));
            dispatch(reset('newMessage'));
        }
    };
};

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);
export default NewMessageContainer;