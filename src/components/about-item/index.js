import PropTypes from "prop-types";
import { cn as bem } from '@bem-react/classname';
import './style.css'
import Controls from "../controls";
import { numberFormat } from "../../utils/utils";
import useLanguage from "../../utils/useLanguage";

function AboutItem(props) {
    const cn = bem('AboutItem');
    const t = useLanguage('lg')
    const callbacks = {
        onAdd: (e) => {
            props.onAdd(props.product._id)
        }
    }
    return (

        <div className={cn()}>
            <div className={cn('description')}>{props.product.description}</div>
            <div className={cn('country')}>{t('country_of_origin')}: <span>{props.product.madeIn?.title} ({props.product.madeIn?.code})</span></div>
            <div className={cn('category')}>{t('category')}: <span>{props.product.category?.title}</span></div>
            <div className={cn('edition')}>{t('year_of_release')}: <span>{props.product.edition}</span></div>
            <span className={cn('price')}>
                {t('price')}: {numberFormat(props.product.price)} ₽
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