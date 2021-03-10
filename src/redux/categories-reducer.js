let initialState = {
    categories: [
        {categoryName: 'Laptops'},
        {categoryName: 'PC'},
        {categoryName: 'Cellphone'},
        {categoryName: 'Tablets'},
        {categoryName: 'Printers'},
        {categoryName: 'Other parts'}
    ]
};

const categoriesReducer =(state = initialState, action) => {

    return state;
}

export default categoriesReducer;