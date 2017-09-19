import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getItem } from '../../actions/item';
import Item from './item';
import * as Styles from './browse.scss';

interface BrowseProps {
  items: Item[];
  getItem: any;
  history?: any;
}

class Browse extends React.Component<BrowseProps, {}> {

  constructor(props: BrowseProps, context) {
    super(props, context);
    console.log("props: ", props, context);
  }

  renderItems() {
    const { items } = this.props;
    return items.map((item: Item) => <div key={ item.id } onClick={ () => this.getItemAndNavigate(item.id) }><Item { ...this.itemProps(item) } /></div> )
  }

  getItemAndNavigate(id: string) {
    // this.props.getItem(id).then(success => {
    //   console.log("navigating..", this.props.history.push);
    //   this.props.history.push(`/wtf`);
    // });
    this.props.history.push(`/item/${id}`);
  }

  itemProps(item: Item) {
    return {
      price: item.price,
      imageUrl: this.props.items[0].image
    };
  }

  render() {
    const { items } = this.props;
    console.log("items: ", items);

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
    return {
      items: state.items
    };
  }

  static mapDispatchToProps(dispatch: any) {
    return bindActionCreators({ getItem }, dispatch);
  }
}

export default withRouter(connect(Browse.mapStateToProps, Browse.mapDispatchToProps)(Browse));