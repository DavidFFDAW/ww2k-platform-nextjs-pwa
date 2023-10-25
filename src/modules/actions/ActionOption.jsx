import Link from "next/link";
import { NullableLoading } from "@/components/Loading/LoadingComponent";
import { BootstrapIcon } from "@/components/Icon/BootstrapIcon";

export function ActionOption({ toHref, text, icon, color }) {
    return (
        <Link
            className={`flex start acenter gap-small action-link ${color}`}
            href={toHref}
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
