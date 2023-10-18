import Image from '../Image/Image';
import './spinner.css';

export default function Spinner() {
    const scss = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
    };

    return (
        <div className="w1 flex center animate__animated animate__pulse animate__infinite" style={scss}>
            <Image
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

export function SidebarSpinner() {
    const scss = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
    };

    return (
        <div className="sidebar-spinner-container relative" style={{ height: '98vh' }}>
            <div className="w1 flex center" style={scss}>
                <Image
                    src={'/icons/icon-152x152.png'}
                    alt="App champions logo"
                    title="App loading logo"
                    draggable={false}
                    width={152}
                    height={152}
                />
            </div>
        </div>
    );
}

export function ComponentSpinner({ className }) {
    const css = className
        ? `w1 flex center al-center component-spinner-ch4478asdw ${className}`
        : 'w1 flex center al-center component-spinner-ch4478asdw';

    return (
        <div className={css}>
            <div className="spinner small"></div>
        </div>
    );
}

export function DarkSpinner({ className }) {
    return (
        <div className={`w1 flex center al-center component-spinner-ch4478asdw ${className}`}>
            <div className="dark spinner small"></div>
        </div>
    );
}
