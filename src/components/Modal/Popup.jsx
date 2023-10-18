import React from 'react';
import { NullableLoading } from '../Loading/LoadingComponent';
import './popup.css';

export default function Popup({ show, title, top = true, bottom = false, children }) {
    const styles = {
        position: 'fixed',
        left: 0,
        zIndex: 999,
    };

    const key = Boolean(bottom) ? 'bottom' : 'top';
    styles[key] = 0;

    return (
        <NullableLoading condition={show}>
            <div className="popup-container w1 flex center column animate__animated animate__fadeInDown" style={styles}>
                <h3 className="popup-title">{title}</h3>
                <div className="popup-content">{children}</div>
            </div>
        </NullableLoading>
    );
}
