import React, {useState} from "react";
import PropTypes from "prop-types";
import './style.css';
import { formatter } from '../../utils'

function Item(props) {

  const callbacks = {
    onClick: () => {
      props.onSelect(props.item.code);      
    },
    onHandle: (e) => {      
      e.stopPropagation();
      props.onHandleBasket(props.item);

    }
  }

  return (
    <div className={'Item' + (props.item.selected ? ' Item_selected' : '')}
         onClick={callbacks.onClick}>
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>
        {props.item.title}
      </div>
      <div className='Item-actions'>
        <div className='Item-price'>{formatter.format(props.item.price)} </div>
        {props.item.count && <div className='Item-count'>{props.item.count} шт</div>}        
        <button onClick={callbacks.onHandle}>
          {props.buttonText}
        </button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    selected: PropTypes.bool,
    count: PropTypes.number
  }).isRequired,
  onAddBasket: PropTypes.func,
  onSelect: PropTypes.func
};

Item.defaultProps = {
  onAddBasket: () => {
  },
  onSelect: () => {
  },
}

export default React.memo(Item);
