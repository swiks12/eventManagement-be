// Require the Stripe library
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const express = require("express");
const router = express.Router();

// POST route to create a checkout session
router.post("/create-checkout-session", async (req, res) => {
  try {
    const { name, price,eventId} = req.body; // Assuming req.body contains name and price directly

    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [{
        price_data: {
          currency: "npr",
          // product: productId, // Use the product ID here
          unit_amount: price * 100, // Convert price to cents
          product_data: {
            name: name, // The 'name' from req.body is used here
          },
        },
        quantity: 1, // Since we are not specifying quantity, keep it as 1
      }],
      success_url: `http://localhost:5173/user/success/${eventId}`,
      cancel_url: "http://localhost:5173/cancel",
    });
    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: "Error creating checkout session" });
  }
});

module.exports = router;
