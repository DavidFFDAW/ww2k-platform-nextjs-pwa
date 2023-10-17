import spinnerCss from './spinner.module.css';

interface ClassNameInterface {
    className?: string;
}

export function ComponentSpinner({ className }: ClassNameInterface) {
    const css = className
        ? `w1 flex center al-center component-spinner-ch4478asdw ${className}`
        : 'w1 flex center al-center component-spinner-ch4478asdw';

    return (
        <div className={css}>
            <div className={`${spinnerCss.spinner} ${spinnerCss.small}`}></div>
        </div>
    );
}

export function DarkSpinner({ className }: ClassNameInterface) {
    return (
        <div className={`w1 flex center al-center component-spinner-ch4478asdw ${className}`}>
            <div className={`${spinnerCss.spinner} ${spinnerCss.small} ${spinnerCss.dark}`}></div>
        </div>
    );
}