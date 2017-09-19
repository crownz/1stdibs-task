import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from '../../reducers/root';

interface BrowseProps {
    items: item[];
}

class Browse extends React.Component<BrowseProps, undefined> {

    constructor(props: BrowseProps) {
        super(props);
    }

    render() {
        console.log("items: ", this.props.items);
        return (
            <div>swx4all</div>
        )
    }

    static mapStateToProps(state: state) {
        return {
            items: state.items
        };
    }

    static mapDispatchToProps(dispatch: any) {
        return bindActionCreators({}, dispatch);
    }
}

const ConnectedBrowse = connect(Browse.mapStateToProps, Browse.mapDispatchToProps)(Browse);
export default ConnectedBrowse;

const BrowserContainer = () => {
    const initialState: any = {
        items: window.preloadedData.items || []
    };
    const middlewares = [thunk];
    const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

    return (
        <Provider store={ store }>
            <ConnectedBrowse />
        </Provider>
    );
};

ReactDOM.render(
    <BrowserContainer />,
    document.getElementById("root")
);