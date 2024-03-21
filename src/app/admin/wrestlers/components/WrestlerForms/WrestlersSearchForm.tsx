'use client';
import { NullableLoading } from '@/components/Loading';
import { FilterIcon } from '@/components/Icons/CommonIcons';
import { ButtonCTA, ButtonSecondary } from '@/components/Buttons/Buttons';
import SearchForm from '@/components/Forms/SearchForm';
import React from 'react';
import { Input, InputSelect } from '@/components/Forms';
import { DownloadExcel, ImportCsvButton } from '@/components/Buttons/DownloadExcel';

interface SearchFormProps {
    params: any;
}

export default function WrestlersSearchForm({ params }: SearchFormProps) {
    const statusParams = params.status || [];
    const [showFilters, setShowFilters] = React.useState<boolean>(false);

    const handleShowFilters = () => {
        setShowFilters(prevState => !prevState);
    };

    return (
        <SearchForm url={'/admin/wrestlers'} className="wrestlers-filters-list-container">
            <div className="w1 down boxed flex center column gap-small padded al-center filters-block__content">
                <div className="w1 flex between aend gap">
                    <Input
                        label={'Nombre'}
                        type="search"
                        name={'name'}
                        placeholder="Buscador de luchador por nombre"
                        value={params.name}
                    />
                    <button type="button" className="filters relative" onClick={handleShowFilters}>
                        <FilterIcon w={20} h={25} isShown={showFilters} />
                    </button>
                </div>

                <NullableLoading condition={showFilters}>
                    <div className="w1 flex column al-snBlackButtonart gap-5 filters"></div>

                    <div className="flex start gap acenter">
                        <InputSelect label={'Género'} name={'gender'} value={params.gender}>
                            <option value="">Todos</option>
                            <option value="M">Hombre</option>
                            <option value="F">Mujer</option>
                        </InputSelect>

                        <InputSelect label={'Marca'} name={'brand'} value={params.brand}>
                            <option value="">Todas</option>
                            <option value="RAW">RAW</option>
                            <option value="SD">SmackDown</option>
                            <option value="AWL">AWL</option>
                        </InputSelect>
                    </div>

                    <div className="w1 flex center acenter gap">
                        {/* <UpsertSelect
                            label={"Resultados"}
                            name={"results_per_page"}
                        >
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                        </UpsertSelect> */}
                        <div className="w1 form-group flex column gap-5">
                            <label className="label">Mostrar con estado: </label>
                            <div className="grid two-column-grid gap-small status-possible-checkboxes">
                                <div className="status-checkbox">
                                    <label className="flex acenter gap-5 pointer">
                                        <input
                                            type="checkbox"
                                            name="status"
                                            value="active"
                                            defaultChecked={
                                                statusParams.length > 0 ? statusParams.includes('active') : true
                                            }
                                        />
                                        En activo
                                    </label>
                                </div>
                                <div className="status-checkbox">
                                    <label className="flex acenter gap-5 pointer">
                                        <input
                                            type="checkbox"
                                            name="status"
                                            value="manager"
                                            defaultChecked={
                                                statusParams.length > 0 ? statusParams.includes('manager') : true
                                            }
                                        />
                                        Manager
                                    </label>
                                </div>
                                <div className="status-checkbox">
                                    <label className="flex acenter gap-5 pointer">
                                        <input
                                            type="checkbox"
                                            name="status"
                                            value="released"
                                            defaultChecked={
                                                statusParams.length > 0 ? statusParams.includes('released') : true
                                            }
                                        />
                                        Despedidos
                                    </label>
                                </div>
                                <div className="status-checkbox">
                                    <label className="flex acenter gap-5 pointer">
                                        <input
                                            type="checkbox"
                                            name="status"
                                            value="semi-active"
                                            defaultChecked={
                                                statusParams.length > 0 ? statusParams.includes('semi-active') : true
                                            }
                                        />
                                        Semi en activo
                                    </label>
                                </div>
                                <div className="status-checkbox">
                                    <label className="flex acenter gap-5 pointer">
                                        <input
                                            type="checkbox"
                                            name="status"
                                            value="retired"
                                            defaultChecked={
                                                statusParams.length > 0 ? statusParams.includes('retired') : true
                                            }
                                        />
                                        Retirado
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <CheckboxInput
                        label={"Mostrar los resultados con paginación"}
                        name={"pagination"}
                    /> */}
                </NullableLoading>

                <div className="w1 flex between acenter flex-responsive responsive-align-start responsive-gap">
                    <div className="w1 flex start acenter gap-small desktop-only">
                        <DownloadExcel excel="wrestlers" text="Exportar Excel" />
                        <ImportCsvButton url="/admin/wrestlers/pages/import" text="Importar CSV" />
                    </div>

                    <div className="w1 flex end acenter gap-small acenter">
                        <NullableLoading condition={showFilters}>
                            <ButtonSecondary type={'reset'} text={'Borrar'} />
                        </NullableLoading>
                        <ButtonCTA type={'submit'} text={'Buscar'} />
                    </div>
                </div>
            </div>
        </SearchForm>
    );
}
