import * as React from 'react';
import * as Styles from './description.scss';

export default ({ item }) => {
  return (
    <div className={ Styles['card'] }>
      <div className={ Styles['description'] }>
        { item.description }
      </div>
      <div className={ Styles['creator'] }>
        { `Creator: ${item.creators}` }
      </div>
    </div>
  );
}