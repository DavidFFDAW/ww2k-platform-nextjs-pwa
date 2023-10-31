import { Input, InputDate, ImageInput, Textarea, ToggleInput } from "@/components/Forms";

export default function BlogDatas() {
    return (
        <div className="w1 flex column al-start gap-small">
            <Input
                type="text"
                label="Título"
                name="title"
                required={true}
                placeholder="Titulo de la noticia"
            />

            <ImageInput placeholder="Imagen de la noticia" name="image" />

            <Textarea
                label={"Contenido"}
                name={"content"}
                required={true}
                rows={10}
            />
            <InputDate
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
                <ToggleInput label="Publicado" name="published" />
                <ToggleInput label="¿Se puede borrar?" name="is_deletable" />
            </div>
        </div>
    );
}
