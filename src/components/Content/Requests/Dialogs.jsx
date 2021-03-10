import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import NewMessageContainer from './NewMessage/NewMessageContainer';


const Dialogs = (props) => {
    let dialogsMap = props.dialogs.dialogsData.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    let messagesMap = props.dialogs.messagesData.map(m => <MessageItem message={m.message} key={m.id} />);
    return (
        <div className={style.wrapper}>
            <div className={style.dialogs}>
                {dialogsMap}
            </div>
            <div className={style.messages}>
                {messagesMap}
            </div>
            <div className={style.newMessage}>
                <NewMessageContainer />
            </div>
        </div>
    );
}

export default Dialogs;