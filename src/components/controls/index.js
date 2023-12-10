import {memo} from "react";
import PropTypes from 'prop-types';
import './style.css';
import useSelector from "../../store/use-selector";

function Controls({onAdd}) {
  const select = useSelector(state => ({
    lg: state.languages.translation,
  }));
  return (
    <div className='Controls'>
      <button onClick={() => onAdd()}>{`${select.lg.add}`}</button>
    </div>
  )
}

Controls.propTypes = {
  onAdd: PropTypes.func
};

Controls.defaultProps = {
  onAdd: () => {}
}

export default memo(Controls);
