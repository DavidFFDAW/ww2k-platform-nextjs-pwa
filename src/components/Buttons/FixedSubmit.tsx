import React from "react";
import { ButtonCTA } from "./Buttons";

interface FixedSubmitProps {
    text?: string;
}

export default function FixedSubmit({
    text = "Guardar cambios",
}: FixedSubmitProps) {
    return (
        <div className="fixed-button">
            <ButtonCTA type={"submit"} text={text} />
        </div>
    );
}
