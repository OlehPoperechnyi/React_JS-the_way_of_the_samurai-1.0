import requestsPageReducer, {addMessageActionCreator} from "./requestsPage-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";
test('length of message should be incremented', () => {

    let state = {
        messagesData: [
            {id: 11, message: 'Hi!'},
            {id: 12, message: 'How are you?'},
            {id: 13, message: 'WTF!!!'},
            {id: 14, message: 'Sorry'},
            {id: 15, message: 'Not for you'},
            {id: 16, message: 'I am Helga.'},
            {id: 17, message: 'I am fine.'}
        ]
    };
    let action = addMessageActionCreator('new message');
    let newState = requestsPageReducer(state, action);

    expect(newState.messagesData.length).toBe(8);

});


