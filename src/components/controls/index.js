import {memo} from "react";
import PropTypes from 'prop-types';
import './style.css';
import useLanguage from "../../utils/useLanguage";

function Controls({onAdd}) {
  const t = useLanguage('lg')
  return (
    <div className='Controls'>
      <button onClick={() => onAdd()}>{t('add')}</button>
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
