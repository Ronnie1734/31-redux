import React from 'react';
import MyForm from './Form';
import Dashboard from './Dashboard';
import CategoryList from './CategoryList';
import { connect } from 'react-redux';
import { createCategory } from '../actions'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return <div>
      <h1>Budget tracker</h1>
      <h2>Add a category</h2>
      <MyForm create={this.props.createCategory}/>
      <CategoryList />
    </div>
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createCategory: val => dispatch(createCategory(val))
  };
};

export default connect(null, mapDispatchToProps)(App);