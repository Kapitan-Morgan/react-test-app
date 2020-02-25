import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
  {id: 1, name: 'Yaromir'},
  {id: 2, name: 'Ivan'},
  {id: 3, name: 'Lena'},
  {id: 4, name: 'Maria'},
  {id: 5, name: 'Nikola'},
]
let messages = [
  {id: 1, message: 'Hello'},
  {id: 2, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, blanditiis? '},
  {id: 3, message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, temporibus!'},
  {id: 4, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, incidunt.'},
  {id: 5, message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, quis.'},
]
let posts = [
  {id: 1, message: 'Hi, how are you', likesCount: 12},
  {id: 2, message: 'My first post', likesCount: 5},
  {id: 3, message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, saepe.', likesCount: 6},
  {id: 4, message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, laborum.', likesCount: 34},
  {id: 5, message: 'Lorem ipsum dolor sit amet.', likesCount: 1},
]

ReactDOM.render(<App dialogs={dialogs} messages={messages} posts={posts}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
