import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getItem, loadItems } from '../../actions/item';
import { toggleFavoriteItem } from '../../actions/favorite';
import Item from './item';
import * as Styles from './_browse.scss';

interface BrowseProps {
  items: Item[];
  favorite: any;
  getItem: any;
  loadItems: any;
  toggleFavoriteItem: any;
  history?: any;
  totalItems: number;
}

export class Browse extends React.Component<BrowseProps, {}> {

  constructor(props: BrowseProps) {
    super(props);
    this.loadMoreItems = this.loadMoreItems.bind(this);
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

  loadMoreItems() {
    const start = this.props.items.length;
    this.props.loadItems(start, 9);
  }

  renderActions() {
    return (
      <div className={ Styles['actions'] } data-hook="browse-footer">
        <div className={ Styles['more'] } onClick={ this.loadMoreItems } data-hook="load-more">
          LOAD MORE
        </div>
      </div>
    );
  }

  render() {
    const { items, totalItems } = this.props;

    return (
      <div className={ Styles['container'] } data-hook="browse-container">
        <div className={ Styles['title'] }>
           Browse page
        </div>
        <div className={ Styles['content'] }>
          <div className={ Styles['items'] } data-hook="items">
            { this.renderItems() }
          </div>
          { totalItems > items.length ? this.renderActions() : null }
        </div>
      </div>
    );
  }

  static mapStateToProps(state: State) {
    return {
      items: state.items,
      favorite: state.favorite,
      totalItems: state.totalItems
    };
  }

  static mapDispatchToProps(dispatch: any) {
    return bindActionCreators({ getItem, loadItems, toggleFavoriteItem }, dispatch);
  }
}

export default connect(Browse.mapStateToProps, Browse.mapDispatchToProps)(Browse);