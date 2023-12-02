import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import { plural } from "../../utils";
import { formatter } from '../../utils'

function Controls({ basket, onShow, totalPrice }) {

  return (
    <div className='Controls'>
      <div className='Controls-title'>
        {basket.length ? <>В корзине: <b>{`${basket.length}  ${plural(basket.length, {
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
