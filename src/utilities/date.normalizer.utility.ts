export function transformDate(timestamp: Date) {
    if (!timestamp) {
        return "";
    }
    return timestamp.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

export function existingDateToString(date: Date | null | undefined) {
    if (!date) {
        return "";
    }
    return date.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

export function parseFormatDate(date: Date | null | undefined) {
    if (!date) {
        return "";
    }
    return date.toISOString().split("T")[0];
}
