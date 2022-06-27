export const customFetch = (url, headers) =>
  fetch(url, headers)
    .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
    

//export function changeButtonText(element, text) {
  //element.textContent = text;
//}
