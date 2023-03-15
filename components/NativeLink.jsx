import Link from "next/link";

export default function NativeLink({ children, href, ...props }) {
    return (
        <Link href={href} {...props}>
            <a>
                  {children}
            </a>
        </Link>
    );
}