import ImagePreview from '@/components/Forms/ImagePreview';
import UpsertInput, { UpsertImage, UpsertSelect } from '@/components/Forms/FormInputs';

export default function UpsertDatas() {
    return (
        <div className="w1 flex column al-start gap-small">
            <UpsertInput type="text" label="Nombre" name="name" placeholder='Nombre de wrestler' />
            <UpsertInput type="text" label="Alias" name="alias" placeholder='Alias de wrestler' />
            <UpsertInput type="text" label="Finisher" name="finisher" placeholder='Finisher de wrestler' />
            <UpsertInput type="number" label="Media" name="overall" placeholder='Overall de wrestler' />

            <UpsertSelect label="Sexo" name="sex">
                <option>--</option>
                <option value="M">Hombre</option>
                <option value="F">Mujer</option>
            </UpsertSelect>
        </div>
    );
}

export function UpsertDatasState() {
    return (
        <div className="w1 flex column al-start gap-small">
            <UpsertSelect label="Tipo de competición" value={'0'} name="is_tag">
                <option>--</option>
                <option value="0">Individual</option>
                <option value="1">Tag Team</option>
            </UpsertSelect>
            <UpsertSelect label="Kayfabe Status" name="kayfabe">
                <option>--</option>
                <option value="face">Face</option>
                <option value="heel">Heel</option>
            </UpsertSelect>
            <UpsertSelect label="Estado" name="status">
                <option>--</option>
                <option value="released">Despedido</option>
                <option value="not-active">No activo</option>
                <option value="manager">Manager</option>
                <option value="semi-active">Semi-activo</option>
                <option value="active">En activo</option>
            </UpsertSelect>

            <UpsertSelect label="Marca" name="brand">
                <option>--</option>
                <option value="RAW">RAW</option>
                <option value="SD">SmackDown Live</option>
                {/* <option value="NXT">NXT 2.0</option> */}
                {/* <option value="205">205 Live</option> */}
                <option value="AWL">All Womens League (AWL)</option>
            </UpsertSelect>
        </div>
    );
}

export function UpsertImages() {
    return (
        <div className="w1 flex column al-start gap-small">
            <div className="w1 flex start al-center gap-small">
                <UpsertImage imageSrc='' name='app_image' placeholder='Imagen de App' />
            </div>
            <div className="w1 flex start al-center gap-small">
                <UpsertImage imageSrc='' name='twitter_image' placeholder='Imagen para Twitter' />
            </div>
        </div>
    );
}

export function UpsertTwitter() {
    return (
        <div className="w1 flex column al-start gap-small">
            <UpsertInput placeholder='Nombre de cuenta de twitter' type="text" label="Nombre Twitter" name="twitter_name" />
            <UpsertInput placeholder='@ de cuenta de twitter' type="text" label="@ Cuenta de Twitter" name="twitter_account" />
        </div>
    );
}