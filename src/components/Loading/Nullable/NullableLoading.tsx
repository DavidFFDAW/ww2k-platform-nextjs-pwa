interface NullableLoadingProps {
    children: React.ReactNode;
    condition: boolean;
}

export function NullableLoading({ children, condition }: NullableLoadingProps) {
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
