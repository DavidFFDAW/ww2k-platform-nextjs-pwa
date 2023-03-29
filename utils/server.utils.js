import config from '@/constants/config';

export function getEndpoint(endpoint) {
    return `${config.HTTP_REQUEST_URL_API}/${endpoint}`;
}

export function getEndpointWithParams(endpoint, params) {
    return `${config.HTTP_REQUEST_URL_API}/${endpoint}?${params}`;
}

export function getServerSideCookie(context) {
    const { req } = context;

    if (!req.cookies[config.NEXT_USER]) {
        return false;
    }

    return JSON.parse(req.cookies[config.NEXT_USER]);
}
