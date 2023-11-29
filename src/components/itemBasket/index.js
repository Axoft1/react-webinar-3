import React from "react";
import PropTypes from "prop-types";
import './style.css';

function ItemBasket(props) {
  const callbacks = {
    onDel: () => {
      props.onDeleteItem(props.item.code);
    }
  }
  
  return (
    <div className="ItemBasket">
      <div className='ItemBasket-code'>{props.item.code}</div>
      <div className='ItemBasket-title'>
        {props.item.title}
      </div>
      <div className='ItemBasket-info'>

        <div className='ItemBasket-price'>{`${props.item.price}`} &#8381;</div>
        <div className='ItemBasket-count'>{`${props.item.count}`} шт</div>
      </div>
      <div className='ItemBasket-actions'>
        <button onClick={callbacks.onDel}>
          Удалить
        </button>
      </div>
    </div>
  );
}

ItemBasket.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    price: PropTypes.number,
    title: PropTypes.string,
    count: PropTypes.number
  }),
  onDeleteItem: PropTypes.func,
};

ItemBasket.defaultProps = {
  onDeleteItem: () => {
  }
}

export default React.memo(ItemBasket);
