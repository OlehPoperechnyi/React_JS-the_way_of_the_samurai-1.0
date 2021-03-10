import {connect} from "react-redux";
import MyItems from "./MyItems";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


let mapMyItemsStateToProps = (state) => {
    return {
        items: state.items
    };
};

const MyItemsContainer = compose(
    connect(mapMyItemsStateToProps, {}),
    withAuthRedirect
)(MyItems)

export default MyItemsContainer;