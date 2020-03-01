const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST'

const profileReduser = (state, action) => {

	switch(action.type) {
		case ADD_POST:
			let newPost = {
				id: state.posts.slice(-1).pop().id + 1,
				message: state.newPostText,
				likesCount: 0
			}
			state.posts.push(newPost);
			state.newPostText = '';
			return state;
		case UPDATE_NEW_TEXT_POST:
			state.newPostText = action.newText;
			return state;
		default:
			return state;
	}
	
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => 
              ({ type: UPDATE_NEW_TEXT_POST, newText: text})

export default profileReduser;