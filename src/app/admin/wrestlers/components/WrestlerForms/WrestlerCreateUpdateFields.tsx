import React from "react";
import { ButtonCTA } from "@/components/Buttons/Buttons";
import {
    BrandSelect,
    ImageInput,
    Input,
    InputSelect,
} from "@/components/Forms";
import { Wrestler } from "@prisma/client";
import { initialWrestler } from "../../models/wrestler.model";

interface Props {
    wrestler?: Wrestler;
}

export default function WrestlerCreateUpdateFields({ wrestler }: Props) {
    const wrestlerData = wrestler || initialWrestler;

    return (
        <>
            <div className="w1 boxed">
                <h2 className="space-down">Datos Generales</h2>
                <div className="w1 flex column al-start gap-small">
                    <Input
                        type="text"
                        label="Nombre"
                        name="name"
                        placeholder="Nombre de wrestler"
                        value={wrestlerData.name as string}
                    />
                    <Input
                        type="text"
                        label="Alias"
                        name="alias"
                        placeholder="Alias de wrestler"
                        value={wrestlerData.alias as string}
                    />
                    <Input
                        type="text"
                        label="Finisher"
                        name="finisher"
                        placeholder="Finisher de wrestler"
                        value={wrestlerData.finisher}
                    />
                    <Input
                        type="number"
                        label="Media"
                        name="overall"
                        placeholder="Overall de wrestler"
                        value={wrestlerData.overall as unknown as string}
                    />

                    <InputSelect
                        label="Sexo"
                        name="sex"
                        value={wrestlerData.sex}
                    >
                        <option>--</option>
                        <option value="M">Hombre</option>
                        <option value="F">Mujer</option>
                    </InputSelect>
                </div>
            </div>

            <div className="w1 boxed">
                <h2 className="space-down">Datos de Estado</h2>
                <div className="w1 flex column al-start gap-small">
                    <InputSelect
                        label="Tipo de competición"
                        value={wrestlerData.is_tag ? "1" : "0"}
                        name="is_tag"
                    >
                        <option>--</option>
                        <option value="0">Individual</option>
                        <option value="1">Tag Team</option>
                    </InputSelect>
                    <InputSelect
                        label="Kayfabe Status"
                        name="kayfabe"
                        value={wrestlerData.kayfabe_status}
                    >
                        <option>--</option>
                        <option value="face">Face</option>
                        <option value="heel">Heel</option>
                    </InputSelect>
                    <InputSelect
                        label="Estado"
                        name="status"
                        value={wrestlerData.status.trim()}
                    >
                        <option value="active">En activo</option>
                        <option value="released">Despedido</option>
                        <option value="retired">Retirado</option>
                        <option value="not-active">No activo</option>
                        <option value="manager">Manager</option>
                        <option value="semi-active">Semi-activo</option>
                    </InputSelect>

                    <BrandSelect
                        label="Marca"
                        name="brand"
                        value={wrestlerData.brand}
                    />
                </div>
            </div>

            <div className="w1 boxed">
                <h2 className="space-down">Datos de Twitter</h2>
                <div className="w1 flex column al-start gap-small">
                    <Input
                        placeholder="Nombre de cuenta de twitter"
                        type="text"
                        label="Nombre Twitter"
                        name="twitter_name"
                        value={wrestlerData.twitter_name as string}
                    />
                    <Input
                        placeholder="@ de cuenta de twitter"
                        type="text"
                        label="@ Cuenta de Twitter"
                        name="twitter_account"
                        value={wrestlerData.twitter_acc as string}
                    />
                </div>
            </div>

            <div className="w1 boxed desktop-mt-72a">
                <h2 className="space-down">Imágenes</h2>
                <div className="w1 flex column al-start gap-small">
                    <div className="w1 flex start al-center gap-small">
                        <ImageInput
                            imageSrc={wrestlerData.image_name as string}
                            name="app_image"
                            placeholder="Imagen de App"
                        />
                    </div>
                    <div className="w1 flex start al-center gap-small">
                        <ImageInput
                            imageSrc={wrestlerData.twitter_image as string}
                            name="twitter_image"
                            placeholder="Imagen para Twitter"
                        />
                    </div>
                </div>
            </div>

            <div className="fixed-button">
                <ButtonCTA type={"submit"} text={"Guardar cambios"} />
            </div>
        </>
    );
}
