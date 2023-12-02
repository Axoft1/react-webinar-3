import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import { plural } from "../../utils";
import { formatter } from '../../utils'

function Controls({ basket, onShow, totalPrice, count }) {

  return (
    <div className='Controls'>
      <div className='Controls-title'>
        {basket.length ? <>В корзине: <b>{`${count}  ${plural(count, {
          one: 'товар',
          few: 'товара',
          many: 'товаров'
        })} / ${formatter.format(totalPrice)}`} </b> </> : <>В корзине: <b>пусто</b></>}
      </div>

      <button onClick={() => onShow()}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  onShow: PropTypes.func,
  basket: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  totalPrice: PropTypes.number
};

Controls.defaultProps = {
  onShow: () => { }
}

export default React.memo(Controls);
