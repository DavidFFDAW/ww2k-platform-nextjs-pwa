import { ComponentSpinner } from "@/components/Spinner/Spinner";

interface ConditionalLoadingProps {
    children: React.ReactNode;
    condition: boolean;
    fallback?: React.ReactNode;
}

export function ConditionalLoading({ children, condition, fallback }: ConditionalLoadingProps) {
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