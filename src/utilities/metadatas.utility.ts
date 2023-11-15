import { APP_TITLE } from '@/constants/config';

export function getTitle() {
    return APP_TITLE;
}

export function getNamedTitle(name: string) {
    return `${APP_TITLE} - ${name}`;
}

export function getAdminNamedTitle(name: string) {
    return `${APP_TITLE} Adm - ${name}`;
}