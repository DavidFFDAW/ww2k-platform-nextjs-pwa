import { ComponentSpinner } from "../Spinner/Spinner";

export function LengthLoading({ list, children, fallback }) {
    const fallbackComponent = fallback || <ComponentSpinner />;
    return (
        <>
            {list.length > 0 ? (
                children
            ) : (
                fallbackComponent
            )}
        </>
    )
}

export function ConditionalLoading({ children, condition, fallback }) {
    const fallbackComponent = fallback || <ComponentSpinner />;
    return (
        <>
            {condition ? (
                children
            ) : (
                fallbackComponent
            )}
        </>
    )
}

export function NullableLoading({ children, condition }) {
    const fallbackComponent = null;
    return (
        <>
            {condition ? (
                children
            ) : (
                fallbackComponent
            )}
        </>
    )
}
