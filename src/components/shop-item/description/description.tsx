import * as React from 'react';
import * as Styles from './_description.scss';

export default ({ item }) => {
  return (
    <div className={ Styles['card'] } data-hook="description-container">
      <div className={ Styles['description'] } data-hook="description">
        { item.description }
      </div>
      <div className={ Styles['creator'] } data-hook="author">
        { `Creator: ${item.creators}` }
      </div>
    </div>
  );
}