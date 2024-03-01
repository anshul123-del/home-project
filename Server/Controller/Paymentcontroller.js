const stripe = require("stripe")("sk_test_51OoTquSAtmHNt30iK1bOy8YsI65hhcoeAJNoC0hnO5SDrJwF1mq3wLfn47WiErcSPJb6F8zljSJQJu0cVyBfskks00pjbuKCk5")

    const PaymentController = {
        makepayment: async (req, res) => {
            const { products } = req.body;
            const lineitems = products.map((ele) => ({
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: ele.slug,
                        images: [ele.image],  // Add images array with the product image
                    },
                    unit_amount: ele.price * 100,
                },
                quantity: 1
            }));
    
            try {
                const session = await stripe.checkout.sessions.create({
                    payment_method_types: ["card"],
                    line_items: lineitems,
                    mode: "payment",
                    success_url: "http://localhost:5173/success",
                    cancel_url: "http://localhost:5173/cancel"
                });
    
                res.status(200).json({
                    id: session.id
                });
            } catch (error) {
                console.error("Error creating Stripe Checkout session:", error);
                res.status(500).json({ error: "Internal Server Error" });
            }
        }
    };
    
    module.exports = PaymentController;