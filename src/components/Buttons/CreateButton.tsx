import { BootstrapIcon } from "../Icon/BootstrapIcon";
import CustomLink from "../Link/CustomLink";

interface CreateButtonProps {
    endpoint: string;
}

export default function CreateButton({ endpoint }: CreateButtonProps) {
    return (
        <CustomLink href={`/admin/${endpoint}`} className="create-new-button">
            <BootstrapIcon icon="plus" />
        </CustomLink>
    );
}
