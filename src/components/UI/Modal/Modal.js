import React, {Fragment} from 'react';
import BackDrop from "../Backdrop/Backdrop";
import ReactPlayer from 'react-player'

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
                <ReactPlayer url={props.link} playing width="95%"/>

            </div>
        </Fragment>
    );
};

export default Modal;
