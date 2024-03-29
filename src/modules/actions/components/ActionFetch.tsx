"use client";
import Link from "next/link";
import { NullableLoading } from "@/components/Loading";
import { BootstrapIcon } from "@/components/Icon/BootstrapIcon";
import { enqueueSnackbar } from "notistack";
import { FormEvent } from "react";
import HttpService from "@/services/http.service";
import { useRouter } from "next/navigation";

interface Props {
    href: string;
    text: string;
    icon: string;
    color?: string;
    refresh?: boolean;
    method: string;
}

export function ActionFetch({
    refresh = false,
    href,
    text,
    icon,
    color,
    method = "post",
}: Props) {
    const router = useRouter();
    const handlerFetchAction = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const meth = method.toLowerCase() as
                | "get"
                | "post"
                | "put"
                | "delete";

            const response = await HttpService[meth](href);
            if (!response.ok)
                return enqueueSnackbar(response.message, { variant: "error" });

            enqueueSnackbar(response.message, {
                variant: "success",
            });
            if (refresh) return router.refresh();
        } catch (error: any) {
            enqueueSnackbar(`There was an error. ${error.message}`, {
                variant: "error",
            });
        }
    };

    return (
        <Link
            className={`flex start acenter gap-small action-link ${color}`}
            href={href}
            onClick={handlerFetchAction}
        >
            <NullableLoading condition={Boolean(icon)}>
                <div className="icon-wrapper">
                    <BootstrapIcon icon={icon} />
                </div>
            </NullableLoading>

            <h4 className="action-text">{text}</h4>
        </Link>
    );
}
