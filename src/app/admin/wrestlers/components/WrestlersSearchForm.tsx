"use client";
import { NullableLoading } from "@/components/Loading";
import { FilterIcon } from "@/components/Icons/CommonIcons";
import {
    BlackButton,
    ButtonCTA,
    ButtonSecondary,
} from "@/components/Buttons/Buttons";
import SearchForm from "@/components/Forms/SearchForm";
import React from "react";
import { Input, InputSelect } from "@/components/Forms";

interface SearchFormProps {
    params: any;
}

export default function WrestlersSearchForm({ params }: SearchFormProps) {
    const [showFilters, setShowFilters] = React.useState<boolean>(false);

    const handleShowFilters = () => {
        setShowFilters((prevState) => !prevState);
    };

    return (
        <SearchForm url={"/admin/wrestlers"}>
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
                        <Input
                            label={"Nombre"}
                            type="text"
                            name={"name"}
                            value={params.name}
                        />
                    </div>

                    <div className="flex start gap acenter">
                        <InputSelect
                            label={"Género"}
                            name={"gender"}
                            value={params.gender}
                        >
                            <option value="">Todos</option>
                            <option value="M">Hombre</option>
                            <option value="F">Mujer</option>
                        </InputSelect>

                        <InputSelect
                            label={"Marca"}
                            name={"brand"}
                            value={params.brand}
                        >
                            <option value="">Todas</option>
                            <option value="RAW">RAW</option>
                            <option value="SD">SmackDown</option>
                            <option value="AWL">AWL</option>
                        </InputSelect>
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

                        <InputSelect
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
                        </InputSelect>
                    </div>

                    {/* <CheckboxInput
                        label={"Mostrar los resultados con paginación"}
                        name={"pagination"}
                    /> */}

                    <div className="flex between gap acenter">
                        <ButtonSecondary
                            type={"reset"}
                            text={"Borrar"}
                            onClick={() => { }}
                        />
                        <ButtonCTA type={"submit"} text={"Buscar"} />
                    </div>
                </NullableLoading>
            </div>
        </SearchForm>
    );
}
