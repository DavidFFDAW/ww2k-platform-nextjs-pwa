import React from 'react';

export default function Button({ text, type, className, onClick, disabled = false, alt }) {
    const buttonType = type || 'button';
    const buttonClass = className ? `btn button ${className}` : 'btn button';
    const altAndTitle = alt ? alt : 'Default action button';

    return (
        <button
            disabled={disabled}
            className={buttonClass}
            role="button"
            type={buttonType}
            onClick={onClick}
            alt={altAndTitle}
            title={altAndTitle}
        >
            {text}
        </button>
    );
}

export function ButtonCTA({ text, type, onClick, disabled = false }) {
    return (
        <Button
            disabled={disabled}
            text={text}
            type={type}
            onClick={onClick}
            className={'cta'}
            alt="Call to action button"
        />
    );
}

export function ButtonSecondary({ text, type, onClick, disabled = false }) {
    return (
        <Button
            disabled={disabled}
            text={text}
            type={type}
            onClick={onClick}
            className={'cta-secondary'}
            alt="Secondary button call to action"
        />
    );
}

export function InfoButton({ text, type, onClick, disabled = false }) {
    return (
        <Button
            disabled={disabled}
            text={text}
            type={type}
            onClick={onClick}
            className={'action-button info-action'}
            alt="Action button info blue"
        />
    );
}

export function DangerButton({ text, type, onClick, disabled = false }) {
    return (
        <Button
            disabled={disabled}
            text={text}
            type={type}
            onClick={onClick}
            className={'action-button danger-action'}
            alt="Action button danger red"
        />
    );
}
export function BlackButton({ text, type, onClick, disabled = false }) {
    return (
        <Button
            disabled={disabled}
            text={text}
            type={type}
            onClick={onClick}
            className={'action-button black-color-action'}
            alt="Action button black"
        />
    );
}

export function GreyButton({ text, type, onClick, disabled = false }) {
    return (
        <Button
            disabled={disabled}
            text={text}
            type={type}
            onClick={onClick}
            className={'action-button default-action'}
            alt="Action button default grey"
        />
    );
}

export function UnbuttonButton({ text, type, onClick, disabled = false }) {
    return (
        <Button
            disabled={disabled}
            text={text}
            type={type}
            onClick={onClick}
            className={'unbutton'}
            alt="Unbutton button not button appeareance"
        />
    );
}
