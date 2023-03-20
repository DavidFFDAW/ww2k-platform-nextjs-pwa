function _makeFetchRequest(url, method, data, json) {
    const token = localStorage.getItem('next_auth_token');

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

    if (data) {
        options.body = json ? JSON.stringify(data) : data;
    }

    return fetch(url, options).then(response => response.json());
}

export const getRequest = endpoint => _makeFetchRequest(endpoint, 'GET');
export const putRequest = (endpoint, data, json = true) => _makeFetchRequest(endpoint, 'PUT', data, json);
export const postRequest = (endpoint, data, json = true) => _makeFetchRequest(endpoint, 'POST', data, json);
export const deleteRequest = endpoint => _makeFetchRequest(endpoint, 'DELETE');

const HttpService = {
    getRequest,
    putRequest,
    postRequest,
    deleteRequest,
};

export default HttpService;