import React, {Fragment} from 'react';
import BackDrop from "../Backdrop/Backdrop";
import Iframe from 'react-iframe'

import './Modal.css';


const Modal = props => {
    return (
        <Fragment>
            <BackDrop show={props.show} onClick={props.close}/>
            <div
                className="Modal"
                style={
                    {
                        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: props.show ? '1' : '0'
                    }
                }>
                <button onClick={props.close}>X</button>
                <Iframe width="540" height="315" src={props.link} frameBorder="0"
                        allow="autoplay; fullscreen; encrypted-media; gyroscope; picture-in-picture"
                       />
            </div>
        </Fragment>
    );
};

export default Modal;
