function _makeFetchRequestBackend(url, method, data, token) {
    const options = {
        method: method,
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (Boolean(token)) {
        options.headers = { ...options.headers, Authorization: 'Bearer ' + token };
    }

    if (!['GET', 'DELETE'].includes(method) && Boolean(data)) {
        options.body = JSON.stringify(data);
    }

    return fetch(url, options).then(response => response.json());
}
export function BackendHttpService(token) {
    return {
        get: url => {
            return _makeFetchRequestBackend(url, 'GET', false, token);
        },
        post: (url, data) => {},
        put: (url, data) => {},
        delete: url => {},
    };
}
