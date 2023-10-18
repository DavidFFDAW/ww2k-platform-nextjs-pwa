export function PageBackground({ custom, children }) {
    const className = Boolean(custom) ? `custom-totalpage-wallpaper ${custom}` : 'custom-totalpage-wallpaper default';

    return (
        <>
            <div className={className}>{children}</div>
        </>
    );
}
