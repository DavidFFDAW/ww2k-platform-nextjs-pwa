import Link from "next/link";

interface MenuLinkProps {
    to: string;
    label: string;
    icon: any;
};

export function MenuLink({ to, label, icon }: MenuLinkProps) {
    return (
        <Link className="flex start" style={{ width: '100%', textDecoration: 'none' }} href={to}>
            {icon} <label style={{ marginLeft: 10 }}>{label}</label>
        </Link>
    );
}
