export const filterBySearchInput = (data, searchInput) => {
   if (searchInput) {
      return (
         data?.length !== 0 &&
         data?.filter(
            ({ title, channelName }) =>
               title.toLowerCase().includes(searchInput) ||
               channelName.toLowerCase().includes(searchInput)
         )
      );
   }
   return data;
};
