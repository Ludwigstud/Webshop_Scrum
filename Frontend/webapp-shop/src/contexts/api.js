export const getProfile = async () => {
    const res = await fetch(`https://localhost:7042/api/Profile/GetProfile`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        },
    });

    if (res.ok) {
        const data = await res.json();
        return data;
    } else {
        console.error('Request failed with status:', res.status);
    }
};