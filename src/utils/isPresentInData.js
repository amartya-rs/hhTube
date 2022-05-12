export const isPresentInData = (data, toFind) => {
   if (data) {
      return data.find((ele) => ele._id === toFind);
   }
};
