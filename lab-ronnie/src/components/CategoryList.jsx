import React from 'react';
import {connect} from 'react-redux';
//import CategoryItem from './categoryItem'

class CategoryList extends React.Component {
  constructor (props) {
    super(props);

    this.displayAll = this.displayAll.bind(this);
  }

displayAll() {
  return this.props.categories.map(category => {
    return <CategoryItem
    key={category.id}
    id={category.id}
    name={category.name}
    budget={category.isEditing}>
    isEditing={category.isEditing}>
    </CategoryItem>
  });
}

render() {
  return (
    <div>
      <h2> list </h2>
      <ul>{this.displayAll()}</ul>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    create: val => dispatch(create(val)),
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (CategoryList);