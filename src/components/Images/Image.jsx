import style from './Image.module.css';

const Image = (props) => {
    return (
        <div>
            <img src={props.imageLink} className={style.ItemImage} />
        </div>
    );
}

export default Image;