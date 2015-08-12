export function load(url, params) {
  return fetch(url, {
    method: 'get',
    mode: 'cors',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    }
  });
}