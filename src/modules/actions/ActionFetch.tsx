"use client";
import Link from "next/link";
import { NullableLoading } from "@/components/Loading/LoadingComponent";
import { BootstrapIcon } from "@/components/Icon/BootstrapIcon";
import { enqueueSnackbar } from "notistack";
import { FormEvent } from "react";
import HttpService from "@/services/http.service";

interface Props {
    href: string;
    text: string;
    icon: string;
    color?: string;
    revalidatePath?: string;
    method: string;
}

export function ActionFetch({
    revalidatePath = "",
    href,
    text,
    icon,
    color,
    method = "post",
}: Props) {
    console.log({ revalidatePath, color });

    const handlerFetchAction = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const meth = method.toLowerCase() as
                | "get"
                | "post"
                | "put"
                | "delete";

            const response = await HttpService[meth](href);

            console.log({ fetchResponseAction: response });
            enqueueSnackbar(response.message, {
                variant: "success",
            });
        } catch (error: any) {
            console.log({ fetchResponseActionError: error });
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
            <NullableLoading condition={icon}>
                <div className="icon-wrapper">
                    <BootstrapIcon icon={icon} />
                </div>
            </NullableLoading>

            <h4 className="action-text">{text}</h4>
        </Link>
    );
}
