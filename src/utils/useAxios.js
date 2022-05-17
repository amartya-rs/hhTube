import axios from "axios";
import { useState } from "react";

export const useAxios = () => {
   const [response, setResponse] = useState(undefined);
   const [error, setError] = useState("");
   const [loading, setLoading] = useState(true);
   const [status, setStatus] = useState("");

   const apiCall = async (requiredData, axiosParams) => {
      try {
         const res = await axios.request(axiosParams);
         setStatus(res.status);
         requiredData
            ? setResponse(res.data[requiredData])
            : setResponse(res.data);
      } catch (error) {
         setError(error.response.data.errors);
      } finally {
         setLoading(false);
      }
   };

   return { response, error, loading, status, apiCall, setResponse, setError };
};
