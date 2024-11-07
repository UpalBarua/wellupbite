export function setLocalStorage(data) {
  const stringData = JSON.stringify(data);
  localStorage.setItem("FAVOURITE_RECIPES", stringData);
}

export function getLocalStorage() {
  const data = localStorage.getItem("FAVOURITE_RECIPES");
  const parsedData = JSON.parse(data);

  if (parsedData) {
    return parsedData;
  }

  return [];
}
