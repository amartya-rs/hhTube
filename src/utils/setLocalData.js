export const setLocalData = (key, value) => {
   localStorage.setItem(
      key,
      typeof value === "object" ? JSON.stringify(value) : value
   );
};
