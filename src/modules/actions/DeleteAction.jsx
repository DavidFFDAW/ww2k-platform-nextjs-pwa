import useHttp from '~/hooks/useHttp';
import { useState } from 'react';
import { DangerButton } from '../Buttons/Buttons';
import { NullableLoading } from '../Loading/LoadingComponent';
import { DialogWithFooter } from '../Modal/Dialog';
import { ColorTypes } from './Actions';

export function DeleteAction({ text, endpoint, toggler, stateUpdaterCallback, deleteId }) {
    const http = useHttp();
    const [showModal, setModal] = useState(false);
    const toggleModal = _ => setModal(pr => !pr);

    const deleteItem = _ => {
        toggleModal();
        http.APIDelete(endpoint, {
            success: 'Se ha borrado correctamente',
        })
            .then(stateUpdaterCallback)
            .then(toggler);
    };

    const footer = <DangerButton type={'button'} text={'Borrar'} onClick={deleteItem} />;

    return (
        <>
            <NullableLoading condition={showModal}>
                <DialogWithFooter visible={showModal} toggleVisibility={toggleModal} footer={footer}>
                    ¿ Estás seguro de que quieres borrar este item ?
                </DialogWithFooter>
            </NullableLoading>

            <div className={`flex start al-center gap-small action-link ${ColorTypes.DELETE}`} onClick={toggleModal}>
                <div className="icon-wrapper">
                    <TrashIcon fill={'#d80000'} />
                </div>
                <h4 className="action-text">{text}</h4>
            </div>
        </>
    );
}
