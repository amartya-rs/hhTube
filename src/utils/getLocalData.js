export const getLocalData = (key) => {
   return JSON.parse(localStorage.getItem(key));
};
