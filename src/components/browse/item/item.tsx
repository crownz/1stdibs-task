import * as React from 'react';
import * as Styles from './_item.scss';

 interface ItemProps {
   imageUrl: string;
   price: Price;
   onFavoriteToggle: any;
   isFavorite: boolean;
 }

 export default ({ imageUrl, price, onFavoriteToggle, isFavorite }: ItemProps) => {
   const toggle = e => {
     e.stopPropagation();
     onFavoriteToggle()
   };

   return (
     <div className={ Styles['container'] } data-hook="item-container">
       <div className={ Styles['image-container'] }>
         <img data-hook="image" src={ imageUrl } className={ Styles['image'] } />
       </div>
       <div className={ Styles['details'] }>
         <div className={ Styles['price'] } data-hook="price">
           { price ? price.amounts.USD : 'Price Upon Request' }
         </div>
         <div data-hook={ isFavorite ? 'liked' : 'not-liked' } className={ `${Styles['heart']} ${isFavorite ? Styles['favorite'] : ''}` } onClick={ e => toggle(e) }>
           { '<3' }
         </div>
       </div>
     </div>
   );
 };