import { body, validationResult } from "express-validator";

function validateRequest(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}

export const registerUserRules = [
  body("email").isEmail().withMessage("Please enter a valid email"),
  body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
  body("fullname").notEmpty().withMessage("Fullname is required"),
  body("contact").notEmpty().withMessage("Contact is required"),
  body("isSeller")
    .isBoolean().withMessage("isSeller must be boolean"),
  validateRequest, // Include validateRequest at the end so you can pass the array directly to your route
];

export const loginUserRules = [
  // Validate email only if it is provided
  body("email")
    .optional()
    .isEmail()
    .withMessage("Please enter a valid email"),

  // Validate contact only if it is provided
  body("contact")
    .optional()
    .notEmpty()
    .withMessage("Contact cannot be empty"),

  // Ensure at least one of email or contact is sent
  body().custom((value, { req }) => {
    if (!req.body.email && !req.body.contact) {
      throw new Error("Either email or contact is required");
    }
    return true;
  }),

  // Password is always required
  body("password").notEmpty().withMessage("Password is required"),

  validateRequest,
];
