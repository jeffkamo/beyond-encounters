import React, {Component} from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';

class App extends Component {
	constructor(props){
		super(props)
	}
	render() {
		console.log(this.props);
	    return (
	      <div>
	        I am thing: {this.props.count}
	      </div>
    	);
  }
}


const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(App);
