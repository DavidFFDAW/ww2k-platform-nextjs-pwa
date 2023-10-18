import React from 'react';
import { NullableLoading } from '../Loading/LoadingComponent';

export default function Dialog({ visible, toggleVisibility, children }) {

    return (
        <>
            <NullableLoading condition={visible}>
                <div className="background-action-block" onClick={_ => toggleVisibility(false)}></div>

                <dialog open={visible} className="dialog-modal animate__animated animate__backInUp">
                    <header className="dialog-header">
                        <button className="dialog-close-button" type="button" onClick={toggleVisibility}>
                            &times;
                        </button>
                    </header>
                    <section className="dialog-content">{children}</section>
                </dialog>
            </NullableLoading>
        </>
    );
}

export function DialogWithFooter({ visible, toggleVisibility, children, footer }) {
    return (
        <>
            <NullableLoading condition={visible}>
                <div className="background-action-block" onClick={toggleVisibility}></div>
                <dialog open={visible} className="dialog-modal">
                    <header className="dialog-header">
                        <button className="dialog-close-button" type="button" onClick={toggleVisibility}>
                            &times;
                        </button>
                    </header>
                    <section className="dialog-content">{children}</section>

                    <footer className="flex end dialog-footer">{footer}</footer>
                </dialog>
            </NullableLoading>
        </>
    );
}
