import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

let mapDialogsStateToProps = (state) => {
    return {
        dialogs: state.dialogs
    };
};

export default compose(
    connect(mapDialogsStateToProps, {}),
    withAuthRedirect
)(Dialogs);