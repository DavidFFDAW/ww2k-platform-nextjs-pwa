import React, { useState } from 'react';
import Popup from './Modal/Popup';
import { ButtonCTA, ButtonSecondary } from './Buttons/Buttons';
import { NullableLoading } from './Loading/LoadingComponent';

export default function CookieAccept() {
    console.log(document.cookie);
    const [showPopup, setShowPopup] = useState(true);
    const setShownt = () => setShowPopup(p => !p);

    return (
        <>
            <NullableLoading condition={showPopup}>
                <div className="background-action-block"></div>
            </NullableLoading>
            <Popup title={'Este sitio utiliza cookies'} bottom show={showPopup}>
                <p>
                    Este sitio utiliza cookies propias y ninguna de terceros para asegurar el correcto funcionamiento de
                    la aplicación
                </p>
                <div className="down flex between acenter">
                    <ButtonSecondary text={'Rechazar'} />
                    <ButtonCTA text={'Aceptar'} onClick={setShownt} />
                </div>
            </Popup>
        </>
    );
}
