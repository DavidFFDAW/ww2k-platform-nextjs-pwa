import { HiddenInput } from "@/components/Forms/Inputs/Hidden";
import LazyImage from "@/components/Image/LazyImage";
import { Wrestler } from "@prisma/client";

export default function MembersList({ list }: { list: Wrestler[] }) {
    return (
        <div className="flex start acenter gap-small">
            {list.map((wrestler: Wrestler) => (
                <div
                    key={wrestler.id}
                    data-id={wrestler.id}
                    className="w1 flex center acenter gap"
                >
                    <HiddenInput name="members[]" value={wrestler.id} />
                    <HiddenInput name="overalls[]" value={wrestler.overall} />
                    <LazyImage
                        src={wrestler.image_name as string}
                        alt={wrestler.name}
                        width={50}
                        height={50}
                    />
                    <div>
                        <h4>{wrestler.name}</h4>
                        <p>{wrestler.overall}</p>
                        <p>{wrestler.kayfabe_status}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
