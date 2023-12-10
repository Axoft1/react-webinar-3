import { memo } from "react";
import PropTypes from 'prop-types';
import { cn as bem } from '@bem-react/classname';
import { numberFormat, plural } from "../../utils";
import './style.css';
import useSelector from "../../store/use-selector";
import Navigation from "../navigation";

function BasketTool({ sum, amount, onOpen }) {
  const cn = bem('BasketTool');
  const select = useSelector(state => ({
    lg: state.languages.translation,
  }));
  return (
    <div className={cn()}>
      <Navigation/>
      <div>
        <span className={cn('label')}>{`${select.lg.in_a_basket}:`}</span>
        <span className={cn('total')}>
          {amount
            ? `${amount} ${plural(amount, {
              one: `${select.lg.product}`,
              few: `${select.lg.the_product}`,
              many: `${select.lg.products}`
            })} / ${numberFormat(sum)} ₽`
            : `${select.lg.empty}`
          }
        </span>
        <button onClick={onOpen}>{`${select.lg.go_over}`}</button>
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
