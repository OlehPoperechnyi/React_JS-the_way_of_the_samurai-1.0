import Image from '../../Images/Image';
import style from './AddItem.module.css';
import React from "react";
import AddItemForm from "./AddItemForm";

const AddItem = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
        props.addNewItem(formData);
    }
    return (
        <div className={style.addItemWrapper}>
            <h1 align="center">Add new item</h1>
            <div className={style.addGallery}>
                <div className={style.addPhoto}><input type="file"/></div>
                <Image/>
                <Image/>
                <Image/>
                <Image/>
            </div>
            <AddItemForm onSubmit={ onSubmit } />
        </div>
    );
}

export default AddItem;