import { numberFormat } from "../../utils";
import PropTypes from "prop-types";
import { cn as bem } from '@bem-react/classname';
import './style.css'
import useSelector from "../../store/use-selector";
import Controls from "../controls";

function AboutItem(props) {
    const cn = bem('AboutItem');
    const select = useSelector(state => ({
        lg: state.languages.translation,
    }));
    const callbacks = {
        onAdd: (e) => {
            props.onAdd(props.product._id)
        }
    }
    return (

        <div className={cn()}>
            <div className={cn('description')}>{props.product.description}</div>
            <div className={cn('country')}>{`${select.lg.country_of_origin}:`} <span>{props.product.madeIn?.title} ({props.product.madeIn?.code})</span></div>
            <div className={cn('category')}>{`${select.lg.category}:`} <span>{props.product.category?.title}</span></div>
            <div className={cn('edition')}>{`${select.lg.year_of_release}:`} <span>{props.product.edition}</span></div>
            <span className={cn('price')}>
                {`${select.lg.price}:`} {numberFormat(props.product.price)} ₽
            </span>
            <Controls onAdd={callbacks.onAdd}/>
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