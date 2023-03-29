export default function BackgroundPage({ src, children }) {
    const imageBg = src || '/wlp2.jpg';
    return (
        <div
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundImage: `url(${imageBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {children}
        </div>
    );
}
