export function booleanToString(value: string | boolean | number): string {
    if (typeof value === "boolean") return value ? "1" : "0";
    return value.toString();
}
