import { ImageInput, Input, InputSelect } from "@/components/Forms";
import GalleryModule from "@/modules/gallery/GalleryModule";

export default function UpsertDatas() {
    return (
        <div className="w1 flex column al-start gap-small">
            <Input
                type="text"
                label="Nombre"
                name="name"
                placeholder="Nombre de wrestler"
            />
            <Input
                type="text"
                label="Alias"
                name="alias"
                placeholder="Alias de wrestler"
            />
            <Input
                type="text"
                label="Finisher"
                name="finisher"
                placeholder="Finisher de wrestler"
            />
            <Input
                type="number"
                label="Media"
                name="overall"
                placeholder="Overall de wrestler"
            />

            <InputSelect label="Sexo" name="sex">
                <option>--</option>
                <option value="M">Hombre</option>
                <option value="F">Mujer</option>
            </InputSelect>
        </div>
    );
}

export function UpsertDatasState() {
    return (
        <div className="w1 flex column al-start gap-small">
            <InputSelect label="Tipo de competición" value={"0"} name="is_tag">
                <option>--</option>
                <option value="0">Individual</option>
                <option value="1">Tag Team</option>
            </InputSelect>
            <InputSelect label="Kayfabe Status" name="kayfabe">
                <option>--</option>
                <option value="face">Face</option>
                <option value="heel">Heel</option>
            </InputSelect>
            <InputSelect label="Estado" name="status">
                <option>--</option>
                <option value="active">En activo</option>
                <option value="released">Despedido</option>
                <option value="retired">Retirado</option>
                <option value="not-active">No activo</option>
                <option value="manager">Manager</option>
                <option value="semi-active">Semi-activo</option>
            </InputSelect>

            <InputSelect label="Marca" name="brand">
                <option>--</option>
                <option value="RAW">RAW</option>
                <option value="SD">SmackDown Live</option>
                {/* <option value="NXT">NXT 2.0</option> */}
                {/* <option value="205">205 Live</option> */}
                <option value="AWL">All Womens League (AWL)</option>
            </InputSelect>
        </div>
    );
}

export function UpsertImages() {
    return (
        <div className="w1 flex column al-start gap-small">
            <div className="w1 flex start al-center gap-small">
                <ImageInput
                    imageSrc=""
                    name="app_image"
                    placeholder="Imagen de App"
                />
            </div>
            <div className="w1 flex start al-center gap-small">
                <ImageInput
                    imageSrc=""
                    name="twitter_image"
                    placeholder="Imagen para Twitter"
                />
            </div>
        </div>
    );
}

export function UpsertTwitter() {
    return (
        <div className="w1 flex column al-start gap-small">
            <Input
                placeholder="Nombre de cuenta de twitter"
                type="text"
                label="Nombre Twitter"
                name="twitter_name"
            />
            <Input
                placeholder="@ de cuenta de twitter"
                type="text"
                label="@ Cuenta de Twitter"
                name="twitter_account"
            />
        </div>
    );
}
