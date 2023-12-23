import React from "react";
import { ButtonCTA } from "@/components/Buttons/Buttons";
import { BrandSelect, ImageInput, Input } from "@/components/Forms";
import { Wrestler } from "@prisma/client";
import { initialWrestler } from "../../models/wrestler.model";
import WrestlerStatusSelect from "./WrestlerStatus/WrestlerStatusSelect";
import CustomClickableSelect from "@/components/Forms/Inputs/CustomClickableSelect";

interface Props {
    wrestler?: Wrestler;
}

export default function WrestlerCreateUpdateFields({ wrestler }: Props) {
    const wrestlerData = wrestler || initialWrestler;

    return (
        <>
            <div className="w1 boxed">
                <div className="w1 flex column astart gap">
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

                    <CustomClickableSelect
                        label="Sexo"
                        name="sex"
                        columns={2}
                        list={[
                            { value: "M", label: "Hombre" },
                            { value: "F", label: "Mujer" },
                        ]}
                        value={wrestlerData.sex}
                    />
                </div>
            </div>

            <div className="w1 boxed">
                <div className="w1 flex column astart gap">
                    <CustomClickableSelect
                        label="Tipo de competición"
                        name="is_tag"
                        columns={2}
                        list={[
                            { value: false, label: "Individual" },
                            { value: true, label: "Tag Team" },
                        ]}
                        value={wrestlerData.is_tag as boolean}
                    />

                    <CustomClickableSelect
                        label="Kayfabe Status"
                        name="kayfabe"
                        columns={2}
                        list={[
                            { value: "face", label: "Face" },
                            { value: "heel", label: "Heel" },
                        ]}
                        value={wrestlerData.kayfabe_status}
                    />

                    <WrestlerStatusSelect
                        label="Estado"
                        name="status"
                        value={wrestlerData.status.trim()}
                    />

                    <BrandSelect
                        label="Marca"
                        name="brand"
                        value={wrestlerData.brand}
                    />
                </div>
            </div>

            <div className="w1 boxed">
                <div className="w1 flex column astart gap">
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

            <div className="w1 boxed">
                <div className="w1 flex column astart gap">
                    <div className="w1 flex start al-center gap-small">
                        <ImageInput
                            required={false}
                            label="Imagen de App"
                            imageSrc={wrestlerData.image_name as string}
                            name="app_image"
                            placeholder="Imagen de App"
                        />
                    </div>
                    <div className="w1 flex start al-center gap-small">
                        <ImageInput
                            required={false}
                            label="Imagen para Twitter"
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
