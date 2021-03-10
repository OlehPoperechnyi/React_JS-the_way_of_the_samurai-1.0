import style from './MyItem.module.css';
import Image from "../../../Images/Image";

const MyItem = (props) => {
    return (
        <div className={style.myItemWrapper}>
            <Image />
            <div className={style.myItemWrapper_ItemDescription}>
                <div className={style.myItemWrapper_ItemDescription_Text}>
                    <h2>{ props.myItem.name }</h2>
                    <p>{ props.myItem.description }</p>
                </div>
                <div className={style.myItemWrapper_ItemDescription_Info}>
                    Category: { props.myItem.category }
                </div>
                <div className={style.myItemWrapper_ItemDescription_Price}>
                    { props.myItem.price } uah
                </div>
            </div>
        </div>
    );
}

export default MyItem;
