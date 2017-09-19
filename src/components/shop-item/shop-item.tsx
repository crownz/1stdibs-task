import * as React from 'react';
import Details from './details';
import Description from './description';
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
      { renderImage(item, isFavorite, onFavoriteToggle) }
      <div className={ Styles['details'] }>
        <Details item={ item } />
        <Description item={ item } />
      </div>
    </div>
  );
}

function renderImage(item, isFavorite, onFavoriteToggle ) {
  return (
    <div className={ Styles['image-container'] }>
      <div className={ `${Styles['heart']} ${isFavorite ? Styles['favorite'] : ''}` } onClick={ onFavoriteToggle }>{ '<3' }</div>
      <img className={ Styles['image'] } src={ item.image } />
    </div>
  );
}