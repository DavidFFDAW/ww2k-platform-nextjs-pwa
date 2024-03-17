import DropArea from '@/components/DropArea/DropArea';
import { Form } from '@/components/Forms';
import Title from '@/components/Title';
import { getNamedTitle } from '@/utilities/metadatas.utility';
import React from 'react';

export const revalidate = 0;
export const metadata = {
    title: getNamedTitle('Importar luchadores'),
    description: 'Importar luchadores',
};

export default function WrestlersImportationPage() {
    return (
        <>
            <Title title={'Importar luchadores'} icon="cloud-upload" />

            <Form method="POST" action="/api/wrestlers/import" sendHttp={true} refresh={false} loadingState={true}>
                <DropArea
                    accept=".csv"
                    csvHeader={[
                        'id',
                        'name',
                        'alias',
                        'brand',
                        'status',
                        'overall',
                        'finisher',
                        'twitter_account',
                        'twitter_name',
                        'kayfabe',
                        'sex',
                    ]}
                />

                <div className="w1 flex end acenter down">
                    <button type="submit" className="btn button excel-action btn-import-csv">
                        Importar
                    </button>
                </div>
            </Form>
        </>
    );
}
