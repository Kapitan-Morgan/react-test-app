import profileReduser from "./profileReducer";
import dialogsReduser from "./dialogsReducer";
import friendsReduser from "./friendsReducer";

let store = {
  _subscriber() {
    console.log('no subscribers (observers)');
  },
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'My first post', likesCount: 5},
        {id: 3, message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, saepe.', likesCount: 6},
        {id: 4, message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, laborum.', likesCount: 34},
        {id: 5, message: 'Lorem ipsum dolor sit amet.', likesCount: 1},
      ],
      newPostText: ''
    },
    messagesPage: {
      dialogs: [
        {id: 1, name: 'Yaromir'},
        {id: 2, name: 'Ivan'},
        {id: 3, name: 'Lena'},
        {id: 4, name: 'Maria'},
        {id: 5, name: 'Nikola'},
      ],
      messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, blanditiis? '},
        {id: 3, message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, temporibus!'},
        {id: 4, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, incidunt.'},
        {id: 5, message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, quis.'},
      ],
      newMessageBody: ''
    },
    navbar: {
      friends: [
        {id: 1, logoUrl: 'https://static10.tgstat.ru/channels/_0/fa/fa95693118170fa10ef10b7c59f87b6a.jpg', name: 'Yaromir'},
        {id: 2, logoUrl: 'https://avatars.mds.yandex.net/get-zen-logos/212539/pub_5ac702a1168a9101f112a656_5bd12506ff5f2d00a9476153/xxh', name: 'Ivan'},
        {id: 3, logoUrl: 'https://static10.tgstat.ru/channels/_0/fa/fa95693118170fa10ef10b7c59f87b6a.jpg', name: 'Maria'}
      ]
    }
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._subscriber = observer;
  },

  addPost(){
    let newPost = {
      id: this._state.profilePage.posts.slice(-1).pop().id + 1,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    }
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._subscriber(this);
  },
  updateNewPostText(newText){
    this._state.profilePage.newPostText = newText;
    this._subscriber(this);
  },

  dispatch(action){ // { type: 'ADD-POST' }

    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.messagesPage = dialogsReduser(this._state.messagesPage, action);
    this._state.navbar = friendsReduser(this._state.navbar, action);

    this._subscriber(this);
  }
}

export default store;