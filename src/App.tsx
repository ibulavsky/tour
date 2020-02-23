import React from 'react';
import store from './1-main/main-2-bll/store';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import './App.scss';

import Main from './1-main/main-1-ui/Main';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <Main/>
                </Provider>
            </BrowserRouter>
        </div>
    )
}

export default App;
