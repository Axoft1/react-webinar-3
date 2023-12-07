import { numberFormat } from "../../utils";
import PropTypes from "prop-types";
import { cn as bem } from '@bem-react/classname';
import './style.css'

function AboutItem(props) {
    const cn = bem('AboutItem');
    const callbacks = {
        onAdd: (e) => {
            props.onAdd(props.product._id)
        }
    }
    return (

        <div className={cn()}>
            <div className={cn('description')}>{props.product.description}</div>
            <div className={cn('country')}>Страна производитель: <span>{props.product.madeIn?.title} ({props.product.madeIn?.code})</span></div>
            <div className={cn('category')}>Категория: <span>{props.product.category?.title}</span></div>
            <div className={cn('edition')}>Год выпуска: <span>{props.product.edition}</span></div>
            <span className={cn('price')}>
                Цена: {numberFormat(props.product.price)} ₽
            </span>
            <button onClick={callbacks.onAdd}>Добавить</button>
        </div>
    )
}

export default AboutItem

AboutItem.prototype = {
    product: {
        _id: PropTypes.string,
        description: PropTypes.string,
        madeIn: {
            code: PropTypes.string, 
            title: PropTypes.string, 
            _id: PropTypes.string
        },
        category: { title: PropTypes.string, _id: PropTypes.string },
        edition: PropTypes.number,
        price: PropTypes.number
    }.isRequired,
    onAdd: PropTypes.func,
};

AboutItem.defaultProps = {
    onAdd: () => { },
}