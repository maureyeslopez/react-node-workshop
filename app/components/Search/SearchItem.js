
import React from 'react';
import css from './search.scss';

class SearchItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <li className="item">
        <div className="image"><img src={this.props.item.thumbnail} /></div>
        <div className="item-info">
          <div className="price">{this.props.item.price}</div >
          <h3>{this.props.item.title}</h3>
        </div >
      </li>
    )
  }
}

export default SearchItem;
