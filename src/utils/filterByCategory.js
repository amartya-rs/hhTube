export const filterByCategory = (data, currentCategory) => {
   if (currentCategory) {
      return data?.filter((ele) =>
         currentCategory.toLowerCase() === "all"
            ? true
            : ele.category.replaceAll(" ", "") ===
              currentCategory.toLowerCase().replaceAll(" ", "")
      );
   }
   return data;
};
