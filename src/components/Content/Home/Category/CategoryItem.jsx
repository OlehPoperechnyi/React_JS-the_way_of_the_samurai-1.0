import style from './CategoryItem.module.css';
import Image from "../../../Images/Image";
import {NavLink} from "react-router-dom";
let CategoryItem = (props) => {
    return (
      <div className={style.CategoryWrapper}>
          <Image imageLink={props.imageLink} />
          <div>
              <NavLink to="/item" className={style.CategoryWrapper_categoryName}>{props.categoryName}</NavLink>
          </div>
      </div>
    );
}

export default CategoryItem;