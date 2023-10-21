export default class HttpService {
    static get = (endpoint) => this._makeFetchRequest(endpoint, "GET");
    static put = (endpoint, data) =>
        this._makeFetchRequest(endpoint, "PUT", data);
    static post = (endpoint, data) =>
        this._makeFetchRequest(endpoint, "POST", data);
    static delete = (endpoint) => this._makeFetchRequest(endpoint, "DELETE");

    static _makeFetchRequest(url, method, data = false) {
        const options = {
            method: method,
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        };
        // if (addToken) {
        //     options.headers = { ...options.headers, Authorization: 'Bearer ' + userToken };
        // }
        if (data) {
            options.body = JSON.stringify(data);
        }

        return fetch(url, options).then(async (response) => {
            return {
                ok: response.ok,
                status: response.status,
                content: await response.json(),
            };
        });
    }
}
