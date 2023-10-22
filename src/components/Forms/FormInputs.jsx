// import { UnbuttonButton } from "../Buttons/Buttons";
// import Image from "../Image/Image";
// import { FlexStart } from "../Layouts/Flex";
// import { NullableLoading } from "../Loading/LoadingComponent";
// import { ComponentSpinner } from "../Spinner/Spinner";
'use client';
import { useState } from 'react';
import './toggle.css';
import Image from '../Image/Image';

export default function UpsertInput({
    type,
    max = 100,
    label,
    name,
    value = '',
    placeholder = 'Default placeholder',
    required = false,
}) {
    return (
        <div className="w1 flex column gap-5">
            <label className="label">{label}</label>
            <div className="input-wrapper-container-div relative">
                <input
                    className="w1"
                    maxLength={max}
                    type={type || 'text'}
                    name={name}
                    required={required}
                    defaultValue={value}
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
}

export function UpsertSelect({ children, label, name, value = '', required = false }) {
    return (
        <div className="w1 flex column gap-5">
            <label className="label">{label}</label>

            <div className="input-wrapper-container-div relative">
                <select className="w1 custom" name={name} defaultValue={value} required={required}>
                    {children}
                </select>

                {/* <NullableLoading condition={formState.loading}>
                    <ComponentSpinner className="input-loading-spinner" />
                </NullableLoading> */}
            </div>
        </div>
    );
}

export function UpsertTextArea({ label, name, value = '', required = false, rows = 5 }) {
    return (
        <div className="w1 flex column gap-5">
            <label className="label">{label}</label>
            <textarea className="w1 custom input" name={name} rows={rows} defaultValue={value} required={required} />
        </div>
    );
}

export function UpsertToggle({ name, checked = false, label }) {
    return (
        <div className="custom-toggle-switch flex column center al-center">
            <label className="form-label block">{label}</label>
            <label className="switch block">
                <input type="checkbox" name={name} defaultChecked={checked || false} />
                <span className="slider round"></span>
            </label>
        </div>
    );
}

export function UpsertDate({
    min = '2020-01-01',
    max = '2030-12-31',
    label,
    name,
    required = false,
    value = new Date().toISOString().split('T')[0],
}) {
    return (
        <div className="w1 flex column gap-5">
            <label className="label">{label}</label>
            <input
                min={min}
                max={max}
                className="w1 date-input"
                type="date"
                name={name}
                required={required}
                defaultValue={value}
            />
        </div>
    );
}

export function InputWithDeleteButton({ type, max = 100, label, name, value = '', required = false }) {
    return (
        <div className="flex start gap-smaller acenter">
            <div className="w1 flex column gap-5">
                <label className="label">{label}</label>
                <div className="flex al-center gap-smaller">
                    <input
                        className="w1"
                        maxLength={max}
                        type={type || 'text'}
                        name={name}
                        required={required}
                        defaultValue={value}
                    />
                </div>
            </div>
        </div>
    );
}

export function CheckboxInput({ label, name, checked = false }) {
    return (
        <div className="w1">
            <label className="flex gap-5">
                <input type="checkbox" name={name} defaultChecked={checked} />
                {label}
            </label>
        </div>
    );
}

export function UpsertImage({ placeholder = 'Imagen', name = 'image', imageSrc = '' }) {
    const [image, setImage] = useState(imageSrc);

    const size = 100;
    const handleImageChange = e => {
        const image = e.target.value;
        setImage(image);
    };

    return (
        <div className="w1 flex between al-center gap-small">
            <Image width={size} height={size} src={image} alt="post banner image preview" />
            <div className="w1">
                <input
                    className="w1"
                    maxLength={255}
                    type={'text'}
                    name={name}
                    required={true}
                    defaultValue={image}
                    placeholder={placeholder}
                    onChange={handleImageChange}
                />
            </div>
        </div>
    );
}
