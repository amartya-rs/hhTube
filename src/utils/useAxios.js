import axios from "axios";
import { useState } from "react";

export const useAxios = () => {
   const [response, setResponse] = useState(undefined);
   const [error, setError] = useState("");
   const [loading, setLoading] = useState(true);

   const apiCall = async (requiredData, axiosParams) => {
      try {
         const res = await axios.request(axiosParams);
         requiredData
            ? setResponse(res.data[requiredData])
            : setResponse(res.data);
      } catch (error) {
         setError(error);
      } finally {
         setLoading(false);
      }
   };

   return { response, error, loading, apiCall };
};
