// Server-side validation middleware
/**
 * Validates the shipping information in the request body.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Object} - Returns a JSON response with an error message if any required shipping information is missing.
 */
const validateShippingInfo = (req, res, next) => {
  const { firstName, lastName, address, country } = req.body;

  if (!firstName || !lastName || !address || !country) {
    return res.status(400).json({ error: 'Missing required shipping information.' });
  }

  // If all required information is present, proceed to the next middleware or route handler
  next();
};

// Example route for processing a purchase
app.post('/api/purchase', validateShippingInfo, (req, res) => {
  // Process the purchase if validation passes
  // ...
  res.json({ success: true, message: 'Purchase successful.' });
});
