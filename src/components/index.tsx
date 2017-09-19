import * as React from 'react';
import * as ReactDOM from "react-dom";
import { Router, Route, BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import history from '../services/history';
import { getFavorites } from '../actions/favorite';

import rootReducer from '../reducers';

import Browse from './browse';
import ShopItem from './shop-item';

import * as Styles from './index.scss';

const initialState: any = {
  items: window.preloadedData.items || []
};

const middlewares = [thunk];
const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

export default class BrowserContainer extends React.Component<{}, {}> {

  constructor(props) {
    super(props);
    store.dispatch(getFavorites());
  }

  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <div className={ Styles['container'] }>
            <div className={ Styles['inner-container'] }>
              <div className={ Styles['content'] }>
                <Route exact path="/item/:id" component={ ShopItem } />
                <Route exact path="/home" component={ Browse } />
              </div>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

ReactDOM.render(
  <BrowserContainer />,
  document.getElementById("root")
);
