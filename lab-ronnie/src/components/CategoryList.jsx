import React from 'react';
import {connect} from 'react-redux';
import CategoryItem from './CategoryItem'

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
      budget={category.budget}
      isEditing={category.isEditing}
    />
  });
}

render() {
  return (
    <div>
      <h3>Categories</h3>
      <ul>{this.displayAll()}</ul>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

export default connect (mapStateToProps) (CategoryList);