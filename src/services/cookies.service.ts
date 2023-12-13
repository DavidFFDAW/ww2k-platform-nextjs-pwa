export function getCookies() {
    return Object.fromEntries(document.cookie.split('; ').map(x => x.split('=')));
}