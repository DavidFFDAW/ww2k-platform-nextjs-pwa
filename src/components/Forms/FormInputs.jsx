import { UnbuttonButton } from '../Buttons/Buttons';
import Image from '../Image/Image';
import { FlexStart } from '../Layouts/Flex';
import { NullableLoading } from '../Loading/LoadingComponent';
import { ComponentSpinner } from '../Spinner/Spinner';
import './toggle.css';

export default function UpsertInput({
    type,
    max,
    label,
    property,
    literalValue,
    formState,
    setFormState,
    onChangeCallback,
    placeholder = 'Default placeholder',
    required = false,
}) {
    const value = literalValue || formState[`${property}`] || '';
    const defaultChange = ev => setFormState({ ...formState, [property]: ev.target.value });
    const change = !setFormState && Boolean(onChangeCallback) ? onChangeCallback : defaultChange;

    return (
        <div className="w1 flex column gap-5">
            <label className="label">{label}</label>
            <div className="input-wrapper-container-div relative">
                <input
                    className="w1"
                    maxLength={max || 100}
                    type={type || 'text'}
                    name={property}
                    required={required}
                    value={value}
                    onChange={change}
                    placeholder={placeholder}
                />
                <NullableLoading condition={formState.loading}>
                    <ComponentSpinner className="input-loading-spinner" />
                </NullableLoading>
            </div>
        </div>
    );
}

export function UpsertSelect({
    children,
    label,
    property,
    formState,
    setFormState,
    defaultVal = '',
    required = false,
}) {
    const value = formState[`${property}`] || defaultVal;

    return (
        <div className="w1 flex column gap-5">
            <label className="label">{label}</label>

            <div className="input-wrapper-container-div relative">
                <select
                    className="w1 custom"
                    name={property}
                    value={value}
                    required={required}
                    onChange={ev => setFormState({ ...formState, [property]: ev.target.value })}
                >
                    {children}
                </select>

                <NullableLoading condition={formState.loading}>
                    <ComponentSpinner className="input-loading-spinner" />
                </NullableLoading>
            </div>
        </div>
    );
}

export function UpsertTextArea({ label, property, formState, setFormState, required = false, rows = 5 }) {
    return (
        <div className="w1 flex column gap-5">
            <label className="label">{label}</label>
            <textarea
                className="w1 custom input"
                name={property}
                value={formState[`${property}`]}
                rows={rows}
                required={required}
                onChange={ev => setFormState({ ...formState, [property]: ev.target.value })}
            />
        </div>
    );
}

export function UpsertToggle({ property, formState, setFormState, label }) {
    const isChecked = Boolean(formState[property]);
    const toggler = _ => setFormState(previous => ({ ...previous, [property]: !previous[property] }));

    return (
        <div className="custom-toggle-switch flex column center al-center">
            <label className="form-label block">{label}</label>
            <label className="switch block">
                <input type="checkbox" name={property} checked={isChecked || false} onChange={toggler} />
                <span className="slider round"></span>
            </label>
        </div>
    );
}

export function UpsertDate({ min, max, label, property, formState, setFormState, required = false }) {
    return (
        <div className="w1 flex column gap-5">
            <label className="label">{label}</label>
            <input
                min={min}
                max={max}
                className="w1 date-input"
                type="date"
                name={property}
                required={required}
                value={formState[`${property}`] || ''}
                onChange={ev => setFormState({ ...formState, [property]: ev.target.value })}
            />
        </div>
    );
}

export function InputWithDeleteButton({ type, max, label, property, formState, setFormState, required = false }) {
    const defaultChange = ev => setFormState({ ...formState, [property]: ev.target.value });
    return (
        <FlexStart align={'center'} gap="smaller">
            <div className="w1 flex column gap-5">
                <label className="label">{label}</label>
                <div className="flex al-center gap-smaller">
                    <input
                        className="w1"
                        maxLength={max || 100}
                        type={type || 'text'}
                        name={property}
                        required={required}
                        value={formState[`${property}`] || ''}
                        onChange={defaultChange}
                    />
                    <UnbuttonButton
                        text={<>&times;</>}
                        onClick={_ => setFormState(prev => ({ ...prev, [property]: '' }))}
                    />
                </div>
            </div>
        </FlexStart>
    );
}

export function CheckboxInput({ label, property, formState, defaultChecked, setFormState }) {
    const checked = formState[`${property}`] || Boolean(defaultChecked);

    return (
        <div className="w1">
            <label className="flex gap-5">
                <input
                    type="checkbox"
                    name={property}
                    checked={checked}
                    onChange={_ => setFormState(previous => ({ ...previous, pagination: !previous.pagination }))}
                />
                {label}
            </label>
        </div>
    );
}

export function UpsertImage({ placeholder = 'Imagen', formState, setFormState, property = 'image' }) {
    const size = 100;
    const imageSrc = formState[property];

    return (
        <div className="w1 flex between al-center gap-small">
            <Image width={size} height={size} src={imageSrc}></Image>
            <div className="w1">
                <UpsertInput
                    type={'text'}
                    formState={formState}
                    setFormState={setFormState}
                    property={property}
                    required={true}
                    max={255}
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
}
