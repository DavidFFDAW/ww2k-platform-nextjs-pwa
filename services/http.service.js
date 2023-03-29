function _makeFetchRequest(url, method, data, token) {
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

export const getRequest = (endpoint, token) =>
    _makeFetchRequest(endpoint, 'GET', {}, token);
export const putRequest = (endpoint, data, token) =>
    _makeFetchRequest(endpoint, 'PUT', data, token);
export const postRequest = (endpoint, data, token) =>
    _makeFetchRequest(endpoint, 'POST', data, token);
export const deleteRequest = (endpoint, token) =>
    _makeFetchRequest(endpoint, 'DELETE', {}, token);

const HttpService = {
    getRequest,
    putRequest,
    postRequest,
    deleteRequest,
};

export default HttpService;
