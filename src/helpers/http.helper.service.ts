
const backendBaseUrl = 'http://localhost:8080';
const cacheBaseUrl = 'http://localhost:3000';

export const getBackendBaseUrl = (relativePath: string = '') => {
    return `${backendBaseUrl}/${relativePath}`;
}

export const getCacheUrl = (relativePath: string = '') => {
    return `${cacheBaseUrl}/${relativePath}`;
}