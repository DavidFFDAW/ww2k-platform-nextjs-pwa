export const getColorTheme = () => window.localStorage.getItem("theme");
export const setColorTheme = (theme: string) =>
    window.localStorage.setItem("theme", theme);
