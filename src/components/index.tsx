import * as React from 'react';
import * as ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { getFavorites } from '../actions/favorite';
import rootReducer from '../reducers';
import RoutesContainer from './routes';

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
          <RoutesContainer />
        </BrowserRouter>
      </Provider>
    );
  }
}

ReactDOM.render(
  <BrowserContainer />,
  document.getElementById("root")
);
