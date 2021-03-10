import addItemReducer from "./addItem-reducer";
import requestsPageReducer from "./requestsPage-reducer";

let store = {
    _state: {
        RequestsPage: {
            dialogsData: [
                {id: 1, name: 'Andrey'},
                {id: 2, name: 'Kate'},
                {id: 3, name: 'Helen'},
                {id: 4, name: 'Anna'},
                {id: 5, name: 'Denis'},
                {id: 6, name: 'Daniil'},
                {id: 7, name: 'Sergey'}
            ],
            messagesData: [
                {id: 8, message: 'Hi!'},
                {id: 9, message: 'How are you?'},
                {id: 10, message: 'WTF!!!'},
                {id: 11, message: 'Sorry'},
                {id: 12, message: 'Not for you'},
                {id: 13, message: 'I am Helga.'},
                {id: 14, message: 'I am fine.'}
            ],
            newMessageText: ''
        },
        HomePage: {
            categories: [
                {categoryName: 'Laptops'},
                {categoryName: 'PC'},
                {categoryName: 'Cellphone'},
                {categoryName: 'Tablets'},
                {categoryName: 'Printers'},
                {categoryName: 'Other parts'}
            ]
        },
        UsersPage: {
            users: [
                {
                    name: 'buzzer',
                    price: 250,
                    category: 'Cellphone',
                    imagesUrls: ['url1', 'url2'],
                    description: 'Really cool buzzer!!!'
                }
            ]
        }
    },
    _callSubscriber() {
        console.log('work');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.MyItemsPage = addItemReducer(this._state.MyItemsPage, action);
        this._state.RequestsPage = requestsPageReducer(this._state.RequestsPage, action);

        this._callSubscriber(this._state);
    }
};


export default store;