import * as React from 'react';
import * as ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Browse from './browse';
import rootReducer from '../../reducers/root';

interface BrowseContainerProps {

}

const BrowserContainer = () => {
    const initialState: any = {
        items: window.preloadedData.items || []
    };
    const middlewares = [thunk];
    const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

    return (
        <Provider store={ store }>
            <Browse />
        </Provider>
    );
};

ReactDOM.render(
    <BrowserContainer />,
    document.getElementById("root")
);
