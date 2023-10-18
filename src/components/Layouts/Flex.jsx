import React from 'react';

function Flex({ justify, align, direction, gap, className, style, children }) {
    const gaps = {
        small: 15,
        smaller: 10,
        gap: 35,
    };
    const justifyClass = justify ? justify : 'center';
    const alignClass = align ? `${align}` : 'center';
    const directionClass = direction || 'row';

    const customGap = gaps[gap] ? gaps[gap] : Number(gap);
    const gapClass = Boolean(gap) ? customGap : gaps.gap;

    const totalCss = {
        ...style,
        width: '100%',
        display: 'flex',
        justifyContent: justifyClass,
        alignItems: alignClass,
        flexDirection: directionClass,
        gap: gapClass,
    };
    // const componentCssClass = `w1 flex ${justifyClass} al-${alignClass} ${direction ? `flex-${direction}` : ''} ${
    //     gap ? `gap-${gap}` : ''
    // } ${className ? className : ''}`;

    return (
        <div className={className} style={totalCss}>
            {children}
        </div>
    );
}

export function FlexCenter({ align, direction, gap, className, style, children }) {
    return (
        <Flex justify={'center'} align={align} direction={direction} gap={gap} className={className} style={style}>
            {children}
        </Flex>
    );
}

export function FlexBetween({ align, direction, gap, className, style, children }) {
    return (
        <Flex justify={'space-between'} align={align} direction={direction} gap={gap} className={className} style={style}>
            {children}
        </Flex>
    );
}

export function FlexStart({ align, direction, gap, className, style, children }) {
    return (
        <Flex justify={'start'} align={align} direction={direction} gap={gap} className={className} style={style}>
            {children}
        </Flex>
    );
}

export function FlexEnd({ align, direction, gap, className, style, children }) {
    return (
        <Flex justify={'end'} align={align} direction={direction} gap={gap} className={className} style={style}>
            {children}
        </Flex>
    );
}
