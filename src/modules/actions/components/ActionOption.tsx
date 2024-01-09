import Link from "next/link";
import { NullableLoading } from "@/components/Loading";
import { BootstrapIcon } from "@/components/Icon/BootstrapIcon";

interface ActionLinkProps {
    toHref: string;
    text: string;
    icon: string;
    color: string;
}

export function ActionLink({ toHref, text, icon, color }: ActionLinkProps) {
    return (
        <Link
            className={`flex start acenter gap-small action-link ${color}`}
            href={toHref}
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
