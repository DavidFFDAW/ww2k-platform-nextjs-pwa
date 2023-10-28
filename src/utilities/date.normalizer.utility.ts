export function transformDate(timestamp: Date) {
    const date = new Date(timestamp);
    return date.toLocaleDateString("es-ES", {
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
