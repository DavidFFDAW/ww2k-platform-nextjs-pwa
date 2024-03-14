import { NextResponse } from 'next/server';

const ExcelJS = require('exceljs');

export async function GET() {
    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'Me';
    workbook.lastModifiedBy = 'Her';
    workbook.created = new Date(1985, 8, 30);
    workbook.modified = new Date();
    workbook.lastPrinted = new Date(2016, 9, 27);
    workbook.properties.date1904 = true;
    workbook.calcProperties.fullCalcOnLoad = true;

    workbook.views = [
        {
            x: 0,
            y: 0,
            width: 10000,
            height: 20000,
            firstSheet: 0,
            activeTab: 1,
            visibility: 'visible',
        },
    ];

    const sheet = workbook.addWorksheet('Roster');
    sheet.columns = [
        { header: 'Id', key: 'id', width: 10 },
        { header: 'Name', key: 'name', width: 32 },
        { header: 'Marca', key: 'brand', width: 32 },
        { header: 'Fecha', key: 'DOB', width: 10, outlineLevel: 1 },
    ];

    const brands = ['RAW', 'SmackDown', 'NXT', 'AWL'];
    const dropDown = '"' + brands.join(',') + '"';
    console.log({
        brands,
        dropDown,
    });

    sheet.addRows([
        { id: 1, name: 'John Cena', brand: 'RAW', dob: new Date(1985, 8, 30) },
        { id: 2, name: 'Randy Orton', brand: 'SmackDown', dob: new Date(1985, 8, 30) },
        { id: 3, name: 'Seth Rollins', brand: 'RAW', dob: new Date(1985, 8, 30) },
        { id: 4, name: 'Roman Reigns', brand: 'RAW', dob: new Date(1985, 8, 30) },
        { id: 5, name: 'Drew McIntyre', brand: 'RAW', dob: new Date(1985, 8, 30) },
    ]);
    sheet.getColumn('brand').eachCell((cell: any) => {
        cell.protection = {
            locked: false,
        };
        cell.dataValidation = {
            type: 'list',
            allowBlank: false,
            operator: 'equal',
            formulae: [dropDown],
            showErrorMessage: true,
            errorStyle: 'error',
            errorTitle: 'Invalid value',
            error: 'The value must be on the list',
        };
    });

    // return blob
    const buffer = await workbook.xlsx.writeBuffer();
    const response = new NextResponse(buffer);
    response.headers.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    response.headers.set('Content-Disposition', 'attachment; filename=roster.xlsx');
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    return response;
}
