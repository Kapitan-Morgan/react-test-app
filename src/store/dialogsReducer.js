const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const ADD_MESSAGE = 'ADD-MESSAGE'

const dialogsReduser = (state, action) => {

  switch(action.type){
    case ADD_MESSAGE:
      let newMessage = {
        id: state.messages.slice(-1).pop().id + 1,
        message: state.newMessageBody
      }
      state.messages.push(newMessage);
      state.newMessageBody = '';
      return state;
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.newBody;
      return state;
    default:
      return state;
  }

}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageBodyActionCreator = (body) => 
              ({ type: UPDATE_NEW_MESSAGE_BODY, newBody: body})

export default dialogsReduser;