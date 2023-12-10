const handleApiError = async (response) => {
  if (!response.ok) {
    const errorMessage = await response.text();
    console.error(`API Error: ${errorMessage}`);
    throw new Error(`API Error: ${errorMessage}`);
  }
  return response.json();
};

export default handleApiError;