import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import { axiosPrivate } from "./axios";
import useStorePackage from "../store";

const useAxiosPrivate = () => {
  const { accessToken } = useStorePackage();
  const refresh = useRefreshToken();

  useEffect(() => {
     //console.log("useAxiosPrivate");
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
         //console.log("checking config.headers");
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
         //console.log("config.headers", config.headers);
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
         //console.log("error", error);
        const prevRequest = error?.config;
         //console.log("prevRequest", prevRequest);
        if (
          (error?.response?.status === 403 ||
            error?.response?.status === 401) &&
          !prevRequest?.sent
        ) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
           //console.log("newAccessToken", newAccessToken);
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
           //console.log("prevRequest.headers", prevRequest.headers);
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [accessToken, refresh]);

  return axiosPrivate;
};

export default useAxiosPrivate;
