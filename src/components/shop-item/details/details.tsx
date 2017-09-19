import * as React from 'react';
import * as Styles from './details.scss';

export default ({ item }) => {
  return (
    <div className={ Styles['card'] }>
      <div className={ Styles['title'] }>
        { item.title }
      </div>
      <div className={ Styles['price'] }>
        { item.price ? item.price.amounts.USD : 'Price Upon Request' }
      </div>
      <div className={ Styles['measurements'] }>
        <div className={ Styles['m-title'] }>
          Measurements
        </div>
        <div className={ Styles['m-content'] }>
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