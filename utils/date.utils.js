export function getFormattedDate(date) {
    const dateO = new Date(date);
    return dateO.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}
