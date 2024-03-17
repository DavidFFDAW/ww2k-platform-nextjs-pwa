// import spinnerCss from './spinner.module.css';
import './spinner.css';

interface ClassNameInterface {
    className?: string;
}

export default function Spinner() {
    const scss: any = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
    };

    return (
        <div className="w1 flex center animate__animated animate__pulse animate__infinite" style={scss}>
            <img
                src={'/icons/icon-152x152.png'}
                alt="App champions logo"
                title="App loading logo"
                draggable={false}
                width={152}
                height={152}
            />
        </div>
    );
}

export function ComponentSpinner({ className }: ClassNameInterface) {
    const css = className
        ? `w1 flex center acenter component-spinner-ch4478asdw ${className}`
        : 'w1 flex center acenter component-spinner-ch4478asdw';

    return (
        <div className={css}>
            <div className="spinner small"></div>
        </div>
    );
}

export function CenteredSpinner({ className }: ClassNameInterface) {
    return (
        <div className={`w1 flex center acenter absolute absolutespinner component-spinner-ch4478asdw ${className}`}>
            <div className="spinner small"></div>
        </div>
    );
}

export function DarkSpinner({ className }: ClassNameInterface) {
    return (
        <div className={`w1 flex center acenter component-spinner-ch4478asdw ${className}`}>
            <div className="spinner small dark"></div>
        </div>
    );
}

export function AdaptativeSpinner() {
    return (
        <div className="w1 flex center acenter adaptative-loading-spinner-state">
            <div className="w1 adaptative-spinner"></div>
        </div>
    );
}
