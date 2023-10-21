"use client";
import { NullableLoading } from "@/components/Loading/LoadingComponent";
import { useRouter } from "next/navigation";
import { FilterIcon } from "@/components/Icons/CommonIcons";

import {
    CheckboxInput,
    InputWithDeleteButton,
    UpsertSelect,
} from "@/components/Forms/FormInputs";
import {
    BlackButton,
    ButtonCTA,
    ButtonSecondary,
} from "@/components/Buttons/Buttons";
import React from "react";

interface SearchFormProps {
    params: any;
}

export default function SearchForm({ params }: SearchFormProps) {
    console.log(params);

    const router = useRouter();
    const [showFilters, setShowFilters] = React.useState<boolean>(false);

    const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const query = new URLSearchParams(formData as any).entries();
        const nonEmptyParams = Array.from(query)
            .filter(([_, value]) => value !== "")
            .map(([key, value]) => `${key}=${value}`)
            .join("&");

        router.push("/admin/wrestlers?" + nonEmptyParams);
    };

    const handleShowFilters = () => {
        setShowFilters((prevState) => !prevState);
    };

    return (
        <form
            action=""
            method="GET"
            className="wrestlers-filters-list-container"
            onSubmit={handlerSubmit}
        >
            <div className="w1 down boxed flex center column gap-small padded al-center filters-block__content">
                <header className="w1 flex between acenter filter-header buttons">
                    <NullableLoading condition={showFilters}>
                        <BlackButton
                            type={"button"}
                            text={<>&times;</>}
                            onClick={(_: any) => setShowFilters(false)}
                        />
                    </NullableLoading>

                    <div className="w1 flex end gap-smaller">
                        <button
                            type="button"
                            className="filters"
                            onClick={handleShowFilters}
                        >
                            <FilterIcon w={20} h={25} />
                        </button>
                    </div>
                </header>

                <NullableLoading condition={showFilters}>
                    <div className="w1 flex column al-snBlackButtonart gap-5 filters">
                        <InputWithDeleteButton
                            label={"Nombre"}
                            type="text"
                            name={"name"}
                            value={params.name}
                        />
                    </div>

                    <div className="flex start gap acenter">
                        <UpsertSelect
                            label={"Género"}
                            name={"gender"}
                            value={params.gender}
                        >
                            <option value="">Todos</option>
                            <option value="M">Hombre</option>
                            <option value="F">Mujer</option>
                        </UpsertSelect>

                        <UpsertSelect
                            label={"Marca"}
                            name={"brand"}
                            value={params.brand}
                        >
                            <option value="">Todas</option>
                            <option value="RAW">RAW</option>
                            <option value="SD">SmackDown</option>
                            <option value="AWL">AWL</option>
                        </UpsertSelect>
                    </div>

                    <div className="flex center acenter gap">
                        {/* <UpsertSelect
                            label={"Resultados"}
                            name={"results_per_page"}
                        >
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                        </UpsertSelect> */}

                        <UpsertSelect
                            label={"Status"}
                            name={"status"}
                            value={params.status}
                        >
                            <option value="">Todos</option>
                            <option value="active">En activo</option>
                            <option value="manager">Manager</option>
                            <option value="released">Despedidos</option>
                            <option value="semi-active">Semi en activo</option>
                            <option value="retired">Retirado</option>
                        </UpsertSelect>
                    </div>

                    {/* <CheckboxInput
                        label={"Mostrar los resultados con paginación"}
                        name={"pagination"}
                    /> */}

                    <div className="flex between gap acenter">
                        <ButtonSecondary
                            type={"reset"}
                            text={"Borrar"}
                            onClick={() => {}}
                        />
                        <ButtonCTA type={"submit"} text={"Buscar"} />
                    </div>
                </NullableLoading>
            </div>
        </form>
    );
}
