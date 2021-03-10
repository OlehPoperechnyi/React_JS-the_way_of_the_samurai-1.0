import style from "./AddItem.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utilities/validators/validators";

const maxLength100 = maxLengthCreator(100);
const maxLength20 = maxLengthCreator(20);
const maxLength5 = maxLengthCreator(5);

const AddItemForm = (props) => {
    return (<div align="center" className={style.addItemWrapper_addForm}>
            <h2>Describe your item</h2>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <div>Product name:
                        <Field name={"productName"}
                               component={Input}
                               type="text"
                               validate={[required, maxLength20]}
                        />

                    </div>
                    <div>Category:
                        <Field name={"productCategory"}
                               component={Input}
                               type="text"
                               validate={[required, maxLength20]}
                        />
                    </div>
                    <div className={style.addItemWrapper_productPrice}>
                        Price:
                        <Field name={"productPrice"}
                               component={Input}
                               type="text"
                               validate={[required, maxLength5]}
                        />
                    </div>
                </div>
                <div className={style.addItemWrapper_productDescription}>
                    Product description: <br/>
                    <Field name={"productDescription"}
                           component={ Textarea }
                           validate={[required, maxLength100]}
                    />
                </div>
                <button className={style.addItemWrapper_addItem}>ADD</button>
            </form>
        </div>
    );
}

const AddItemReduxForm = reduxForm({
    form: 'addItem'
})(AddItemForm);

export default AddItemReduxForm;