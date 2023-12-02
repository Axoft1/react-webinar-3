import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Head from '../head';

function Modal({ children, title, onShow, show }) {
    return (
        <div onClick={() => onShow()} className={'Modal ' + (show ? 'Modal-show' : ' ')}>
            <div onClick={event => event.stopPropagation()} className='Modal-wrapper'>
                <Head title={title} handleShow={onShow}/>                
                {children}
            </div>
        </div>
    )
}

Modal.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    onClose: PropTypes.func,
    isOpen: PropTypes.bool
};



export default Modal;