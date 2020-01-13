export const domain = "https://vast-spire-30392.herokuapp.com/api"

export const jsonHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json"
  };
  
  export const handleJsonResponse = res => {
    if (res.ok) {
      return res.json();
    }
    return res.json().then(result => {
      throw result;
    });
  };