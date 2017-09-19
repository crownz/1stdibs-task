import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getItem } from '../../actions/item';
import { toggleFavoriteItem } from '../../actions/favorite';
import Item from './item';
import * as Styles from './browse.scss';

interface BrowseProps {
  items: Item[];
  favorite: any;
  getItem: any;
  toggleFavoriteItem: any;
  history?: any;
}

class Browse extends React.Component<BrowseProps, {}> {

  constructor(props: BrowseProps, context) {
    super(props, context);
  }

  renderItems() {
    const { items } = this.props;
    return items.map((item: Item) => <div key={ item.id } onClick={ () => this.getItemAndNavigate(item.id) }><Item { ...this.itemProps(item) } /></div> )
  }

  getItemAndNavigate(id: string) {
    this.props.history.push(`/item/${id}`);
  }

  itemProps(item: Item) {
    return {
      price: item.price,
      imageUrl: item.image,
      onFavoriteToggle: () => this.toggleFavorite(item.id),
      isFavorite: this.props.favorite.includes(item.id)
    };
  }

  toggleFavorite(id: string) {
    this.props.toggleFavoriteItem(id);
  }

  render() {
    return (
      <div className={ Styles['container'] }>
        <div className={ Styles['title'] }>
             Browse page
        </div>
        <div className={ Styles['items'] }>
          { this.renderItems() }
        </div>
      </div>
    );
  }

  static mapStateToProps(state: State) {
    console.log("STATE: ", state);
    return {
      items: state.items,
      favorite: state.favorite
    };
  }

  static mapDispatchToProps(dispatch: any) {
    return bindActionCreators({ getItem, toggleFavoriteItem }, dispatch);
  }
}

export default withRouter(connect(Browse.mapStateToProps, Browse.mapDispatchToProps)(Browse));