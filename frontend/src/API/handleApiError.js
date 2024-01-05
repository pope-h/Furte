import { signInUser } from ".";
import useStorePackage from "../store";

/**
 * Handles API errors by checking the response status and throwing an error if it's not ok.
 * If the response is ok, it parses the response data as JSON and returns it.
 *
 * @param {Response} response - The response object received from the API request.
 * @returns {Promise<any>} - A promise that resolves to the parsed JSON data from the response.
 * @throws {Error} - If the response status is not ok, an error is thrown with the error message.
 */
const handleApiError = async (response, userData) => {
   if (response.status === 401 || response.status === 403) {
    // Token expired, refresh and retry
    try {
      await useStorePackage.getState().refreshToken();
      return signInUser(useStorePackage.getState().accessToken, userData);
    } catch (refreshError) {
      console.error("Error refreshing token:", refreshError);
      throw new Error(`Failed to sign in: ${response.statusText}`);
    }
  } else if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(`Failed to sign in: ${response.statusText}`);
  }
};

export default handleApiError;