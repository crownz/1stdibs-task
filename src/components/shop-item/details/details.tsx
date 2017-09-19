import * as React from 'react';
import * as Styles from './_details.scss';

export default ({ item }) => {
  return (
    <div className={ Styles['card'] } data-hook="details-container">
      <div className={ Styles['title'] } data-hook="title">
        { item.title }
      </div>
      <div className={ Styles['price'] } data-hook="price">
        { item.price ? item.price.amounts.USD : 'Price Upon Request' }
      </div>
      <div className={ Styles['measurements'] }>
        <div className={ Styles['m-title'] }>
          Measurements
        </div>
        <div className={ Styles['m-content'] } data-hook="measurements">
          { item.measurements.display }
        </div>
        <div className={ Styles['actions'] }>
          <div className={ Styles['button'] }>
            PURCHASE
          </div>
          <div className={ Styles['button'] }>
            MAKE OFFER
          </div>
        </div>
      </div>
    </div>
  );
}