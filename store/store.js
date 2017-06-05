import { createStore } from 'redux'


var initalState = {messages: [], currentMessage: "" };


var chatReducers = (state = initalState, action) => {
    switch (action.type) {
      case "AddMessage":
        return Object.assign( {}, state, { messages: [...state.messages, action.payload] })
    }
    return state;
  }

export default (initialState) => {
  return createStore(chatReducers);
};