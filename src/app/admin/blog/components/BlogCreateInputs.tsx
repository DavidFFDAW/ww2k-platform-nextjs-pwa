import UpsertInput, {
    UpsertDate,
    UpsertImage,
    UpsertTextArea,
    UpsertToggle,
} from "@/components/Forms/FormInputs";

export default function BlogDatas() {
    return (
        <div className="w1 flex column al-start gap-small">
            <UpsertInput
                type="text"
                label="Título"
                name="title"
                required={true}
                placeholder="Titulo de la noticia"
            />

            <UpsertImage placeholder="Imagen de la noticia" name="image" />

            <UpsertTextArea
                label={"Contenido"}
                name={"content"}
                required={true}
                rows={10}
            />
            <UpsertDate
                label={"Fecha de publicacion"}
                name={"date_publication"}
                required={true}
            />
        </div>
    );
}

export function BlogStatus() {
    return (
        <div className="w1 flex column al-start gap-small">
            <div className="w1 flex evenly al-center gap">
                <UpsertToggle label="Publicado" name="published" />
                <UpsertToggle label="¿Se puede borrar?" name="is_deletable" />
            </div>
        </div>
    );
}
