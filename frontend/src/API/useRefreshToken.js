import axios from "./axios";

const useRefreshToken = () => {

  const refresh = async () => {
     //console.log("Refresh token");
    const response = await axios.get("/refresh", {
      withCredentials: true,
    });
     //console.log(response.data);
     //console.log(response.data.accessToken);
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
