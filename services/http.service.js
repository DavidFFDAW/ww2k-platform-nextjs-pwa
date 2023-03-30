import config from '@/constants/config';

function _makeFetchRequest(url, method, data, json = true) {
    const tokenStorage = localStorage.getItem(config.NEXT_USER);
    const token = tokenStorage ? JSON.parse(tokenStorage).token : false;

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
        options.body = Boolean(json) ? JSON.stringify(data) : data;
    }

    return fetch(url, options).then(response => response.json());
}

export const getRequest = endpoint => _makeFetchRequest(endpoint, 'GET');
export const putRequest = (endpoint, data) =>
    _makeFetchRequest(endpoint, 'PUT', data);
export const postRequest = (endpoint, data) =>
    _makeFetchRequest(endpoint, 'POST', data);
export const deleteRequest = endpoint => _makeFetchRequest(endpoint, 'DELETE');

const HttpService = {
    getRequest,
    putRequest,
    postRequest,
    deleteRequest,
};

export default HttpService;
