import Image from "@/components/Image/Image";
import React from "react";

export default function BrandImage({ brand }: { brand: string }) {
    const size = 75;

    if (brand.toUpperCase() === "SD")
        return (
            <div className="brand-image">
                <Image
                    width={size}
                    height={size}
                    src="/smackdown-logo.webp"
                    alt="SmackDown"
                />
            </div>
        );

    if (brand.toUpperCase() === "RAW")
        return (
            <div className="brand-image">
                <Image
                    width={size}
                    height={size}
                    src="/raw-logo.webp"
                    alt="RAW"
                />
            </div>
        );

    if (brand.toUpperCase() === "AWL")
        return (
            <div className="brand-image">
                <Image
                    width={size}
                    height={size}
                    src="/images/awl-logo.webp"
                    alt="AWL"
                />
            </div>
        );

    if (brand.toUpperCase() === "LEGEND") {
        return (
            <div className="brand-image">
                <Image
                    width={size}
                    height={size}
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/222fe538-4306-46a2-adc5-d53360edb994/dfv7acm-b5f8db76-1a77-485e-bc4f-219837deb346.png/v1/fill/w_551,h_382/wwf_retro_logo__by_artsector2003_dfv7acm-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzgyIiwicGF0aCI6IlwvZlwvMjIyZmU1MzgtNDMwNi00NmEyLWFkYzUtZDUzMzYwZWRiOTk0XC9kZnY3YWNtLWI1ZjhkYjc2LTFhNzctNDg1ZS1iYzRmLTIxOTgzN2RlYjM0Ni5wbmciLCJ3aWR0aCI6Ijw9NTUxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.TyBQ-CS8Vmt7NvVxqc5Q202QtQN_Z95_Fh2XVE7iZxM"
                    alt="Legend"
                />
            </div>
        );
    }

    return <></>;
}
