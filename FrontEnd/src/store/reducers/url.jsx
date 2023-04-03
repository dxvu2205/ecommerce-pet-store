export const authUrl = "http://localhost:3001/api/v1/auth"
export const setHeaders = () => {
    const headers = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };
  
    return headers;
  };