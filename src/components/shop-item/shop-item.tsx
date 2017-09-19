import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Styles from './shop-item.scss';

interface ShopItemProps {
  item: Item;
}

class ShopItem extends React.Component<ShopItemProps, {}> {

  constructor(props: ShopItemProps) {
    super(props);
  }

  renderHeader() {
    const { item } = this.props;

    return (
      <div className={ Styles['header'] }>
        <div className={ Styles['back'] }>
          { '< Home '}
        </div>
        <div className={ Styles['seller'] }>
          { item.seller.company }
        </div>
      </div>
    )
  }

  renderContent() {
    const { item } = this.props;

    return (
      <div className={ Styles['content'] }>
        <div className={ Styles['image-container'] }>
          <div className={ Styles['favorite'] }>{ '<3' }</div>
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

          </div>
        </div>
      </div>
    );
  }

  render() {
    const { item } = this.props;
    console.log("item: ", item);
    return (
      <div className={ Styles['container'] }>
        { this.renderHeader() }
        { this.renderContent() }
      </div>
    );
  }

  static mapStateToProps(state: State) {
    return {
      item: state.items[0]
    };
  }

  static mapDispatchToProps(dispatch: any) {
    return bindActionCreators({ }, dispatch);
  }
}

export default connect(ShopItem.mapStateToProps, ShopItem.mapDispatchToProps)(ShopItem);