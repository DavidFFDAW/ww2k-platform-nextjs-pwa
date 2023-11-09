import Link from 'next/link';
import { NullableLoading } from '../Loading';

interface Props {
    icon?: React.ReactNode;
    href: string;
    text: string;
}

export default function HomeLink({ icon, href, text }: Props) {
    return (
        <Link className="home-links" href={href}>
            <NullableLoading condition={Boolean(icon)}>{icon}</NullableLoading>
            <div className="block">
                <span className="link">{text}</span>
            </div>
        </Link>
    );
}