import React from 'react';

export default function BackgroundPage({ children }) {
    return (
        <div
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
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
