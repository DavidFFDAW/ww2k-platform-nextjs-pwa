import Link from 'next/link';
import { NullableLoading } from '@/components/Loading/LoadingComponent';
import { BootstrapIcon } from '@/components/Icon/BootstrapIcon';
import { enqueueSnackbar } from 'notistack';
import { FormEvent } from 'react';
import HttpService from '@/services/http.service';

interface Props {
    href: string;
    text: string;
    icon: string;
    color?: string;
}

export function ActionFetch({ href, text, icon, color }: Props) {
    const handlerFetchAction = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await HttpService.post(href, {});
            console.log({ fetchResponseAction: response });
        } catch (error) {
            console.log({ fetchResponseActionError: error });
            enqueueSnackbar('There was an error while trying to fetch', {
                variant: 'error',
            });
        }
    };

    return (
        <Link className={`flex start acenter gap-small action-link ${color}`} href={href} onClick={handlerFetchAction}>
            <NullableLoading condition={icon}>
                <div className="icon-wrapper">
                    <BootstrapIcon icon={icon} />
                </div>
            </NullableLoading>

            <h4 className="action-text">{text}</h4>
        </Link>
    );
}
