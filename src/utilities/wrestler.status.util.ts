export function parseWrestlerStatus(status: string) {
    const statusMap: any = {
        active: 'En activo',
        released: 'Despedido',
        manager: 'Manager',
        'semi-active': 'Semi en activo',
        retired: 'Retirado/Inactivo',
        injured: 'Lesionado',
        default: 'Desconocido',
    };

    return statusMap[status] || statusMap.default;
}
