import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getItem, clearItem } from '../../actions/item';
import { toggleFavoriteItem } from '../../actions/favorite';
import ShopItem from './shop-item';
import * as Styles from './shop-item.scss';

interface ShopItemContainerProps {
  item: Item;
  favorite: any;
  history: any;
  match: any;
  getItem: any;
  clearItem: any;
  toggleFavoriteItem: any;
}

class ShopItemContainer extends React.Component<ShopItemContainerProps, {}> {

  constructor(props: ShopItemContainerProps) {
    super(props);
    props.getItem(props.match.params.id);
    this.goBack = this.goBack.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.isFavorite = this.isFavorite.bind(this);
  }

  goBack() {
    this.props.clearItem();
    this.props.history.push('/home');
  }

  toggleFavorite() {
    this.props.toggleFavoriteItem(this.props.match.params.id);
  }

  isFavorite() {
    return this.props.favorite.includes(this.props.match.params.id);
  }

  render() {
    return (
      <div className={ Styles['container'] }>
        { this.props.item ?
            <ShopItem item={ this.props.item }
                      onBack={ this.goBack }
                      onFavoriteToggle={ this.toggleFavorite }
                      isFavorite={ this.isFavorite() } /> :
            <div /> }
      </div>
    );
  }

  static mapStateToProps(state: State) {
    return {
      item: state.item,
      favorite: state.favorite
    };
  }

  static mapDispatchToProps(dispatch: any) {
    return bindActionCreators({ getItem, toggleFavoriteItem, clearItem }, dispatch);
  }
}

export default connect(ShopItemContainer.mapStateToProps, ShopItemContainer.mapDispatchToProps)(ShopItemContainer);