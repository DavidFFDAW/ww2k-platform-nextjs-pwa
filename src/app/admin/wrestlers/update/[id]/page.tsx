import React from "react";
import { ButtonCTA } from "@/components/Buttons/Buttons";
import { Form, ImageInput, Input, InputSelect } from "@/components/Forms";
import { PageContext } from "@/shared/models";
import { getWrestlerByID } from "@/queries/wrestler.queries";
import { Metadata } from "next";
import { getNamedTitle } from "@/utilities/metadatas.utility";

export const metadata: Metadata = {
    title: getNamedTitle("Editar luchador"),
};

export default async function WrestlerUpdatePage({ params }: PageContext) {
    if (!params.id) return <h1>404</h1>;
    const wrestler = await getWrestlerByID(Number(params.id));
    if (!wrestler) return <h1>404</h1>;

    return (
        <Form
            className="grid two-column-grid astart responsive-grid gap"
            action={`/api/wrestlers/update/${wrestler.id}`}
            sendHttp={true}
            refresh={true}
            method="PUT"
        >
            <div className="w1 boxed">
                <h2 className="space-down">Datos Generales</h2>
                <div className="w1 flex column al-start gap-small">
                    <Input
                        type="text"
                        label="Nombre"
                        name="name"
                        placeholder="Nombre de wrestler"
                        value={wrestler.name as string}
                    />
                    <Input
                        type="text"
                        label="Alias"
                        name="alias"
                        placeholder="Alias de wrestler"
                        value={wrestler.alias as string}
                    />
                    <Input
                        type="text"
                        label="Finisher"
                        name="finisher"
                        placeholder="Finisher de wrestler"
                        value={wrestler.finisher}
                    />
                    <Input
                        type="number"
                        label="Media"
                        name="overall"
                        placeholder="Overall de wrestler"
                        value={wrestler.overall as unknown as string}
                    />

                    <InputSelect label="Sexo" name="sex" value={wrestler.sex}>
                        <option>--</option>
                        <option value="M">Hombre</option>
                        <option value="F">Mujer</option>
                    </InputSelect>
                </div>
            </div>

            <div className="w1 boxed">
                <h2 className="space-down">Datos de Estado</h2>
                <div className="w1 flex column al-start gap-small">
                    <InputSelect label="Tipo de competición" value={wrestler.is_tag ? '1' : '0'} name="is_tag">
                        <option>--</option>
                        <option value="0">Individual</option>
                        <option value="1">Tag Team</option>
                    </InputSelect>
                    <InputSelect label="Kayfabe Status" name="kayfabe" value={wrestler.kayfabe_status}>
                        <option>--</option>
                        <option value="face">Face</option>
                        <option value="heel">Heel</option>
                    </InputSelect>
                    <InputSelect label="Estado" name="status" value={wrestler.status}>
                        <option>--</option>
                        <option value="released">Despedido</option>
                        <option value="not-active">No activo</option>
                        <option value="manager">Manager</option>
                        <option value="semi-active">Semi-activo</option>
                        <option value="active">En activo</option>
                    </InputSelect>

                    <InputSelect label="Marca" name="brand" value={wrestler.brand}>
                        <option>--</option>
                        <option value="RAW">RAW</option>
                        <option value="SD">SmackDown Live</option>
                        {/* <option value="NXT">NXT 2.0</option> */}
                        {/* <option value="205">205 Live</option> */}
                        <option value="AWL">All Womens League (AWL)</option>
                    </InputSelect>
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
                        value={wrestler.twitter_name as string}
                    />
                    <Input
                        placeholder="@ de cuenta de twitter"
                        type="text"
                        label="@ Cuenta de Twitter"
                        name="twitter_account"
                        value={wrestler.twitter_acc as string}
                    />
                </div>
            </div>

            <div className="w1 boxed desktop-mt-72">
                <h2 className="space-down">Imágenes</h2>
                <div className="w1 flex column al-start gap-small">
                    <div className="w1 flex start al-center gap-small">
                        <ImageInput
                            imageSrc={wrestler.image_name as string}
                            name="app_image"
                            placeholder="Imagen de App"
                            maxLength={255}
                        />
                    </div>
                    <div className="w1 flex start al-center gap-small">
                        <ImageInput
                            imageSrc={wrestler.twitter_image as string}
                            name="twitter_image"
                            placeholder="Imagen para Twitter"
                            maxLength={255}
                        />
                    </div>
                </div>
            </div>

            <div className="fixed-button">
                <ButtonCTA type={"submit"} text={"Guardar cambios"} />
            </div>
        </Form>
    );
}
