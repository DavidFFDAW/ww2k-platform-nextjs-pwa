import React, { useState } from 'react';
import { ButtonCTA, ButtonSecondary } from './Buttons/Buttons';
import { NullableLoading } from './Loading';
import Popup from './Modal/Popup';

export default function CookieAccept() {
    const [showPopup, setShowPopup] = useState<boolean>(true);
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
                    <ButtonSecondary text={'Rechazar'} type={'button'} />
                    <ButtonCTA text={'Aceptar'} type={'button'} onClick={setShownt} />
                </div>
            </Popup>
        </>
    );
}
