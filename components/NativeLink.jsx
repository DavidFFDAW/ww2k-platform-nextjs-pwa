import Link from 'next/link';

export default function NativeLink({ children, href, className, ...props }) {
    const css =
        Boolean(className) && className.length > 0
            ? `${className} ${'spa-custom-link'}`
            : 'spa-custom-link';

    return (
        <Link href={href} {...props}>
            <a className={css}>{children}</a>
        </Link>
    );
}
