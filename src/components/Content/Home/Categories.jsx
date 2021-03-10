import style from './Categories.module.css';
import CategoryItem from './Category/CategoryItem';
import {connect} from "react-redux";
import React from "react";


const Categories = (props) => {

    let categoriesMap = props.categories.map(name => <CategoryItem categoryName={name.categoryName} />);

    return (
        <div className={style.CategoriesWrapper}>
            {categoriesMap}
        </div>
    );
}


let mapStateToProps = (state) => {
    return {
        categories: state.categories.categories
    }
}

export default connect(mapStateToProps,{})(Categories);