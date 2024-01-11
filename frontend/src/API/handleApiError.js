/**
 * Handles API errors by checking the response status and throwing an error if it's not ok.
 * If the response is ok, it parses the response data as JSON and returns it.
 *
 * @param {Response} response - The response object received from the API request.
 * @returns {Promise<any>} - A promise that resolves to the parsed JSON data from the response.
 * @throws {Error} - If the response status is not ok, an error is thrown with the error message.
 */
const handleApiError = async (response) => {

  if (response.status >= 200 && response.status < 300) {
    const data = await response.data;
    return data;
  } else {
    const errorMessage = response.statusText || "Unknown Error";
    console.error(`API Error: ${errorMessage}`);
    throw new Error(`API Error: ${errorMessage}`);
  }
};

export default handleApiError;