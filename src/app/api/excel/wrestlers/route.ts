import { getAllWrestlers } from "@/queries/wrestler.queries";
import { Wrestler } from "@prisma/client";
import { get } from "http";
import { NextResponse } from "next/server";
const ExcelJS = require("exceljs");

const getDataValidationList = (list: any[]) => {
    return {
        type: "list",
        allowBlank: false,
        operator: "equal",
        formulae: ['"' + list.join(",") + '"'],
        showErrorMessage: true,
        errorStyle: "error",
        errorTitle: "Invalid value",
        error: "The value must be on the list",
    };
};

export async function GET() {
    const wrestlers = await getAllWrestlers();
    const wrestlerStatuses = wrestlers.reduce(
        (acc: string[], wrestler: Wrestler) => {
            if (!acc.includes(wrestler.status)) {
                acc.push(wrestler.status);
            }
            return acc;
        },
        []
    );
    const wrestlerBrands = wrestlers.reduce(
        (acc: string[], wrestler: Wrestler) => {
            if (!acc.includes(wrestler.brand)) {
                acc.push(wrestler.brand);
            }
            return acc;
        },
        []
    );

    const wrestlerFields = wrestlers.map((wrestler: Wrestler) => {
        return {
            id: wrestler.id,
            name: wrestler.name,
            alias: wrestler.alias,
            brand: wrestler.brand,
            status: wrestler.status,
            overall: wrestler.overall,
            finisher: wrestler.finisher,
            twitter_account: wrestler.twitter_acc,
            twitter_name: wrestler.twitter_name,
            kayfabe: wrestler.kayfabe_status,
            gender: wrestler.sex,
        };
    });

    const dateToday = new Date();

    const workbook = new ExcelJS.Workbook();
    workbook.creator = "DavidFF";
    workbook.lastModifiedBy = "DavidFF";
    workbook.created = dateToday;
    workbook.modified = dateToday;
    workbook.lastPrinted = dateToday;
    // workbook.properties.date1904 = true;
    workbook.calcProperties.fullCalcOnLoad = true;

    workbook.views = [
        {
            x: 0,
            y: 0,
            width: 10000,
            height: 20000,
            firstSheet: 0,
            activeTab: 1,
            visibility: "visible",
        },
    ];

    const sheet = workbook.addWorksheet("Roster", {
        pageSetup: {
            horizontalCentered: true,
            verticalCentered: true,
        },
    });
    sheet.columns = [
        { header: "ID", key: "id", width: 6 },
        { header: "Name", key: "name", width: 18 },
        { header: "Alias", key: "alias", width: 28 },
        { header: "Brand", key: "brand", width: 10 },
        { header: "Status", key: "status", width: 12 },
        { header: "Overall", key: "overall", width: 10 },
        { header: "Finisher", key: "finisher", width: 28 },
        { header: "Twitter Account", key: "twitter_account", width: 20 },
        { header: "Twitter Name", key: "twitter_name", width: 20 },
        { header: "Kayfabe", key: "kayfabe", width: 8 },
        { header: "Sexo", key: "gender", width: 6 },
    ];

    sheet.addRows(wrestlerFields);
    sheet.getColumn("brand").eachCell((cell: any) => {
        cell.dataValidation = getDataValidationList(wrestlerBrands);
    });
    sheet.getColumn("status").eachCell((cell: any) => {
        cell.dataValidation = getDataValidationList(wrestlerStatuses);
    });
    sheet.getColumn("gender").eachCell((cell: any) => {
        cell.dataValidation = getDataValidationList(["M", "F"]);
    });
    sheet.getColumn("kayfabe").eachCell((cell: any) => {
        cell.dataValidation = getDataValidationList(["heel", "face"]);
    });

    sheet.eachRow(
        { includeEmpty: true },
        function (row: any, rowNumber: number) {
            row.eachCell(function (cell: any, colNumber: number) {
                cell.font = {
                    name: "Arial",
                    family: 2,
                    bold: false,
                    size: 10,
                };
                cell.alignment = {
                    vertical: "middle",
                    horizontal: "center",
                };
                if (rowNumber === 1) {
                    cell.font = {
                        name: "Arial",
                        family: 2,
                        bold: true,
                        size: 10,
                    };
                    cell.fill = {
                        type: "pattern",
                        pattern: "solid",
                        fgColor: { argb: "FFD3D3D3" },
                    };
                }
            });
        }
    );

    // return blob
    const buffer = await workbook.xlsx.writeBuffer();
    const response = new NextResponse(buffer);
    response.headers.set(
        "Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    response.headers.set(
        "Content-Disposition",
        "attachment; filename=roster.xlsx"
    );
    response.headers.set(
        "Cache-Control",
        "no-cache, no-store, must-revalidate"
    );
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");
    return response;
}
