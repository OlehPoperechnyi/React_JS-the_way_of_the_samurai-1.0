import style from './NewMessage.module.css';
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utilities/validators/validators";
import {Textarea} from "../../../FormsControls/FormsControls";

const maxLength30 = maxLengthCreator(30);

const NewMessageForm = (props) => {
    return (
        <form className={style.newMessageWrapper} onSubmit={props.handleSubmit}>
            <div>
                <Field autoFocus={true}
                       name={"message"}
                       placeholder={"Input your message..."}
                       component={ Textarea }
                       validate={[maxLength30]}
                />
            </div>
            <button className={style.newMessageWrapper_sentMessage}>send</button>
        </form>
    );
}


const NewMessageReduxForm = reduxForm({
    form: 'newMessage'
})(NewMessageForm);


const NewMessage = (props) => {
    const onSubmit = (formData) => {
        props.updateNewMessage(formData.message);
    }

    return <NewMessageReduxForm onSubmit={onSubmit}/>
}

export default NewMessage;