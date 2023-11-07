import { NullableLoading } from "@/components/Loading";

interface DialogProps {
    visible: boolean;
    toggleVisibility: (visible?: boolean) => void;
    children: React.ReactNode;
}

export default function Dialog({ visible, toggleVisibility, children }: DialogProps) {
    return (
        <>
            <NullableLoading condition={visible}>
                <div className="background-action-block" onClick={() => toggleVisibility(false)}></div>

                <dialog open={visible} className="dialog-modal animate__animated animate__backInUp">
                    <header className="dialog-header">
                        <button className="dialog-close-button" type="button" onClick={() => toggleVisibility(false)}>
                            &times;
                        </button>
                    </header>
                    <section className="dialog-content">{children}</section>
                </dialog>
            </NullableLoading>
        </>
    );
}