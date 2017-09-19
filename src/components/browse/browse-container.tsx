import * as React from 'react';
import * as ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { ConnectedBrowse } from './browse';
import rootReducer from '../../reducers/root';

const BrowserContainer = () => {
    const initialState: any = {
        items: window.preloadedData.items || []
    };
    const middlewares = [thunk];
    const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

    return (
        <Provider store={ store }>
          <ConnectedBrowse />
        </Provider>
    );
};

ReactDOM.render(
    <BrowserContainer />,
    document.getElementById("root")
);
