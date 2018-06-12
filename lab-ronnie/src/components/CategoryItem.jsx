import React from 'react';

export default class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li><span>{this.props.name}</span>: <span>{this.props.budget}</span></li>
    )
  }
}