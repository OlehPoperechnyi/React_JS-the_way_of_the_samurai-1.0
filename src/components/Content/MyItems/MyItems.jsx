import style from './MyItems.module.css';
import MyItem from "./Item/MyItem";

const MyItems = (props) => {
    let myItemsMap = props.items.myItems.map(item => <MyItem myItem={item} />);
    return (
        <div className={style.myItemsWrapper}>
            <h1>MY OWN ITEMS</h1>
            { myItemsMap }
        </div>
    );
}

export default MyItems;