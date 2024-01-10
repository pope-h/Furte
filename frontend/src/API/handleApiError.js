/**
 * Handles API errors by checking the response status and throwing an error if it's not ok.
 * If the response is ok, it parses the response data as JSON and returns it.
 *
 * @param {Response} response - The response object received from the API request.
 * @returns {Promise<any>} - A promise that resolves to the parsed JSON data from the response.
 * @throws {Error} - If the response status is not ok, an error is thrown with the error message.
 */
const handleApiError = async (response) => {
  console.log("entered handleApiError with", response)
  console.log("is response ok?", response.ok)
  if (response.status !== 200) {
    const errorMessage = await response.text();
    console.error(`API Error: ${errorMessage}`);
    throw new Error(`API Error: ${errorMessage}`);
  }

  console.log("fetching data")
  const data = await response.json();
  console.log(data)
  return data;
};

export default handleApiError;