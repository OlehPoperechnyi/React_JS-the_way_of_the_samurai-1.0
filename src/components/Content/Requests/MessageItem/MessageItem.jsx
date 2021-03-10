import style from "./MessageItem.module.css";


const MessageItem = (props) => {
    return (
        <div className={style.messageWrapper}>
            <div className={style.messageWrapper_message}>{props.message}</div>
        </div>
    );
};

export default MessageItem;