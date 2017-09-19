import * as React from 'react';
import * as Styles from './item.scss';

 interface ItemProps {
   imageUrl: string;
   price: Price;
 }

 export default ({ imageUrl, price }: ItemProps) => {

   return (
     <div className={ Styles['container'] }>
       <div className={ Styles['image-container'] }>
         <img src={ imageUrl } className={ Styles['image'] } />
       </div>
       <div className={ Styles['details'] }>
         <div className={ Styles['price'] }>
           { price ? price.amounts.USD : 'Price Upon Request' }
         </div>
         <div className={ Styles['favorite'] }>
           { '<3' }
         </div>
       </div>
     </div>
   );
 };