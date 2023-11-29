import React from "react";
import PropTypes from 'prop-types';
import Item from "../item";
import './style.css';

function List({ list, onAddBasket, onSelectItem}) {
  return (
    <div className='List'>{
      list.map(item =>
        <div key={item.code} className='List-item'>
          <Item item={item} onAddBasket={onAddBasket} onSelect={onSelectItem}/>
        </div>
      )}
    </div>
  )
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  onAddBasket: PropTypes.func,
  onSelectItem: PropTypes.func
};

List.defaultProps = {
  onAddBasket: () => {
  },
  onSelectItem: () => {
  },
}

export default React.memo(List);
