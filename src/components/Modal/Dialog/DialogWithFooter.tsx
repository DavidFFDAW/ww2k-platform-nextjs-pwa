import { NullableLoading } from "@/components/Loading";

interface DialogWithFooterProps {
    visible: boolean;
    toggleVisibility: (visible?: boolean) => void;
    children: React.ReactNode;
    footer: React.ReactNode;
};

export function DialogWithFooter({ visible, toggleVisibility, children, footer }: DialogWithFooterProps) {
    return (
        <>
            <NullableLoading condition={visible}>
                <div className="background-action-block" onClick={() => toggleVisibility(false)}></div>
                <dialog open={visible} className="dialog-modal">
                    <header className="dialog-header">
                        <button className="dialog-close-button" type="button" onClick={() => toggleVisibility(false)}>
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