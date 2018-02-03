import React, {Component} from 'react';
import {connect} from 'react-redux';
import Dashboard from './dashboard'

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //basic clicker to log redux is working across platform
    document.addEventListener('click', () => {
      console.log('testing')
      this.props.dispatch({
        type: 'ADD_COUNT'
      });
    });
  }

  render() {
    return (
        <Dashboard>
            TEST
        </Dashboard>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(App);
