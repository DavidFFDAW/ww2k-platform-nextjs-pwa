import { TOKEN_COOKIE } from '@/constants/config';

interface IResponse {
    ok: boolean;
    status: number;
    message?: string;
    data?: any;
    content?: any;
    headers?: Headers;
    response?: Response;
}
export default class HttpService {
    static get = (endpoint: string) => this._makeFetchRequest(endpoint, 'GET');
    static put = (endpoint: string, data: any = null) => this._makeFetchRequest(endpoint, 'PUT', data);
    static post = (endpoint: string, data: any = null) => this._makeFetchRequest(endpoint, 'POST', data);
    static delete = (endpoint: string) => this._makeFetchRequest(endpoint, 'DELETE');

    static _makeFetchRequest(url: string, method: string, data: any = false): Promise<IResponse> {
        const cookies = Object.fromEntries(document.cookie.split('; ').map(x => x.split('=')));
        const token = cookies[TOKEN_COOKIE];
        const options: any = {
            method: method,
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        if (token) {
            options.headers = { ...options.headers, Authorization: 'Bearer ' + token };
        }

        if (data) {
            options.body = JSON.stringify(data);
        }

        return fetch(url, options)
            .then(async response => {
                try {
                    const content = await response.json();

                    return {
                        ...content,
                        ok: response.ok,
                        status: response.status,
                        content: content,
                        headers: response.headers,
                        response: response,
                    };
                } catch (error: any) {
                    return {
                        ok: response.ok,
                        status: response.status,
                        message: error.message,
                        headers: response.headers,
                        response: response,
                    };
                }
            })
            .catch(error => {
                return {
                    ok: false,
                    status: 500,
                    message: error.message,
                };
            });
    }
}
