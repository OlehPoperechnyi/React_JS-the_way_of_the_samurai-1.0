const ADD_MESSAGE = 'addMessage';
const ADD_NEW_MESSAGE = 'newMessageChang';

export const addMessageActionCreator = (text) => ({
    type: ADD_MESSAGE,
    message: text
});

let initialState = {
    dialogsData: [
        {id: 31, name: 'Andrey'},
        {id: 32, name: 'Kate'},
        {id: 33, name: 'Helen'},
        {id: 34, name: 'Anna'},
        {id: 35, name: 'Denis'},
        {id: 36, name: 'Daniil'},
        {id: 37, name: 'Sergey'}
    ],
    messagesData: [
        {id: 21, message: 'Hi!'},
        {id: 22, message: 'How are you?'},
        {id: 23, message: 'WTF!!!'},
        {id: 24, message: 'Sorry'},
        {id: 25, message: 'Not for you'},
        {id: 26, message: 'I am Helga.'},
        {id: 27, message: 'I am fine.'}
    ]
};

const requestsPageReducer = (state = initialState, action) => {

    let stateCopy = {
        ...state
    }
    switch (action.type) {
        case ADD_MESSAGE: {
            stateCopy.messagesData = [
                ...state.messagesData,
                {
                    id: 2,
                    message: action.message
                }];
            return stateCopy;
        }
        case ADD_NEW_MESSAGE: {
            stateCopy.newMessageText = action.text;
            return stateCopy;
        }
        default: {
            return stateCopy;
        }
    }
};

export default requestsPageReducer;