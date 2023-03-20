import React from 'react';

export default function BackgroundPage({ children }) {
    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                backgroundImage: 'url(/wallpaper.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {children}
        </div>
    );
}
