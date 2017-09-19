import * as React from 'react';
import { Route } from 'react-router-dom';
import Browse from './browse';
import ShopItem from './shop-item';
import * as Styles from './index.scss';

export default class Inner extends React.Component<{}, {}> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={ Styles['container'] }>
        <div className={ Styles['inner-container'] }>
          <div className={ Styles['content'] }>
            <Route path="/item/:id" component={ ShopItem } />
            <Route path="/home" component={ Browse } />
          </div>
        </div>
      </div>
    );
  }
}