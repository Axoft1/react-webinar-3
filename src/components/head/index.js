import React from "react";
import PropTypes from "prop-types";
import './style.css';

function Head({ title, handleShow }) {
  return (
    <div className='Head'>
      <h1>{title}</h1>
      {handleShow && <div className="Head-action">
        <button onClick={handleShow}>Закрыть</button>
      </div>}
      {/* <div className='Modal-header'>
                    <h3 className='Modal-title'>{title}</h3>
                    <button onClick={() => onShow()}>Закрыть</button>
      </div> */}
    </div>
  )
}

Head.propTypes = {
  title: PropTypes.node,
};

export default React.memo(Head);
