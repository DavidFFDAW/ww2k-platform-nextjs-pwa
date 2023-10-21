export function transformDate(timestamp: Date) {
    const date = new Date(timestamp);
    return date.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}
