import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import store from './store/store'
import App from './App';
import { BrowserRouter } from "react-router-dom";

let renderEntireTree = (store) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
}

renderEntireTree(store);

store.subscribe(renderEntireTree);

serviceWorker.unregister();
