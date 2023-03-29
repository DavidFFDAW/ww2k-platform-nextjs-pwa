import NativeLink from './NativeLink';

export default function HomeLinks({ icon, text, href }) {
    return (
        <div className="w90">
            <NativeLink href={href}>
                <div className="home-links flex start al-center row gap-small">
                    <div className="icon">{icon}</div>
                    <span className="link">{text}</span>
                </div>
            </NativeLink>
        </div>
    );
}
