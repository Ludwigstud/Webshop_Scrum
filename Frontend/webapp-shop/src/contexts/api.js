import { getAccessToken } from "../helpers/getAccessToken";

export const getProfile = async () => {
    const token = getAccessToken();
    const res = await fetch(`https://localhost:7042/api/Profile/GetProfile`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });

    if (res.ok) {
        const data = await res.json();
        return data;
    } else {
        console.error('Request failed with status:', res.status);
    }
};