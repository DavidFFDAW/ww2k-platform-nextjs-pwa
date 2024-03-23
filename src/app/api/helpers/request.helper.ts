export function checkRequiredFields(
    requestBody: any,
    requiredFields: string[]
): { error: boolean; fields: string[] } {
    const missingFields: string[] = requiredFields.reduce(
        (acc: any, key: string) => {
            const isInBody = key in requestBody;
            if (isInBody) return acc;
            if (!isInBody && !requestBody[key]) acc.push(key);
            return acc;
        },
        []
    );

    if (missingFields.length > 0) return { error: true, fields: missingFields };

    return { error: false, fields: [] };
}
