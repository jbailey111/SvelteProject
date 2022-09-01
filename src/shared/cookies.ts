export const setCookie = (name: string, value: string, days: number) => {
    const expires = `expires=${new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
    }
export const getCookie = (name: string) => {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

export const eraseCookie = (name: string) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}   

    