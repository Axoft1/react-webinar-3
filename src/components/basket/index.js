import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import { formatter } from '../../utils'
import List from "../list";

function Basket({ basket, onHandleBasket, totalPrice }) {

    return (
        <div className='Basket-list'>
            {basket.length ? <>
                <List list={basket}
                    onHandleBasket={onHandleBasket}                
                    buttonText='Удалить'
                />
                <div className='Basket-price'>
                    <p>Итого</p>
                    <p>{formatter.format(totalPrice)}</p>
                </div>
            </>
                :
                <div className='Basket-void'>Корзина пуста</div>}
        </div>
    )
}

Basket.propTypes = {
    onShow: PropTypes.func,
    onDeleteItem: PropTypes.func,
    basket: PropTypes.arrayOf(PropTypes.shape({
        code: PropTypes.number
    })).isRequired,
    totalPrice: PropTypes.number
};

Basket.defaultProps = {
    onShow: () => { },
    onDeleteItem: () => { }
}

export default React.memo(Basket);
