import * as React from 'react';
import * as Styles from './shop-item.scss';

interface ShopItemProps {
  item: Item;
  onBack: any;
  onFavoriteToggle: any;
  isFavorite: boolean;
}

export default ({ item, onBack, isFavorite, onFavoriteToggle }: ShopItemProps ) => {
  return (
    <div className={ Styles['container'] }>
      { renderHeader(item, onBack) }
      { renderContent(item, isFavorite, onFavoriteToggle) }
    </div>
  );
};

function renderHeader(item, onBack) {
  return (
    <div className={ Styles['header'] }>
      <div className={ Styles['back'] }>
        <div className={ Styles['back-link'] } onClick={ onBack }>
          { '< Home '}
        </div>
      </div>
      <div className={ Styles['seller'] }>
        { item.seller.company }
      </div>
    </div>
  )
}

function renderContent(item, isFavorite, onFavoriteToggle) {
  return (
    <div className={ Styles['content'] }>
      <div className={ Styles['image-container'] }>
        <div className={ `${Styles['heart']} ${isFavorite ? Styles['favorite'] : ''}` } onClick={ onFavoriteToggle }>{ '<3' }</div>
        <img className={ Styles['image'] } src={ item.image } />
      </div>
      <div className={ Styles['details'] }>
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
        <div className={ Styles['card'] }>
          <div className={ Styles['description'] }>
            { item.description }
          </div>
          <div className={ Styles['creator'] }>
            { `Creator: ${item.creators}` }
          </div>
        </div>
      </div>
    </div>
  );
}