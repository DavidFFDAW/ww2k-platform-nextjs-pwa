const getParsedCookies = _ => {
    return document.cookie.split(';').reduce((acc, cookie) => {
        const [key, value] = cookie.split('=');
        return { ...acc, [key]: value };
    }, {});
};

const save = (key, value) => {
    const d = new Date(); // today's date
    d.setMonth(d.getMonth() + 3);
    const expires = d.toUTCString();
    document.cookie = `${key}=${value}; expires=${expires}; path=/;`;
};

const get = key => {
    const cookies = getParsedCookies();
    return cookies[key];
};

const remove = key => {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
};

const CookieService = {
    save,
    get,
    remove,
};

export default CookieService;
