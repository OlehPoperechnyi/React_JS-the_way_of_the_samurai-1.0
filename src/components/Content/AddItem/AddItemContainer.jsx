import { addItemActionCreator } from "../../../redux/addItem-reducer";
import AddItem from "./AddItem";
import { connect } from "react-redux";
import { reset } from "redux-form";


const mapAddItemStateToProps = (state) => {
    return {
        items: state.items.AddItemPage
    };
};
const mapAddItemDispatchToProps = (dispatch) => {
    return {
        addNewItem: (obj) => {
            dispatch(addItemActionCreator(obj));
            dispatch(reset('addItem'));
        }
    };
};


const AddItemContainer = connect(mapAddItemStateToProps, mapAddItemDispatchToProps)(AddItem);

export default AddItemContainer;