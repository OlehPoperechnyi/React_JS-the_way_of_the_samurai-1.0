const ADD_ITEM = 'ADD_ITEM';

export const addItemActionCreator = (obj) => ({
    type: ADD_ITEM,
    name: obj.productName,
    price: obj.productPrice,
    category: obj.productCategory,
    imagesUrls: ['url1', 'url2'],
    description: obj.productDescription
});

let initialState =
    {
        myItems: [
            {
                name: 'buzzer',
                price: 250,
                category: 'Cellphone',
                imagesUrls: ['url1', 'url2'],
                description: 'Really cool buzzer!!!'
            },
            {
                name: 'button',
                price: 50,
                category: 'Cellphone',
                imagesUrls: ['url1', 'url2'],
                description: 'Really cool buzzer!!!'
            },
            {
                name: 'display',
                price: 2500,
                category: 'Cellphone',
                imagesUrls: ['url1', 'url2'],
                description: 'Really cool buzzer!!!'
            },
            {
                name: 'LCD-panel',
                price: 2500,
                category: 'Laptops',
                imagesUrls: ['url1', 'url2'],
                description: 'Really cool buzzer!!!'
            },
            {
                name: 'motherboard',
                price: 750,
                category: 'PC',
                imagesUrls: ['url1', 'url2'],
                description: 'Really cool buzzer!!!'
            },
            {
                name: 'phone',
                price: 4250,
                category: 'Cellphone',
                imagesUrls: ['url1', 'url2'],
                description: 'Really cool buzzer!!!'
            }
        ]
    };

const addItemReducer = (state = initialState, action) => {

    let stateCopy = {
        ...state,
        AddItemPage: {...state.AddItemPage},
    }

    switch (action.type) {
        case ADD_ITEM: {
            stateCopy.myItems = [
                ...state.myItems,
                {
                    name: action.name,
                    price: action.price,
                    category: action.category,
                    imagesUrls: ['url1', 'url2'],
                    description: action.description
                }];
            return stateCopy;
        }
        default:
            return stateCopy;
    }
};

export default addItemReducer;