interface PageBackgroundProps {
    custom?: string;
    children?: React.ReactNode;
}

function PageBackground({ custom, children }: PageBackgroundProps) {
    const className = Boolean(custom) ? `custom-totalpage-wallpaper ${custom}` : 'custom-totalpage-wallpaper default';

    return (
        <>
            <div className={className}>{children}</div>
        </>
    );
}

export default PageBackground;