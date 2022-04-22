const baseURL = "http://localhost:8080/api";

function checkStatus(response) {
  if (response.status === 200) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

export function request(url, options) {
        return fetch(`${baseURL+url}`, options)
        .then(checkStatus)
        .then(parseJSON)
        .catch((error) => { throw new Error(error) })
}