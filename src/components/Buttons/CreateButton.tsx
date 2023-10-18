import Link from "next/link";
import { BootstrapIcon } from "../Icon/BootstrapIcon";

interface CreateButtonProps {
    endpoint: string;
}

export default function CreateButton({ endpoint }: CreateButtonProps) {
    return (
        <Link href={`/admin/${endpoint}`} className="create-new-button">
            <BootstrapIcon icon="plus" />
        </Link>
    );
}
