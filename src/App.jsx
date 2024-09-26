import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from './Components/SearchBox';
import CardList from './Components/CardList';
import Scroll from './Components/Scroll'
import './App.css';

import { setSearchField } from './actions'; // Redux action

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    render() {
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;

        const filteredRobots = robots.filter(robot =>
            robot.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return !robots.length ? (
            <h1>Loading ...</h1>
        ) : (
            <div className="tc">
                <h1 className="f1">LazyRobo NFT Collection</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
    }
}

// Map Redux state to component props
const mapStateToProps = (state) => {
    return {
        searchField: state.searchField // Ensure this matches your Redux store
    };
};

// Map Redux dispatch to component props
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
