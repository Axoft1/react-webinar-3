import React from "react";
import PropTypes from 'prop-types';
import Item from "../item";
import './style.css';

function List({ list, onHandleBasket, onSelectItem, buttonText }) {
  return (
    <div className='List'>{
      list.map(item =>
        <div key={item.code} className='List-item'>
          <Item item={item} onHandleBasket={onHandleBasket} onSelect={onSelectItem} buttonText={buttonText}/>
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
