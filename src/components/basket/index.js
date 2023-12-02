import React from "react";
import PropTypes from 'prop-types';
import ItemBasket from '../itemBasket'
import './style.css';
import {formatter} from '../../utils'

function Basket({ basket, onShow, onDeleteItem, totalPrice }) {

    return (
        <div className='Basket'>
            <div className='Basket-wrapper'>
                <div className='Basket-title'>Корзина<button onClick={() => onShow()}>Закрыть</button>
                </div>
                <div className='Basket-list'>
                    {basket.length ? <>
                    {basket.map((e) =>
                        <div className='Basket-item' key={e.code}>
                        <ItemBasket item={e} onDeleteItem={onDeleteItem}  />
                        </div>
                        )}
                        <div className='Basket-price'>
                        <p>Итого</p>  
                            <p>{formatter.format(totalPrice)};</p>                        
                    </div>
                        </>
                    :
                        <div className='Basket-void'>Корзина пуста</div>}
                </div>
            </div>
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
