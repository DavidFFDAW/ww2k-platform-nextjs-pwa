import Link from 'next/link';

export default function NativeLink({ children, href, ...props }) {
    return (
        <Link href={href} {...props} className="spa-custom-link">
            <a>{children}</a>
        </Link>
    );
}
