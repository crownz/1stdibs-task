import * as React from 'react';
import * as Styles from './item.scss';

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
     <div className={ Styles['container'] }>
       <div className={ Styles['image-container'] }>
         <img src={ imageUrl } className={ Styles['image'] } />
       </div>
       <div className={ Styles['details'] }>
         <div className={ Styles['price'] }>
           { price ? price.amounts.USD : 'Price Upon Request' }
         </div>
         <div className={ `${Styles['heart']} ${isFavorite ? Styles['favorite'] : ''}` } onClick={ e => toggle(e) }>
           { '<3' }
         </div>
       </div>
     </div>
   );
 };