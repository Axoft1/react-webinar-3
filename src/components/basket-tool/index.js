import useSelector from "../../store/use-selector";
import Navigation from "../navigation";
import { memo } from "react";
import PropTypes from 'prop-types';
import { cn as bem } from '@bem-react/classname';
import { numberFormat, plural } from "../../utils/utils";
import './style.css';
import useLanguage from "../../utils/useLanguage";

function BasketTool({ sum, amount, onOpen }) {
  const cn = bem('BasketTool');
  const t = useLanguage('lg')

  return (
    <div className={cn()}>
      <Navigation/>
      <div>
        <span className={cn('label')}>{t('in_a_basket')}: </span>
        <span className={cn('total')}>
          {amount
            ? `${amount} ${plural(amount, {
              one: t('product'),
              few: t('the_product'),
              many: t('products')
            })} / ${numberFormat(sum)} ₽`
            : t('empty')
          }
        </span>
        <button onClick={onOpen}>{t('go_over')}</button>
      </div>
    </div>
  );
}

BasketTool.propTypes = {
  onOpen: PropTypes.func.isRequired,
  sum: PropTypes.number,
  amount: PropTypes.number
};

BasketTool.defaultProps = {
  onOpen: () => { },
  sum: 0,
  amount: 0
}

export default memo(BasketTool);
