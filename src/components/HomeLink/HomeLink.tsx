import Link from "next/link";
import { NullableLoading } from "../Loading";

interface Props {
    icon?: React.ReactNode;
    href: string;
    text: string;
    className?: string;
}

export default function HomeLink({ icon, href, text, className }: Props) {
    const classname = ["home-links", className].join(" ").trim();

    return (
        <Link className={classname} href={href}>
            <NullableLoading condition={Boolean(icon)}>{icon}</NullableLoading>
            <div className="block">
                <span className="link">{text}</span>
            </div>
        </Link>
    );
}
