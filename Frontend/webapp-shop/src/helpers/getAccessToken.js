
  
  export const getAccessToken = () => {
    const localStorageToken = localStorage.getItem('accessToken');
    if (localStorageToken) {
      return localStorageToken;
    }
  
    const sessionStorageToken = sessionStorage.getItem('accessToken');
    if (sessionStorageToken) {
      return sessionStorageToken;
    }
  
    return null;
  };
  

  